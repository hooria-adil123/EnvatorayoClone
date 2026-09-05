import React from 'react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  client?: string;
  tools?: string[];
  link?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 3, 3, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="project-modal-content"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '35px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F5F5F5',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#030303',
            transition: 'all 0.2s ease',
          }}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="mb-25">
          <div className="d-flex align-items-center gap-3 mb-10">
            <span
              style={{
                backgroundColor: '#C4EE18',
                color: '#030303',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              {project.category}
            </span>
            <span style={{ color: '#777', fontSize: '14px', fontWeight: 500 }}>
              {project.year}
            </span>
          </div>
          <h2 className="tp-section-title fw-700 fs-35 lh-120-per mb-15 tp-text-common-black">
            {project.title}
          </h2>
          <p className="fs-16 tp-text-grey-1 lh-150-per">{project.description}</p>
        </div>

        <div className="project-modal-image mb-25" style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
          />
        </div>

        <div className="row pt-15 border-top">
          <div className="col-sm-4 mb-15">
            <span className="d-block fs-13 text-uppercase tp-text-grey-1 fw-600 mb-5">Client</span>
            <span className="fs-16 fw-600 tp-text-common-black">{project.client || 'Acme Global Studios'}</span>
          </div>
          <div className="col-sm-4 mb-15">
            <span className="d-block fs-13 text-uppercase tp-text-grey-1 fw-600 mb-5">Tools &amp; Stack</span>
            <span className="fs-16 fw-600 tp-text-common-black">
              {project.tools?.join(', ') || 'Figma, React, Webflow'}
            </span>
          </div>
          <div className="col-sm-4 mb-15 text-sm-end">
            <button
              onClick={onClose}
              className="tp-btn-switch-animation tp-btn-black d-inline-block tp-ff-heading text-uppercase hover-text-white fw-500"
              style={{ padding: '10px 24px', fontSize: '13px', borderRadius: '30px', border: 'none' }}
            >
              Close View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
