
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-in-right' | 'scale-in';
}

export const AnimatedContainer = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in'
}: AnimatedContainerProps) => {
  return (
    <div
      className={cn(
        `opacity-0 animate-${animation}`,
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-in-right';
  threshold?: number;
}

export const RevealOnScroll = ({
  children,
  className,
  animation = 'fade-in',
  threshold = 0.1
}: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isVisible ? `animate-${animation}` : 'opacity-0'
      )}
      style={{ animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export const FloatingElement = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div className={cn('animate-float', className)}>
      {children}
    </div>
  );
};

export const PulseElement = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div className={cn('animate-pulse-subtle', className)}>
      {children}
    </div>
  );
};
