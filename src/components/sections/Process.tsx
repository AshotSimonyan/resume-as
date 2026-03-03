import type { ReactNode } from 'react';

import type { ProcessStep, SiteData } from '@/types';

type ProcessProps = {
  data: SiteData;
};

const iconMap: Record<ProcessStep['icon'], ReactNode> = {
  scope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
      <circle cx="9" cy="12" r="0" fill="currentColor" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  mentor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  demo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  ship: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
};

export const Process = ({ data }: ProcessProps) => (
  <section id="process">
    <h2 className="section-heading fade" data-n="03. ">
      How I Work
    </h2>
    <p className="process-subtitle fade">
      A transparent, collaborative process - from first kickoff to final ship. Here's what working with me actually
      looks like.
    </p>

    <div className="process-grid">
      {data.processSteps.map((step) => (
        <div className="process-card fade" key={step.step}>
          <span className="process-step">{step.step}</span>
          <span className="process-icon">{iconMap[step.icon]}</span>
          <h3 className="process-title">{step.title}</h3>
          <p className="process-desc" dangerouslySetInnerHTML={{ __html: step.description }} />
          <ul className="process-tags">
            {step.tags.map((tag) => (
              <li className="process-tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
