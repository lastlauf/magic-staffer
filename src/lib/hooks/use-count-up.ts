'use client';

import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, isFloat: boolean = false, duration: number = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.unobserve(el);

            const start = performance.now();
            const ease = (t: number) => 1 - Math.pow(1 - t, 4);

            function frame(now: number) {
              const progress = Math.min((now - start) / duration, 1);
              const current = target * ease(progress);
              setValue(current);
              if (progress < 1) requestAnimationFrame(frame);
              else setValue(target);
            }

            requestAnimationFrame(frame);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const display = isFloat ? value.toFixed(1) : Math.round(value).toString();

  return { ref, display };
}
