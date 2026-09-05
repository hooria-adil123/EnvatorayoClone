import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="mxd-section mxd-hero-section">
      <div className="mxd-hero-00">
        <div className="mxd-hero-00__wrap">
          <div className="mxd-hero-00__top">
            <div className="mxd-hero-00__title-wrap loading-wrap">
              <div className="mxd-hero-00__images">
                <div className="hero-00-image image-01">
                  <img
                    className="mxd-pulse"
                    src="/img/hero/01_hero-img.webp"
                    alt="Hero Heart"
                  />
                </div>
                <div className="hero-00-image image-02">
                  <img
                    className="mxd-move"
                    src="/img/hero/02_hero-img.webp"
                    alt="Hero Helmet"
                  />
                </div>
              </div>

              <div className="mxd-hero-00__marquee loading__item">
                <div className="marquee marquee-right--gsap">
                  <div className="marquee__toright" style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="marquee__item item-regular text" style={{ display: 'inline-flex', alignItems: 'center', margin: 0 }}>
                        <p style={{ margin: 0, color: 'var(--t-opp-bright, #fff)', fontWeight: 600 }}>your work</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h1 className="hero-00-title">
                <span className="hero-00-title__row loading__item">
                  <em className="hero-00-title__item">Make</em>
                  <em className="hero-00-title__item title-item-transparent">your work</em>
                </span>
                <span className="hero-00-title__row loading__item">
                  <em className="hero-00-title__item title-item-image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
                      <path
                        fill="currentColor"
                        d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"
                      />
                    </svg>
                  </em>
                  <em className="hero-00-title__item">stand out</em>
                </span>
              </h1>
            </div>
          </div>

          <div className="mxd-hero-00__bottom">
            <div className="hero-00-manifest loading__fade">
              <p className="mxd-manifest reveal-type anim-uni-in-up">
                Elevate your digital presence with Rayo - dynamic and stylish template
                designed for creative agencies and personal brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
