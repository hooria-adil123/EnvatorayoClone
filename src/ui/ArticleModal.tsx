import React from 'react';

export interface ArticleData {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  content: string[];
}

interface ArticleModalProps {
  article: ArticleData | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
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
          }}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="mb-20">
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
              {article.category}
            </span>
            <span style={{ color: '#777', fontSize: '14px', fontWeight: 500 }}>{article.date}</span>
          </div>
          <h2 className="tp-section-title fw-700 fs-32 lh-120-per mb-15 tp-text-common-black">
            {article.title}
          </h2>
        </div>

        <div className="mb-25" style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <img
            src={article.image}
            alt={article.title}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
          />
        </div>

        <div className="article-body">
          {article.content.map((p, idx) => (
            <p key={idx} className="fs-16 tp-text-grey-1 lh-160-per mb-15">
              {p}
            </p>
          ))}
        </div>

        <div className="pt-20 border-top mt-25 text-end">
          <button
            onClick={onClose}
            className="tp-btn-switch-animation tp-btn-black d-inline-block tp-ff-heading text-uppercase hover-text-white fw-500"
            style={{ padding: '10px 24px', fontSize: '13px', borderRadius: '30px', border: 'none' }}
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
