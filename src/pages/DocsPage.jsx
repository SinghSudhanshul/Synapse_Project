import React from 'react';
import { FadeIn } from '../components/Animations';

const DocsPage = () => {
    return (
        <FadeIn className="container h-full flex gap-8">
            {/* Sidebar */}
            <div style={{ width: '250px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Getting Started</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><a href="#" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Introduction</a></li>
                        <li><a href="#" style={{ color: 'var(--text-muted)' }}>Installation</a></li>
                        <li><a href="#" style={{ color: 'var(--text-muted)' }}>Quick Start</a></li>
                    </ul>
                </div>
                <div className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Core Concepts</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><a href="#" style={{ color: 'var(--text-muted)' }}>Code Smells</a></li>
                        <li><a href="#" style={{ color: 'var(--text-muted)' }}>Refactoring Strategies</a></li>
                        <li><a href="#" style={{ color: 'var(--text-muted)' }}>AI Engines</a></li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="card flex-1" style={{ padding: '3rem', overflow: 'auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Introduction to Synapse</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Synapse is an <strong>AI-powered refactoring assistant</strong> designed to bridge the gap between static analysis and human-like reasoning. Unlike traditional linters that catch syntax errors, Synapse understands the <em>intent</em> of your code and suggests architectural improvements.
                </p>

                <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)', marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--text-main)', marginTop: 0 }}>Why Refactor?</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                        Code debt accumulates silently. Refactoring is not just about cleaning up—it's about making your system robust, scalable, and easier to maintain. Synapse automates this process by identifying complexity hotspots.
                    </p>
                </div>

                <h2>Key Features</h2>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    <li>
                        <strong style={{ color: 'var(--text-main)' }}>Context Awareness:</strong> Synapse looks at the surrounding code to determine if a change is safe.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--text-main)' }}>Secure by Design:</strong> Code is analyzed in a sandboxed environment.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--text-main)' }}>Learning Loop:</strong> The more you use it, the better it understands your coding style.
                    </li>
                </ul>
            </div>
        </FadeIn>
    );
};

export default DocsPage;
