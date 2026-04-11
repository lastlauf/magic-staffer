'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import PhoneMockup from './ui/phone-mockup';
import SectionHeader from './ui/section-header';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = useCallback((from: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    let cur = from;
    autoRef.current = setInterval(() => {
      cur = (cur + 1) % HOW_IT_WORKS_STEPS.length;
      setActiveStep(cur);
    }, 3600);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAuto(0);
          } else if (autoRef.current) {
            clearInterval(autoRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [startAuto]);

  const handleStepClick = (index: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    setActiveStep(index);
    startAuto(index);
  };

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{
        background: 'var(--surface)',
        padding: 'var(--section-py) 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <SectionHeader
          eyebrow="Simple by design"
          title={<>Your whole business,<br />one WhatsApp conversation.</>}
          subtitle="Just text Staffable like you'd text a team member. It handles the rest."
        />

        <div className="hiw-grid-wrap">
          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div
                key={i}
                onClick={() => handleStepClick(i)}
                style={{
                  display: 'flex',
                  gap: 'var(--sp-5)',
                  padding: 'var(--sp-4) var(--sp-5)',
                  borderRadius: 16,
                  cursor: 'pointer',
                  background: activeStep === i ? 'var(--bg)' : 'transparent',
                  transition: 'background 0.2s var(--ease-silk)',
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    flexShrink: 0,
                    borderRadius: '50%',
                    background: activeStep === i ? 'var(--accent)' : 'var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: activeStep === i ? 'white' : 'var(--text-muted)',
                    marginTop: 3,
                    transition: 'background 0.2s var(--ease-silk), color 0.2s var(--ease-silk)',
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      maxHeight: activeStep === i ? 120 : 0,
                      overflow: 'hidden',
                      opacity: activeStep === i ? 1 : 0,
                      transition: 'max-height 0.4s var(--ease-expo-out), opacity 0.3s var(--ease-silk)',
                    }}
                  >
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Demo */}
          <div className="demo-wrap-col">
            <div style={{ position: 'sticky', top: 96 }}>
              <div style={{ width: 264, margin: '0 auto' }}>
                <PhoneMockup
                  messages={[...HOW_IT_WORKS_STEPS[activeStep].messages]}
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hiw-grid-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .hiw-grid-wrap { grid-template-columns: 1fr; }
          .demo-wrap-col { display: none; }
        }
      `}</style>
    </section>
  );
}
