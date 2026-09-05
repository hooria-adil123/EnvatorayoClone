import React, { useEffect, useState } from 'react';

export const Counters: React.FC = () => {
  const [counts, setCounts] = useState({ p1: 0, p2: 0, p3: 0, p4: 0 });

  useEffect(() => {
    let step = 0;
    const totalSteps = 40;
    const interval = setInterval(() => {
      step++;
      const p = step / totalSteps;
      setCounts({
        p1: Math.round(2 * p),
        p2: Math.round(25 * p),
        p3: Math.round(10 * p),
        p4: Math.round(90 * p),
      });
      if (step >= totalSteps) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="counters" className="tp-counter-area pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-counter-wrap">
              <div className="tp-counter-wrap-box tp-counter-pp-wrap-box bounce_animation d-flex flex-wrap justify-content-between">
                
                <div className="tp-counter-item bounce__anim mb-30">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase">
                    <span>{counts.p1 < 10 ? `0${counts.p1}` : counts.p1}</span>K
                  </h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1 d-inline-block mb-30">
                    Project Completed
                  </span>
                  <span>
                    <svg width="64" height="53" viewBox="0 0 64 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.2457 14.504V24.1263C9.07649 23.7795 7.83874 23.7329 6.64673 23.9907C5.45471 24.2485 4.34687 24.8025 3.42546 25.6015C2.50405 26.4005 1.79878 27.4187 1.37477 28.5622C0.950748 29.7057 0.821647 30.9376 0.999382 32.1441C1.25879 33.791 2.07185 35.3002 3.30441 36.4228C4.53698 37.5454 6.11541 38.2142 7.77927 38.319C8.61198 38.3672 9.44669 38.2693 10.2457 38.03V47.6524C10.2474 49.0256 10.7936 50.342 11.7646 51.313C12.7355 52.284 14.052 52.8302 15.4252 52.8318H25.5282C25.8063 52.8321 26.0803 52.765 26.3267 52.6362C26.5732 52.5074 26.7847 52.3207 26.9431 52.0921L42.2341 30.076C42.8795 29.1454 43.2289 28.0441 43.2324 26.9157C43.2359 25.7873 42.8933 24.6833 42.2536 23.7497L27.0519 1.55403C26.8967 1.32049 26.6865 1.12933 26.4393 0.997232C26.192 0.86513 25.9155 0.79611 25.6338 0.796143H15.4252C14.052 0.797769 12.7355 1.34399 11.7646 2.31495C10.7936 3.28591 10.2474 4.60235 10.2457 5.97554V14.504Z"
                        fill="#030303"
                      />
                      <circle cx="53" cy="27" r="10" fill="#C4EE18" />
                    </svg>
                  </span>
                </div>

                <div className="tp-counter-item bounce__anim mb-30">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase">
                    <span>{counts.p2}</span>
                  </h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1 d-inline-block mb-30">
                    My Achievement
                  </span>
                  <span>
                    <svg width="49" height="53" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.5 52.832C37.7548 52.832 48.5 42.0869 48.5 28.832C48.5 15.5772 37.7548 4.83203 24.5 4.83203C11.2452 4.83203 0.5 15.5772 0.5 28.832C0.5 42.0869 11.2452 52.832 24.5 52.832Z"
                        fill="#030303"
                      />
                      <circle cx="38" cy="11" r="10" fill="#C4EE18" />
                    </svg>
                  </span>
                </div>

                <div className="tp-counter-item bounce__anim mb-30">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase">
                    <span>{counts.p3}</span>+
                  </h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1 d-inline-block mb-30">
                    Year of Experience
                  </span>
                  <span>
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="4.83203" width="48" height="48" rx="2" fill="#030303" />
                      <circle cx="43" cy="10" r="10" fill="#C4EE18" />
                    </svg>
                  </span>
                </div>

                <div className="tp-counter-item bounce__anim mb-30">
                  <h3 className="fw-500 fs-70 fs-md-50 text-uppercase">
                    <span>{counts.p4}</span>%
                  </h3>
                  <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1 d-inline-block mb-30">
                    Happy Customer
                  </span>
                  <span>
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M33 0.0507812C14.7744 0.0507812 0 14.8252 0 33.0508C0 51.2764 14.7744 66.0508 33 66.0508C51.2256 66.0508 66 51.2764 66 33.0508C66 14.8252 51.2256 0.0507812 33 0.0507812Z"
                        fill="#C4EE18"
                      />
                    </svg>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

