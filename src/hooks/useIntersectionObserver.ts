import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  sectionId?: string;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  sectionId,
}: UseIntersectionObserverOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  // Check if section was already seen in this session
  const getWasAlreadySeen = () => {
    if (!sectionId) return false;
    try {
      return sessionStorage.getItem(`section-seen-${sectionId}`) === 'true';
    } catch {
      return false;
    }
  };

  const [isVisible, setIsVisible] = useState(getWasAlreadySeen);

  useEffect(() => {
    // If already seen, no need for observer
    if (getWasAlreadySeen()) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Save to sessionStorage
          if (sectionId) {
            try {
              sessionStorage.setItem(`section-seen-${sectionId}`, 'true');
            } catch {
              // Ignore storage errors
            }
          }
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, sectionId]);

  return { ref, isVisible };
}
