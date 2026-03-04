import { render, screen } from '@testing-library/react';

import { ExperienceItem } from '@/components/sections/ExperienceItem';
import { siteData } from '@/data/siteData';

describe('ExperienceItem', () => {
  it('renders one experience entry', () => {
    const item = siteData.experiences[0];

    render(
      <ExperienceItem item={item} active={true} index={0} panelId="exp-panel-0" tabId="exp-tab-0" />
    );

    const panel = screen.getByRole('tabpanel');

    expect(screen.getByText(new RegExp(item.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(item.company, { exact: false })).toBeInTheDocument();

    item.bullets.forEach((bullet) => {
      const plainText = bullet.replace(/<[^>]*>/g, '');
      expect(panel).toHaveTextContent(plainText);
    });
  });
});
