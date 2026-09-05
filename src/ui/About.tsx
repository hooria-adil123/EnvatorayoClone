import React, { useEffect, useState } from 'react';

export const About: React.FC = () => {
  const [counts, setCounts] = useState({ figma: 0, xd: 0, webflow: 0, framer: 0 });

  useEffect(() => {
    const targets = { figma: 100, xd: 98, webflow: 90, framer: 95 };
    let currentStep = 0;
    const steps = 40;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounts({
        figma: Math.round(targets.figma * progress),
        xd: Math.round(targets.xd * progress),
        webflow: Math.round(targets.webflow * progress),
        framer: Math.round(targets.framer * progress),
      });
      if (currentStep >= steps) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="tp-about-area tp-bg-common-black pt-110 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tp-about-pp-title-wrap text-center mb-40">
              <span className="tp-section-pp-subtitle mb-15 tp-ff-heading fw-500 fs-18 tp-text-common-white d-inline-block">
                About Me
              </span>
              <h2 className="tp-section-pp-title fw-400 fs-50 fs-xl-45 fs-sm-28 lh-120-per tp-text-common-white tp_text_invert">
                I follow a user-centered, iterative design process to create impactful digital experiences. I start with
                research &amp; ideation, turning insights into wireframes and high-fidelity prototypes.
              </h2>
            </div>
          </div>
        </div>
        <div className="tp-about-pp-border mb-60">
          <span>
            <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z"
                fill="white"
                fillOpacity="0.1"
              />
            </svg>
          </span>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="tp-about-pp-skill-wrap d-flex align-items-center mb-30">
              <span className="tp-about-pp-skill-icon mr-25">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5527 22.5C22.5527 18.3579 25.9106 15 30.0527 15C34.1948 15 37.5527 18.3579 37.5527 22.5C37.5527 26.6422 34.1947 29.9999 30.0527 29.9999C25.9105 29.9999 22.5527 26.6421 22.5527 22.5Z"
                    fill="#00BCFF"
                  />
                  <path
                    d="M7.55273 37.5C7.55273 33.3579 10.9106 30.0001 15.0527 30.0001L19.0495 27.8899L22.5527 30.0001V37.5C22.5527 41.6422 19.1948 45 15.0527 45C10.9106 45 7.55273 41.6421 7.55273 37.5Z"
                    fill="#00CF7F"
                  />
                  <path
                    d="M22.5528 0L18.4717 7.09014L22.5528 14.9999H29.9476C34.0897 14.9999 37.4475 11.6421 37.4475 7.49997C37.4475 3.35786 34.0897 0 29.9476 0H22.5528Z"
                    fill="#FF7361"
                  />
                  <path
                    d="M7.44727 7.49997C7.44727 11.6421 10.8051 14.9999 14.9472 14.9999L18.9258 16.5366L22.5524 14.9999V0H14.9471C10.8051 0 7.44727 3.35786 7.44727 7.49997Z"
                    fill="#FF4D12"
                  />
                  <path
                    d="M7.55273 22.5001C7.55273 26.6423 10.9106 30 15.0527 30H22.5527V15H15.0527C10.9106 15 7.55273 18.3579 7.55273 22.5001Z"
                    fill="#B659FF"
                  />
                </svg>
              </span>
              <div className="tp-about-pp-skill-content">
                <span className="tp-text-common-white fw-500 fs-18">Figma</span>
                <h3 className="fs-50 fs-xl-45 fw-500 tp-text-common-white lh-120-per mb-0">
                  <span>{counts.figma}</span>%
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="tp-about-pp-skill-wrap d-flex align-items-center mb-30">
              <span className="tp-about-pp-skill-icon mr-25">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M37.125 0.75H7.875C3.52576 0.75 0 4.27576 0 8.625V36.375C0 40.7242 3.52576 44.25 7.875 44.25H37.125C41.4742 44.25 45 40.7242 45 36.375V8.625C45 4.27576 41.4742 0.75 37.125 0.75Z"
                    fill="#470137"
                  />
                </svg>
              </span>
              <div className="tp-about-pp-skill-content">
                <span className="tp-text-common-white fw-500 fs-18">Adobe XD</span>
                <h3 className="fs-50 fw-500 tp-text-common-white lh-120-per mb-0">
                  <span>{counts.xd}</span>%
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="tp-about-pp-skill-wrap d-flex align-items-center mb-30">
              <span className="tp-about-pp-skill-icon mr-25">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_607_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="45">
                    <rect width="45" height="45" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_607_73)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M45 9L30.6411 37H17.154L23.1632 25.3956H22.8936C17.9361 31.815 10.5393 36.041 0 37V25.5562C0 25.5562 6.74223 25.159 10.7058 21.0023H0V9.00022H12.0322V18.8717L12.3022 18.8706L17.2191 9.00022H26.3186V18.8091L26.5886 18.8087L31.6899 9H45Z"
                      fill="#146EF5"
                    />
                  </g>
                </svg>
              </span>
              <div className="tp-about-pp-skill-content">
                <span className="tp-text-common-white fw-500 fs-18">Webflow</span>
                <h3 className="fs-50 fw-500 tp-text-common-white lh-120-per mb-0">
                  <span>{counts.webflow}</span>%
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="tp-about-pp-skill-wrap d-flex align-items-center mb-30">
              <span className="tp-about-pp-skill-icon mr-25">
                <svg width="30" height="45" viewBox="0 0 30 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 0V15H15L0 0H30ZM0 15H15L30 30H15V45L0 30V15Z" fill="white" />
                </svg>
              </span>
              <div className="tp-about-pp-skill-content">
                <span className="tp-text-common-white fw-500 fs-18">Framer</span>
                <h3 className="fs-50 fw-500 tp-text-common-white lh-120-per mb-0">
                  <span>{counts.framer}</span>%
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
