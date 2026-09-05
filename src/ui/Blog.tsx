import React, { useState } from 'react';
import { ArticleData, ArticleModal } from './ArticleModal';

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

  const articles: ArticleData[] = [
    {
      id: 'b1',
      category: 'Web Design',
      date: '02 Feb, 2025',
      title: 'How to Conduct Effective User Research for Better Product Decisions',
      image: '/assets/img/blog/pp/thumb.jpg',
      content: [
        'User research is the bedrock of world-class digital product design. Before putting pen to paper or pixels to canvas, deeply understanding user motivations, pains, and daily workflows is crucial.',
        'Through qualitative 1-on-1 interviews, contextual inquiries, and rapid usability testing, product teams uncover actionable behavioral patterns that prevent costly engineering rework.',
        'Synthesizing insights into interactive wireframes ensures that every design choice directly serves human needs while driving clear business results.',
      ],
    },
    {
      id: 'b2',
      category: 'AI Trends',
      date: '02 Feb, 2025',
      title: 'How to Conduct Effective User Research for Better Product Decisions',
      image: '/assets/img/blog/pp/thumb-2.jpg',
      content: [
        'Artificial intelligence is shifting interfaces from static, one-size-fits-all layouts into adaptive, context-aware canvases.',
        'Design systems of the future will dynamically adjust hierarchy, density, and micro-interactions based on user intent and task urgency.',
        'As designers, our role expands from creating individual screens to orchestrating intelligent rules and ethical aesthetic frameworks.',
      ],
    },
    {
      id: 'b3',
      category: 'Web Design',
      date: '02 Feb, 2025',
      title: 'How to Conduct Effective User Research for Better Product Decisions',
      image: '/assets/img/blog/pp/thumb-3.jpg',
      content: [
        'Typography is the voice of your digital application. Crafting proportional font scales using mathematical ratios gives interfaces rhythm and clarity.',
        'Pairing high-contrast display typefaces with readable, open-counter body fonts establishes effortless visual scanning across complex dashboards.',
        'Consistent padding tokens and optical balance make interfaces feel calm, intentional, and undeniably refined.',
      ],
    },
  ];

  return (
    <>
      <div id="blog" className="tp-blog-area pt-150 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-blog-subtitle mb-30 tp_fade_anim">
                <span className="tp-section-subtitle tp-ff-heading fw-500 tp-text-common-black fs-16">
                  <span className="borders d-inline-block"></span>Latest Journal
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tp-blog-pp-title-wrap mb-60 tp_fade_anim">
                <h2 className="tp-section-pp-title fs-70 fs-lg-50 fs-xs-40 fw-700 mb-10">My Blog</h2>
                <p className="fs-18 lh-150-per">
                  Strategists dedicated to creating stunning,<br /> functional websites that align with your unique<br /> business goals.
                </p>
              </div>
            </div>

            {articles.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="tp-blog-item tp--hover-item tp-blog-pp-item mb-40 tp_fade_anim">
                  <div
                    onClick={() => setSelectedArticle(item)}
                    className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
                    style={{ cursor: 'pointer', width: '100%' }}
                  >
                    <div className="tp--hover-img">
                      <img className="w-100" src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div className="tp-blog-content text-center">
                    <div className="tp-blog-meta mb-15">
                      <span>{item.category}</span>
                      <span className="borders"></span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="fs-25 fs-xl-22 lh-140-per">
                      <a
                        className="underline-black"
                        href="#blog"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedArticle(item);
                        }}
                      >
                        {item.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </>
  );
};

