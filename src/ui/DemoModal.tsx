import React, { useState } from 'react';

interface DemoViewerModalProps {
  url: string | null;
  title: string | null;
  onClose: () => void;
}

export const DemoViewerModal: React.FC<DemoViewerModalProps> = ({ url, title, onClose }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!url) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          background: 'var(--base, #111)',
          borderBottom: '1px solid var(--stroke, #2e2e2e)',
          color: 'var(--base-opp, #fff)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: 600, fontSize: '16px' }}>{title || 'Demo Preview'}</span>
          <span style={{ fontSize: '12px', opacity: 0.6 }}>({url})</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--base-tint, #222)',
            padding: '4px 8px',
            borderRadius: '999px',
          }}
        >
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            style={{
              background: device === 'desktop' ? 'var(--accent, #9F8BE7)' : 'transparent',
              color: device === 'desktop' ? '#000' : 'inherit',
              border: 'none',
              borderRadius: '999px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <i className="ph ph-desktop"></i> Desktop
          </button>

          <button
            type="button"
            onClick={() => setDevice('tablet')}
            style={{
              background: device === 'tablet' ? 'var(--accent, #9F8BE7)' : 'transparent',
              color: device === 'tablet' ? '#000' : 'inherit',
              border: 'none',
              borderRadius: '999px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <i className="ph ph-device-tablet"></i> Tablet
          </button>

          <button
            type="button"
            onClick={() => setDevice('mobile')}
            style={{
              background: device === 'mobile' ? 'var(--accent, #9F8BE7)' : 'transparent',
              color: device === 'mobile' ? '#000' : 'inherit',
              border: 'none',
              borderRadius: '999px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <i className="ph ph-device-mobile"></i> Mobile
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={`/${url}`}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--stroke, #444)',
            }}
          >
            <i className="ph ph-arrow-square-out"></i> Fullscreen
          </a>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: '22px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Close Preview"
          >
            <i className="ph ph-x"></i>
          </button>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          padding: device === 'desktop' ? '0' : '20px',
        }}
      >
        <div
          style={{
            width:
              device === 'desktop' ? '100%' : device === 'tablet' ? '768px' : '390px',
            height: '100%',
            maxHeight: device === 'desktop' ? '100%' : '90vh',
            borderRadius: device === 'desktop' ? '0' : '16px',
            overflow: 'hidden',
            boxShadow:
              device === 'desktop' ? 'none' : '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            background: '#fff',
          }}
        >
          <iframe
            src={`/${url}`}
            title={title || 'Demo Preview'}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};
