import React from 'react';

export const ResponsiveShowcase: React.FC = () => {
  return (
    <div className="mxd-section">
      <div className="mxd-container no-padding-container">
        <div className="mxd-block">
          <div className="mxd-resp-promo">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-resp-promo__item">
                  <div className="mxd-container grid-container">
                    <div className="mxd-block mxd-grid-item no-margin">
                      <div className="mxd-resp-promo__content">
                        <div className="mxd-resp-promo__manifest anim-uni-in-up">
                          <p className="reveal-type">
                            Fully responsive and pixel-perfect Rayo looks flawless across all
                            devices, providing an optimal viewing experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-resp-promo__item">
                  <div className="mxd-resp-promo__image anim-uni-in-up">
                    <img src="/img/demo/01_resp-img.webp" alt="Rayo Responsive Devices" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
