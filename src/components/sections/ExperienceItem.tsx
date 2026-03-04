import type { ExperienceItem as ExperienceType } from '@/types';

type ExperienceItemProps = {
  item: ExperienceType;
  active: boolean;
  index: number;
  panelId: string;
  tabId: string;
};

export const ExperienceItem = ({ item, active, index, panelId, tabId }: ExperienceItemProps) => (
  <div className={`exp-panel ${active ? 'active' : ''}`} data-p={index} id={panelId} role="tabpanel" aria-labelledby={tabId}>
    <h3 className="exp-role">
      {item.title}{' '}
      <span>
        {item.companyUrl ? (
          <a href={item.companyUrl} target="_blank" rel="noreferrer">
            {item.company}
          </a>
        ) : (
          item.company
        )}
      </span>
    </h3>
    <p className="exp-date">{item.date}</p>
    <ul className="exp-list">
      {item.bullets.map((bullet) => (
        <li key={bullet} dangerouslySetInnerHTML={{ __html: bullet }} />
      ))}
    </ul>
  </div>
);
