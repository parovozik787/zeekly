import React, { JSX } from 'react';
import { clsx } from 'clsx';

import './Typography.scss';

type TypographySize = '12' | '14' | '16' | '18' | '24' | '32';
type TypographyWeight = '400' | '500' | '600';
type TypographyColor = 'black' | 'dark' | 'white' | 'shark' | 'green' | 'red';
type TypographyLineHeight = '120' | '90';

interface TypographyProps {
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: TypographyColor;
  lineHeight?: TypographyLineHeight;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Typography = ({
  size = '14',
  weight = '400',
  color = 'black',
  lineHeight = '120',
  children,
  className,
  as = 'p',
}: TypographyProps) => {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        `typography-size-${size}`,
        `typography-weight-${weight}`,
        `typography-color-${color}`,
        `typography-lh-${lineHeight}`,
        className
      )}
    >
      {children}
    </Tag>
  );
};
