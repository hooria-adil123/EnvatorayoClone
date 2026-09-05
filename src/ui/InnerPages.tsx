import React, { useState, useEffect, useCallback } from 'react';

interface InnerPagesSliderProps {
  onOpenDemo?: (url: string, title: string) => void;
}

interface InnerSlide {
  title: string;
  url: string;
  imgSrc: string;
}

const innerPages: InnerSlide[] = [
  { title: 'Contact', url: 'contact.html', imgSrc: '/img/demo/inner/07_contact.webp' },
  { title: 'Services', url: 'services.html', imgSrc: '/img/demo/inner/03_services.webp' },
  { title: 'Our Team', url: 'team.html', imgSrc: '/img/demo/inner/04_team.webp' },
  { title: 'Pricing Plans', url: 'pricing.html', imgSrc: '/img/demo/inner/05_pricing.webp' },
  { title: 'About Me', url: 'about.html', imgSrc: '/img/demo/inner/01_about-me.webp' },
  { title: 'About Us', url: 'company.html', imgSrc: '/img/demo/inner/02_about-us.webp' },
  { title: 'FAQ Page', url: 'faq.html', imgSrc: '/img/demo/inner/06_faq.webp' },
  { title: '404 Error', url: 'not-found.html', imgSrc: '/img/demo/inner/08_404.webp' },
];

export const InnerPagesSlider: React.FC<InnerPagesSliderProps> = ({ onOpenDemo }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? innerPages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === innerPages.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const activePage = innerPages[activeIndex];

  return (
    <>
      <div className="mxd-section padding-mtext-pre-grid">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="marquee marquee-left--gsap muted-extra">
              <div className="marquee__toleft" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="marquee__item one-line item-regular text">
                    <p className="marquee__text">Inner Pages</p>
                    <div className="marquee__image">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4z"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mxd-section padding-pre-grid" style={{ overflow: 'hidden', paddingBottom: '6rem' }}>
        <div className="mxd-container fullwidth-container" style={{ maxWidth: '100%', padding: 0 }}>
          <div className="mxd-block">
            <div
              className="mxd-demo-swiper"
              style={{
                width: '100%',
                overflow: 'visible',
                position: 'relative',
                padding: '20px 0 10px',
              }}
            >
              <div
                className="mxd-demo-swiper-track"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  transform: `translateX(calc((50% - (var(--slide-w) / 2)) - (${activeIndex} * (var(--slide-w) + var(--slide-gap)))))`,
                  transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
                  willChange: 'transform',
                }}
              >
                {innerPages.map((page, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={page.title}
                      className={`swiper-slide mxd-demo-swiper__slide ${isActive ? 'swiper-slide-active' : ''}`}
                      onClick={() => {
                        if (!isActive) {
                          setActiveIndex(index);
                        }
                      }}
                      style={{
                        flex: '0 0 var(--slide-w)',
                        width: 'var(--slide-w)',
                        marginRight: 'var(--slide-gap)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: isActive ? 'default' : 'pointer',
                        transform: isActive ? 'scale(1)' : 'scale(0.93)',
                        opacity: isActive ? 1 : 0.45,
                        filter: isActive ? 'none' : 'blur(4px)',
                        transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease, filter 0.55s ease',
                      }}
                    >
                      <a
                        className="demo-swiper-slide__image"
                        href={page.url}
                        onClick={(e) => {
                          if (isActive && onOpenDemo) {
                            e.preventDefault();
                            onOpenDemo(page.url, page.title);
                          } else if (!isActive) {
                            e.preventDefault();
                            setActiveIndex(index);
                          }
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          borderRadius: '24px',
                          padding: '12px',
                          backgroundColor: 'var(--base-tint, #f5f5f7)',
                          border: isActive
                            ? '1px solid var(--st-muted, rgba(0,0,0,0.12))'
                            : '1px solid var(--st-muted, rgba(0,0,0,0.06))',
                          boxShadow: isActive
                            ? '0 16px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)'
                            : '0 4px 16px rgba(0,0,0,0.03)',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                        }}
                      >
                        <img
                          src={page.imgSrc}
                          alt={page.title}
                          style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: '16px',
                            imageRendering: 'auto',
                            filter: 'none',
                            opacity: 1,
                          }}
                          loading="eager"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '3.6rem',
                gap: '2.8rem',
              }}
            >
              <button
                type="button"
                className="btn btn-round"
                onClick={handlePrev}
                aria-label="Previous Slide"
                style={{
                  width: '4.8rem',
                  height: '4.8rem',
                  minWidth: '4.8rem',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--st-muted, rgba(0,0,0,0.15))',
                  backgroundColor: 'transparent',
                  color: 'var(--t-bright, #111)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent, #6e54ff)';
                  e.currentTarget.style.color = 'var(--accent, #6e54ff)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--st-muted, rgba(0,0,0,0.15))';
                  e.currentTarget.style.color = 'var(--t-bright, #111)';
                }}
              >
                <i className="ph ph-arrow-left" style={{ fontSize: '2rem' }}></i>
              </button>

              <div
                className="demo-swiper-slide__descr"
                style={{
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '220px',
                  textAlign: 'center',
                }}
              >
                <a
                  href={activePage.url}
                  onClick={(e) => {
                    if (onOpenDemo) {
                      e.preventDefault();
                      onOpenDemo(activePage.url, activePage.title);
                    }
                  }}
                  style={{
                    fontFamily: 'var(--_font-accent, "Syne", sans-serif)',
                    fontSize: '3.2rem',
                    fontWeight: 600,
                    color: 'var(--t-bright, #111111)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent, #6e54ff)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--t-bright, #111111)';
                  }}
                >
                  <span>{activePage.title}</span>
                </a>
              </div>

              <button
                type="button"
                className="btn btn-round"
                onClick={handleNext}
                aria-label="Next Slide"
                style={{
                  width: '4.8rem',
                  height: '4.8rem',
                  minWidth: '4.8rem',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--st-muted, rgba(0,0,0,0.15))',
                  backgroundColor: 'transparent',
                  color: 'var(--t-bright, #111)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent, #6e54ff)';
                  e.currentTarget.style.color = 'var(--accent, #6e54ff)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--st-muted, rgba(0,0,0,0.15))';
                  e.currentTarget.style.color = 'var(--t-bright, #111)';
                }}
              >
                <i className="ph ph-arrow-right" style={{ fontSize: '2rem' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

