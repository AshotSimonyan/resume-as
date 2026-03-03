import { useEffect, useRef, useState } from 'react';

import { ExperienceItem } from '@/components/sections/ExperienceItem';
import type { SiteData } from '@/types';

type ExperienceProps = {
  data: SiteData;
};

export const Experience = ({ data }: ExperienceProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (!activeTab) {
      return;
    }

    setIndicatorTop(activeTab.offsetTop);
  }, [activeIndex]);

  useEffect(() => {
    const onResize = () => {
      const activeTab = tabRefs.current[activeIndex];
      if (activeTab) {
        setIndicatorTop(activeTab.offsetTop);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [activeIndex]);

  return (
    <section id="experience">
      <h2 className="section-heading fade" data-n="02. ">
        Where I've Worked
      </h2>

      <div className="exp-wrap fade">
        <ul className="exp-tabs" role="tablist">
          <div className="exp-indicator" style={{ top: `${indicatorTop}px` }}></div>
          {data.experiences.map((experience, index) => (
            <li key={experience.company}>
              <button
                className={`exp-tab ${activeIndex === index ? 'active' : ''}`}
                data-t={index}
                role="tab"
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
            <ExperienceItem key={experience.company} item={experience} active={activeIndex === index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
