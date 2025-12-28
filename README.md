# Synapse - AI Refactoring Assistant

Synapse is an intelligent code refactoring tool that analyzes your code, detects code smells, and provides context-aware optimization suggestions.

## 🚀 Features

-   **AI-Driven Analysis**: Detects anti-patterns (e.g., imperative loops, legacy syntax) and refactors them automatically.
-   **Smart Workspace**: Premium, IDE-like editor with syntax highlighting (PrismJS).
-   **History Tracking**: Keeps a log of all your refactoring sessions.
-   **Personalization**: Configure TypeScript preferences and custom style rules.
-   **Modern UI**: Glassmorphism design system built with React and Vanilla CSS.

## 🛠️ Tech Stack

-   **Frontend**: React, Vite, React Router, Axios, PrismJS
-   **Backend**: Node.js, Express, In-Memory Storage (Mock DB)
-   **Styling**: Custom CSS Layout (Flexbox/Grid, CSS Variables)

## 🏃‍♂️ How to Run

### 1. Start the Backend
The backend handles code analysis and stores history.
```bash
cd backend
npm install
node server.js
```
*Server runs on http://localhost:5000*

### 2. Start the Frontend
The frontend provides the user interface.
```bash
# Open a new terminal
npm install
npm run dev
```
*App runs on http://localhost:5173*

## 📁 Project Structure

```
SYNAPSE/
├── backend/
│   └── server.js       # Express API (Analysis & History)
├── src/
│   ├── components/     # UI Components (Header, Editor, Results)
│   ├── pages/          # Page Views (Refactor, History)
│   ├── App.jsx         # Main Router & State
│   └── index.css       # Global Design System
└── index.html
```

## 🔮 Future Roadmap

-   Integration with OpenAI/Gemini API for real-time LLM analysis.
-   User Authentication (Save history per user).
-   VS Code Extension.
