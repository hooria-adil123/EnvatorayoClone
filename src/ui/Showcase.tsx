import React from 'react';

const topComponents = [
  '/img/demo/components/sec-01.webp',
  '/img/demo/components/sec-02.webp',
  '/img/demo/components/sec-03.webp',
  '/img/demo/components/sec-04.webp',
  '/img/demo/components/sec-05.webp',
  '/img/demo/components/sec-06.webp',
  '/img/demo/components/sec-07.webp',
  '/img/demo/components/sec-08.webp',
];

const bottomComponents = [
  '/img/demo/components/sec-09.webp',
  '/img/demo/components/sec-10.webp',
  '/img/demo/components/sec-11.webp',
  '/img/demo/components/sec-04.webp',
  '/img/demo/components/sec-05.webp',
  '/img/demo/components/sec-06.webp',
  '/img/demo/components/sec-07.webp',
  '/img/demo/components/sec-08.webp',
];

export const ComponentsShowcase: React.FC = () => {
  return (
    <div className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <div className="marquee marquee-left--gsap muted-extra">
            <div className="marquee__toleft" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {[...topComponents, ...topComponents].map((src, idx) => (
                <div key={idx} className="marquee__item overflow-visible one-line item-regular text">
                  <div className="marquee__component">
                    <img src={src} alt={`Component ${idx + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mxd-container">
            <div className="mxd-demo-components">
              <div className="mxd-demo-components__objects">
                <div className="mxd-demo-components__object obj-01 anim-uni-in-up">
                  <img
                    className="mxd-move-slow"
                    src="/img/demo/01_comp-img.webp"
                    alt="Floating Component Badge 1"
                  />
                </div>
                <div className="mxd-demo-components__object obj-02 anim-uni-in-up">
                  <img
                    className="mxd-rotate-slow"
                    src="/img/demo/01_comp-img.webp"
                    alt="Floating Component Badge 2"
                  />
                </div>
                <div className="mxd-demo-components__object obj-03 anim-uni-in-up">
                  <img
                    className="mxd-move"
                    src="/img/demo/01_comp-img.webp"
                    alt="Floating Component Badge 3"
                  />
                </div>
              </div>
              <div className="mxd-demo-components__title anim-uni-in-up">
                <span className="reveal-type">
                  Functional<br />components
                </span>
              </div>
            </div>
          </div>

          <div className="marquee marquee-right--gsap muted-extra">
            <div className="marquee__toright" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {[...bottomComponents, ...bottomComponents].map((src, idx) => (
                <div key={idx} className="marquee__item overflow-visible one-line item-regular text">
                  <div className="marquee__component">
                    <img src={src} alt={`Component ${idx + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
