import React, { useState, useEffect } from 'react';

export const ToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#0"
      id="to-top"
      className={`btn btn-to-top slide-up anim-no-delay ${visible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      style={{
        display: visible ? 'flex' : 'none',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
      }}
      aria-label="Back to top"
    >
      <i className="ph ph-arrow-up"></i>
    </a>
  );
};
