import { render, screen } from '@testing-library/react';

import { Hero } from '@/components/sections/Hero';
import { siteData } from '@/data/siteData';

describe('Hero', () => {
  it('renders headline and call to action', () => {
    render(<Hero data={siteData} />);

    expect(screen.getByRole('heading', { level: 1, name: /ashot simonyan/i })).toBeInTheDocument();
    expect(screen.getByText(siteData.headline)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /check out my work/i })).toBeInTheDocument();
  });
});
