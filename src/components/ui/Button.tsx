import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/helpers/classNames';

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ActionButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClass =
  'inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition-colors';

const variants = {
  primary: 'border-primary bg-primary text-white hover:bg-primary/90 dark:text-slate-900',
  ghost: 'border-border bg-transparent text-text hover:bg-surface/80'
};

export const Button = ({ children, className, variant = 'primary', ...props }: LinkButtonProps | ActionButtonProps) => {
  const mergedClassName = classNames(baseClass, variants[variant], className);

  if ('href' in props && props.href) {
    return (
      <a {...props} className={mergedClassName}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return <button {...buttonProps} className={mergedClassName} type={buttonProps.type ?? 'button'}>{children}</button>;
};
