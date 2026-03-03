import { render, screen } from '@testing-library/react';

import { Header } from '@/components/layout/Header';
import { siteData } from '@/data/siteData';

describe('Header', () => {
  it('renders nav links and resume button', () => {
    render(
      <Header
        navLinks={siteData.navLinks}
        resumeUrl={siteData.resumeUrl}
        activeSection="about"
        mobileOpen={false}
        onOpenMobile={jest.fn()}
        onCloseMobile={jest.fn()}
      />
    );

    expect(screen.getAllByRole('link', { name: 'About' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
  });
});
