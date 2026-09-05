import React from 'react';

interface DemosGridProps {
  onOpenDemo: (url: string, title: string) => void;
}

interface DemoItem {
  id: string;
  num: string;
  title: string;
  url: string;
  screenClass: string;
  imgSrc: string;
  tag?: string;
}

const demos: DemoItem[] = [
  {
    id: 'main',
    num: '/01',
    title: 'Main home',
    url: 'home.html',
    screenClass: 'screen-01',
    imgSrc: '/img/demo/screens/01.webp',
    tag: '🚀 Hero Variations',
  },
  {
    id: 'software',
    num: '/02',
    title: 'Software Development Company',
    url: 'software.html',
    screenClass: 'screen-02',
    imgSrc: '/img/demo/screens/02.webp',
  },
  {
    id: 'freelancer',
    num: '/03',
    title: 'Freelancer Portfolio',
    url: 'freelancer.html',
    screenClass: 'screen-03',
    imgSrc: '/img/demo/screens/03.webp',
    tag: '🌟 Popular',
  },
  {
    id: 'digital',
    num: '/04',
    title: 'Digital Agency',
    url: 'agency.html',
    screenClass: 'screen-04',
    imgSrc: '/img/demo/screens/04.webp',
  },
  {
    id: 'creative-studio',
    num: '/05',
    title: 'Creative Design Studio',
    url: 'studio.html',
    screenClass: 'screen-05',
    imgSrc: '/img/demo/screens/05.webp',
    tag: '🔥 Top Rated',
  },
  {
    id: 'personal',
    num: '/06',
    title: 'Personal Portfolio',
    url: 'portfolio.html',
    screenClass: 'screen-06',
    imgSrc: '/img/demo/screens/06.webp',
    tag: '💖 Loved',
  },
  {
    id: 'web-agency',
    num: '/07',
    title: 'Web Agency',
    url: 'web-agency.html',
    screenClass: 'screen-07',
    imgSrc: '/img/demo/screens/07.webp',
    tag: '🦄 Trendy',
  },
  {
    id: 'creative-dev',
    num: '/08',
    title: 'Creative Developer',
    url: 'developer.html',
    screenClass: 'screen-08',
    imgSrc: '/img/demo/screens/08.webp',
  },
  {
    id: 'designer',
    num: '/09',
    title: 'Designer',
    url: 'designer.html',
    screenClass: 'screen-09',
    imgSrc: '/img/demo/screens/09.webp',
  },
];

const marqueeWords = ['Designer', 'Developer', 'Agency', 'Studio', 'Portfolio', 'Creative', 'Freelancer'];

export const DemosGrid: React.FC<DemosGridProps> = ({ onOpenDemo }) => {
  return (
    <>
      <div id="demo" className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container">
          <div className="mxd-block">
            <div className="mxd-demo-list">
              <div className="mxd-demo-list__row">
                {demos.slice(0, 3).map((demo) => (
                  <a
                    key={demo.id}
                    className="mxd-demo-list__item animate-card-2"
                    href={demo.url}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenDemo(demo.url, demo.title);
                    }}
                  >
                    <div className="mxd-demo-list__image">
                      <img src={demo.imgSrc} alt={demo.title} />
                      <div className={`mxd-demo-list__screen ${demo.screenClass}`}></div>
                    </div>
                    <div className="mxd-demo-list__caption">
                      <span className="mxd-demo-list__link small">{demo.title}</span>
                      <span className="mxd-demo-list__num small">{demo.num}</span>
                    </div>
                    {demo.tag && (
                      <div className="mxd-pricing-table__tag">
                        <span className="tag tag-default tag-accent">{demo.tag}</span>
                      </div>
                    )}
                  </a>
                ))}
              </div>

              <div className="mxd-demo-list__row">
                {demos.slice(3, 7).map((demo) => (
                  <a
                    key={demo.id}
                    className="mxd-demo-list__item animate-card-4"
                    href={demo.url}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenDemo(demo.url, demo.title);
                    }}
                  >
                    <div className="mxd-demo-list__image">
                      <img src={demo.imgSrc} alt={demo.title} />
                      <div className={`mxd-demo-list__screen ${demo.screenClass}`}></div>
                    </div>
                    <div className="mxd-demo-list__caption">
                      <span className="mxd-demo-list__link small">{demo.title}</span>
                      <span className="mxd-demo-list__num small">{demo.num}</span>
                    </div>
                    {demo.tag && (
                      <div className="mxd-pricing-table__tag">
                        <span className="tag tag-default tag-accent">{demo.tag}</span>
                      </div>
                    )}
                  </a>
                ))}
              </div>

              <div className="mxd-demo-list__row">
                {demos.slice(7, 9).map((demo) => (
                  <a
                    key={demo.id}
                    className="mxd-demo-list__item animate-card-3"
                    href={demo.url}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenDemo(demo.url, demo.title);
                    }}
                  >
                    <div className="mxd-demo-list__image">
                      <img src={demo.imgSrc} alt={demo.title} />
                      <div className={`mxd-demo-list__screen ${demo.screenClass}`}></div>
                    </div>
                    <div className="mxd-demo-list__caption">
                      <span className="mxd-demo-list__link small">{demo.title}</span>
                      <span className="mxd-demo-list__num small">{demo.num}</span>
                    </div>
                  </a>
                ))}

                <div className="mxd-demo-list__item empty-item animate-card-3">
                  <div className="mxd-demo-list__image image-placeholder">
                    <img src="/img/demo/screens/05.webp" alt="Rayo Demo Screen" />
                  </div>
                  <div className="empty-item__wrap">
                    <div className="empty-item__content">
                      <div className="empty-item__logo mxd-rotate">
                        <svg
                          className="empty-item__image"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 56 56"
                          width="56"
                          height="56"
                        >
                          <path
                            fill="var(--accent)"
                            d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
                          />
                          <g>
                            <defs>
                              <path
                                id="mxd-logo__clip_empty"
                                d="M28,0C2.9,0,0,16.9,0,28s2.9,28,28,28s28-16.9,28-28S53.1,0,28,0z"
                              />
                            </defs>
                            <clipPath id="mxd-logo__crop_empty">
                              <use href="#mxd-logo__clip_empty" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <path
                              clipPath="url(#mxd-logo__crop_empty)"
                              fill="var(--additional)"
                              d="M33.6,34.5h0.9c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3L20.5,37.3z M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28L28,26.1z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1L14,26.1z M11.2,34.5v1.9c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V42c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V56c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9h3.7c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-3.7c-0.5,0-0.9-0.4-0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9L11.2,34.5L11.2,34.5z M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1L42,26.1z M49.5,39.2v-0.9c0-0.5-0.4-0.9-0.9-0.9h-2.8c-0.5,0-0.9-0.4-0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v3.7c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9,0.4,0.9,0.9v6.5c0,0.5-0.4,0.9-0.9,0.9h-3.7c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h3.7c0.5,0,0.9,0.4,0.9,0.9V56c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-9.3c0-0.5,0.4-0.9,0.9-0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C49,40.1,49.5,39.7,49.5,39.2L49.5,39.2z"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="empty-item__caption">
                        More demos coming<br />soon...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mxd-section padding-mtext-pre-grid">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="marquee marquee-left--gsap muted-extra">
              <div className="marquee__toleft" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
                  <div key={i} className="marquee__item one-line item-regular text">
                    <p className="marquee__text">{word}</p>
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
    </>
  );
};
