import React, { useState, useEffect } from 'react';

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  id: string;
  num: string;
  title: string;
  subItems: { title: string; targetId?: string; isCurrent?: boolean }[];
}

const MENU_DATA: MenuItem[] = [
  {
    id: 'home',
    num: '01',
    title: 'Home',
    subItems: [
      { title: 'Digital Agency', targetId: 'hero' },
      { title: 'Ai Startup', targetId: 'hero' },
      { title: 'Video Production', targetId: 'hero' },
      { title: 'Business Consulting', targetId: 'about' },
      { title: 'Creative Agency', targetId: 'about' },
      { title: 'It Solution', targetId: 'services' },
      { title: 'Personal Portfolio', targetId: 'hero', isCurrent: true },
      { title: 'Web Design Agency', targetId: 'portfolio' },
      { title: 'Plumbing Service', targetId: 'services' },
      { title: 'Medical', targetId: 'services' },
    ],
  },
  {
    id: 'pages',
    num: '02',
    title: 'Pages',
    subItems: [
      { title: 'About Me', targetId: 'about' },
      { title: 'About Creative', targetId: 'about' },
      { title: 'Modern About', targetId: 'about' },
      { title: 'Service Four', targetId: 'services' },
      { title: 'Service Details', targetId: 'services' },
      { title: 'Team', targetId: 'testimonials' },
      { title: 'Team Details', targetId: 'testimonials' },
      { title: 'Faq', targetId: 'process' },
    ],
  },
  {
    id: 'projects',
    num: '03',
    title: 'Projects',
    subItems: [
      { title: 'Two Columns', targetId: 'portfolio' },
      { title: 'Three Columns', targetId: 'portfolio' },
      { title: 'Four Columns Wide', targetId: 'portfolio' },
      { title: 'Masonry', targetId: 'portfolio' },
      { title: 'Portfolio Carousel', targetId: 'portfolio' },
      { title: 'Portfolio coverflow', targetId: 'portfolio' },
      { title: 'Creative Skew', targetId: 'portfolio' },
    ],
  },
  {
    id: 'blog',
    num: '04',
    title: 'Blog',
    subItems: [
      { title: 'Blog Grid', targetId: 'blog' },
      { title: 'Blog Grid Two', targetId: 'blog' },
      { title: 'Blog Standard', targetId: 'blog' },
      { title: 'Blog Details', targetId: 'blog' },
      { title: 'Blog Details Two', targetId: 'blog' },
    ],
  },
  {
    id: 'shop',
    num: '05',
    title: 'Shop',
    subItems: [
      { title: 'Shop', targetId: 'portfolio' },
      { title: 'Shop Details', targetId: 'portfolio' },
      { title: 'Cart', targetId: 'portfolio' },
      { title: 'Checkout', targetId: 'footer' },
    ],
  },
  {
    id: 'contact',
    num: '06',
    title: 'Contact',
    subItems: [
      { title: 'Contact', targetId: 'footer' },
      { title: 'Contact Dark', targetId: 'footer' },
    ],
  },
];

export const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose }) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleNavClick = (targetId?: string) => {
    onClose();
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <div
      className={`custom-offcanvas-drawer ${isOpen ? 'is-open' : ''}`}
      id="custom-offcanvas-drawer"
      aria-hidden={!isOpen}
    >
      <div className="custom-offcanvas-overlay" onClick={onClose} />

      <div className="custom-offcanvas-container">
        <div className="custom-offcanvas-left">
          <div className="custom-offcanvas-header">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="custom-offcanvas-logo"
            >
              <img
                src="/assets/img/logo/logo.png"
                alt="Aleric Logo"
                style={{ height: '36px', width: 'auto' }}
              />
            </a>
            <button
              type="button"
              className="custom-offcanvas-mobile-close d-md-none"
              onClick={onClose}
              aria-label="Close navigation"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="custom-offcanvas-menu-list">
            {MENU_DATA.map((item) => {
              const isExpanded = openMenuId === item.id;

              return (
                <div key={item.id} className={`custom-menu-item ${isExpanded ? 'is-expanded' : ''}`}>
                  <button
                    type="button"
                    className="custom-menu-heading-btn"
                    onClick={() => toggleMenu(item.id)}
                    aria-expanded={isExpanded}
                  >
                    <span className="custom-menu-heading-left">
                      <span className="custom-menu-num">{item.num}</span>
                      <span className="custom-menu-title">{item.title}</span>
                    </span>
                    <span className={`custom-menu-arrow ${isExpanded ? 'is-down' : ''}`}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 3.5L10.5 8L6 12.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`custom-submenu-wrapper ${isExpanded ? 'is-visible' : ''}`}
                    style={{
                      maxHeight: isExpanded ? '600px' : '0px',
                    }}
                  >
                    <ul className="custom-submenu-items">
                      {item.subItems.map((sub, idx) => (
                        <li key={idx}>
                          <a
                            href={sub.targetId ? `#${sub.targetId}` : '#'}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(sub.targetId);
                            }}
                            className="custom-submenu-link"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="custom-offcanvas-right d-none d-md-flex">
          <div className="custom-offcanvas-close-wrap">
            <button
              type="button"
              className="custom-offcanvas-close-btn"
              onClick={onClose}
              aria-label="Close navigation"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 7L21 21M7 21L21 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="custom-offcanvas-info-box">
            <h4 className="custom-info-title">Get In Touch</h4>

            <div className="custom-info-group">
              <span className="custom-info-label">Phone</span>
              <a href="tel:42345678910" className="custom-info-val">
                +4 (234) 567 8910
              </a>
            </div>

            <div className="custom-info-group">
              <span className="custom-info-label">Email</span>
              <a href="mailto:hello@gmail.com" className="custom-info-val">
                hello@gmail.com
              </a>
            </div>

            <div className="custom-info-group">
              <span className="custom-info-label">Address</span>
              <p className="custom-info-address">
                602 Elgin St. Celina,<br />
                Delaware<br />
                1009
              </p>
            </div>

            <div className="custom-info-group">
              <span className="custom-info-label">Follow us</span>
              <div className="custom-info-socials">
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-social-btn"
                  title="Dribbble"
                  aria-label="Dribbble"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <circle cx="9" cy="9" r="8" />
                    <path d="M1 9c4-1 9-2 15-1M3 14c3-3 7-4 12-4M10 1c2 4 3 9 2 16" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-social-btn"
                  title="Twitter / X"
                  aria-label="Twitter"
                >
                  <svg width="14" height="14" viewBox="0 0 14 13" fill="currentColor">
                    <path d="M4.41177 0H0L5.23083 7.06953L0.334618 13H2.59681L6.29998 8.51461L9.58823 12.9588H14L8.6172 5.68381L8.62673 5.69636L13.2614 0.0825854H10.9992L7.55741 4.25145L4.41177 0ZM2.43522 1.2381H3.80866L11.5648 11.7206H10.1913L2.43522 1.2381Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-social-btn"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
