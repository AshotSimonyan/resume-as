import { useCallback, useEffect, useRef, useState } from 'react';

import { ExperienceItem } from '@/components/sections/ExperienceItem';
import type { SiteData } from '@/types';

type ExperienceProps = {
  data: SiteData;
};

export const Experience = ({ data }: ExperienceProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const updateIndicator = useCallback(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (!activeTab || !indicatorRef.current) {
      return;
    }

    indicatorRef.current.style.top = `${activeTab.offsetTop}px`;
  }, [activeIndex]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [updateIndicator]);

  return (
    <section id="experience">
      <h2 className="section-heading fade" data-n={data.copy.experience.number}>
        {data.copy.experience.title}
      </h2>

      <div className="exp-wrap fade">
        <ul className="exp-tabs" role="tablist">
          <div className="exp-indicator" ref={indicatorRef}></div>
          {data.experiences.map((experience, index) => (
            <li key={experience.company}>
              <button
                className={`exp-tab ${activeIndex === index ? 'active' : ''}`}
                data-t={index}
                role="tab"
                id={`exp-tab-${index}`}
                aria-selected={activeIndex === index}
                aria-controls={`exp-panel-${index}`}
                onClick={() => setActiveIndex(index)}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
              >
                {experience.tabLabel}
              </button>
            </li>
          ))}
        </ul>

        <div className="exp-panels">
          {data.experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.company}
              item={experience}
              active={activeIndex === index}
              index={index}
              panelId={`exp-panel-${index}`}
              tabId={`exp-tab-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
