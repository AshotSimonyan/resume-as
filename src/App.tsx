import { useEffect, useState } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Loader } from '@/components/layout/Loader';
import { Sidebars } from '@/components/layout/Sidebars';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Process } from '@/components/sections/Process';
import { Projects } from '@/components/sections/Projects';
import { siteData } from '@/data/siteData';
import { useSiteEffects } from '@/hooks/useSiteEffects';

const App = () => {
  const [loaderDone, setLoaderDone] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fadeTimeouts: number[] = [];
    const loaderTimeout = window.setTimeout(() => {
      setLoaderDone(true);

      document.querySelectorAll('#home .fade').forEach((element, index) => {
        const timeoutId = window.setTimeout(() => {
          element.classList.add('in');
        }, index * 110);
        fadeTimeouts.push(timeoutId);
      });
    }, 1200);

    return () => {
      window.clearTimeout(loaderTimeout);
      fadeTimeouts.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
    };
  }, []);

  useSiteEffects({
    setActiveSection,
    email: siteData.email,
    copiedEmailText: siteData.copy.toasts.copiedEmail
  });

  return (
    <>
      <div id="scroll-bar"></div>
      <canvas id="hero-canvas"></canvas>
      <div className="cursor-spotlight" id="cursor-spotlight"></div>

      <Loader done={loaderDone} copy={siteData.copy.loader} />

      <div className="site-shell">
        <Header
          navLinks={siteData.navLinks}
          resumeUrl={siteData.resumeUrl}
          activeSection={activeSection}
          mobileOpen={mobileOpen}
          onOpenMobile={() => setMobileOpen(true)}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <Sidebars socialLinks={siteData.socialLinks} email={siteData.email} />

        <main>
          <Hero data={siteData} />
          <About data={siteData} />
          <Experience data={siteData} />
          <Process data={siteData} />
          <Projects data={siteData} />
          <Contact data={siteData} />
        </main>

        <Footer
          socialLinks={siteData.socialLinks}
          siteName={siteData.name}
          creditPrefix={siteData.copy.footer.creditPrefix}
        />
      </div>
    </>
  );
};

export default App;
