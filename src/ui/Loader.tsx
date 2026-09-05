import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onLoaded?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  const [count, setCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 100) {
        const increment = Math.floor(Math.random() * 12) + 3;
        current = Math.min(current + increment, 100);
        setCount(current);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          if (onLoaded) onLoaded();
          document.body.classList.remove('loading');
          document.body.classList.add('loaded');
        }, 600);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onLoaded]);

  if (isLoaded) return null;

  return (
    <div id="loader" className={`loader ${count === 100 ? 'loaded' : ''}`}>
      <div className="loader__wrapper">
        <div className="loader__content">
          <div className="loader__count">
            <span className="count__text">{count}</span>
            <span className="count__symbol">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
