import React from 'react';
import { Code, Download, Zap, Shield, TrendingUp, Terminal, CheckCircle, ArrowRight } from 'lucide-react';

const ExtensionPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)',
            color: '#fff',
            paddingTop: '80px'
        }}>
            {/* Hero Section */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <div style={{
                    display: 'inline-block',
                    background: 'rgba(99, 102, 241, 0.1)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    marginBottom: '2rem'
                }}>
                    <span style={{ fontSize: '0.9rem', color: '#818cf8' }}>✨ Now Available</span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(to right, #fff, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em'
                }}>
                    Synapse for VS Code
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: '#94a3b8',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    lineHeight: '1.6'
                }}>
                    AI-powered code refactoring assistant with context-aware suggestions, right in your editor.
                </p>

                {/* CTA Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '4rem'
                }}>
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=synapseai.synapse-refactor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)'
                        }}
                    >
                        <Download size={20} />
                        Install from Marketplace
                    </a>

                    <button
                        onClick={() => document.getElementById('installation').scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        View Installation Guide
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Demo GIF/Video Placeholder */}
                <div style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '16px',
                    padding: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
                        padding: '4rem',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                    }}>
                        <Terminal size={64} color="#818cf8" />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                Select Code → Ctrl+Shift+R → Refactored
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                                It's that simple. AI-powered refactoring in milliseconds.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                padding: '6rem 2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}>
                        Powerful Features
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                icon: <Zap size={32} color="#f59e0b" />,
                                title: 'Instant Refactoring',
                                desc: 'Press Ctrl+Shift+R on selected code. Get AI-powered suggestions in 2-5 seconds.'
                            },
                            {
                                icon: <Code size={32} color="#3b82f6" />,
                                title: 'Multi-Language Support',
                                desc: 'Works with JavaScript, React, TypeScript, Python, and Java. Auto-detects file type.'
                            },
                            {
                                icon: <Shield size={32} color="#10b981" />,
                                title: 'Risk Scoring',
                                desc: 'Every change tagged Low/Medium/High risk. Warns before applying dangerous refactors.'
                            },
                            {
                                icon: <TrendingUp size={32} color="#8b5cf6" />,
                                title: 'Complexity Metrics',
                                desc: 'See before/after complexity, time complexity improvements, and lines saved.'
                            },
                            {
                                icon: <CheckCircle size={32} color="#06b6d4" />,
                                title: 'Code Health Score',
                                desc: 'Visual A-D grading system shows overall code quality improvement.'
                            },
                            {
                                icon: <Terminal size={32} color="#ec4899" />,
                                title: 'Diff Preview',
                                desc: "VS Code's native diff viewer shows exact changes before you apply them."
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="card-premium"
                                style={{
                                    padding: '2rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    transition: 'transform 0.2s, box-shadow 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Installation Section */}
            <div id="installation" style={{
                padding: '6rem 2rem',
                background: 'rgba(0, 0, 0, 0.2)'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        textAlign: 'center',
                        marginBottom: '3rem'
                    }}>
                        Installation
                    </h2>

                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1rem'
                            }}>1</span>
                            Option 1: VS Code Marketplace (Recommended)
                        </h3>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontFamily: 'monospace'
                        }}>
                            <ol style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '2' }}>
                                <li>Open VS Code</li>
                                <li>Press <code style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Ctrl+Shift+X</code></li>
                                <li>Search for "Synapse"</li>
                                <li>Click "Install"</li>
                            </ol>
                        </div>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1rem'
                            }}>2</span>
                            Option 2: Direct Link
                        </h3>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <a
                                href="https://marketplace.visualstudio.com/items?itemName=synapseai.synapse-refactor"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#818cf8',
                                    wordBreak: 'break-all',
                                    textDecoration: 'underline'
                                }}
                            >
                                https://marketplace.visualstudio.com/items?itemName=synapseai.synapse-refactor
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1rem'
                            }}>3</span>
                            How to Use
                        </h3>
                        <div style={{
                            background: 'rgba(16, 185, 129, 0.1)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            <ol style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '2' }}>
                                <li>Open any JavaScript, Python, or Java file</li>
                                <li>Select the code you want to refactor</li>
                                <li>Press <code style={{ background: 'rgba(16, 185, 129, 0.3)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Ctrl+Shift+R</code></li>
                                <li>Wait 2-5 seconds for AI analysis</li>
                                <li>Choose "Preview Diff" or "Apply Changes"</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div style={{
                padding: '6rem 2rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '1.5rem'
                }}>
                    Ready to Transform Your Code?
                </h2>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#94a3b8',
                    maxWidth: '600px',
                    margin: '0 auto 2rem'
                }}>
                    Join developers using AI-powered refactoring to write cleaner, faster code.
                </p>
                <a
                    href="https://marketplace.visualstudio.com/items?itemName=synapseai.synapse-refactor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1.25rem 2.5rem',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)'
                    }}
                >
                    <Download size={24} />
                    Install Extension Now
                </a>
            </div>
        </div>
    );
};

export default ExtensionPage;
