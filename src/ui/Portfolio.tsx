import React, { useState } from 'react';
import { ProjectData, ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: 'p1',
      title: 'Innovation in Every Swipe',
      category: 'UI/UX Design',
      year: '2025',
      image: '/assets/img/portfolio/pp/thumb.jpg',
      description:
        'A revolutionary mobile financial platform designed to make daily personal finance intuitive, interactive, and rewarding with fluid gestures and instant feedback.',
      client: 'FinFlow Global Inc.',
      tools: ['Figma', 'Protopie', 'Design System'],
    },
    {
      id: 'p2',
      title: 'Turning Clicks Into Conversions',
      category: 'UI/UX Design',
      year: '2025',
      image: '/assets/img/portfolio/pp/thumb-2.jpg',
      description:
        'Modern high-converting e-commerce web interface with micro-interactions, frictionless multi-step checkout, and dynamic personalized recommendation layouts.',
      client: 'Aura Luxury Apparel',
      tools: ['Figma', 'Webflow', 'Spline 3D'],
    },
    {
      id: 'p3',
      title: 'Crafting Digital Experiences',
      category: 'UI/UX Design',
      year: '2025',
      image: '/assets/img/portfolio/pp/thumb-3.jpg',
      description:
        'A comprehensive SaaS cloud analytics dashboard offering deep observability, dark/light visual modes, high-contrast typography, and intuitive data visualizations.',
      client: 'Pulse Metrics AI',
      tools: ['Figma', 'React', 'Tailwind CSS'],
    },
  ];

  return (
    <>
      <div id="portfolio" className="tp-portfolio-area pt-135 pb-70 tp-panel-pin-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-portfolio-sa-title-wrap mb-40 tp-panel-pin" style={{ position: 'sticky', top: '100px' }}>
                <span className="fw-500 fs-25 mb-5 tp-text-common-black-3 d-flex align-items-center tp_fade_anim">
                  <svg className="mr-35" width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="10" width="110" height="2" rx="1" fill="#030303" />
                    <rect x="60" width="50" height="2" rx="1" fill="#999999" />
                  </svg>
                  <span className="d-block">Featured</span>
                </span>
                <h2 className="tp-portfolio-sa-title fw-500 text-uppercase tp-text-common-black-3 mb-20 tp_fade_anim">
                  Work
                </h2>
                <div className="tp-portfolio-tag tp_fade_anim">
                  <span>Dribbble</span>
                  <span>99Design</span>
                  <span>Behance</span>
                </div>
                <div className="tp-portfolio-pp-border mt-30 mb-60">
                  <span>
                    <svg viewBox="0 0 424 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM419 3.5L424 5.88675V0.113249L419 2.5V3.5ZM4.5 3.5H419.5V2.5H4.5V3.5Z" fill="#EEEEEE" />
                    </svg>
                  </span>
                </div>
                <div className="tp-rounded-btn-wrap tp-about-wd-btn tp_fade_anim">
                  <div className="btn_wrapper d-inline-block">
                    <a
                      href="#portfolio"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProject(projects[0]);
                      }}
                      className="tp-btn-rounded btn-item"
                    >
                      <span className="d-block mb-10">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      View All<br /> Works
                      <i className="tp-btn-circle-dot"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tp-portfolio-pp-item-wrap">
                {projects.map((project) => (
                  <div key={project.id} className="tp-portfolio-2-item mb-65 tp-panel-pin tp-bg-common-white">
                    <div
                      className="not-hide-cursor"
                      data-cursor="View<br>Demo"
                      onClick={() => setSelectedProject(project)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-block tp-portfolio-2-thumb mb-20 cursor-hide">
                        <img className="w-100" src={project.image} alt={project.title} />
                      </div>
                    </div>
                    <div className="tp-portfolio-2-content tp-portfolio-pp-content d-flex justify-content-between align-items-start">
                      <div className="mb-5">
                        <h3 className="tp-portfolio-title fw-700 fs-25 lh-36 mb-10 mr-20">
                          <a
                            className="underline-black"
                            href="#portfolio"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedProject(project);
                            }}
                          >
                            {project.title}
                          </a>
                        </h3>
                        <div className="tp-portfolio-tag positions">
                          <span>{project.category}</span>
                        </div>
                      </div>
                      <div className="tp-portfolio-tag mt-5">
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};
