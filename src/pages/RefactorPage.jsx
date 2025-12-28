import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor';
import RefactorResult from '../components/RefactorResult';
import { FadeIn } from '../components/Animations';

const RefactorPage = ({ preferences }) => {
    const [inputCode, setInputCode] = useState(`// Paste code here to refactor...
function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  console.log(total);
  return total;
}`);

    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleRefactor = async () => {
        setIsAnalyzing(true);
        setResult(null);

        try {
            // Call Backend
            const response = await axios.post('http://localhost:5000/api/analyze', {
                code: inputCode,
                preferences
            });
            setResult(response.data);
        } catch (error) {
            console.error("Analysis Failed:", error);
            setResult({
                explanation: "Failed to connect to Synapse Core.",
                smell_detected: "Network Error",
                refactored_code: inputCode
            });
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <FadeIn className="flex flex-col h-full gap-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Refactoring Workspace</h2>
                    <p className="text-muted">
                        AI-driven code analysis.
                        {preferences.useTypescript && <span style={{ marginLeft: '1rem', fontSize: '0.8rem', background: '#3178c6', padding: '2px 8px', borderRadius: '4px', color: 'white' }}>TypeScript Mode</span>}
                    </p>
                </div>
                <button
                    className="btn"
                    onClick={handleRefactor}
                    style={{
                        fontSize: '1.1rem',
                        padding: '0.8rem 2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        opacity: isAnalyzing ? 0.7 : 1
                    }}
                    disabled={isAnalyzing}
                >
                    {isAnalyzing ? (
                        <>
                            <span className="spinner">⚡</span> Analyzing...
                        </>
                    ) : (
                        <>
                            <span>✨</span> Optimize Code
                        </>
                    )}
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1, minHeight: 0 }}>
                <div className="h-full">
                    <CodeEditor code={inputCode} onChange={setInputCode} label="Original Source" />
                </div>
                <div className="h-full">
                    <RefactorResult
                        data={result}
                        onApply={(newCode) => {
                            setInputCode(newCode);
                            setResult(null);
                        }}
                    />
                </div>
            </div>
        </FadeIn>
    );
};

export default RefactorPage;
