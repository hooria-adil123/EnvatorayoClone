import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onOpenDemoModal?: (url: string, title: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  hasSubmenu: boolean;
  isAccentStar?: boolean;
  url?: string;
  subitems?: { label: string; url: string; title: string }[];
}

const menuData: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    hasSubmenu: true,
    subitems: [
      { label: 'Main home', url: 'home.html', title: 'Main Home Demo' },
      { label: 'Software development company', url: 'software.html', title: 'Software Development Company' },
      { label: 'Freelancer portfolio', url: 'freelancer.html', title: 'Freelancer Portfolio' },
      { label: 'Digital agency', url: 'agency.html', title: 'Digital Agency' },
      { label: 'Creative design studio', url: 'studio.html', title: 'Creative Design Studio' },
      { label: 'Personal portfolio', url: 'portfolio.html', title: 'Personal Portfolio' },
      { label: 'Web agency', url: 'web-agency.html', title: 'Web Agency' },
      { label: 'Creative developer', url: 'developer.html', title: 'Creative Developer' },
      { label: 'Designer', url: 'designer.html', title: 'Designer' },
    ],
  },
  {
    id: 'works',
    label: 'Works',
    hasSubmenu: true,
    subitems: [
      { label: 'Portfolio', url: 'works.html', title: 'Portfolio' },
      { label: 'Works masonry', url: 'masonry.html', title: 'Works Masonry' },
      { label: 'Project details', url: 'project.html', title: 'Project Details' },
    ],
  },
  {
    id: 'pages',
    label: 'Pages',
    hasSubmenu: true,
    isAccentStar: true,
    subitems: [
      { label: 'About me', url: 'about.html', title: 'About Me' },
      { label: 'About us', url: 'company.html', title: 'About Us' },
      { label: 'Services', url: 'services.html', title: 'Services' },
      { label: 'Our team', url: 'team.html', title: 'Our Team' },
      { label: 'Pricing', url: 'pricing.html', title: 'Pricing Plans' },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    hasSubmenu: true,
    subitems: [
      { label: 'Blog standard', url: 'blog.html', title: 'Blog Standard' },
      { label: 'Blog creative', url: 'creative-blog.html', title: 'Blog Creative' },
      { label: 'Single post', url: 'article.html', title: 'Blog Article' },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    hasSubmenu: false,
    url: 'contact.html',
  },
];

export const Navigation: React.FC<NavigationProps> = ({
  onOpenDemoModal,
  isOpen = false,
  onClose,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveSubmenu(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSubmenu = (menuId: string) => {
    setActiveSubmenu((prev) => (prev === menuId ? null : menuId));
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, url?: string, title?: string) => {
    if (!url) return;
    if (url.startsWith('#')) {
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      onClose?.();
      return;
    }

    if (onOpenDemoModal && url.endsWith('.html')) {
      e.preventDefault();
      onOpenDemoModal(url, title || 'Rayo Template Demo');
      onClose?.();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="mxd-fullscreen-menu"
      className="mxd-menu-fullscreen"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#171717',
        color: '#ffffff',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3rem 4rem 3rem 5rem',
        overflowY: 'auto',
        boxSizing: 'border-box',
        animation: 'fadeInMenu 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          marginBottom: '2rem',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>🦄</span>
          <div
            style={{
              fontFamily: 'var(--_font-default, "Plus Jakarta Sans", sans-serif)',
              fontSize: '1.45rem',
              lineHeight: 1.35,
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 400,
            }}
          >
            Innovative design
            <br />
            and cutting-edge development
          </div>
        </div>


        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontSize: '3.2rem',
            cursor: 'pointer',
            padding: '0.4rem 0.8rem',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            opacity: 0.85,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.85';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>


      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1.2fr) minmax(320px, 1fr)',
          gap: '4rem',
          alignItems: 'center',
          flex: 1,
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '1rem 0',
        }}
        className="mxd-menu-grid"
      >

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '580px' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {menuData.map((item) => {
              const isOpenItem = activeSubmenu === item.id;

              return (
                <li key={item.id} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  {item.hasSubmenu ? (
                    <div
                      onClick={() => toggleSubmenu(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        userSelect: 'none',
                        padding: '0.4rem 0',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--_font-accent, "Syne", sans-serif)',
                          fontSize: 'clamp(3.6rem, 4.5vw, 5.8rem)',
                          fontWeight: 600,
                          color: '#ffffff',
                          lineHeight: 1.15,
                          letterSpacing: '-0.02em',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#e2e2e2')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                      >
                        {item.label}
                      </span>

                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '2.8rem',
                          height: '2.8rem',
                          color: item.isAccentStar ? '#d4ff32' : '#ffffff',
                          transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), color 0.2s ease',
                          transform: isOpenItem ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          style={{ display: 'block' }}
                        >
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                        </svg>
                      </span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.4rem 0' }}>
                      <a
                        href={item.url || 'contact.html'}
                        onClick={(e) => handleItemClick(e, item.url, item.label)}
                        style={{
                          fontFamily: 'var(--_font-accent, "Syne", sans-serif)',
                          fontSize: 'clamp(3.6rem, 4.5vw, 5.8rem)',
                          fontWeight: 600,
                          color: '#ffffff',
                          lineHeight: 1.15,
                          letterSpacing: '-0.02em',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#e2e2e2')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                      >
                        {item.label}
                      </a>
                    </div>
                  )}


                  {item.hasSubmenu && isOpenItem && item.subitems && (
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: '1rem 0 1.6rem',
                        padding: '0 0 0 2.2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.85rem',
                        animation: 'slideDownSubmenu 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                      }}
                    >
                      {item.subitems.map((sub) => (
                        <li key={sub.label} style={{ margin: 0, padding: 0 }}>
                          <a
                            href={sub.url}
                            onClick={(e) => handleItemClick(e, sub.url, sub.title)}
                            style={{
                              fontFamily: 'var(--_font-accent, "Syne", sans-serif)',
                              fontSize: 'clamp(1.9rem, 2.2vw, 2.6rem)',
                              fontWeight: 400,
                              color: 'rgba(255, 255, 255, 0.88)',
                              textDecoration: 'none',
                              display: 'inline-block',
                              cursor: 'pointer',
                              transition: 'transform 0.2s ease, color 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#ffffff';
                              e.currentTarget.style.transform = 'translateX(8px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>


        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            width: '100%',
          }}
          className="mxd-menu-right-panel"
        >

          <div
            style={{
              textAlign: 'right',
              marginBottom: '2.4rem',
              maxWidth: '380px',
              fontFamily: 'var(--_font-default, "Plus Jakarta Sans", sans-serif)',
              fontSize: '1.45rem',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.75)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.6rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              <span>👋</span>
              <span style={{ fontWeight: 500 }}>New Rayo template is here!</span>
            </div>
            <div>Showcase your projects, services and expertise with impact.</div>
          </div>


          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: '#c8c8c8',
              borderRadius: '2.4rem',
              padding: '1.4rem',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/540x310_video-01.webp"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '1.8rem',
                objectFit: 'cover',
              }}
            >
              <source src="/videos/540x310_video-01.mp4" type="video/mp4" />
              <source src="/videos/540x310_video-01.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>


      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontFamily: 'var(--_font-default, "Plus Jakarta Sans", sans-serif)',
          fontSize: '1.35rem',
          color: 'rgba(255, 255, 255, 0.6)',
          zIndex: 10,
        }}
      >
        <div>
          Made with 💚 by{' '}
          <a
            href="https://1.envato.market/EKA9WD"
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
          >
            Mix_Design
          </a>
        </div>
        <div>© 2026</div>
      </div>
    </div>
  );
};
