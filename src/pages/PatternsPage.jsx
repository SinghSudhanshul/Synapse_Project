import React from 'react';
import { FadeIn, ScaleIn } from '../components/Animations';

const PatternsPage = () => {
    const patterns = [
        {
            title: "Imperative Loop",
            severity: "Medium",
            description: "Using for-loops for simple data transformations instead of higher-order functions like map/reduce.",
            example: "for (let i = 0; i < arr.length; i++) { ... }",
            fix: "const result = arr.map(item => ...)"
        },
        {
            title: "God Object",
            severity: "High",
            description: "A class that knows too much or does too much. It violates the Single Responsibility Principle.",
            example: "class UserManager { login, signup, export, print, database... }",
            fix: "Break down into distinct services: AuthService, ReportService..."
        },
        {
            title: "Magic Numbers",
            severity: "Low",
            description: "Unique values with unexplained meaning. Makes code hard to understand and modify.",
            example: "if (status === 2) { ... }",
            fix: "const STATUS_ACTIVE = 2; if (status === STATUS_ACTIVE) { ... }"
        },
        {
            title: "Prop Drilling",
            severity: "Medium",
            description: "Passing data through many layers of components that don't need it.",
            example: "<Parent><Child><GrandChild data={data} /></Child></Parent>",
            fix: "Use Context API or State Management libraries."
        }
    ];

    return (
        <FadeIn className="container h-full flex flex-col gap-8">
            <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Anti-Pattern Library</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Common coding mistakes and architectural smells that Synapse is trained to detect.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {patterns.map((pattern, index) => (
                    <ScaleIn key={index} delay={index * 0.1}>
                        <div className="card h-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 style={{ margin: 0, color: 'var(--text-main)' }}>{pattern.title}</h3>
                                <span style={{
                                    padding: '4px 10px',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    background: pattern.severity === 'High' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                                    color: pattern.severity === 'High' ? '#FCA5A5' : '#FCD34D'
                                }}>
                                    {pattern.severity}
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '60px' }}>
                                {pattern.description}
                            </p>

                            <div style={{ background: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--error)', marginBottom: '0.25rem', fontWeight: 600 }}>🚫 DON'T</div>
                                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pattern.example}</code>
                            </div>

                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '0.25rem', fontWeight: 600 }}>✅ DO</div>
                                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#A7F3D0' }}>{pattern.fix}</code>
                            </div>
                        </div>
                    </ScaleIn>
                ))}
            </div>
        </FadeIn>
    );
};

export default PatternsPage;
