# Muskan AI — Detailed Project Folder Structure

> **Project:** Muskan AI  
> **Type:** Modular AI Chatbot / Personal AI Assistant  
> **Goal:** Scalable, secure, Android-first + Web-ready architecture

## 1. High-Level Architecture

```text
muskan-ai/
├── apps/
│   ├── web/
│   ├── mobile/
│   └── desktop/
├── backend/
│   ├── server/
│   ├── api/
│   ├── ai/
│   ├── memory/
│   ├── tools/
│   ├── auth/
│   ├── database/
│   └── services/
├── packages/
│   ├── ui/
│   ├── types/
│   ├── config/
│   ├── shared/
│   └── utils/
├── data/
│   ├── prompts/
│   ├── personalities/
│   ├── knowledge/
│   ├── commands/
│   └── presets/
├── public/
├── tests/
├── scripts/
├── docs/
└── deployment/
```

## 2. Complete Folder Tree

```text
muskan-ai/
│
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── .gitignore
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
│
├── apps/
│   ├── web/
│   │   ├── index.html
│   │   └── src/
│   │       ├── main.ts
│   │       ├── app.ts
│   │       ├── components/
│   │       │   ├── chat/
│   │       │   ├── header/
│   │       │   ├── sidebar/
│   │       │   ├── composer/
│   │       │   ├── message/
│   │       │   ├── settings/
│   │       │   ├── modal/
│   │       │   └── common/
│   │       ├── pages/
│   │       │   ├── home/
│   │       │   ├── chat/
│   │       │   ├── settings/
│   │       │   ├── profile/
│   │       │   ├── about/
│   │       │   └── error/
│   │       ├── services/
│   │       │   ├── api.ts
│   │       │   ├── chat-service.ts
│   │       │   ├── auth-service.ts
│   │       │   ├── upload-service.ts
│   │       │   └── streaming-service.ts
│   │       ├── state/
│   │       │   ├── chat-store.ts
│   │       │   ├── settings-store.ts
│   │       │   ├── auth-store.ts
│   │       │   └── app-store.ts
│   │       ├── hooks/
│   │       ├── routes/
│   │       └── styles/
│   │           ├── globals.css
│   │           ├── themes.css
│   │           └── responsive.css
│   ├── mobile/
│   │   └── android/
│   │       ├── app/
│   │       ├── gradle/
│   │       └── build.gradle
│   └── desktop/
│       └── main/
│
├── backend/
│   ├── server/
│   │   ├── main.ts
│   │   ├── app.ts
│   │   ├── config.ts
│   │   ├── logger.ts
│   │   └── middleware/
│   │       ├── cors.ts
│   │       ├── auth.ts
│   │       ├── rate-limit.ts
│   │       ├── error-handler.ts
│   │       └── request-id.ts
│   │
│   ├── api/
│   │   ├── routes/
│   │   │   ├── health.ts
│   │   │   ├── chat.ts
│   │   │   ├── auth.ts
│   │   │   ├── memory.ts
│   │   │   ├── files.ts
│   │   │   ├── tools.ts
│   │   │   ├── search.ts
│   │   │   └── settings.ts
│   │   ├── controllers/
│   │   ├── validators/
│   │   └── schemas/
│   │
│   ├── ai/
│   │   ├── core/
│   │   │   ├── orchestrator.ts
│   │   │   ├── model-router.ts
│   │   │   ├── context-builder.ts
│   │   │   ├── response-parser.ts
│   │   │   ├── token-manager.ts
│   │   │   └── safety-guard.ts
│   │   ├── providers/
│   │   │   ├── provider.ts
│   │   │   ├── openai.ts
│   │   │   ├── gemini.ts
│   │   │   ├── anthropic.ts
│   │   │   └── local.ts
│   │   ├── prompts/
│   │   │   ├── system/
│   │   │   ├── personality/
│   │   │   ├── coding/
│   │   │   ├── education/
│   │   │   ├── search/
│   │   │   └── summarization/
│   │   ├── agents/
│   │   │   ├── chat-agent.ts
│   │   │   ├── coding-agent.ts
│   │   │   ├── research-agent.ts
│   │   │   ├── planner-agent.ts
│   │   │   └── tool-agent.ts
│   │   └── pipelines/
│   │       ├── chat-pipeline.ts
│   │       ├── streaming-pipeline.ts
│   │       ├── tool-pipeline.ts
│   │       └── recovery-pipeline.ts
│   │
│   ├── memory/
│   │   ├── memory-manager.ts
│   │   ├── short-term/
│   │   │   ├── conversation-buffer.ts
│   │   │   └── context-window.ts
│   │   ├── long-term/
│   │   │   ├── user-memory.ts
│   │   │   ├── preferences.ts
│   │   │   └── facts.ts
│   │   ├── semantic/
│   │   │   ├── embeddings.ts
│   │   │   ├── vector-store.ts
│   │   │   └── retrieval.ts
│   │   └── summarization/
│   │       └── memory-summarizer.ts
│   │
│   ├── tools/
│   │   ├── registry.ts
│   │   ├── calculator/
│   │   ├── date-time/
│   │   ├── weather/
│   │   ├── web-search/
│   │   ├── url/
│   │   ├── file-system/
│   │   ├── code-runner/
│   │   ├── translator/
│   │   ├── notes/
│   │   ├── reminders/
│   │   └── device/
│   │
│   ├── auth/
│   │   ├── auth-service.ts
│   │   ├── session.ts
│   │   ├── permissions.ts
│   │   └── providers/
│   │
│   ├── database/
│   │   ├── client.ts
│   │   ├── models/
│   │   │   ├── user.ts
│   │   │   ├── conversation.ts
│   │   │   ├── message.ts
│   │   │   ├── memory.ts
│   │   │   └── settings.ts
│   │   ├── repositories/
│   │   └── migrations/
│   │
│   └── services/
│       ├── chat-service.ts
│       ├── streaming-service.ts
│       ├── upload-service.ts
│       ├── search-service.ts
│       ├── notification-service.ts
│       ├── analytics-service.ts
│       └── backup-service.ts
│
├── packages/
│   ├── ui/
│   │   ├── buttons/
│   │   ├── cards/
│   │   ├── dialogs/
│   │   ├── inputs/
│   │   ├── menus/
│   │   ├── toast/
│   │   └── icons/
│   ├── types/
│   │   ├── chat.ts
│   │   ├── message.ts
│   │   ├── user.ts
│   │   ├── memory.ts
│   │   ├── tool.ts
│   │   └── settings.ts
│   ├── config/
│   │   ├── app-config.ts
│   │   ├── model-config.ts
│   │   ├── theme-config.ts
│   │   └── tool-config.ts
│   ├── shared/
│   │   ├── constants.ts
│   │   ├── events.ts
│   │   ├── errors.ts
│   │   └── schemas.ts
│   └── utils/
│       ├── logger.ts
│       ├── debounce.ts
│       ├── throttle.ts
│       ├── formatting.ts
│       ├── validation.ts
│       └── storage.ts
│
├── data/
│   ├── prompts/
│   │   ├── system.md
│   │   ├── personality.md
│   │   ├── developer.md
│   │   ├── coding.md
│   │   └── safety.md
│   ├── personalities/
│   │   ├── muskan.json
│   │   ├── casual.json
│   │   ├── professional.json
│   │   ├── study.json
│   │   └── coding.json
│   ├── knowledge/
│   │   ├── faq.json
│   │   ├── commands.json
│   │   └── capabilities.json
│   ├── commands/
│   │   ├── builtin.json
│   │   ├── shortcuts.json
│   │   └── aliases.json
│   └── presets/
│       ├── default-settings.json
│       ├── default-themes.json
│       └── default-models.json
│
├── public/
│   ├── assets/
│   │   ├── logo/
│   │   ├── illustrations/
│   │   ├── backgrounds/
│   │   └── avatars/
│   ├── icons/
│   │   ├── app-icons/
│   │   ├── toolbar/
│   │   └── file-icons/
│   ├── sounds/
│   │   ├── notification/
│   │   ├── message/
│   │   └── ui/
│   ├── videos/
│   │   └── logo.mp4
│   └── fonts/
│
├── tests/
│   ├── unit/
│   │   ├── ai/
│   │   ├── memory/
│   │   ├── tools/
│   │   ├── auth/
│   │   └── utils/
│   ├── integration/
│   │   ├── chat/
│   │   ├── memory/
│   │   ├── tools/
│   │   └── api/
│   ├── e2e/
│   │   ├── login/
│   │   ├── chat/
│   │   ├── settings/
│   │   └── file-upload/
│   └── fixtures/
│
├── scripts/
│   ├── dev.ts
│   ├── build.ts
│   ├── seed.ts
│   ├── migrate.ts
│   ├── validate.ts
│   └── clean.ts
│
├── docs/
│   ├── architecture/
│   │   ├── overview.md
│   │   ├── ai-pipeline.md
│   │   ├── memory.md
│   │   └── tools.md
│   ├── api/
│   │   ├── authentication.md
│   │   ├── chat.md
│   │   ├── memory.md
│   │   └── tools.md
│   ├── development/
│   │   ├── setup.md
│   │   ├── coding-guidelines.md
│   │   └── debugging.md
│   └── product/
│       ├── features.md
│       ├── roadmap.md
│       └── personality.md
│
└── deployment/
    ├── docker/
    │   ├── Dockerfile.frontend
    │   └── Dockerfile.backend
    ├── nginx/
    │   └── nginx.conf
    ├── vercel/
    ├── cloudflare/
    └── production.env.example
```

## 3. Muskan Personality Layer

Personality ko AI core mein hard-code karne ke bajay configuration-driven rakho.

```text
data/personalities/
├── muskan.json
├── casual.json
├── professional.json
├── study.json
└── coding.json
```

Example:

```json
{
  "name": "Muskan",
  "displayName": "Muskan AI",
  "defaultLanguage": "hinglish",
  "style": {
    "warm": true,
    "friendly": true,
    "casual": true,
    "concise": true,
    "playful": true
  },
  "capabilities": [
    "chat",
    "coding",
    "web-search",
    "calculator",
    "weather",
    "date-time",
    "file-analysis"
  ]
}
```

## 4. AI Core

```text
User Message
     │
     ▼
Input Normalizer
     │
     ▼
Intent Detection
     │
     ├── Normal Chat
     ├── Coding
     ├── Search
     ├── Calculator
     ├── Weather
     ├── File Task
     └── Tool Request
     │
     ▼
Context Builder
     │
     ├── Recent Messages
     ├── Relevant Memory
     ├── User Preferences
     ├── System Prompt
     └── Tool Context
     │
     ▼
Model Router
     │
     ▼
AI Provider
     │
     ▼
Response Parser
     │
     ├── Normal Answer
     ├── Tool Call
     ├── Code Block
     └── Structured Output
     │
     ▼
Safety / Validation
     │
     ▼
UI Response
```

## 5. Memory Architecture

### Short-Term Memory

Current conversation ke recent messages:

```text
backend/memory/short-term/
├── conversation-buffer.ts
└── context-window.ts
```

### Long-Term Memory

Useful preferences/facts:

```text
backend/memory/long-term/
├── user-memory.ts
├── preferences.ts
└── facts.ts
```

### Semantic Memory

Large knowledge retrieval:

```text
backend/memory/semantic/
├── embeddings.ts
├── vector-store.ts
└── retrieval.ts
```

## 6. Tools Architecture

Har tool independent module ho.

```text
backend/tools/
├── registry.ts
├── calculator/
│   ├── index.ts
│   ├── parser.ts
│   └── evaluator.ts
├── weather/
│   ├── index.ts
│   └── provider.ts
├── web-search/
│   ├── index.ts
│   ├── search.ts
│   └── parser.ts
├── file-system/
│   ├── index.ts
│   ├── reader.ts
│   └── writer.ts
└── reminders/
    ├── index.ts
    └── scheduler.ts
```

Flow:

```text
User Request
     ↓
Tool Detector
     ↓
Tool Registry
     ↓
Selected Tool
     ↓
Tool Result
     ↓
Muskan Response
```

## 7. Chat UI Structure

```text
components/chat/
├── ChatShell
├── ChatHeader
├── MessageList
├── MessageBubble
├── UserMessage
├── AssistantMessage
├── ThinkingIndicator
├── StreamingMessage
├── ToolResultCard
├── CodeBlock
├── MarkdownRenderer
├── AttachmentPreview
└── ChatEmptyState
```

Composer:

```text
components/composer/
├── MessageComposer
├── TextInput
├── SendButton
├── StopButton
├── AttachmentButton
├── VoiceButton
├── ToolButton
└── ComposerActions
```

## 8. Local Storage

Suggested local keys:

```text
muskan.settings
muskan.theme
muskan.chat.history
muskan.chat.drafts
muskan.memory.local
muskan.recent.files
muskan.notifications
muskan.shortcuts
```

Sensitive API keys ko plain localStorage mein store karna avoid karo; secure platform storage/backend secrets use karo.

## 9. Theme System

```text
data/presets/default-themes.json
packages/config/theme-config.ts
apps/web/src/styles/themes.css
```

ThemeManager responsibilities:

```text
loadTheme()
applyTheme()
saveTheme()
detectSystemTheme()
createCustomTheme()
resetTheme()
```

## 10. Security Layer

```text
backend/auth/
├── auth-service.ts
├── session.ts
├── permissions.ts
└── providers/
```

Security middleware:

```text
backend/server/middleware/
├── auth.ts
├── rate-limit.ts
├── cors.ts
├── request-id.ts
└── error-handler.ts
```

Responsibilities:

- API keys protect karna
- Authentication/session validation
- Rate limiting
- Input validation
- Tool permission checks
- File access restrictions
- User data isolation
- Safe error responses
- Audit logging
- Abuse prevention

## 11. Database Structure

Main entities:

```text
users
conversations
messages
memories
settings
```

Relationships:

```text
User
 ├── Conversations
 │    └── Messages
 ├── Memories
 └── Settings
```

## 12. Error Handling

Muskan ko exception ke baad blank screen nahi deni chahiye.

```text
Operation
   ↓
try/catch
   ↓
Error Normalizer
   ↓
Logger
   ↓
Recovery / Retry
   ↓
User-safe Message
```

Frontend par global handlers:

```text
window.onerror
window.onunhandledrejection
```

Backend par structured global error middleware use karo.

## 13. Streaming Architecture

```text
User
 ↓
API
 ↓
Model
 ↓ tokens
Streaming Service
 ↓
Frontend Stream Reader
 ↓
Message Renderer
```

Important modules:

```text
backend/services/streaming-service.ts
apps/web/src/services/streaming-service.ts
components/chat/StreamingMessage
```

## 14. File & Attachment System

```text
Upload
  ↓
Validation
  ↓
Type Detection
  ↓
Size Check
  ↓
Storage
  ↓
AI Processing
  ↓
Result
```

UI components:

```text
AttachmentPreview
ImagePreview
FilePreview
UploadProgress
```

## 15. Testing Strategy

```text
tests/
├── unit/
│   ├── ai/
│   ├── memory/
│   ├── tools/
│   ├── auth/
│   └── utils/
├── integration/
│   ├── chat/
│   ├── memory/
│   ├── tools/
│   └── api/
├── e2e/
│   ├── login/
│   ├── chat/
│   ├── settings/
│   └── file-upload/
└── fixtures/
```

Minimum test coverage areas:

- AI response handling
- Memory retrieval
- Tool execution
- Authentication
- Chat persistence
- Streaming
- File upload
- Theme switching
- Settings persistence
- Error recovery

## 16. Development Rules

### Rule 1 — UI aur logic separate rakho

UI event handlers mein huge AI logic mat rakho.

```text
UI
 ↓
Application Service
 ↓
AI Orchestrator
```

### Rule 2 — Tools modular hon

Har tool ka apna folder, validation aur test ho.

### Rule 3 — Prompts external files mein hon

Large system prompts ko giant JavaScript strings mein hard-code mat karo.

### Rule 4 — Global state limited rakho

Centralized stores use karo.

### Rule 5 — Errors silently swallow mat karo

Log + recover + safe user message.

### Rule 6 — Secrets protect karo

API keys ko client bundle mein hard-code mat karo.

## 17. Future Plugin System

```text
backend/plugins/
├── registry.ts
├── loader.ts
├── permissions.ts
├── sandbox.ts
└── plugins/
    ├── calculator/
    ├── weather/
    ├── browser/
    ├── github/
    ├── notes/
    └── custom/
```

Plugin lifecycle:

```text
Discover
 ↓
Validate
 ↓
Permission Check
 ↓
Load
 ↓
Register
 ↓
Execute
 ↓
Unload
```

## 18. Production Deployment

```text
deployment/
├── docker/
│   ├── Dockerfile.frontend
│   └── Dockerfile.backend
├── nginx/
│   └── nginx.conf
├── vercel/
├── cloudflare/
└── production.env.example
```

Architecture:

```text
             ┌─────────────────┐
             │   Muskan Web    │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │    API Server   │
             └────────┬────────┘
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
       AI Engine    Memory      Tools
          │           │           │
          └───────────┼───────────┘
                      ▼
                 Persistence
```

## 19. Recommended Muskan Core Modules

Long-term project ke liye ye major engines separate rakhna useful hoga:

```text
AI Engine
Memory Engine
Personality Engine
Tool Engine
Conversation Engine
Search Engine
File Engine
Voice Engine
Notification Engine
Theme Engine
Authentication Engine
Settings Engine
Analytics Engine
Safety Engine
Plugin Engine
```

## 20. Final Ownership Map

| Module | Responsibility |
|---|---|
| `apps/` | User-facing applications |
| `backend/ai/` | AI orchestration and provider routing |
| `backend/memory/` | Conversation and long-term memory |
| `backend/tools/` | External capabilities |
| `backend/auth/` | Identity and permissions |
| `backend/database/` | Persistent data |
| `packages/ui/` | Reusable interface components |
| `packages/types/` | Shared data contracts |
| `data/` | Prompts, personalities, commands and presets |
| `public/` | Static assets |
| `tests/` | Automated testing |
| `docs/` | Architecture and developer documentation |
| `deployment/` | Production configuration |

## 21. Core Design Principle

Muskan ko ek huge single-file chatbot ke roop mein grow karne ke bajay modular AI platform ki tarah build karo.

```text
UI
 ↓
Application Services
 ↓
AI Orchestrator
 ↓
Memory + Tools
 ↓
Model Provider
 ↓
Persistence
```

Is separation se future mein chat, memory, web search, coding, files, voice, images, tools, plugins, notifications, themes, multi-device sync, authentication aur model switching add kiye ja sakte hain bina poore project ko rewrite kiye.
