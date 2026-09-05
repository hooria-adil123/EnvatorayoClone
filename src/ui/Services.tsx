import React, { useState } from 'react';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const servicesList: ServiceItem[] = [
    {
      number: '01.',
      title: 'UI/UX Design',
      description:
        'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      image: '/assets/img/service/pp/pp.jpg',
      categories: ['UX Design', 'User Testing', 'Motion Design'],
    },
    {
      number: '02.',
      title: 'User Research',
      description:
        'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      image: '/assets/img/service/pp/pp-2.jpg',
      categories: ['UX Design', 'User Testing', 'Motion Design'],
    },
    {
      number: '03.',
      title: 'Branding',
      description:
        'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      image: '/assets/img/service/pp/pp-3.jpg',
      categories: ['UX Design', 'User Testing', 'Motion Design'],
    },
    {
      number: '04.',
      title: '3D & Motion',
      description:
        'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      image: '/assets/img/service/pp/pp-4.jpg',
      categories: ['UX Design', 'User Testing', 'Motion Design'],
    },
  ];

  return (
    <div id="services" className="tp-service-area tp-bg-common-black pt-110 pb-200">
      <div className="container-fluid p-0">
        <div className="tp-service-pp-title-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="tp-about-pp-title-wrap mb-40">
                  <span className="tp-section-pp-subtitle mb-15 tp-ff-heading fw-500 fs-18 tp-text-common-white d-inline-block">
                    What I Do
                  </span>
                  <h2 className="tp-section-pp-title fw-400 fs-50 fs-lg-42 fs-xs-30 lh-120-per tp_text_invert">
                    I help brands build intuitive and user-friendly digital products through a strategic design approach.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-service-pp-wrap tp-service-pp-pin">
          {servicesList.map((item, idx) => (
            <div
              key={item.number}
              className={`tp-service-pp-item tp-service-pp-panel ${hoveredIndex === idx ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transition: 'all 0.35s ease',
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-2 col-lg-1 col-md-1">
                    <div className="tp-service-pp-number">
                      <span className="fw-500 fs-20 tp-text-common-white text-uppercase">{item.number}</span>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-7">
                    <div className="tp-service-pp-content">
                      <h4 className="tp-section-title text-uppercase tp-text-common-white fs-80 fs-xl-65 fs-md-40 fw-500 mb-55">
                        <a
                          className="tp_text_invert"
                          href="#services"
                          onClick={(e) => e.preventDefault()}
                        >
                          {item.title}
                        </a>
                      </h4>
                      <p className="fs-18 tp-text-grey-2 mb-55">{item.description}</p>
                      <div className="tp-service-pp-btn pb-90">
                        <a
                          href="#footer"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="tp-btn-lg tp-btn-white d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-black text-uppercase ls-0 tp-btn-switch-animation tp-text-common-white hover-text-white tp-ff-heading fw-500"
                        >
                          <span className="d-flex align-items-center justify-content-center">
                            <span className="btn-text">See Our Services</span>
                            <span className="btn-icon">
                              <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span className="btn-icon">
                              <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="tp-service-pp-category">
                        {item.categories.map((cat, i) => (
                          <span key={i}>{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div className="tp-service-pp-thumb text-end">
                      <img
                        className="tp_fade_anim"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

