import { render, screen } from '@testing-library/react';

import { ExperienceItem } from '@/components/sections/ExperienceItem';
import { siteData } from '@/data/siteData';

describe('ExperienceItem', () => {
  it('renders one experience entry', () => {
    const item = siteData.experiences[0];

    render(
      <ExperienceItem item={item} active={true} index={0} panelId="exp-panel-0" tabId="exp-tab-0" />
    );

    expect(screen.getByText(new RegExp(item.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(item.company, { exact: false })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Developed');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('AI-driven tools');
  });
});
