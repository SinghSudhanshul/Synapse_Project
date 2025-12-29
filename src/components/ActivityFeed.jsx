import React, { useEffect, useState } from 'react';
import { Code, AlertTriangle } from 'lucide-react';
import axios from 'axios';

const ActivityItem = ({ item }) => {
    let Icon = Code;
    let color = '#10b981';

    if (item.type === 'warning') { Icon = AlertTriangle; color = '#f59e0b'; }

    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'start',
            padding: '0.75rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{
                marginTop: '2px',
                color: color
            }}>
                <Icon size={16} />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 600 }}>{item.user}</span>{' '}
                    <span style={{ color: 'var(--text-muted)' }}>{item.action}</span>{' '}
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.target}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {item.time}
                </div>
            </div>
        </div>
    );
};

const ActivityFeed = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchActivity();
    }, []);

    const fetchActivity = async () => {
        try {
            const response = await axios.get('https://synapse-ns5r.onrender.com/api/history');

            if (response.data && response.data.length > 0) {
                const recentActivities = response.data.slice(0, 5).map(item => ({
                    user: 'You',
                    action: 'refactored',
                    target: item.language ? `${item.language} code` : 'code',
                    time: formatTime(item.timestamp || item.created_at),
                    type: 'success'
                }));
                setActivities(recentActivities);
            }
        } catch (error) {
            console.error('Failed to fetch activity:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (timestamp) => {
        if (!timestamp) return 'recently';

        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);

        if (diffMins < 1) return 'just now';
        if (diffMins < 60) return `${diffMins}m ago`;

        const diffHours = Math.floor(diffMins / 60);
        if (diffHours < 24) return `${diffHours}h ago`;

        const diffDays = Math.floor(diffHours / 24);
        return `${diffDays}d ago`;
    };

    return (
        <div className="card-premium">
            <div style={{
                padding: '1.25rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>Recent Activity</h3>
                {activities.length > 0 && (
                    <span className="live-indicator">
                        <span className="dot"></span> Live
                    </span>
                )}
            </div>

            <div style={{ padding: '0 1.25rem', minHeight: '200px' }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        Loading activity...
                    </div>
                ) : activities.length > 0 ? (
                    activities.map((item, i) => (
                        <ActivityItem key={i} item={item} />
                    ))
                ) : (
                    <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
                        <Code size={40} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem', display: 'block' }} />
                        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>
                            No refactoring activity yet
                        </p>
                        <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 0', fontSize: '0.8rem' }}>
                            Start analyzing code to see your activity here
                        </p>
                    </div>
                )}
            </div>

            {activities.length > 0 && (
                <div style={{
                    padding: '1rem',
                    textAlign: 'center',
                    borderTop: '1px solid var(--border)',
                    marginTop: '0.5rem'
                }}>
                    <button
                        onClick={() => window.location.href = '/history'}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#818cf8',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            fontWeight: 500
                        }}
                    >
                        View Full History
                    </button>
                </div>
            )}
        </div>
    );
};

export default ActivityFeed;
