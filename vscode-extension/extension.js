const vscode = require('vscode');
const axios = require('axios');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Synapse Refactor extension activated');

    // Command: Refactor Code
    let refactorCommand = vscode.commands.registerCommand('synapse.refactor', async function () {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        if (!selectedText) {
            vscode.window.showErrorMessage('Please select code to refactor');
            return;
        }

        // Detect language
        const languageId = editor.document.languageId;
        const languageMap = {
            'javascript': 'javascript',
            'javascriptreact': 'react',
            'typescript': 'javascript',
            'typescriptreact': 'react',
            'python': 'python',
            'java': 'java'
        };
        const language = languageMap[languageId] || 'javascript';

        // Show progress
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Synapse is refactoring your code...",
            cancellable: false
        }, async (progress) => {
            try {
                // Get API URL from settings
                const config = vscode.workspace.getConfiguration('synapse');
                const apiUrl = config.get('apiUrl', 'https://synapse-ns5r.onrender.com');

                // Call Synapse API
                progress.report({ message: 'Analyzing code...' });
                const response = await axios.post(`${apiUrl}/api/analyze`, {
                    code: selectedText,
                    language: language,
                    refactorType: 'clean-code'
                }, {
                    timeout: 10000
                });

                const result = response.data;

                // Show results in diff view
                progress.report({ message: 'Displaying results...' });
                await showRefactorResults(selectedText, result, editor, selection);

            } catch (error) {
                console.error('Synapse refactor error:', error);
                vscode.window.showErrorMessage(
                    `Synapse refactor failed: ${error.response?.data?.error || error.message}`
                );
            }
        });
    });

    // Command: Refactor Entire File
    let refactorFile = vscode.commands.registerCommand('synapse.refactorFile', async function () {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const fullText = editor.document.getText();
        const languageId = editor.document.languageId;
        const languageMap = {
            'javascript': 'javascript',
            'javascriptreact': 'react',
            'python': 'python',
            'java': 'java'
        };
        const language = languageMap[languageId] || 'javascript';

        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Synapse is refactoring entire file...",
            cancellable: false
        }, async (progress) => {
            try {
                const config = vscode.workspace.getConfiguration('synapse');
                const apiUrl = config.get('apiUrl', 'https://synapse-ns5r.onrender.com');

                progress.report({ message: 'Analyzing file...' });
                const response = await axios.post(`${apiUrl}/api/analyze`, {
                    code: fullText,
                    language: language,
                    refactorType: 'clean-code'
                }, {
                    timeout: 15000
                });

                const result = response.data;
                const fullRange = new vscode.Range(
                    editor.document.positionAt(0),
                    editor.document.positionAt(fullText.length)
                );

                await showRefactorResults(fullText, result, editor, fullRange);

            } catch (error) {
                console.error('Synapse refactor error:', error);
                vscode.window.showErrorMessage(
                    `Synapse refactor failed: ${error.response?.data?.error || error.message}`
                );
            }
        });
    });

    context.subscriptions.push(refactorSelection, refactorFile);
}

async function showRefactorResults(originalCode, result, editor, range) {
    // Create information message with metrics
    const metricsText = result.metrics ?
        `Complexity: ${result.metrics.complexity_before} → ${result.metrics.complexity_after} | ` +
        `Risk: ${result.metrics.risk_score}/10 | ` +
        `Lines saved: ${result.metrics.lines_saved}`
        : '';

    const message = result.smell_detected ?
        `🔍 ${result.smell_detected}\n\n${metricsText}`
        : `✅ Code refactored\n\n${metricsText}`;

    // Show quick pick with options
    const action = await vscode.window.showInformationMessage(
        message,
        { modal: false },
        'Preview Diff',
        'Apply Changes',
        'View Explanation',
        'Cancel'
    );

    if (action === 'Preview Diff') {
        // Open diff view
        const originalUri = vscode.Uri.parse('synapse-original:///before.js');
        const refactoredUri = vscode.Uri.parse('synapse-refactored:///after.js');

        // Register content providers
        const originalProvider = new (class {
            provideTextDocumentContent() {
                return originalCode;
            }
        })();

        const refactoredProvider = new (class {
            provideTextDocumentContent() {
                return result.refactored_code;
            }
        })();

        const disposable1 = vscode.workspace.registerTextDocumentContentProvider('synapse-original', originalProvider);
        const disposable2 = vscode.workspace.registerTextDocumentContentProvider('synapse-refactored', refactoredProvider);

        await vscode.commands.executeCommand('vscode.diff', originalUri, refactoredUri, 'Synapse Refactor Diff');

        // Clean up after 30 seconds
        setTimeout(() => {
            disposable1.dispose();
            disposable2.dispose();
        }, 30000);

    } else if (action === 'Apply Changes') {
        // Apply refactored code
        const config = vscode.workspace.getConfiguration('synapse');
        const autoApply = config.get('autoRefactor', false);

        if (result.metrics && result.metrics.risk_score > 7 && !autoApply) {
            const confirm = await vscode.window.showWarningMessage(
                `⚠️ High risk refactor (${result.metrics.risk_score}/10). Apply anyway?`,
                'Yes', 'No'
            );
            if (confirm !== 'Yes') return;
        }

        await editor.edit(editBuilder => {
            editBuilder.replace(range, result.refactored_code);
        });

        vscode.window.showInformationMessage('✅ Refactor applied successfully!');

    } else if (action === 'View Explanation') {
        // Show explanation in webview panel
        const panel = vscode.window.createWebviewPanel(
            'synapseExplanation',
            'Synapse Refactor Explanation',
            vscode.ViewColumn.Beside,
            {}
        );

        panel.webview.html = getExplanationHtml(result);
    }
}

function getExplanationHtml(result) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            padding: 20px;
            background: #1e1e1e;
            color: #d4d4d4;
        }
        h2 { color: #4ec9b0; }
        .smell { 
            background: #5a1e1e;
            padding: 15px;
            border-left: 4px solid #f48771;
            margin: 20px 0;
        }
        .explanation {
            background: #1e3a5f;
            padding: 15px;
            border-left: 4px solid #4fc1ff;
            margin: 20px 0;
        }
        .metrics {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 20px;
        }
        .metric {
            background: #2d2d30;
            padding: 15px;
            border-radius: 5px;
        }
        .metric-label { 
            font-size: 12px;
            color: #858585;
            text-transform: uppercase;
        }
        .metric-value {
            font-size: 24px;
            font-weight: bold;
            color: #4fc1ff;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <h2>🔍 Code Analysis Results</h2>
    
    ${result.smell_detected ? `
    <div class="smell">
        <strong>Detected Issue:</strong><br>
        ${result.smell_detected}
    </div>
    ` : ''}
    
    <div class="explanation">
        <strong>Refactoring Explanation:</strong><br>
        ${result.explanation || 'No explanation provided'}
    </div>
    
    ${result.metrics ? `
    <h3>📊 Metrics</h3>
    <div class="metrics">
        <div class="metric">
            <div class="metric-label">Complexity</div>
            <div class="metric-value">${result.metrics.complexity_before} → ${result.metrics.complexity_after}</div>
        </div>
        <div class="metric">
            <div class="metric-label">Risk Score</div>
            <div class="metric-value">${result.metrics.risk_score}/10</div>
        </div>
        <div class="metric">
            <div class="metric-label">Time Complexity</div>
            <div class="metric-value">${result.metrics.time_complexity_before || 'N/A'} → ${result.metrics.time_complexity_after || 'N/A'}</div>
        </div>
        <div class="metric">
            <div class="metric-label">Lines Saved</div>
            <div class="metric-value">${result.metrics.lines_saved || 0}</div>
        </div>
    </div>
    ` : ''}
</body>
</html>`;
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
