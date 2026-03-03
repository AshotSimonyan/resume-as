import { memo } from 'react';

import type { SiteData } from '@/types';

type HeroProps = {
  data: SiteData;
};

const HeroComponent = ({ data }: HeroProps) => (
  <section id="home">
    <p className="hero-pre fade">Hi, my name is</p>
    <h1 className="hero-name fade" style={{ transitionDelay: '.1s' }}>
      {data.name}.
    </h1>
    <h2 className="hero-sub fade" style={{ transitionDelay: '.2s' }}>
      {data.headline}
    </h2>
    <p className="hero-desc fade" style={{ transitionDelay: '.3s' }} dangerouslySetInnerHTML={{ __html: data.heroDescription }} />
    <a href="#projects" className="hero-cta fade" style={{ transitionDelay: '.4s' }}>
      Check out my work
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  </section>
);

export const Hero = memo(HeroComponent);
