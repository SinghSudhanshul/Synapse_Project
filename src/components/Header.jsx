import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onOpenSettings }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'var(--primary)' : 'var(--text-muted)';
  const linkStyle = (path) => ({
    color: isActive(path),
    fontWeight: location.pathname === path ? 600 : 400,
    textShadow: location.pathname === path ? '0 0 10px var(--primary-glow)' : 'none'
  });

  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '1rem 0',
      background: 'rgba(5, 5, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container flex justify-between items-center">
        <div className="logo flex items-center gap-4">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px var(--primary-glow)'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h1 style={{
              fontSize: '1.5rem',
              margin: 0,
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              SYNAPSE
            </h1>
          </Link>
        </div>

        <nav className="flex gap-8">
          <Link to="/" style={linkStyle('/')}>Refactor</Link>
          <Link to="/history" style={linkStyle('/history')}>History</Link>
          <Link to="/patterns" style={linkStyle('/patterns')}>Patterns</Link>
          <button
            onClick={onOpenSettings}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '1rem'
            }}
          >
            Settings
          </button>
        </nav>

        <div className="user-profile flex items-center gap-4">
          <Link to="/docs" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', textDecoration: 'none' }}>
            Docs
          </Link>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--border)',
            border: '2px solid var(--primary)'
          }}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
