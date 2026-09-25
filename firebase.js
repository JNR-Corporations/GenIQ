
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
    import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
    const firebaseConfig = {
      apiKey: "AIzaSyD0g5GaftqXSx6izoelU4wu6XpcQ8k0060",
      authDomain: "geniq-jnr.firebaseapp.com",
      projectId: "geniq-jnr",
      storageBucket: "geniq-jnr.firebasestorage.app",
      messagingSenderId: "404010970715",
      appId: "1:404010970715:web:1b6bcb7e1ad1434733997e",
      measurementId: "G-NKR2H63G1J"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    let currentMode = 'login';

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in user:", user);
      }
    });

    window.switchAuthMode = function(mode) {
      currentMode = mode;
      const tabLogin = document.getElementById('tabLogin');
      const tabSignup = document.getElementById('tabSignup');
      const nameGroup = document.getElementById('nameFieldGroup');
      const heading = document.getElementById('authHeading');
      const subheading = document.getElementById('authSubheading');
      const submitBtnText = document.getElementById('submitBtnText');
      const forgotLink = document.getElementById('forgotPasswordLink');
      const indicator = document.querySelector('.tab-indicator');

      hideAlert();

      if (mode === 'signup') {
        tabLogin.classList.remove('active');
        tabSignup.classList.add('active');
        indicator.style.transform = 'translateX(100%)';
        nameGroup.classList.remove('hidden');
        heading.innerText = "Create Account";
        subheading.innerText = "Join GENIQ to access 500+ JEE Modules";
        submitBtnText.innerText = "Create Account";
        forgotLink.style.display = "none";
      } else {
        tabSignup.classList.remove('active');
        tabLogin.classList.add('active');
        indicator.style.transform = 'translateX(0%)';
        nameGroup.classList.add('hidden');
        heading.innerText = "Welcome Back";
        subheading.innerText = "Sign in to continue your JEE preparation";
        submitBtnText.innerText = "Sign In";
        forgotLink.style.display = "block";
      }
    };

    window.togglePasswordVisibility = function() {
      const passInput = document.getElementById('passwordInput');
      passInput.type = passInput.type === 'password' ? 'text' : 'password';
    };

    window.handleAuthSubmit = async function(e) {
      e.preventDefault();
      const email = document.getElementById('emailInput').value.trim();
      const password = document.getElementById('passwordInput').value.trim();
      const fullName = document.getElementById('fullNameInput').value.trim();

      setLoading(true);
      hideAlert();

      try {
        if (currentMode === 'signup') {
          if (!fullName) throw new Error("Please enter your full name.");
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(userCredential.user, { displayName: fullName });
          showAlert("Account created successfully!", "success");
        } else {
          await signInWithEmailAndPassword(auth, email, password);
          showAlert("Logged in successfully!", "success");
        }
      } catch (error) {
        showAlert(formatFirebaseError(error.message), "error");
      } finally {
        setLoading(false);
      }
    };

    document.getElementById('googleAuthBtn').addEventListener('click', async () => {
      hideAlert();
      try {
        await signInWithPopup(auth, googleProvider);
        showAlert("Authenticated with Google successfully!", "success");
      } catch (error) {
        showAlert(formatFirebaseError(error.message), "error");
      }
    });

    window.handleForgotPassword = async function(e) {
      e.preventDefault();
      const email = document.getElementById('emailInput').value.trim();
      if (!email) {
        showAlert("Please enter your email address first.", "error");
        return;
      }
      try {
        await sendPasswordResetEmail(auth, email);
        showAlert("Password reset link sent to your email!", "success");
      } catch (error) {
        showAlert(formatFirebaseError(error.message), "error");
      }
    };

    function setLoading(isLoading) {
      const btnText = document.getElementById('submitBtnText');
      const spinner = document.getElementById('btnSpinner');
      const submitBtn = document.getElementById('submitBtn');

      submitBtn.disabled = isLoading;
      if (isLoading) {
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
      } else {
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
      }
    }

    function showAlert(msg, type) {
      const alertBox = document.getElementById('alertBox');
      alertBox.innerText = msg;
      alertBox.className = `auth-alert ${type}`;
      alertBox.classList.remove('hidden');
    }

    function hideAlert() {
      const alertBox = document.getElementById('alertBox');
      alertBox.classList.add('hidden');
    }

    function formatFirebaseError(msg) {
      if (msg.includes('auth/invalid-credential') || msg.includes('auth/wrong-password')) return "Invalid email or password.";
      if (msg.includes('auth/email-already-in-use')) return "Email is already registered. Please login.";
      if (msg.includes('auth/weak-password')) return "Password should be at least 6 characters.";
      return msg.replace('Firebase: ', '');
    }


    const authBtn = document.getElementById("geniqAuthBtn");
const authBtnText = document.getElementById("geniqAuthBtnText");
const authIcon = document.getElementById("geniqAuthIcon");

onAuthStateChanged(auth, (user) => {

  if (user) {

    authBtnText.textContent = "Logout";

    authIcon.innerHTML = `
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <path d="m16 17 5-5-5-5"></path>
      <path d="M21 12H9"></path>
    `;

    authBtn.onclick = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

  } else {

    authBtnText.textContent = "Login";

    authIcon.innerHTML = `
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
      <path d="M10 17l5-5-5-5"></path>
      <path d="M15 12H3"></path>
    `;

    authBtn.onclick = () => {
      window.location.href = "login.html";
    };

  }

});
