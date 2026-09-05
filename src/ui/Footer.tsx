import React from 'react';

interface FooterProps {
  onOpenDemo?: (url: string, title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, title: string) => {
    if (href.startsWith('#')) return;
    if (onOpenDemo && href.endsWith('.html')) {
      e.preventDefault();
      onOpenDemo(href, title);
    }
  };

  return (
    <footer className="mxd-demo-footer">
      <div className="mxd-demo-footer__bg">
        <img src="/img/demo/01-footer.webp" alt="Rayo Footer Background" />
      </div>

      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                <div className="mxd-demo-footer__logo anim-uni-in-up">
                  <a
                    href="#0"
                    className="mxd-logo"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
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
                <div className="mxd-demo-footer__slogan anim-uni-in-up">
                  <p className="t-small t-bright">
                    👋 New Rayo template is here! Showcase your projects, services and expertise
                    with impact.
                  </p>
                </div>
                <div className="mxd-demo-footer__btn anim-uni-in-up">
                  <a
                    className="btn btn-anim btn-default btn-small btn-accent slide-right"
                    href="https://1.envato.market/kOvmWN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="btn-caption">Buy Now</span>
                    <i className="ph ph-shopping-cart-simple"></i>
                  </a>
                  <a
                    className="btn btn-anim btn-default btn-small btn-outline slide-right-up"
                    href="#demo"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById('demo');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="btn-caption">Demo</span>
                    <i className="ph ph-arrow-up-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-12 col-xl-6 mxd-demo-footer__item">
                <nav className="mxd-demo-footer__nav">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-md-4 mxd-grid-item mxd-footer-nav__item">
                        <div className="mxd-footer-nav__block">
                          <div className="mxd-footer-nav__title anim-uni-in-up">
                            <p className="t-140 t-bright t-caption">Start pages</p>
                          </div>
                          <div className="mxd-footer-nav__list">
                            <ul>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="home.html"
                                  onClick={(e) => handleLinkClick(e, 'home.html', 'Main Home')}
                                >
                                  Main home
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="software.html"
                                  onClick={(e) =>
                                    handleLinkClick(
                                      e,
                                      'software.html',
                                      'Software Development'
                                    )
                                  }
                                >
                                  Software development company
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="freelancer.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'freelancer.html', 'Freelancer Portfolio')
                                  }
                                >
                                  Freelancer portfolio
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="agency.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'agency.html', 'Digital Agency')
                                  }
                                >
                                  Digital agency
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="studio.html"
                                  onClick={(e) =>
                                    handleLinkClick(
                                      e,
                                      'studio.html',
                                      'Creative Design Studio'
                                    )
                                  }
                                >
                                  Creative design studio
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="portfolio.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'portfolio.html', 'Personal Portfolio')
                                  }
                                >
                                  Personal portfolio
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="web-agency.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'web-agency.html', 'Web Agency')
                                  }
                                >
                                  Web agency
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="developer.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'developer.html', 'Creative Developer')
                                  }
                                >
                                  Creative developer
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="designer.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'designer.html', 'Designer')
                                  }
                                >
                                  Designer
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-4 mxd-grid-item mxd-footer-nav__item">
                        <div className="mxd-footer-nav__block">
                          <div className="mxd-footer-nav__title anim-uni-in-up">
                            <p className="t-140 t-bright t-caption">Portfolio</p>
                          </div>
                          <div className="mxd-footer-nav__list">
                            <ul>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="works.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'works.html', 'Works Simple')
                                  }
                                >
                                  Works simple
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="masonry.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'masonry.html', 'Works Masonry')
                                  }
                                >
                                  Works masonry
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="project.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'project.html', 'Project Details')
                                  }
                                >
                                  Project details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mxd-footer-nav__block">
                          <div className="mxd-footer-nav__title anim-uni-in-up">
                            <p className="t-140 t-bright t-caption">Insights pages</p>
                          </div>
                          <div className="mxd-footer-nav__list">
                            <ul>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="blog.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'blog.html', 'Blog Standard')
                                  }
                                >
                                  Blog standard
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="creative-blog.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'creative-blog.html', 'Blog Creative')
                                  }
                                >
                                  Blog creative
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="article.html"
                                  onClick={(e) =>
                                    handleLinkClick(e, 'article.html', 'Blog Article')
                                  }
                                >
                                  Single post
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-4 mxd-grid-item mxd-footer-nav__item">
                        <div className="mxd-footer-nav__block">
                          <div className="mxd-footer-nav__title anim-uni-in-up">
                            <p className="t-140 t-bright t-caption">Inner pages</p>
                          </div>
                          <div className="mxd-footer-nav__list">
                            <ul>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="about.html"
                                  onClick={(e) => handleLinkClick(e, 'about.html', 'About Me')}
                                >
                                  About me
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="company.html"
                                  onClick={(e) => handleLinkClick(e, 'company.html', 'About Us')}
                                >
                                  About us
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="services.html"
                                  onClick={(e) => handleLinkClick(e, 'services.html', 'Services')}
                                >
                                  Services
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="team.html"
                                  onClick={(e) => handleLinkClick(e, 'team.html', 'Our Team')}
                                >
                                  Our team
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="pricing.html"
                                  onClick={(e) => handleLinkClick(e, 'pricing.html', 'Pricing')}
                                >
                                  Pricing plans
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="faq.html"
                                  onClick={(e) => handleLinkClick(e, 'faq.html', 'FAQ')}
                                >
                                  Frequently asked questions
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="not-found.html"
                                  onClick={(e) => handleLinkClick(e, 'not-found.html', '404 Page')}
                                >
                                  404 error page
                                </a>
                              </li>
                              <li>
                                <a
                                  className="anim-uni-in-up"
                                  href="contact.html"
                                  onClick={(e) => handleLinkClick(e, 'contact.html', 'Contact')}
                                >
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                <div className="mxd-demo-footer__promo">
                  <div className="mxd-footer-promo__title anim-uni-in-up">
                    <p className="t-140 t-bright t-caption">More by Mix Design:</p>
                  </div>
                  <div className="mxd-footer-promo__list">
                    <a
                      className="mxd-footer-promo__item"
                      href="https://1.envato.market/rQ5AQD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        src="/img/demo/icon-blayden.webp"
                        alt="Blayden HTML Template Logo"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Blayden - Personal Portfolio & Resume HTML Template
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="https://1.envato.market/9gBzn0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        src="/img/demo/icon-ignite.webp"
                        alt="Ignite HTML Template Logo"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Ignite - Portfolio and Landing Page Template
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="https://1.envato.market/anoYGQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        src="/img/demo/icon-braxton.webp"
                        alt="Braxton HTML Template Logo"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Braxton - Personal Portfolio & Resume HTML Template
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="mxd-demo-footer__mixdesign mxd-grid-item no-margin">
            <a
              className="anim-uni-in-up"
              href="https://1.envato.market/EKA9WD"
              target="_blank"
              rel="noreferrer"
              aria-label="Mix Design Studio Portfolio Page Link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 400 74"
                fill="currentColor"
              >
                <path d="M283.7,33.4h10.1v40.6h-10.1v-40.6ZM303.9,64.2c-1.5-3.1-2.3-6.8-2.3-11,0-6.3,1.7-11.4,5.2-15.1,3.5-3.7,8.2-5.6,14.3-5.6s6.2.6,8.6,1.9c2.4,1.3,4.3,3.1,5.8,5.4h2.8v-6.5h10.4v10.1h-5.1v29.6c0,.3,0,.6,0,.9h-9.8c0-.4,0-.7,0-1.1v-5.8h-.3c-1.2,2.3-2.9,4-5.1,5.1-2.2,1.2-4.9,1.8-7.9,1.8s-7.1-.8-10-2.5c-2.8-1.7-5-4.1-6.6-7.2ZM311.7,53.3c0,3.8,1,6.7,2.9,8.8,2,2.1,4.7,3.1,8.3,3.1s5.8-.9,7.7-2.7c1.9-1.8,2.8-4.3,2.8-7.4v-3.7c0-3.1-1-5.5-2.9-7.3-1.9-1.8-4.5-2.7-7.7-2.7s-6.3,1-8.3,3.1c-2,2.1-2.9,5-2.9,8.8ZM358.7,74h10.1v-22.6c0-3.2.9-5.6,2.6-7.3,1.7-1.7,4.2-2.5,7.5-2.5s5.9.8,7.5,2.5c1.7,1.7,2.5,4.1,2.5,7.3v22.6h10.1v-24.5c0-5.1-1.5-9.2-4.6-12.3-3-3.1-7.3-4.6-12.9-4.6s-6.4.6-8.8,1.9c-2.4,1.3-4.4,3-5.9,5.3h-2.8v-6.5h-10.4v10.1h5v30.5ZM81.5,74h10.1v-40.6h-10.1v40.6ZM288.7,28.9c1.6,0,2.9-.6,4-1.7,1.1-1.1,1.7-2.4,1.7-4s-.6-2.9-1.7-4c-1.1-1.1-2.4-1.7-4-1.7s-2.9.6-4,1.7c-1.1,1.1-1.7,2.4-1.7,4s.6,2.9,1.7,4c1.1,1.1,2.4,1.7,4,1.7ZM86.5,28.9c1.6,0,2.9-.6,4-1.7,1.1-1.1,1.7-2.4,1.7-4s-.6-2.9-1.7-4c-1.1-1.1-2.4-1.7-4-1.7s-2.9.6-4,1.7-1.7,2.4-1.7,4,.6,2.9,1.7,4c1.1,1.1,2.4,1.7,4,1.7ZM107.7,74l10.6-13.9,10.5,13.9h11.3l-15.9-20.8,15.1-19.8h-11.1l-9.8,12.8-9.8-12.8h-11.2l15.1,19.8-15.9,20.8h11.2ZM259.4,67c-3.1,0-5.4-.5-7-1.5-1.6-1-2.6-2.6-2.9-4.7h-9.8c.3,4.4,2.1,7.9,5.5,10.3,1.8,1.3,4,2.3,6.5,2.9h14.7c2.3-.6,4.2-1.5,5.8-2.6,3-2.3,4.5-5.5,4.5-9.6s-1-5.8-2.9-7.7c-1.9-1.9-5-3.3-9.1-4.1l-9.1-1.8c-1.7-.3-2.9-.8-3.7-1.4-.8-.6-1.2-1.5-1.2-2.5s.6-2.5,1.8-3.2c1.2-.7,3-1.1,5.3-1.1s4.5.5,5.9,1.4c1.4.9,2.3,2.4,2.8,4.4h9.8c-.4-4.2-2.1-7.5-5.2-9.9-3.1-2.3-7.4-3.5-12.8-3.5s-9.4,1.1-12.5,3.4c-3,2.3-4.5,5.3-4.5,9.2,0,6,3.9,9.7,11.8,11.2l9,1.7c1.9.4,3.2.9,4,1.6.8.7,1.2,1.6,1.2,2.9,0,3-2.6,4.5-7.8,4.5ZM5,74h10.1v-22.8c0-3.2.8-5.6,2.3-7.2,1.5-1.6,3.8-2.4,6.8-2.4,6.2,0,9.3,3.2,9.3,9.6v22.8h10.1v-22.8c0-6.4,3-9.6,9.1-9.6s9.2,3.2,9.2,9.6v22.8h10.1v-24.6c0-5.1-1.5-9.2-4.5-12.2-3-3-7.1-4.5-12.3-4.5s-10.9,2.4-13.9,7.1h-.2c-1.4-2.3-3.3-4.1-5.6-5.3-2.3-1.2-5.1-1.8-8.3-1.8s-6.2.6-8.4,1.9c-2.3,1.3-4.1,3-5.5,5.3h-3v-6.5H0v10.1h5v30.5ZM144,64.8c-1.5-3.2-2.3-6.9-2.3-11.1s.7-8,2.2-11.2c1.5-3.2,3.6-5.6,6.4-7.3,2.8-1.7,6.1-2.6,10-2.6s5.7.6,7.9,1.7c2.2,1.2,3.9,2.8,5.1,5h.3v-22.1h10.1v46.8h5v10.1h-10.3v-6.5h-2.8c-1.4,2.3-3.4,4.2-5.8,5.4-.8.4-1.7.8-2.7,1.1h-12.3c-1.5-.4-3-1-4.2-1.8-2.9-1.7-5.1-4.2-6.6-7.4ZM151.8,53.7c0,3.9.9,6.9,2.8,9.1,1.9,2.2,4.6,3.3,8.3,3.3s5.8-.9,7.8-2.7,2.9-4.3,2.9-7.4v-4.5c0-3.1-1-5.6-2.9-7.4-1.9-1.8-4.5-2.7-7.8-2.7s-6.4,1.1-8.3,3.3c-1.9,2.2-2.8,5.2-2.8,9.1ZM196.1,64.8c-1.7-3.2-2.6-6.9-2.6-11.3s.9-8.1,2.6-11.2c1.7-3.1,4.2-5.6,7.3-7.2,3.2-1.7,6.9-2.5,11.1-2.5s7.7.8,10.7,2.4c3,1.6,5.3,3.9,6.9,6.9,1.6,3,2.4,6.6,2.4,10.7v3.5h-31.4c.4,3.4,1.6,6.1,3.6,7.9,2,1.8,4.7,2.7,8,2.7s4.5-.5,6.1-1.4c1.6-.9,2.7-2.3,3.3-4.2h10.2c-.9,4.3-3.1,7.6-6.5,10.1-1.8,1.3-3.9,2.2-6.2,2.8h-13.4c-1.7-.4-3.2-1-4.6-1.8-3.2-1.7-5.7-4.2-7.4-7.4ZM203.4,49.2h21.4c-.4-2.8-1.4-4.9-3.2-6.4-1.8-1.5-4.2-2.2-7.1-2.2s-5.3.7-7.2,2.2c-1.9,1.5-3.2,3.6-3.8,6.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
