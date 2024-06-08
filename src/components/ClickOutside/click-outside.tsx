import React, { memo, ReactNode, useRef } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';

export const EXCEPT_SELECTORS = [
  "div[class*='example-for-exception']",
  '[data-click-outside="except-selector"]',
  '[data-except-selector="dot-menu"]',
];

export type ClickOutsideProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  exceptSelectors?: string[];
  onOutsideClick: (e?: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const ClickOutside = memo(
  ({
    onOutsideClick = () => null,
    exceptSelectors,
    children,
    className,
  }: ClickOutsideProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useClickOutside(wrapperRef, onOutsideClick, exceptSelectors);

    return (
      <div
        style={{ width: '100%', height: '100%' }}
        ref={wrapperRef}
        data-click-outside
        className={className}
      >
        {children}
      </div>
    );
  },
);
ClickOutside.displayName = 'ClickOutside';
