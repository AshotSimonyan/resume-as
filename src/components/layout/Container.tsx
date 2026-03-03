import type { PropsWithChildren } from 'react';

import { classNames } from '@/helpers/classNames';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const Container = ({ children, className }: ContainerProps) => (
  <div className={classNames('container', className)}>{children}</div>
);
