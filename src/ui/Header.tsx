import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onScrollToDemo?: () => void;
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen = false, onToggleMenu }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('template.theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('color-scheme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('template.theme', nextTheme);
    document.documentElement.setAttribute('color-scheme', nextTheme);
  };

  return (
    <header id="header" className="mxd-header">
      <div className="mxd-header__logo loading__fade">
        <a href="#0" className="mxd-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <svg
            className="mxd-logo__image"
            viewBox="0 0 56 56"
            width="56"
            height="56"
            style={{ display: 'block', overflow: 'visible' }}
          >
            <path
              d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
              style={{ fill: 'var(--base-opp, #111)' }}
            />
            <path
              style={{ fill: 'var(--base, #fff)' }}
              d="M33.6,34.5h0.9c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3L20.5,37.3z M39.2,21.5v0.9c0,0.5-0.4,0.9,0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28L28,26.1z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1L14,26.1z M11.2,34.5v1.9c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V42c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V56c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9h3.7c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-3.7c-0.5,0-0.9-0.4-0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9L11.2,34.5L11.2,34.5z M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1L42,26.1z M49.5,39.2v-0.9c0-0.5-0.4-0.9-0.9-0.9h-2.8c-0.5,0-0.9-0.4-0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v3.7c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9,0.4,0.9,0.9v6.5c0,0.5-0.4,0.9-0.9,0.9h-3.7c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h3.7c0.5,0,0.9,0.4,0.9,0.9V56c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-9.3c0-0.5,0.4-0.9,0.9-0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C49,40.1,49.5,39.7,49.5,39.2L49.5,39.2z"
            />
          </svg>
          <span className="mxd-logo__text">
            rayo<br />template
          </span>
        </a>
      </div>

      <div className="mxd-header__controls loading__fade" style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
        <button
          id="color-switcher"
          className="mxd-color-switcher"
          type="button"
          role="switch"
          aria-label="light/dark mode"
          aria-checked={theme === 'dark'}
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <i className="ph-bold ph-moon-stars"></i>
          ) : (
            <i className="ph-bold ph-sun-horizon"></i>
          )}
        </button>

        <a
          className="btn btn-outline btn-anim"
          href="https://1.envato.market/rayo-html"
          target="_blank"
          rel="noreferrer"
          style={{
            height: '5.6rem',
            padding: '0 2.4rem',
            borderRadius: '9999px',
            border: '1px solid var(--st-bright, #222)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            fontSize: '1.6rem',
            fontWeight: 500,
            textDecoration: 'none',
            color: 'var(--t-bright)',
            backgroundColor: 'transparent',
          }}
        >
          <span className="btn-caption" style={{ height: 'auto', lineHeight: 'normal' }}>Purchase</span>
          <i className="ph ph-shopping-cart-simple" style={{ fontSize: '2rem' }}></i>
        </a>

        <a
          href="#0"
          className={`mxd-nav__hamburger ${isMenuOpen ? 'nav-open' : ''}`}
          aria-label="Menu"
          onClick={(e) => {
            e.preventDefault();
            onToggleMenu?.();
          }}
        >
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__base"></div>
        </a>
      </div>
    </header>
  );
};
