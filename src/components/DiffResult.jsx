import React, { useMemo } from 'react';
import * as Diff from 'diff';
import Prism from 'prismjs';

const DiffResult = ({ original, modified }) => {
    const diff = useMemo(() => {
        return Diff.diffLines(original || '', modified || '');
    }, [original, modified]);

    const processPart = (part) => {
        // Highlight syntax first
        const highlighted = Prism.highlight(part.value, Prism.languages.javascript, 'javascript');
        return highlighted;
    };

    return (
        <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            lineHeight: '1.5',
            background: '#0B0C12',
            borderRadius: '8px',
            overflow: 'hidden'
        }}>
            {diff.map((part, index) => {
                const color = part.added ? 'rgba(16, 185, 129, 0.2)' : part.removed ? 'rgba(239, 68, 68, 0.2)' : 'transparent';
                const textColor = part.added ? '#A7F3D0' : part.removed ? '#FECACA' : '#f8f8f2';
                const prefix = part.added ? '+' : part.removed ? '-' : ' ';

                // Don't show empty parts or just newlines if we can avoid it, but diff usually handles this
                if (!part.value) return null;

                return (
                    <div key={index} style={{
                        backgroundColor: color,
                        color: textColor,
                        display: 'flex',
                        borderLeft: part.added ? '3px solid #10B981' : part.removed ? '3px solid #EF4444' : '3px solid transparent'
                    }}>
                        <span style={{
                            userSelect: 'none',
                            width: '20px',
                            textAlign: 'center',
                            opacity: 0.5,
                            display: 'inline-block'
                        }}>{prefix}</span>
                        <pre style={{ margin: 0, padding: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit', flex: 1 }}
                            dangerouslySetInnerHTML={{ __html: processPart(part) }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default DiffResult;
