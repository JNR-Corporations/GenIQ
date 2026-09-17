
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const STORAGE_KEY = "geniq_notepad_v1";
  const USER_KEY = "geniq_user";

  const state = {
    notes: [],
    activeId: null,
    filter: "all",
    tag: "",
    query: "",
    sort: "updated",
    saveTimer: null,
    toastTimer: null
  };

  const els = {
    saveStatus: $("saveStatus"),
    themeBtn: $("themeBtn"),
    themeIcon: $("themeIcon"),
    newButtons: [
      $("newNoteBtn"),
      $("listNewBtn"),
      $("emptyNewBtn"),
      $("editorNewBtn")
    ],
    allCount: $("allCount"),
    pinnedCount: $("pinnedCount"),
    trashCount: $("trashCount"),
    tagList: $("tagList"),
    listHeading: $("listHeading"),
    search: $("searchInput"),
    sort: $("sortSelect"),
    resultCount: $("resultCount"),
    notesList: $("notesList"),
    emptyList: $("emptyList"),
    editorEmpty: $("editorEmpty"),
    editor: $("editor"),
    editorDate: $("editorDate"),
    pinBtn: $("pinBtn"),
    trashBtn: $("trashBtn"),
    moreBtn: $("moreBtn"),
    moreMenu: $("moreMenu"),
    duplicateBtn: $("duplicateBtn"),
    restoreBtn: $("restoreBtn"),
    deleteForeverBtn: $("deleteForeverBtn"),
    printBtn: $("printBtn"),
    title: $("noteTitle"),
    tags: $("noteTags"),
    body: $("noteBody"),
    wordCount: $("wordCount"),
    exportBtn: $("exportBtn"),
    importBtn: $("importBtn"),
    importInput: $("importInput"),
    toast: $("toast"),
    clearFormatBtn: $("clearFormatBtn")
  };

  function safeParse(raw, fallback) {
    try {
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function makeId() {
    return globalThis.crypto && crypto.randomUUID
      ? crypto.randomUUID()
      : "n" + Date.now().toString(36) +
        Math.random().toString(36).slice(2, 9);
  }

  function now() {
    return new Date().toISOString();
  }

  function cleanNote(note) {
    return {
      id: String(note.id || makeId()),
      title: String(note.title || ""),
      body: String(note.body || ""),
      tags: Array.isArray(note.tags)
        ? note.tags.map(String).slice(0, 30)
        : [],
      pinned: !!note.pinned,
      trashed: !!note.trashed,
      createdAt: note.createdAt || now(),
      updatedAt: note.updatedAt || now()
    };
  }

  function loadNotes() {
    const raw = safeParse(
      localStorage.getItem(STORAGE_KEY) || "[]",
      []
    );

    state.notes = Array.isArray(raw)
      ? raw.slice(0, 5000).map(cleanNote)
      : [];
  }

  function saveNotes() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.notes)
      );

      els.saveStatus.textContent = "All changes saved";
      els.saveStatus.style.color = "";
    } catch (error) {
      els.saveStatus.textContent =
        "Storage full — export a backup";
      els.saveStatus.style.color = "var(--danger)";
      toast("Could not save. Export a backup and free browser storage.");
    }
  }

  function queueSave() {
    els.saveStatus.textContent = "Saving…";
    clearTimeout(state.saveTimer);
    state.saveTimer = setTimeout(saveNotes, 220);
  }

  function current() {
    return state.notes.find(
      (note) => note.id === state.activeId
    ) || null;
  }

  function plainText(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return (div.textContent || "").replace(/\s+/g, " ").trim();
  }

  function dateLabel(iso) {
    const date = new Date(iso);

    if (Number.isNaN(date.getTime())) return "";

    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      });
    }

    return date.toLocaleDateString([], {
      month: "short",
      day: "numeric"
    });
  }

  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");

    clearTimeout(state.toastTimer);

    state.toastTimer = setTimeout(() => {
      els.toast.classList.remove("show");
    }, 2200);
  }

  function addNote() {
    const note = cleanNote({
      id: makeId(),
      title: "",
      body: "",
      tags: [],
      createdAt: now(),
      updatedAt: now()
    });

    state.notes.unshift(note);
    state.activeId = note.id;
    state.filter = "all";
    state.tag = "";

    queueSave();
    renderAll();
    els.title.focus();
  }

  function updateCounts() {
    els.allCount.textContent =
      state.notes.filter((n) => !n.trashed).length;

    els.pinnedCount.textContent =
      state.notes.filter((n) => n.pinned && !n.trashed).length;

    els.trashCount.textContent =
      state.notes.filter((n) => n.trashed).length;
  }

  function renderTags() {
    const counts = new Map();

    state.notes
      .filter((note) => !note.trashed)
      .forEach((note) => {
        note.tags.forEach((tag) => {
          counts.set(tag, (counts.get(tag) || 0) + 1);
        });
      });

    els.tagList.replaceChildren();

    if (!counts.size) {
      const p = document.createElement("p");
      p.className = "muted tiny";
      p.textContent = "Tags appear here";
      els.tagList.append(p);
      return;
    }

    [...counts.keys()]
      .sort((a, b) => a.localeCompare(b))
      .forEach((tag) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className =
          "tag-filter" + (state.tag === tag ? " active" : "");
        button.textContent = tag;

        button.addEventListener("click", () => {
          state.tag = state.tag === tag ? "" : tag;
          state.filter = "all";
          renderAll();
        });

        els.tagList.append(button);
      });
  }

  function filteredNotes() {
    let notes = state.notes.filter((note) => {
      if (
        state.filter === "pinned" &&
        (!note.pinned || note.trashed)
      ) return false;

      if (state.filter === "trash" && !note.trashed) {
        return false;
      }

      if (state.filter === "all" && note.trashed) {
        return false;
      }

      if (state.tag && !note.tags.includes(state.tag)) {
        return false;
      }

      const query = state.query.toLocaleLowerCase();

      return !query ||
        (
          note.title + " " +
          plainText(note.body) + " " +
          note.tags.join(" ")
        ).toLocaleLowerCase().includes(query);
    });

    notes.sort((a, b) => {
      if (state.sort === "title") {
        return (a.title || "Untitled note").localeCompare(
          b.title || "Untitled note"
        );
      }

      const key = state.sort === "created"
        ? "createdAt"
        : "updatedAt";

      return new Date(b[key]) - new Date(a[key]);
    });

    return notes;
  }

  function renderList() {
    const headings = {
      all: "All notes",
      pinned: "Pinned",
      trash: "Trash"
    };

    els.listHeading.textContent = state.tag
      ? "# " + state.tag
      : headings[state.filter];

    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.filter === state.filter && !state.tag
      );
    });

    const notes = filteredNotes();
    els.notesList.replaceChildren();

    els.resultCount.textContent =
      notes.length + (notes.length === 1 ? " note" : " notes");

    notes.forEach((note) => {
      const card = document.createElement("article");
      card.className =
        "note-card" + (note.id === state.activeId ? " active" : "");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute(
        "aria-label",
        "Open " + (note.title || "Untitled note")
      );

      const title = document.createElement("h3");
      title.textContent = note.title.trim() || "Untitled note";

      const preview = document.createElement("p");
      preview.textContent =
        plainText(note.body) || "No additional text";

      const meta = document.createElement("div");
      meta.className = "note-card-meta";

      const tags = document.createElement("span");
      tags.className = "note-card-tags";
      tags.textContent =
        (note.pinned ? "⌑ " : "") +
        (note.tags.length
          ? note.tags.map((tag) => "#" + tag).join(" ")
          : "");

      const date = document.createElement("span");
      date.textContent = dateLabel(note.updatedAt);

      meta.append(tags, date);
      card.append(title, preview, meta);

      const openNote = () => {
        state.activeId = note.id;
        renderAll();
      };

      card.addEventListener("click", openNote);

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openNote();
        }
      });

      els.notesList.append(card);
    });

    els.emptyList.hidden = notes.length !== 0;
  }

  function renderEditor() {
    const note = current();

    els.editor.hidden = !note;
    els.editorEmpty.hidden = !!note;

    if (!note) return;

    els.title.value = note.title;
    els.tags.value = note.tags.join(", ");
    els.body.innerHTML = note.body;

    els.editorDate.textContent =
      (note.trashed ? "In trash · " : "Edited ") +
      dateLabel(note.updatedAt);

    els.pinBtn.classList.toggle("selected", note.pinned);
    els.pinBtn.title = note.pinned ? "Unpin note" : "Pin note";

    els.trashBtn.textContent = note.trashed ? "↶" : "♲";
    els.trashBtn.title = note.trashed
      ? "Restore note"
      : "Move to trash";

    els.restoreBtn.hidden = !note.trashed;
    els.deleteForeverBtn.hidden = !note.trashed;

    els.title.disabled = note.trashed;
    els.tags.disabled = note.trashed;
    els.body.contentEditable = String(!note.trashed);

    document.querySelectorAll(".toolbar button").forEach((button) => {
      button.disabled = note.trashed;
    });

    updateWordCount();
  }

  function renderAll() {
    updateCounts();
    renderTags();
    renderList();
    renderEditor();
  }

  function updateWordCount() {
    const text = plainText(els.body.innerHTML);
    const words = text
      ? text.split(/\s+/).filter(Boolean).length
      : 0;

    els.wordCount.textContent =
      words + (words === 1 ? " word" : " words") +
      " · " + text.length + " characters";
  }

  function mutateFromEditor() {
    const note = current();

    if (!note || note.trashed) return;

    note.title = els.title.value;
    note.body = els.body.innerHTML;

    note.tags = [
      ...new Set(
        els.tags.value
          .split(",")
          .map((tag) => tag.trim().replace(/^#+/, ""))
          .filter(Boolean)
      )
    ].slice(0, 30);

    note.updatedAt = now();

    queueSave();
    updateWordCount();
    renderList();
    renderTags();
    updateCounts();

    els.editorDate.textContent =
      "Edited " + dateLabel(note.updatedAt);
  }

  function switchFilter(filter) {
    state.filter = filter;
    state.tag = "";
    renderAll();
  }

  function togglePin() {
    const note = current();

    if (!note || note.trashed) return;

    note.pinned = !note.pinned;
    note.updatedAt = now();

    queueSave();
    renderAll();
  }

  function toggleTrash() {
    const note = current();

    if (!note) return;

    note.trashed = !note.trashed;
    note.updatedAt = now();

    if (note.trashed) {
      state.filter = "trash";
      toast("Moved to trash");
    } else {
      state.filter = "all";
      toast("Note restored");
    }

    queueSave();
    renderAll();
  }

  function duplicateNote() {
    const note = current();

    if (!note) return;

    const copy = cleanNote({
      ...note,
      id: makeId(),
      title: (note.title || "Untitled note") + " (copy)",
      pinned: false,
      trashed: false,
      createdAt: now(),
      updatedAt: now()
    });

    state.notes.unshift(copy);
    state.activeId = copy.id;
    state.filter = "all";

    queueSave();
    renderAll();
    toast("Note duplicated");
  }

  function deleteForever() {
    const note = current();

    if (!note || !note.trashed) return;

    if (!confirm("Permanently delete this note? This cannot be undone.")) {
      return;
    }

    state.notes = state.notes.filter((item) => item.id !== note.id);
    state.activeId = null;

    queueSave();
    renderAll();
    toast("Note deleted");
  }

  function setTheme(theme, save = true) {
    const dark = theme === "dark";

    document.documentElement.classList.toggle("dark-theme", dark);

    els.themeIcon.innerHTML = dark
      ? '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"></path>'
      : '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>';

    els.themeBtn.setAttribute(
      "aria-label",
      dark ? "Switch to light theme" : "Switch to dark theme"
    );

    document.querySelector('meta[name="theme-color"]').content =
      dark ? "#0d1020" : "#f6f7fb";

    if (save) {
      const user = safeParse(
        localStorage.getItem(USER_KEY) || "{}",
        {}
      );

      user.theme = theme;

      try {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      } catch (_) {}
    }
  }

  function initTheme() {
    const user = safeParse(
      localStorage.getItem(USER_KEY) || "{}",
      {}
    );

    if (user.theme === "dark" || user.theme === "light") {
      setTheme(user.theme, false);
    } else {
      setTheme(
        matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
        false
      );
    }
  }

  function exportBackup() {
    const backup = {
      format: "geniq-notepad",
      version: 1,
      exportedAt: now(),
      notes: state.notes
    };

    const blob = new Blob(
      [JSON.stringify(backup, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download =
      "geniq-notepad-backup-" +
      new Date().toISOString().slice(0, 10) +
      ".json";

    link.click();
    URL.revokeObjectURL(url);
    toast("Backup exported");
  }

  function importBackup(file) {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const data = safeParse(String(reader.result || ""), null);

      const incoming = Array.isArray(data)
        ? data
        : data && Array.isArray(data.notes)
          ? data.notes
          : null;

      if (!incoming) {
        toast("That file is not a valid notepad backup");
        return;
      }

      if (!confirm(
        "Import " + incoming.length +
        " notes? Existing notes will be kept; imported notes will be added."
      )) return;

      const used = new Set(state.notes.map((note) => note.id));

      incoming.slice(0, 5000).forEach((raw) => {
        const note = cleanNote(raw);

        if (used.has(note.id)) {
          note.id = makeId();
        }

        used.add(note.id);
        state.notes.push(note);
      });

      queueSave();
      renderAll();
      toast("Backup imported");
    };

    reader.onerror = () => toast("Could not read that file");
    reader.readAsText(file);
  }

  function printNote() {
    const note = current();

    if (!note) return;

    const win = window.open("", "_blank");

    if (!win) {
      toast("Allow pop-ups to print this note");
      return;
    }

    win.document.write(
      "<!doctype html><html><head><title>" +
      escapeHTML(note.title || "Untitled note") +
      "</title><meta charset='utf-8'>" +
      "<style>body{font:16px/1.7 system-ui,sans-serif;" +
      "max-width:760px;margin:50px auto;padding:0 24px;color:#222}" +
      "h1{font-size:30px}small{color:#666}</style></head><body>" +
      "<h1>" + escapeHTML(note.title || "Untitled note") + "</h1>" +
      "<small>" + escapeHTML(note.tags.map((tag) => "#" + tag).join(" ")) +
      "</small><hr>" + note.body +
      "</body></html>"
    );

    win.document.close();
    win.focus();
    win.print();
  }

  function escapeHTML(text) {
    return String(text).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function runCommand(button) {
    const note = current();

    if (!note || note.trashed) return;

    els.body.focus();

    const command = button.dataset.command;
    const value = button.dataset.value || null;

    if (command === "formatBlock") {
      document.execCommand(command, false, value);
    } else {
      document.execCommand(command, false, null);
    }

    mutateFromEditor();
  }

  // Buttons and navigation
  els.newButtons.forEach((button) => {
    button.addEventListener("click", addNote);
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      switchFilter(button.dataset.filter);
    });
  });

  els.search.addEventListener("input", () => {
    state.query = els.search.value;
    renderList();
  });

  els.sort.addEventListener("change", () => {
    state.sort = els.sort.value;
    renderList();
  });

  // Editor autosave
  els.title.addEventListener("input", mutateFromEditor);
  els.tags.addEventListener("input", mutateFromEditor);
  els.body.addEventListener("input", mutateFromEditor);

  // Note actions
  els.pinBtn.addEventListener("click", togglePin);
  els.trashBtn.addEventListener("click", toggleTrash);

  els.moreBtn.addEventListener("click", () => {
    els.moreMenu.hidden = !els.moreMenu.hidden;
  });

  document.addEventListener("click", (event) => {
    if (
      !els.moreMenu.contains(event.target) &&
      event.target !== els.moreBtn
    ) {
      els.moreMenu.hidden = true;
    }
  });

  els.duplicateBtn.addEventListener("click", duplicateNote);
  els.restoreBtn.addEventListener("click", toggleTrash);
  els.deleteForeverBtn.addEventListener("click", deleteForever);
  els.printBtn.addEventListener("click", printNote);

  // Formatting toolbar
  document.querySelectorAll(".toolbar [data-command]").forEach((button) => {
    button.addEventListener("click", () => runCommand(button));
  });

  els.clearFormatBtn.addEventListener("click", () => {
    const note = current();

    if (!note || note.trashed) return;

    els.body.focus();
    document.execCommand("removeFormat", false, null);
    document.execCommand("formatBlock", false, "div");

    mutateFromEditor();
  });

  // Theme
  els.themeBtn.addEventListener("click", () => {
    setTheme(
      document.documentElement.classList.contains("dark-theme")
        ? "light"
        : "dark"
    );
  });

  // Backup import/export
  els.exportBtn.addEventListener("click", exportBackup);

  els.importBtn.addEventListener("click", () => {
    els.importInput.click();
  });

  els.importInput.addEventListener("change", () => {
    importBackup(els.importInput.files[0]);
    els.importInput.value = "";
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (event) => {
    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {
      event.preventDefault();
      els.search.focus();
    }

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "s"
    ) {
      event.preventDefault();
      saveNotes();
      toast("Saved");
    }

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "n"
    ) {
      event.preventDefault();
      addNote();
    }

    if (event.key === "Escape") {
      els.moreMenu.hidden = true;
    }
  });

  // Start the notepad
  loadNotes();
  initTheme();
  renderAll();

  // Follow device theme unless user has saved a preference.
  const themeMedia = matchMedia("(prefers-color-scheme: dark)");

  themeMedia.addEventListener?.("change", (event) => {
    const user = safeParse(
      localStorage.getItem(USER_KEY) || "{}",
      {}
    );

    if (user.theme !== "dark" && user.theme !== "light") {
      setTheme(event.matches ? "dark" : "light", false);
    }
  });
})();