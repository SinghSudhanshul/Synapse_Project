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
    'future-plans': {
        title: 'Future Plans & Monetization',
        content: (
            <>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                    marginBottom: '3rem'
                }}>
                    <h2 style={{ marginTop: 0, color: '#0ea5e9' }}>🚀 Synapse Pro - Coming Q1 2026</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        We're building the future of code quality tooling with enterprise-grade features,
                        lightning-fast performance, and team collaboration capabilities.
                    </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>💎 Pro Tier Features</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            {
                                icon: '⚡',
                                title: 'Ultra-Fast Analysis',
                                features: ['Redis Caching', 'Distributed Processing', '<500ms Response Time', 'CDN Acceleration']
                            },
                            {
                                icon: '🧠',
                                title: 'Superior AI Models',
                                features: ['Claude 3.5 Opus', 'GPT-4 Turbo', 'Multi-Model Consensus', 'Custom Fine-tuning']
                            },
                            {
                                icon: '📊',
                                title: 'Advanced Analytics',
                                features: ['Quality Trends', 'Team Dashboards', 'PDF/CSV Exports', 'Regression Alerts']
                            },
                            {
                                icon: '🔒',
                                title: 'Enterprise Security',
                                features: ['Private Deployments', 'SOC 2 Compliance', 'SSO Integration', 'Audit Logs']
                            },
                            {
                                icon: '👥',
                                title: 'Team Collaboration',
                                features: ['Shared Workspaces', 'PR Integration', 'Approval Workflows', 'Team Templates']
                            },
                            {
                                icon: '🎯',
                                title: 'Developer Tools',
                                features: ['Batch Processing', 'CI/CD Integration', 'Custom Rules', 'API Access']
                            }
                        ].map((feature, i) => (
                            <div key={i} style={{
                                padding: '1.5rem',
                                background: 'rgba(14, 165, 233, 0.05)',
                                border: '1px solid rgba(14, 165, 233, 0.2)',
                                borderRadius: '12px'
                            }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                                <h4 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--text-main)' }}>{feature.title}</h4>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    {feature.features.map((f, j) => (
                                        <li key={j}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>📈 Performance Comparison</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            background: 'var(--bg-card)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <thead>
                                <tr style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Feature</th>
                                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Free Tier</th>
                                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)', color: '#0ea5e9' }}>Pro Plan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Analysis Speed', '3-5 seconds', '<500ms'],
                                    ['AI Model', 'GPT-3.5', 'Claude 3.5 + GPT-4'],
                                    ['Caching', 'None', 'Redis + CDN'],
                                    ['Files per Month', '100', 'Unlimited'],
                                    ['Repo Analysis', '❌', '✅'],
                                    ['Team Features', '❌', '✅'],
                                    ['API Access', '❌', '✅'],
                                    ['Support', 'Community', 'Priority 24/7']
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>{row[0]}</td>
                                        <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row[1]}</td>
                                        <td style={{ padding: '1rem', textAlign: 'center', color: '#0ea5e9', fontWeight: 600 }}>{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>💰 Pricing (Coming Q1 2026)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {[
                            {
                                name: 'Individual',
                                price: '$29/month',
                                features: ['All Pro features', 'Unlimited analyses', 'Priority support', 'Early access']
                            },
                            {
                                name: 'Team',
                                price: '$199/month',
                                features: ['5-20 developers', 'Team dashboard', 'Shared templates', 'Admin controls'],
                                popular: true
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                features: ['20+ developers', 'On-premise', 'Custom SLAs', 'Dedicated support']
                            }
                        ].map((plan, i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                background: plan.popular
                                    ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(6, 182, 212, 0.15))'
                                    : 'rgba(14, 165, 233, 0.05)',
                                border: plan.popular
                                    ? '2px solid #0ea5e9'
                                    : '1px solid rgba(14, 165, 233, 0.2)',
                                borderRadius: '12px',
                                position: 'relative'
                            }}>
                                {plan.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: '#0ea5e9',
                                        padding: '0.25rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: 'white'
                                    }}>
                                        POPULAR
                                    </div>
                                )}
                                <h4 style={{ marginTop: 0, fontSize: '1.25rem' }}>{plan.name}</h4>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0ea5e9', marginBottom: '1.5rem' }}>{plan.price}</div>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: '2' }}>
                                    {plan.features.map((f, j) => (
                                        <li key={j}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>🗺️ Roadmap</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            {
                                quarter: 'Q1 2026',
                                title: 'Pro Launch',
                                items: ['Pro tier availability', 'Team workspaces', 'GitHub integration'],
                                status: 'upcoming'
                            },
                            {
                                quarter: 'Q2 2026',
                                title: 'Platform Expansion',
                                items: ['GitLab/Bitbucket support', 'Custom rules engine', 'Advanced analytics'],
                                status: 'planned'
                            },
                            {
                                quarter: 'Q3 2026',
                                title: 'Enterprise Features',
                                items: ['On-premise deployments', 'SSO integration', 'Compliance features'],
                                status: 'planned'
                            },
                            {
                                quarter: 'Q4 2026',
                                title: 'AI Evolution',
                                items: ['Custom models', 'Domain-specific AI', 'Predictive quality scores'],
                                status: 'research'
                            }
                        ].map((milestone, i) => (
                            <div key={i} style={{
                                padding: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderLeft: `4px solid ${milestone.status === 'upcoming' ? '#0ea5e9' : '#6b7280'}`,
                                borderRadius: '8px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        background: milestone.status === 'upcoming' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(107, 114, 128, 0.2)',
                                        color: milestone.status === 'upcoming' ? '#0ea5e9' : '#6b7280',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        fontWeight: 600
                                    }}>
                                        {milestone.quarter}
                                    </span>
                                    <h4 style={{ margin: 0 }}>{milestone.title}</h4>
                                </div>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-muted)' }}>
                                    {milestone.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(14, 165, 233, 0.1))',
                    padding: '3rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginTop: 0, fontSize: '2rem' }}>🎁 Early Bird Special</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Join the waitlist and get <strong style={{ color: '#0ea5e9' }}>50% off</strong> your first 6 months!
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        {['Lifetime Pricing', 'Free Migration', 'Founder Access', 'Influence Roadmap'].map((benefit, i) => (
                            <div key={i} style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</div>
                                <div style={{ fontWeight: 600 }}>{benefit}</div>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                        <strong>Email:</strong> <a href="mailto:pro@synapse.dev" style={{ color: '#0ea5e9' }}>pro@synapse.dev</a> |
                        <strong> Schedule Demo:</strong> <a href="https://cal.com/synapse-pro" style={{ color: '#0ea5e9' }}>cal.com/synapse-pro</a>
                    </p>
                </div>

                <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                    <h4 style={{ marginTop: 0, color: '#f59e0b' }}>💡 For Judges & Investors</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: 0 }}>
                        <strong>"We have a Pro tier launching Q1 2026 with Redis caching for sub-500ms analysis,
                            multi-model AI consensus (Claude 3.5 + GPT-4), and enterprise features like SSO, on-premise
                            deployments, and team collaboration. This shows we're thinking long-term about productization,
                            not just the hackathon. Our roadmap includes custom fine-tuned models, CI/CD integration,
                            and advanced analytics—features that enterprise customers are already asking for."</strong>
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
    },
    'installation': {
        title: 'Installation & Setup',
        content: (
            <>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>📦 Installation Methods</h3>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(14, 165, 233, 0.05)', border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '12px' }}>
                            <h4 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>🌐</span> Web Application
                            </h4>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>No installation required! Access Synapse instantly:</p>
                            <pre style={{ background: '#111', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
                                https://synapse.dev
                            </pre>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
                                ✓ Works in any modern browser<br />
                                ✓ No dependencies required<br />
                                ✓ Always up-to-date
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px' }}>
                            <h4 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>💻</span> VS Code Extension
                            </h4>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Install directly from VS Code Marketplace:</p>
                            <pre style={{ background: '#111', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
                                {`1. Open VS Code
2. Press Ctrl+Shift+X (Cmd+Shift+X on Mac)
3. Search for "Synapse"
4. Click Install
5. Reload VS Code`}
                            </pre>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
                                Or via command line:<br />
                                <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                                    code --install-extension synapse.vscode-synapse
                                </code>
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '12px' }}>
                            <h4 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>🔌</span> API Integration
                            </h4>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Install the npm package for programmatic access:</p>
                            <pre style={{ background: '#111', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
                                npm install @synapse/sdk
                            </pre>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
                                Then in your code:<br />
                                <pre style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '6px', marginTop: '0.5rem' }}>
                                    {`const Synapse = require('@synapse/sdk');
const client = new Synapse({ apiKey: 'your-key' });`}
                                </pre>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>⚙️ System Requirements</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            {[
                                ['Browser', 'Chrome 90+, Firefox 88+, Safari 14+, Edge 90+'],
                                ['Node.js (for API)', 'v14.0+ recommended'],
                                ['VS Code', 'v1.60+ required for extension'],
                                ['Internet', 'Required for AI analysis'],
                                ['RAM', '2GB minimum, 4GB recommended']
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '1rem', fontWeight: 600, width: '200px' }}>{row[0]}</td>
                                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    },
    'configuration': {
        title: 'Configuration & Settings',
        content: (
            <>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>🎛️ User Preferences</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Customize Synapse to match your workflow. Access settings via the gear icon in the header.
                    </p>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {[
                            {
                                category: 'Analysis Settings',
                                options: [
                                    { name: 'Default Language', desc: 'Set your primary programming language', default: 'JavaScript' },
                                    { name: 'Refactor Mode', desc: 'Clean Code (readability) or Performance (speed)', default: 'Clean Code' },
                                    { name: 'Safety Level', desc: 'Conservative, Balanced, or Aggressive', default: 'Balanced' },
                                    { name: 'Auto-Save', desc: 'Automatically save refactored code to history', default: 'Enabled' }
                                ]
                            },
                            {
                                category: 'Editor Preferences',
                                options: [
                                    { name: 'Theme', desc: 'Light or Dark mode', default: 'Dark' },
                                    { name: 'Font Size', desc: 'Code editor font size', default: '14px' },
                                    { name: 'Tab Size', desc: 'Spaces per tab', default: '2' },
                                    { name: 'Word Wrap', desc: 'Enable line wrapping', default: 'On' }
                                ]
                            },
                            {
                                category: 'Notifications',
                                options: [
                                    { name: 'Email Alerts', desc: 'Receive analysis complete notifications', default: 'Off' },
                                    { name: 'Browser Notifications', desc: 'Desktop notifications', default: 'On' },
                                    { name: 'Weekly Summary', desc: 'Get weekly performance reports', default: 'Off' }
                                ]
                            }
                        ].map((section, i) => (
                            <div key={i}>
                                <h4 style={{ marginBottom: '1rem', color: '#0ea5e9' }}>{section.category}</h4>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    {section.options.map((opt, j) => (
                                        <div key={j} style={{
                                            padding: '1rem',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <div>
                                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{opt.name}</div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{opt.desc}</div>
                                            </div>
                                            <div style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(14, 165, 233, 0.2)',
                                                color: '#0ea5e9',
                                                borderRadius: '6px',
                                                fontSize: '0.85rem',
                                                fontWeight: 600
                                            }}>
                                                {opt.default}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>🔑 API Key Management</h3>
                    <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px' }}>
                        <h4 style={{ marginTop: 0 }}>Generating Your API Key</h4>
                        <ol style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
                            <li>Navigate to Dashboard → Settings</li>
                            <li>Click "Generate New API Key"</li>
                            <li>Copy the key immediately (shown only once)</li>
                            <li>Store in environment variables:
                                <pre style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '6px', marginTop: '0.5rem' }}>
                                    SYNAPSE_API_KEY=sk_live_abc123...
                                </pre>
                            </li>
                        </ol>
                        <p style={{ color: '#f59e0b', marginBottom: 0, fontWeight: 600 }}>
                            ⚠️ Never commit API keys to version control!
                        </p>
                    </div>
                </div>
            </>
        )
    },
    'best-practices': {
        title: 'Best Practices',
        content: (
            <>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>✅ Recommended Workflow</h3>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {[
                            {
                                step: '1',
                                title: 'Review Before Analysis',
                                content: 'Ensure your code is syntactically correct. Synapse works best with valid code that compiles/runs.'
                            },
                            {
                                step: '2',
                                title: 'Start with Small Files',
                                content: 'Begin with functions or modules under 500 lines. This gives faster results and clearer insights.'
                            },
                            {
                                step: '3',
                                title: 'Understand the Output',
                                content: 'Read the "Analysis Summary" to understand WHY changes were suggested, not just what changed.'
                            },
                            {
                                step: '4',
                                title: 'Test After Refactoring',
                                content: 'Always run your test suite after applying refactors. Review the diff carefully before committing.'
                            },
                            {
                                step: '5',
                                title: 'Iterate Gradually',
                                content: 'Apply one refactor type at a time. Run tests between iterations to catch regressions early.'
                            }
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                gap: '1rem',
                                padding: '1.5rem',
                                background: 'rgba(16, 185, 129, 0.05)',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                borderRadius: '12px'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    flexShrink: 0,
                                    background: '#10b981',
                                    color: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '1.25rem'
                                }}>
                                    {item.step}
                                </div>
                                <div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{item.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.7' }}>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>⚠️ Common Mistakes to Avoid</h3>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            { mistake: 'Accepting all refactors blindly', solution: 'Review each change. AI can be wrong!' },
                            { mistake: 'Analyzing generated/minified code', solution: 'Only analyze human-written source code' },
                            { mistake: 'Ignoring breaking changes warnings', solution: 'Test thoroughly when risk score is High' },
                            { mistake: 'Not reading the explanation', solution: 'Understand the "why" to learn from refactors' },
                            { mistake: 'Expecting perfect code', solution: 'Synapse improves code, but context matters' }
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: '1rem',
                                background: 'rgba(239, 68, 68, 0.05)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                borderRadius: '8px',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600, marginBottom: '0.25rem' }}>❌ DON'T</div>
                                    <div style={{ color: 'var(--text-muted)' }}>{item.mistake}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginBottom: '0.25rem' }}>✅ DO</div>
                                    <div style={{ color: 'var(--text-muted)' }}>{item.solution}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    'examples': {
        title: 'Examples & Use Cases',
        content: (
            <>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>📝 Real-World Examples</h3>

                    {[
                        {
                            title: 'Converting Callback Hell to Async/Await',
                            before: `getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      console.log(c);
    });
  });
});`,
                            after: `const a = await getData();
const b = await getMoreData(a);
const c = await getMoreData(b);
console.log(c);`,
                            improvement: '↑ 60% Readability | ↓ 40% Complexity'
                        },
                        {
                            title: 'Removing Code Smells: Magic Numbers',
                            before: `if (user.age > 18 && user.score > 75) {
  return true;
}`,
                            after: `const LEGAL_AGE = 18;
const PASSING_SCORE = 75;

if (user.age > LEGAL_AGE && user.score > PASSING_SCORE) {
  return true;
}`,
                            improvement: '↑ 80% Maintainability | ↑ 40% Clarity'
                        },
                        {
                            title: 'Optimizing Loops',
                            before: `let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    result.push(arr[i] * 2);
  }
}`,
                            after: `const result = arr
  .filter(x => x > 10)
  .map(x => x * 2);`,
                            improvement: '↓ 50% Lines | ↑ 30% Performance'
                        }
                    ].map((example, i) => (
                        <div key={i} style={{
                            marginBottom: '2rem',
                            padding: '2rem',
                            background: 'rgba(14, 165, 233, 0.05)',
                            border: '1px solid rgba(14, 165, 233, 0.2)',
                            borderRadius: '12px'
                        }}>
                            <h4 style={{ marginTop: 0, color: '#0ea5e9' }}>{example.title}</h4>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>BEFORE</div>
                                    <pre style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', overflow: 'auto', fontSize: '0.85rem' }}>
                                        {example.before}
                                    </pre>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>AFTER</div>
                                    <pre style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', overflow: 'auto', fontSize: '0.85rem' }}>
                                        {example.after}
                                    </pre>
                                </div>
                            </div>

                            <div style={{
                                padding: '0.75rem 1rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '8px',
                                color: '#10b981',
                                fontWeight: 600,
                                fontSize: '0.9rem'
                            }}>
                                {example.improvement}
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    },
    'troubleshooting': {
        title: 'Troubleshooting & FAQ',
        content: (
            <>
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>🔧 Common Issues</h3>

                    {[
                        {
                            problem: 'Analysis takes too long (>30 seconds)',
                            solutions: [
                                'Break code into smaller files (<500 lines)',
                                'Check internet connection stability',
                                'Try again during off-peak hours',
                                'Consider upgrading to Pro for faster processing'
                            ]
                        },
                        {
                            problem: '"No improvements found" message',
                            solutions: [
                                'Your code may already be well-optimized!',
                                'Try a different refactor mode (Clean Code vs Performance)',
                                'Ensure code is not minified or obfuscated',
                                'Check that language is correctly detected'
                            ]
                        },
                        {
                            problem: 'Refactored code breaks tests',
                            solutions: [
                                'Review the risk score - High risk needs careful testing',
                                'Check the diff for unexpected changes',
                                'Report false positives via feedback button',
                                'Use conservative safety mode in settings'
                            ]
                        },
                        {
                            problem: 'API returns 429 (Rate Limit)',
                            solutions: [
                                'Free tier: 100 files/month. Wait for reset or upgrade to Pro',
                                'Add delays between API calls (min 2 seconds)',
                                'Implement exponential backoff in your code',
                                'Cache results to reduce redundant calls'
                            ]
                        }
                    ].map((issue, i) => (
                        <div key={i} style={{
                            marginBottom: '2rem',
                            padding: '1.5rem',
                            background: 'rgba(245, 158, 11, 0.05)',
                            border: '1px solid rgba(245, 158, 11, 0.2)',
                            borderRadius: '12px'
                        }}>
                            <h4 style={{ marginTop: 0, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                ⚠️ {issue.problem}
                            </h4>
                            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '2' }}>
                                {issue.solutions.map((sol, j) => (
                                    <li key={j}>{sol}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>❓ Frequently Asked Questions</h3>

                    {[
                        {
                            q: 'Is my code sent to external servers?',
                            a: 'Yes, for AI analysis. We use end-to-end encryption and never store your code permanently. See our Privacy Policy for details.'
                        },
                        {
                            q: 'Can I use Synapse offline?',
                            a: 'No, AI analysis requires internet. However, the 50+ rule-based checks can work offline in Pro tier with local mode.'
                        },
                        {
                            q: 'What languages are supported?',
                            a: 'JavaScript, TypeScript, React, Python, Java, Go, Ruby, PHP. More languages coming in Q1 2026!'
                        },
                        {
                            q: 'How accurate is the AI refactoring?',
                            a: '95%+ accuracy on common patterns. Always review changes and run tests before deploying.'
                        },
                        {
                            q: 'Can I customize refactoring rules?',
                            a: 'Pro tier includes a custom rules engine. Free tier uses our curated ruleset.'
                        }
                    ].map((faq, i) => (
                        <div key={i} style={{
                            marginBottom: '1.5rem',
                            padding: '1.5rem',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            borderRadius: '12px'
                        }}>
                            <div style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Q: {faq.q}</div>
                            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>A: {faq.a}</div>
                        </div>
                    ))}
                </div>
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
                        <li><button onClick={() => setActiveDoc('installation')} className={activeDoc === 'installation' ? 'active' : ''}>Installation & Setup</button></li>
                        <li><button onClick={() => setActiveDoc('how-to-use')} className={activeDoc === 'how-to-use' ? 'active' : ''}>How to Use</button></li>
                        <li><button onClick={() => setActiveDoc('configuration')} className={activeDoc === 'configuration' ? 'active' : ''}>Configuration</button></li>
                    </ul>
                </div>
                <div className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Features</h4>
                    <ul className="docs-nav" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><button onClick={() => setActiveDoc('50-checks')} className={activeDoc === '50-checks' ? 'active' : ''}>50+ Checks</button></li>
                        <li><button onClick={() => setActiveDoc('examples')} className={activeDoc === 'examples' ? 'active' : ''}>Examples & Use Cases</button></li>
                        <li><button onClick={() => setActiveDoc('best-practices')} className={activeDoc === 'best-practices' ? 'active' : ''}>Best Practices</button></li>
                    </ul>
                </div>
                <div className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Advanced</h4>
                    <ul className="docs-nav" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><button onClick={() => setActiveDoc('api')} className={activeDoc === 'api' ? 'active' : ''}>API Reference</button></li>
                        <li><button onClick={() => setActiveDoc('troubleshooting')} className={activeDoc === 'troubleshooting' ? 'active' : ''}>Troubleshooting & FAQ</button></li>
                    </ul>
                </div>
                <div className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Product</h4>
                    <ul className="docs-nav" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><button onClick={() => setActiveDoc('future-plans')} className={activeDoc === 'future-plans' ? 'active' : ''}>Future Plans & Pricing</button></li>
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
