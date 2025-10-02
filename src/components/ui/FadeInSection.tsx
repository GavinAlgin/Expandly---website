// src/components/ui/FadeInSection.tsx
import React from 'react';
import { useInView } from '../../utils/useInView';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const FadeInSection: React.FC<Props> = ({ children, className }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out transform',
        'opacity-0 translate-y-10',
        isInView && 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
};
