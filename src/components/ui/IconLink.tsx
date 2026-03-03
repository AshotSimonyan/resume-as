import type { SocialLink } from '@/types';

const iconPaths: Record<SocialLink['icon'], string> = {
  github:
    'M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.33.73-4.03-1.6-4.03-1.6a3.17 3.17 0 0 0-1.34-1.76c-1.1-.74.08-.73.08-.73a2.51 2.51 0 0 1 1.83 1.24a2.56 2.56 0 0 0 3.5 1a2.55 2.55 0 0 1 .76-1.6c-2.66-.3-5.47-1.33-5.47-5.9A4.63 4.63 0 0 1 5.6 9.8a4.31 4.31 0 0 1 .12-3.17s1-.33 3.3 1.23a11.35 11.35 0 0 1 6 0c2.28-1.56 3.29-1.23 3.29-1.23a4.31 4.31 0 0 1 .12 3.17a4.62 4.62 0 0 1 1.23 3.2c0 4.58-2.81 5.6-5.48 5.9a2.84 2.84 0 0 1 .81 2.2v3.26c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5ZM2.5 9.5h5v12h-5v-12Zm8 0h4.8v1.72h.07c.67-1.2 2.31-2.47 4.75-2.47c5.08 0 6.02 3.34 6.02 7.69v8.06h-5v-7.15c0-1.7-.03-3.9-2.38-3.9c-2.39 0-2.76 1.86-2.76 3.78v7.27h-5v-12Z',
  twitter:
    'M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38a8.56 8.56 0 0 1-2.72 1.04a4.27 4.27 0 0 0-7.27 3.89a12.12 12.12 0 0 1-8.8-4.46a4.27 4.27 0 0 0 1.32 5.7a4.25 4.25 0 0 1-1.94-.54v.05a4.27 4.27 0 0 0 3.42 4.18a4.3 4.3 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.96A8.58 8.58 0 0 1 2 19.54A12.1 12.1 0 0 0 8.56 21c7.87 0 12.17-6.52 12.17-12.17c0-.19 0-.37-.01-.55A8.63 8.63 0 0 0 24 5.1a8.46 8.46 0 0 1-2.54.7Z',
  codepen:
    'M12 2L2 8.5v7L12 22l10-6.5v-7L12 2Zm8 7.28L13 13.77v5.52l7-4.55v-5.46Zm-16 0v5.46l7 4.55v-5.52L4 9.28Zm1.82-1.48L12 11.79l6.18-3.99L12 3.77L5.82 7.8Z'
};

type IconLinkProps = {
  link: SocialLink;
};

export const IconLink = ({ link }: IconLinkProps) => (
  <a
    href={link.href}
    target="_blank"
    rel="noreferrer"
    aria-label={link.label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-primary"
  >
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPaths[link.icon]} />
    </svg>
  </a>
);
