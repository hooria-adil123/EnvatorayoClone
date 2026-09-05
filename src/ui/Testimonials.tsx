import React, { useEffect, useState } from 'react';

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        'He’s a phenomenal designer! <br /> Their UX insights & pixel-perfect UI work helped us increase our user engagement by 30%. Highly recommended for any product team!',
      name: 'John Doe',
      role: 'CEO at',
      company: 'StartupHub',
      avatar: '/assets/img/testimonial/sa/avatar.png',
    },
    {
      id: 2,
      quote:
        'Gabriel transformed our legacy enterprise tool into an intuitive, elegant SaaS product that our customers love. His attention to typographic rhythm and design systems is unmatched.',
      name: 'Sophia Martinez',
      role: 'VP Product at',
      company: 'Veloce AI',
      avatar: '/assets/img/testimonial/sa/avatar-3.png',
    },
    {
      id: 3,
      quote:
        'Working with Gabriel was one of the smoothest experiences. Rapid iterations, thoughtful interaction design, and impeccable deliverables. He sets the gold standard for visual design.',
      name: 'Marcus Vance',
      role: 'Founding Partner at',
      company: 'NextGen Studio',
      avatar: '/assets/img/testimonial/sa/avatar-4.png',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <div id="testimonials" className="tp-testimonial-area pt-120 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-7">
            <div className="tp-testimonial-2-title-wrap text-center mb-50 tp_fade_anim">
              <h2 className="fw-700 fs-70 fs-xs-50 tp-text-common-black mb-15">Testimonials</h2>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9">
            <div className="tp-testimonial-2-content-wrap tp-testimonial-pp-content p-relative">
              <div className="tp-testimonial-2-slider-active">
                <div
                  className="tp-testimonial-2-content text-center"
                  style={{
                    transition: 'opacity 0.4s ease-in-out',
                  }}
                >
                  <h5
                    className="fs-35 fs-lg-30 fs-xs-25 tp-text-common-black fw-500 lh-130-per mb-35"
                    dangerouslySetInnerHTML={{ __html: current.quote }}
                  />
                  <div className="d-flex align-items-center text-start justify-content-center">
                    <div className="tp-testimonial-sa-qoute tp-testimonial-qoute mr-15">
                      <span className="qoute">
                        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M28.5847 16.895C28.1454 19.6558 24.6944 22.6049 21.9963 22.6676C21.8081 22.6676 21.6198 22.7304 21.4943 22.8559C21.3688 22.9186 21.2433 22.9814 21.1806 23.1696C20.2394 24.9265 20.7414 26.3069 22.31 27.4364C24.1297 28.754 27.016 27.4364 28.4592 26.2442C32.0985 23.2323 35.8005 18.0245 35.6123 13.0674C36.2397 9.74178 36.1142 6.16534 35.173 3.21626C34.5456 1.33387 32.7259 0.392675 30.8435 0.267183C28.9611 0.141588 25.0709 -0.423025 23.3767 0.706306C21.6826 1.83584 21.5571 4.03197 21.3688 5.91425C21.1806 7.98488 20.6159 11.8753 22.3728 13.5067C24.1297 15.0753 29.1494 13.3812 28.5847 16.895ZM7.87837 16.895C7.43915 19.6558 3.9882 22.6049 1.29001 22.6676C1.10177 22.6676 0.913532 22.7304 0.78804 22.8559C0.662445 22.9186 0.537052 22.9814 0.474205 23.1696C-0.466991 24.9265 0.034977 26.3069 1.60364 27.4364C3.42328 28.754 6.30961 27.4364 7.75288 26.2442C11.3922 23.2323 15.0942 18.0244 14.906 13.0674C15.5334 9.74178 15.4079 6.16534 14.4668 3.21626C13.8394 1.33387 12.0197 0.392675 10.1372 0.267183C8.25485 0.141588 4.36458 -0.423025 2.67043 0.706306C0.976379 1.83584 0.850784 4.03197 0.662548 5.91425C0.474308 7.98488 -0.0904121 11.8753 1.66649 13.5067C3.42339 15.0753 8.50584 13.3812 7.87837 16.895Z"
                            fill="#030303"
                          />
                        </svg>
                      </span>
                      <div className="qoute-img">
                        <img className="rounded-circle" src={current.avatar} alt={current.name} />
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-700 fs-25 tp-text-common-black mb-0">{current.name}</h5>
                      <span className="fs-18 tp-text-grey-1">
                        {current.role} <span className="text-italic">{current.company}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fraction-wrapper mt-35 d-flex align-items-center justify-content-center gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    style={{
                      width: idx === currentIndex ? '32px' : '10px',
                      height: '10px',
                      borderRadius: '5px',
                      backgroundColor: idx === currentIndex ? '#030303' : '#DDDDDD',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
