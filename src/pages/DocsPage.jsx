import { useState } from 'react';
import { FadeIn } from '../components/Animations';
import { CheckCircle, Code, Zap, Shield, BookOpen, Terminal } from 'lucide-react';

const DOCS_CONTENT = {
    'intro': {
        title: 'Welcome to Synapse',
        content: (
            <>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                    <strong style={{ color: 'var(--accent)' }}>Synapse</strong> is an <strong>AI-powered refactoring assistant</strong> that understands your code's intent. Unlike traditional linters, Synapse provides <em>contextual improvements</em> using a hybrid approach: <strong>50+ lightning-fast rule checks</strong> + <strong>AI-powered deep analysis</strong>.
                </p>

                <div style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.3)', marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--text-main)', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Zap size={24} color="#f59e0b" />
                        Why Synapse is Different
                    </h3>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: 0 }}>
                        <li><strong>Context-Aware:</strong> Learns from your entire repository</li>
                        <li><strong>Risk-Scored:</strong> Every change tagged Low/Medium/High</li>
                        <li><strong>Explainable:</strong> Shows <em>why</em> each refactor improves code</li>
                        <li><strong>Multi-Language:</strong> JavaScript, React, Python, Java</li>
                    </ul>
                </div>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>User-Friendly Design</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                    Synapse is built for developers of all skill levels. No configuration needed—just paste code and get instant, actionable suggestions.
                </p>
            </>
        )
    },
    'how-to-use': {
        title: 'How to Use Synapse',
        content: (
            <>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>🚀 Method 1: Web Application</h3>

                    {[
                        { step: '1', title: 'Open the Refactor Page', desc: 'Navigate to the main page or click "Refactor" in the header' },
                        { step: '2', title: 'Paste Your Code', desc: 'Copy your messy code into the Monaco editor (supports syntax highlighting!)' },
                        { step: '3', title: 'Choose Mode', desc: 'Select "Clean Code" (readability) or "Performance" (speed optimization)' },
                        { step: '4', title: 'Click "ANALYZE & REFACTOR"', desc: 'AI analyzes in 2-5 seconds' },
                        { step: '5', title: 'Review Results', desc: 'See Code Health Score, detected smells, and side-by-side diff' },
                        { step: '6', title: 'Accept or Reject', desc: 'Thumbs up to learn from preferences' }
                    ].map((item, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            gap: '1.5rem',
                            marginBottom: '1.5rem',
                            padding: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                flexShrink: 0
                            }}>
                                {item.step}
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>⚡ Method 2: VS Code Extension</h3>
                    <ol style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1.05rem' }}>
                        <li>Install from <a href="https://marketplace.visualstudio.com/items?itemName=synapseai.synapse-refactor" target="_blank" style={{ color: '#818cf8' }}>VS Code Marketplace</a></li>
                        <li>Open any code file</li>
                        <li>Select problematic code</li>
                        <li>Press <code style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Ctrl+Shift+R</code></li>
                        <li>Choose "Preview Diff" or "Apply Changes"</li>
                    </ol>
                </div>
            </>
        )
    },
    '50-checks': {
        title: '50+ Rule-Based Checks',
        content: (
            <>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Synapse runs <strong>50+ blazing-fast checks</strong> (&lt;50ms) before calling AI. This hybrid approach ensures <strong>instant feedback</strong> for common issues while reserving AI for complex refactors.
                </p>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <CheckCircle size={24} />
                        Universal Checks (15 rules)
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                            { name: 'Long Lines', icon: '📏' },
                            { name: 'Deep Nesting', icon: '🔀' },
                            { name: 'Large Functions', icon: '📦' },
                            { name: 'Magic Numbers', icon: '🔢' },
                            { name: 'Duplicate Code', icon: '📋' },
                            { name: 'Empty Catch Blocks', icon: '🚫' },
                            { name: 'TODO Comments', icon: '📝' },
                            { name: 'Console Logs', icon: '🖨️' },
                            { name: 'Commented Code', icon: '💬' },
                            { name: 'Inconsistent Naming', icon: '🏷️' },
                            { name: 'Long Parameters', icon: '📜' },
                            { name: 'Complex Conditionals', icon: '❓' },
                            { name: 'Missing Error Handling', icon: '⚠️' },
                            { name: 'Unused Variables', icon: '🗑️' },
                            { name: 'Type Coercion', icon: '🔄' }
                        ].map((check, i) => (
                            <div key={i} style={{
                                padding: '1rem',
                                background: 'rgba(59, 130, 246, 0.05)',
                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                fontSize: '0.95rem'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>{check.icon}</span>
                                <span>{check.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Code size={24} />
                        JavaScript Checks (20 rules)
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                            { name: 'var Usage', desc: 'Use const/let' },
                            { name: 'Loose Equality (==)', desc: 'Use ===' },
                            { name: 'Old Function Style', desc: 'Use arrow functions' },
                            { name: 'Manual for Loops', desc: 'Use .map/.filter' },
                            { name: 'String Concatenation', desc: 'Use template literals' },
                            { name: 'Callback Hell', desc: 'Use async/await' },
                            { name: 'eval() Usage', desc: 'Security risk' },
                            { name: 'Global Variables', desc: 'Use modules' },
                            { name: 'this Binding Issues', desc: 'Use arrow functions' },
                            { name: 'setTimeout(string)', desc: 'Use function' },
                            { name: '== null Check', desc: 'Use === null' },
                            { name: 'new Array()', desc: 'Use []' },
                            { name: 'new Object()', desc: 'Use {}' },
                            { name: 'Synchronous AJAX', desc: 'Use async' },
                            { name: 'Inline onclick', desc: 'Use addEventListener' },
                            { name: 'document.write', desc: 'Use createElement' },
                            { name: 'with Statement', desc: 'Avoid completely' },
                            { name: 'Comma Operator', desc: 'Confusing syntax' },
                            { name: 'Implicit Globals', desc: 'Declare variables' },
                            { name: 'delete Misuse', desc: 'Only on properties' }
                        ].map((check, i) => (
                            <div key={i} style={{
                                padding: '1rem',
                                background: 'rgba(245, 158, 11, 0.05)',
                                border: '1px solid rgba(245, 158, 11, 0.2)',
                                borderRadius: '8px'
                            }}>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{check.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{check.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: '#10b981', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Terminal size={24} />
                        Python Checks (10 rules)
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                            { name: 'Bare except:', desc: 'Specify exception type' },
                            { name: 'print() Statements', desc: 'Use logging module' },
                            { name: 'global Keyword', desc: 'Avoid excessive use' },
                            { name: 'Mutable Defaults', desc: 'def f(x=[]) danger' },
                            { name: 'from x import *', desc: 'Namespace pollution' },
                            { name: 'exec/eval', desc: 'Code injection risk' },
                            { name: 'Lambda Assignments', desc: 'Use def instead' },
                            { name: 'Missing Type Hints', desc: 'Add annotations' },
                            { name: 'Redundant pass', desc: 'Remove unnecessary' },
                            { name: 'Old % Formatting', desc: 'Use f-strings' }
                        ].map((check, i) => (
                            <div key={i} style={{
                                padding: '1rem',
                                background: 'rgba(16, 185, 129, 0.05)',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                borderRadius: '8px'
                            }}>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{check.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{check.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: '#ec4899', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Shield size={24} />
                        Java Checks (5 rules)
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                            { name: 'Raw Types', desc: 'Use generics' },
                            { name: 'Empty Catch', desc: 'Log exceptions' },
                            { name: 'System.out.println', desc: 'Use logger' },
                            { name: 'String + in Loop', desc: 'Use StringBuilder' },
                            { name: 'Public Fields', desc: 'Use getters/setters' }
                        ].map((check, i) => (
                            <div key={i} style={{
                                padding: '1rem',
                                background: 'rgba(236, 72, 153, 0.05)',
                                border: '1px solid rgba(236, 72, 153, 0.2)',
                                borderRadius: '8px'
                            }}>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{check.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{check.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginTop: 0, fontSize: '1.5rem' }}>⚡ Total: 50 Checks in &lt;50ms</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 0, fontSize: '1.1rem' }}>
                        Rule-based checks run first (instant), then AI handles complex refactoring (2-5 seconds)
                    </p>
                </div>
            </>
        )
    },
    'api': {
        title: 'API Reference',
        content: (
            <>
                <h3>POST /api/analyze</h3>
                <pre style={{ background: '#111', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
                    {`{
  "code": "your code here",
  "language": "javascript",
  "refactorType": "clean-code"
}`}
                </pre>

                <h3 style={{ marginTop: '2rem' }}>Response</h3>
                <pre style={{ background: '#111', padding: '1rem', borderRadius: '8px', overflow: 'auto', fontSize: '0.9rem' }}>
                    {`{
  "refactored_code": "improved code",
  "smell_detected": "var usage",
  "explanation": "Replaced var with const...",
  "metrics": {
    "complexity_before": 5,
    "complexity_after": 2,
    "risk_score": 3,
    "lines_saved": 10
  }
}`}
                </pre>
            </>
        )
    }
};

const DocsPage = () => {
    const [activeDoc, setActiveDoc] = useState('intro');

    return (
        <FadeIn className="container h-full flex gap-8">
            {/* Sidebar */}
            <div style={{ width: '250px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Getting Started</h4>
                    <ul className="docs-nav" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><button onClick={() => setActiveDoc('intro')} className={activeDoc === 'intro' ? 'active' : ''}>Introduction</button></li>
                        <li><button onClick={() => setActiveDoc('how-to-use')} className={activeDoc === 'how-to-use' ? 'active' : ''}>How to Use</button></li>
                        <li><button onClick={() => setActiveDoc('50-checks')} className={activeDoc === '50-checks' ? 'active' : ''}>50+ Checks</button></li>
                    </ul>
                </div>
                <div className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Advanced</h4>
                    <ul className="docs-nav" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><button onClick={() => setActiveDoc('api')} className={activeDoc === 'api' ? 'active' : ''}>API Reference</button></li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="card flex-1" style={{ padding: '3rem', overflow: 'auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{DOCS_CONTENT[activeDoc].title}</h1>
                {DOCS_CONTENT[activeDoc].content}
            </div>

            <style>{`
                .docs-nav button {
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    cursor: pointer;
                    font-size: 1rem;
                    text-align: left;
                    padding: 0;
                    margin: 0;
                    transition: color 0.2s;
                    font-family: var(--font-main);
                }
                .docs-nav button:hover {
                    color: var(--text-main);
                }
                .docs-nav button.active {
                    color: var(--accent);
                    font-weight: 600;
                }
            `}</style>
        </FadeIn>
    );
};

export default DocsPage;
