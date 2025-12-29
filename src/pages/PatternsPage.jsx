import React, { useState } from 'react';
import { FadeIn, ScaleIn } from '../components/Animations';
import { AlertTriangle, Code, TrendingUp } from 'lucide-react';

const PatternsPage = () => {
    const [filter, setFilter] = useState('all');

    const patterns = [
        // JavaScript Anti-Patterns
        {
            title: "var Usage",
            category: "javascript",
            severity: "Medium",
            description: "Using 'var' creates function-scoped variables with hoisting issues. Use const/let for block scope.",
            example: "var count = 0;\nfor (var i = 0; i < 10; i++) { ... }",
            fix: "const count = 0;\nfor (let i = 0; i < 10; i++) { ... }"
        },
        {
            title: "Loose Equality (==)",
            category: "javascript",
            severity: "High",
            description: "Type coercion can cause unexpected bugs. Always use strict equality.",
            example: "if (x == '5') { ... }",
            fix: "if (x === 5) { ... }"
        },
        {
            title: "Imperative Loop",
            category: "javascript",
            severity: "Medium",
            description: "Using for-loops for simple data transformations instead of higher-order functions.",
            example: "for (let i = 0; i < arr.length; i++) {\n  result.push(arr[i] * 2);\n}",
            fix: "const result = arr.map(item => item * 2)"
        },
        {
            title: "Callback Hell",
            category: "javascript",
            severity: "High",
            description: "Deeply nested callbacks make code unreadable. Use async/await instead.",
            example: "getData(function(a) {\n  getMore(a, function(b) {\n    getMore(b, function(c) { ... })\n  })\n})",
            fix: "const a = await getData();\nconst b = await getMore(a);\nconst c = await getMore(b);"
        },
        {
            title: "String Concatenation",
            category: "javascript",
            severity: "Low",
            description: "Using + for string building is less readable than template literals.",
            example: "const greeting = 'Hello ' + name + '!';",
            fix: "const greeting = `Hello ${name}!`;"
        },
        {
            title: "eval() Usage",
            category: "javascript",
            severity: "Critical",
            description: "Executing strings as code is a major security vulnerability.",
            example: "eval(userInput);",
            fix: "Use JSON.parse() or safe alternatives"
        },

        // Universal Anti-Patterns
        {
            title: "God Object",
            category: "universal",
            severity: "High",
            description: "A class that knows too much or does too much. Violates Single Responsibility Principle.",
            example: "class UserManager {\n  login() {...}\n  signup() {...}\n  exportPDF() {...}\n  sendEmail() {...}\n}",
            fix: "Split into: AuthService, ExportService, EmailService"
        },
        {
            title: "Magic Numbers",
            category: "universal",
            severity: "Low",
            description: "Unique values with unexplained meaning. Makes code hard to understand and modify.",
            example: "if (status === 2) { ... }",
            fix: "const STATUS_ACTIVE = 2;\nif (status === STATUS_ACTIVE) { ... }"
        },
        {
            title: "Deep Nesting",
            category: "universal",
            severity: "Medium",
            description: "Too many nested if/for statements reduce readability. Flatten with early returns.",
            example: "if (a) {\n  if (b) {\n    if (c) {\n      if (d) { ... }\n    }\n  }\n}",
            fix: "if (!a) return;\nif (!b) return;\nif (!c) return;\nif (!d) return;\n..."
        },
        {
            title: "Long Functions",
            category: "universal",
            severity: "Medium",
            description: "Functions over 50 lines should be broken down for maintainability.",
            example: "function processOrder() {\n  // 200 lines of code\n}",
            fix: "Split into: validateOrder(), calculateTotal(), saveOrder()..."
        },
        {
            title: "Duplicate Code",
            category: "universal",
            severity: "High",
            description: "Repeating code blocks violates DRY principle. Extract to reusable functions.",
            example: "// Same logic copy-pasted 5 times\nconst x = data.map(...);\n// ... 10 lines later\nconst y = data.map(...);",
            fix: "const transform = (d) => d.map(...);\nconst x = transform(data);\nconst y = transform(data);"
        },
        {
            title: "Empty Catch Blocks",
            category: "universal",
            severity: "High",
            description: "Silently swallowing errors makes debugging impossible.",
            example: "try {\n  riskyOperation();\n} catch (e) {}",
            fix: "try {\n  riskyOperation();\n} catch (e) {\n  console.error('Operation failed:', e);\n  throw e;\n}"
        },

        // React-Specific
        {
            title: "Prop Drilling",
            category: "react",
            severity: "Medium",
            description: "Passing data through many layers of components that don't need it.",
            example: "<Parent><Child><GrandChild data={data} /></Child></Parent>",
            fix: "Use Context API or State Management (Redux, Zustand)"
        },
        {
            title: "Inline Functions in JSX",
            category: "react",
            severity: "Low",
            description: "Creating new functions on every render causes unnecessary re-renders.",
            example: "<button onClick={() => handleClick()}>Click</button>",
            fix: "const handleClick = useCallback(() => {...}, []);\n<button onClick={handleClick}>Click</button>"
        },
        {
            title: "Missing Keys in Lists",
            category: "react",
            severity: "Medium",
            description: "Not using stable keys in map() can cause rendering bugs.",
            example: "items.map((item, index) => <div key={index}>...</div>)",
            fix: "items.map(item => <div key={item.id}>...</div>)"
        },

        // Python Anti-Patterns
        {
            title: "Bare except:",
            category: "python",
            severity: "High",
            description: "Catching all exceptions hides bugs and makes debugging harder.",
            example: "try:\n    risky_operation()\nexcept:",
            fix: "try:\n    risky_operation()\nexcept ValueError as e:\n    logger.error(f'Failed: {e}')"
        },
        {
            title: "Mutable Default Arguments",
            category: "python",
            severity: "High",
            description: "Lists/dicts as defaults are shared across function calls, causing bugs.",
            example: "def add_item(item, items=[]):\n    items.append(item)\n    return items",
            fix: "def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items"
        },
        {
            title: "from module import *",
            category: "python",
            severity: "Medium",
            description: "Pollutes namespace and makes code hard to trace.",
            example: "from utils import *",
            fix: "from utils import specific_function, SpecificClass"
        }
    ];

    const filteredPatterns = filter === 'all'
        ? patterns
        : patterns.filter(p => p.category === filter);

    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'Critical': return { bg: 'rgba(220, 38, 38, 0.2)', text: '#FCA5A5' };
            case 'High': return { bg: 'rgba(239, 68, 68, 0.2)', text: '#FCA5A5' };
            case 'Medium': return { bg: 'rgba(245, 158, 11, 0.2)', text: '#FCD34D' };
            case 'Low': return { bg: 'rgba(59, 130, 246, 0.2)', text: '#93C5FD' };
            default: return { bg: 'rgba(107, 114, 128, 0.2)', text: '#9CA3AF' };
        }
    };

    return (
        <FadeIn className="container h-full flex flex-col gap-8">
            {/* Header */}
            <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Anti-Pattern Library
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Common coding mistakes that Synapse detects across <strong>50+ rule-based checks</strong>
                </p>

                {/* Filter Tabs */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {[
                        { id: 'all', label: 'All', icon: '🌐' },
                        { id: 'javascript', label: 'JavaScript', icon: '📜' },
                        { id: 'react', label: 'React', icon: '⚛️' },
                        { id: 'python', label: 'Python', icon: '🐍' },
                        { id: 'universal', label: 'Universal', icon: '🔧' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                border: filter === tab.id ? '2px solid var(--accent)' : '1px solid var(--border)',
                                background: filter === tab.id ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                                color: filter === tab.id ? 'var(--accent)' : 'var(--text-muted)',
                                fontWeight: filter === tab.id ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <span>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                {[
                    { label: 'Total Patterns', value: patterns.length, icon: <Code size={20} />, color: '#6366f1' },
                    { label: 'Critical/High', value: patterns.filter(p => ['Critical', 'High'].includes(p.severity)).length, icon: <AlertTriangle size={20} />, color: '#ef4444' },
                    { label: 'Languages', value: '4', icon: <TrendingUp size={20} />, color: '#10b981' }
                ].map((stat, i) => (
                    <div key={i} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ color: stat.color, marginBottom: '0.5rem' }}>{stat.icon}</div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.25rem' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Patterns Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2rem' }}>
                {filteredPatterns.map((pattern, index) => {
                    const severityStyle = getSeverityColor(pattern.severity);
                    return (
                        <ScaleIn key={index} delay={index * 0.05}>
                            <div className="card h-full" style={{ position: 'relative', overflow: 'hidden' }}>
                                {/* Severity Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    background: severityStyle.bg,
                                    color: severityStyle.text,
                                    zIndex: 10
                                }}>
                                    {pattern.severity}
                                </div>

                                <div className="flex justify-between items-start mb-3">
                                    <h3 style={{ margin: 0, color: 'var(--text-main)', paddingRight: '100px' }}>
                                        {pattern.title}
                                    </h3>
                                </div>

                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '12px',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    color: '#818cf8',
                                    marginBottom: '1rem',
                                    textTransform: 'capitalize'
                                }}>
                                    {pattern.category}
                                </div>

                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '48px' }}>
                                    {pattern.description}
                                </p>

                                <div style={{ background: 'var(--bg-card-hover)', padding: '1rem', borderRadius: '8px', marginBottom: '0.75rem' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#ef4444', marginBottom: '0.5rem', fontWeight: 600 }}>
                                        🚫 DON'T
                                    </div>
                                    <pre style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.8rem',
                                        color: 'var(--text-muted)',
                                        margin: 0,
                                        whiteSpace: 'pre-wrap',
                                        lineHeight: '1.5'
                                    }}>
                                        {pattern.example}
                                    </pre>
                                </div>

                                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 600 }}>
                                        ✅ DO
                                    </div>
                                    <pre style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.8rem',
                                        color: '#6ee7b7',
                                        margin: 0,
                                        whiteSpace: 'pre-wrap',
                                        lineHeight: '1.5'
                                    }}>
                                        {pattern.fix}
                                    </pre>
                                </div>
                            </div>
                        </ScaleIn>
                    );
                })}
            </div>

            {filteredPatterns.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                    <p style={{ fontSize: '1.2rem' }}>No patterns found for this filter</p>
                </div>
            )}
        </FadeIn>
    );
};

export default PatternsPage;
