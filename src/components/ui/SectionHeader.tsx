import type { ReactNode } from 'react';

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export const SectionHeader = ({ id, eyebrow, title, description }: SectionHeaderProps) => (
  <header className="mb-10 max-w-2xl">
    {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
    <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
      {title}
    </h2>
    {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
  </header>
);
