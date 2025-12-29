# Synapse Refactor - VS Code Extension

AI-powered code refactoring directly in your editor. Detects code smells and suggests context-aware improvements.

## Features

- **Smart Refactoring**: AI analyzes your code and suggests improvements
- **Code Smell Detection**: Identifies anti-patterns and bad practices
- **Risk Scoring**: Every refactor tagged with risk level (Low/Medium/High)
- **Diff Preview**: See before/after changes in VS Code's diff viewer
- **Metrics Dashboard**: View complexity, time complexity, and lines saved
- **Multi-Language**: Supports JavaScript, React, Python, Java

## Usage

### Refactor Selected Code
1. Select code you want to refactor
2. Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. OR: Right-click → "Synapse: Refactor Selected Code"
4. Choose action:
   - **Preview Diff**: See changes before applying
   - **Apply Changes**: Apply refactoring immediately
   - **View Explanation**: See why changes were made

### Refactor Entire File
- Command Palette (`Ctrl+Shift+P`) → "Synapse: Refactor Current File"

## Commands

| Command | Shortcut | Description |
|---------|----------|-------------|
| `Synapse: Refactor Selected Code` | `Ctrl+Shift+R` | Refactor selected code |
| `Synapse: Refactor Current File` | - | Refactor entire file |

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `synapse.apiUrl` | `https://synapse-ns5r.onrender.com` | Synapse API endpoint |
| `synapse.autoRefactor` | `false` | Auto-apply low-risk refactors |

## Configuration

Open VS Code Settings (`Ctrl+,`) and search for "Synapse" to customize:

```json
{
  "synapse.apiUrl": "https://synapse-ns5r.onrender.com",
  "synapse.autoRefactor": false
}
```

## How It Works

1. **Select Code** → Extension sends to Synapse API
2. **AI Analysis** → Detects smells, suggests refactors
3. **Review** → See diff, metrics, explanation
4. **Apply** → One-click to accept changes

## Requirements

- VS Code 1.80.0 or higher
- Internet connection (for API calls)

## Privacy

- Code is sent to Synapse API for analysis
- Not stored permanently (results only)
- No training on your code

## Support

- GitHub: https://github.com/ramanuj077/Synapse
- Issues: https://github.com/ramanuj077/Synapse/issues

## License

MIT
