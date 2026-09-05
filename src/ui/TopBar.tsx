import React from 'react';

export const EnvatoTopBar: React.FC = () => {
  return (
    <div
      id="envato-market-header"
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '54px',
        backgroundColor: '#262626',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 99999,
        borderBottom: '1px solid #1a1a1a',
        boxSizing: 'border-box',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <a
        href="https://themeforest.net/item/rayo-digital-agency-personal-portfolio-html-template/59063886"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
        }}
      >
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <path
            d="M13.2 0.6C12.6 0.2 11.7 0 10.8 0C6.2 0 2.6 3.6 2.6 8.2C2.6 9.2 2.8 10.3 3.1 11.2C2.1 10.3 1.5 9.2 1.2 7.9C1.1 7.5 0.6 7.3 0.3 7.5C-0.1 7.6 -0.1 8.1 0.1 8.5C1 11.9 3.7 14.6 7.2 15.6C8.1 15.8 9.1 15.9 10.1 15.7C14.4 14.9 17.5 11.2 17.5 6.7C17.5 4.1 15.8 2 13.2 0.6Z"
            fill="#82B440"
          />
        </svg>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ color: '#ffffff', fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>
            envato
          </span>
          <span style={{ color: '#aaaaaa', fontSize: '17px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1 }}>
            market
          </span>
        </div>
      </a>

      <a
        href="https://themeforest.net/item/rayo-digital-agency-personal-portfolio-html-template/59063886"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: '#82B440',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
          padding: '8px 18px',
          borderRadius: '4px',
          textDecoration: 'none',
          boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
          transition: 'background-color 0.2s ease',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#75a339'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#82B440'; }}
      >
        Buy now
      </a>
    </div>
  );
};
