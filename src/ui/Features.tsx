import React from 'react';

interface FeaturesCardsProps {
  onOpenDemo?: (url: string, title: string) => void;
}

export const FeaturesCards: React.FC<FeaturesCardsProps> = ({ onOpenDemo }) => {
  return (
    <>
      <div className="mxd-section">
        <div className="mxd-container">
          <div className="mxd-block">
            <div className="mxd-demo-cards">
              <div className="mxd-demo-cards__item card-item-left animate-card-2">
                <div className="mxd-demo-cards__content">
                  <div className="mxd-demo-cards__descr">
                    <h2 className="mxd-demo-cards__title h2-small">
                      <a
                        href="blog.html"
                        onClick={(e) => {
                          if (onOpenDemo) {
                            e.preventDefault();
                            onOpenDemo('blog.html', 'Blog Pages');
                          }
                        }}
                      >
                        Blog Pages
                      </a>
                    </h2>
                    <div className="mxd-demo-cards__tags">
                      <span className="tag tag-default tag-outline">Ideas</span>
                      <span className="tag tag-default tag-outline">Thoughts</span>
                      <span className="tag tag-default tag-outline">Inspiration</span>
                    </div>
                    <p>
                      A blog that looks good, reads better, and brings your stories to life
                      beautifully.
                    </p>
                  </div>
                </div>
                <div className="mxd-demo-cards__image card-image-fullwidth">
                  <img src="/img/demo/02_card-img.webp" alt="Blog Card" />
                </div>
              </div>

              <div className="mxd-demo-cards__item card-item-right animate-card-2">
                <div className="mxd-demo-card__gradient">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
                    <radialGradient
                      id="purple-radial-gr"
                      cx="600"
                      cy="600"
                      r="600"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" style={{ stopColor: '#9F8BE7', stopOpacity: 0.6 }} />
                      <stop offset="1" style={{ stopColor: '#9F8BE7', stopOpacity: 0 }} />
                    </radialGradient>
                    <circle cx="600" cy="600" r="600" fill="url(#purple-radial-gr)" />
                  </svg>
                </div>
                <div className="mxd-demo-cards__image card-image-padding">
                  <img src="/img/demo/01_card-img.webp" alt="Portfolio Card" />
                </div>
                <div className="mxd-demo-cards__content">
                  <div className="mxd-demo-cards__descr">
                    <h2 className="mxd-demo-cards__title h2-small">
                      <a
                        href="works.html"
                        onClick={(e) => {
                          if (onOpenDemo) {
                            e.preventDefault();
                            onOpenDemo('works.html', 'Portfolio');
                          }
                        }}
                      >
                        Portfolio
                      </a>
                    </h2>
                    <div className="mxd-demo-cards__tags">
                      <span className="tag tag-default tag-outline">Showcase</span>
                      <span className="tag tag-default tag-outline">Visions</span>
                      <span className="tag tag-default tag-outline">Designs</span>
                    </div>
                    <p>
                      Bring your work to life with stunning layouts. Clear, stylish pages built to
                      impress and inspire.
                    </p>
                  </div>
                  <div className="mxd-demo-cards__icons">
                    <div className="demo-icons__item">
                      <div className="demo-icons__icon">
                        <svg viewBox="0 0 56 56">
                          <path d="M54.8,28c0,10.6-2.8,26.8-26.8,26.8S1.2,38.6,1.2,28,4,1.2,28,1.2s26.8,16.2,26.8,26.8Z" />
                        </svg>
                        <i className="ph ph-cards-three"></i>
                      </div>
                      <p className="demo-icons__caption">Stack cards</p>
                    </div>
                    <div className="demo-icons__item">
                      <div className="demo-icons__icon">
                        <svg viewBox="0 0 56 56">
                          <path d="M54.8,28c0,10.6-2.8,26.8-26.8,26.8S1.2,38.6,1.2,28,4,1.2,28,1.2s26.8,16.2,26.8,26.8Z" />
                        </svg>
                        <i className="ph ph-squares-four"></i>
                      </div>
                      <p className="demo-icons__caption">Grids</p>
                    </div>
                    <div className="demo-icons__item">
                      <div className="demo-icons__icon">
                        <svg viewBox="0 0 56 56">
                          <path d="M54.8,28c0,10.6-2.8,26.8-26.8,26.8S1.2,38.6,1.2,28,4,1.2,28,1.2s26.8,16.2,26.8,26.8Z" />
                        </svg>
                        <i className="ph ph-list-star"></i>
                      </div>
                      <p className="demo-icons__caption">Archive list</p>
                    </div>
                    <div className="demo-icons__item">
                      <div className="demo-icons__icon">
                        <svg viewBox="0 0 56 56">
                          <path d="M54.8,28c0,10.6-2.8,26.8-26.8,26.8S1.2,38.6,1.2,28,4,1.2,28,1.2s26.8,16.2,26.8,26.8Z" />
                        </svg>
                        <i className="ph ph-chat-circle-dots"></i>
                      </div>
                      <p className="demo-icons__caption">Testimonials</p>
                    </div>
                    <div className="demo-icons__item">
                      <div className="demo-icons__icon">
                        <svg viewBox="0 0 56 56">
                          <path d="M54.8,28c0,10.6-2.8,26.8-26.8,26.8S1.2,38.6,1.2,28,4,1.2,28,1.2s26.8,16.2,26.8,26.8Z" />
                        </svg>
                        <i className="ph ph-cherries"></i>
                      </div>
                      <p className="demo-icons__caption">Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mxd-section">
        <div className="mxd-container no-padding-container">
          <div className="mxd-block">
            <div className="mxd-features-promo">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-5 mxd-features-promo__item">
                    <div className="mxd-container grid-container no-padding-right">
                      <div className="mxd-block mxd-grid-item no-margin">
                        <div className="mxd-features-promo__content">
                          <h2 className="mxd-pinned__title centered-mobile h2-small anim-uni-in-up reveal-type">
                            Top-notch features, built for you
                          </h2>
                          <div className="mxd-pinned__tags centered-mobile anim-uni-in-up">
                            <span className="tag tag-default tag-outline">Animations</span>
                            <span className="tag tag-default tag-outline">Plugins</span>
                            <span className="tag tag-default tag-outline">Services</span>
                          </div>
                          <p className="anim-uni-in-up centered-mobile">
                            Rayo template packed with smooth animations, modern design tools and
                            clean code. It's a flexible, future-proof template that's easy to
                            customize and a joy to use.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 mxd-features-promo__item">
                    <div className="mxd-features-promo__image anim-uni-in-up">
                      <img src="/img/demo/01_fea-img.webp" alt="Top-notch features" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mxd-section overflow-hidden">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-features-cards">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-8 mxd-features-cards__item features-item-01 mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-features-cards__inner justify-between bg-base-tint radius-l padding-4">
                      <div className="mxd-features-cards__gradient features-gradient-01">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
                          <radialGradient
                            id="purple-radial-grad-2"
                            cx="600"
                            cy="600"
                            r="600"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" style={{ stopColor: '#9F8BE7', stopOpacity: 0.6 }} />
                            <stop offset="1" style={{ stopColor: '#9F8BE7', stopOpacity: 0 }} />
                          </radialGradient>
                          <circle cx="600" cy="600" r="600" fill="url(#purple-radial-grad-2)" />
                        </svg>
                      </div>
                      <div className="mxd-features-cards__image features-image-01">
                        <img src="/img/demo/02_fea-img.webp" alt="Dynamic Design" />
                      </div>
                      <div className="mxd-features-cards__title">
                        <h3 className="anim-uni-in-up">Dynamic & stylish design</h3>
                      </div>
                      <div className="mxd-features-cards__info">
                        <div className="mxd-features-cards__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">Design</span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">Layouts</span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">Visuals</span>
                        </div>
                        <p className="anim-uni-in-up">
                          Modern, eye-catching layouts crafted to make your brand stand out and keep
                          visitors engaged.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 mxd-features-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-features-cards__inner justify-end bg-accent radius-l padding-4">
                      <div className="mxd-features-cards__image features-image-02">
                        <img src="/img/demo/03_fea-img.webp" alt="Dark light mode" />
                      </div>
                      <div className="mxd-features-cards__title">
                        <h3 className="opposite anim-uni-in-up">
                          Dark / light<br />mode
                        </h3>
                      </div>
                      <div className="mxd-features-cards__info">
                        <div className="mxd-features-cards__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Theme Choice
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Interactive
                          </span>
                        </div>
                        <p className="t-opposite anim-uni-in-up">
                          Switch effortlessly between light and dark modes for a user-friendly
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 mxd-features-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-features-cards__inner bg-additional radius-l padding-4">
                      <div className="mxd-features-cards__title">
                        <h3 className="anim-uni-in-up">Easy to customize</h3>
                      </div>
                      <div className="mxd-features-cards__info">
                        <div className="mxd-features-cards__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">Flexible</span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">Fast</span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">
                            User-friendly
                          </span>
                        </div>
                        <p className="t-bright anim-uni-in-up">
                          Adapt every detail to fit your vision — no fuss, just simple, clear
                          editing.
                        </p>
                      </div>
                      <div className="mxd-features-cards__image features-image-03">
                        <img src="/img/demo/04_fea-img.webp" alt="Easy to customize" />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 mxd-features-cards__item mxd-grid-item anim-uni-scale-in">
                    <div className="mxd-features-cards__inner bg-base-opp radius-l padding-4">
                      <div className="mxd-features-cards__title">
                        <h3 className="opposite anim-uni-in-up">GSAP-powered animations</h3>
                      </div>
                      <div className="mxd-features-cards__info">
                        <div className="mxd-features-cards__tags">
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Motion
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Smooth
                          </span>
                          <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            Interactive
                          </span>
                        </div>
                        <p className="t-opposite anim-uni-in-up">
                          Silky-smooth transitions and effects that bring pages to life.
                        </p>
                      </div>
                      <div className="mxd-features-cards__image features-image-04">
                        <img src="/img/demo/05_fea-img.webp" alt="GSAP Animations" />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 mxd-features-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-features-cards__inner bg-base-tint radius-l padding-4">
                      <div className="mxd-features-cards__title">
                        <h3 className="anim-uni-in-up">Code excellence</h3>
                      </div>
                      <div className="mxd-features-cards__info">
                        <div className="mxd-features-cards__tags">
                          <span className="tag tag-default tag-outline anim-uni-in-up">Clean Code</span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">Modern</span>
                          <span className="tag tag-default tag-outline anim-uni-in-up">Optimized</span>
                        </div>
                        <p className="anim-uni-in-up">
                          Built with clean, organized code for fast load times and reliable
                          performance.
                        </p>
                      </div>
                      <div className="mxd-features-cards__image features-image-05">
                        <img src="/img/demo/06_fea-img.webp" alt="Code Excellence" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
