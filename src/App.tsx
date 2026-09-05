import React, { useState, useEffect } from 'react';
import { Loader } from './ui/Loader';
import { EnvatoTopBar } from './ui/TopBar';
import { Navigation } from './ui/Nav';
import { Header } from './ui/Header';
import { Hero } from './ui/Hero';
import { DemosGrid } from './ui/Demos';
import { FeaturesCards } from './ui/Features';
import { InnerPagesSlider } from './ui/InnerPages';
import { ComponentsShowcase } from './ui/Showcase';
import { ResponsiveShowcase } from './ui/Responsive';
import { CtaSection } from './ui/Cta';
import { Footer } from './ui/Footer';
import { ToTopButton } from './ui/ToTop';
import { DemoViewerModal } from './ui/DemoModal';

export function App() {
  const [activeDemo, setActiveDemo] = useState<{ url: string; title: string } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenDemo = (url: string, title: string) => {
    setActiveDemo({ url, title });
  };

  const handleCloseDemo = () => {
    setActiveDemo(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const items = document.querySelectorAll('.loading__fade, .loading__item');
      items.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.visibility = 'visible';
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <Loader />


      <EnvatoTopBar />


      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onScrollToDemo={() => {
          const el = document.getElementById('demo');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />


      <Navigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenDemoModal={handleOpenDemo}
      />


      <main id="content" className="mxd-main-content">
        <Hero />
        <DemosGrid onOpenDemo={handleOpenDemo} />
        <FeaturesCards onOpenDemo={handleOpenDemo} />
        <InnerPagesSlider onOpenDemo={handleOpenDemo} />
        <ComponentsShowcase />
        <ResponsiveShowcase />
        <CtaSection />
      </main>


      <Footer onOpenDemo={handleOpenDemo} />


      <ToTopButton />


      <DemoViewerModal
        url={activeDemo?.url || null}
        title={activeDemo?.title || null}
        onClose={handleCloseDemo}
      />
    </>
  );
}

export default App;
