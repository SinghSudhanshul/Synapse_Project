import React from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // Using Tomorrow Night theme

const CodeEditor = ({ code, onChange, label = "Input Code" }) => {

    const highlightCode = (code) => {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    };

    return (
        <div className="card h-full flex flex-col" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{
                padding: '0.75rem 1rem',
                borderBottom: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>{label}</span>
                <div className="flex gap-2">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }}></div>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }}></div>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }}></div>
                </div>
            </div>
            <div style={{ flex: 1, position: 'relative', background: '#0B0C12', overflow: 'auto' }}>
                <Editor
                    value={code}
                    onValueChange={onChange}
                    highlight={highlightCode}
                    padding={16}
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 14,
                        color: '#f8f8f2',
                        minHeight: '100%',
                    }}
                    textareaClassName="focus:outline-none"
                />
            </div>
        </div>
    );
};

export default CodeEditor;
