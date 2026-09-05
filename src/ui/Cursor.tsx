import React, { useEffect, useRef, useState } from 'react';

export const MagicCursor: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ballX = mouseX;
    let ballY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorHolder = target.closest('[data-cursor]');
        if (cursorHolder) {
          const text = cursorHolder.getAttribute('data-cursor') || '';
          setCursorText(text);
          setIsHovered(true);
        } else {
          setCursorText('');
          const isClickable = target.closest('a, button, input, .tp-btn-rounded, .tp-btn-switch-animation, .btn-item');
          setIsPointer(!!isClickable);
          setIsHovered(false);
        }
      }
    };

    const animate = () => {
      ballX += (mouseX - ballX) * 0.15;
      ballY += (mouseY - ballY) * 0.15;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${ballX}px, ${ballY}px, 0px) scale(${isHovered ? 2.5 : isPointer ? 1.5 : 1})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isPointer]);

  return (
    <div id="magic-cursor" className="cursor-black-bg">
      <div
        id="ball"
        ref={ballRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {cursorText && (
          <span
            style={{
              fontSize: '8px',
              lineHeight: 1.1,
              color: '#030303',
              fontWeight: 700,
              textTransform: 'uppercase',
              pointerEvents: 'none',
            }}
            dangerouslySetInnerHTML={{ __html: cursorText }}
          />
        )}
      </div>
    </div>
  );
};
