import React from 'react';

export const CtaSection: React.FC = () => {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container">
        <div className="mxd-block">
          <div className="mxd-demo-cta">
            <div className="mxd-demo-cta__caption anim-uni-in-up">
              <h2 className="h2-small reveal-type">
                Show your creativity and get noticed today!
              </h2>
            </div>
            <div className="mxd-demo-cta__btn anim-uni-in-up">
              <a
                className="btn btn-anim btn-default btn-large btn-additional slide-right"
                href="https://1.envato.market/kOvmWN"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn-caption">Buy Now</span>
                <i className="ph-bold ph-shopping-cart-simple"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
