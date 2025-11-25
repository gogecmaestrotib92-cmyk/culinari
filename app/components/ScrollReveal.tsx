'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClass = () => {
    const base = 'transition-opacity duration-500 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${base} opacity-0 translate-y-8 transition-transform duration-500`;
        case 'down':
          return `${base} opacity-0 -translate-y-8 transition-transform duration-500`;
        case 'left':
          return `${base} opacity-0 translate-x-8 transition-transform duration-500`;
        case 'right':
          return `${base} opacity-0 -translate-x-8 transition-transform duration-500`;
        case 'zoom':
          return `${base} opacity-0 scale-95 transition-transform duration-500`;
        default:
          return `${base} opacity-0 translate-y-8 transition-transform duration-500`;
      }
    }
    
    return `${base} opacity-100 translate-y-0 translate-x-0 scale-100 transition-transform duration-500`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
