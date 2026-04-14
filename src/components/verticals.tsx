'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import PhoneMockup from './ui/phone-mockup';
import SectionHeader from './ui/section-header';
import { VERTICALS } from '@/lib/constants';

export default function Verticals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const vertical = VERTICALS[activeIndex];

  const startAuto = useCallback((from: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    let cur = from;
    autoRef.current = setInterval(() => {
      cur = (cur + 1) % VERTICALS.length;
      setActiveIndex(cur);
    }, 5000);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startAuto(0);
          else if (autoRef.current) clearInterval(autoRef.current);
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

  const handleTabClick = (index: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = null;
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      id="verticals"
      style={{ padding: 'var(--section-py) 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <SectionHeader
          eyebrow="Built for your industry"
          title={<>See Magic Staffer in <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>your</em> world.</>}
          subtitle="Real conversations. Real workflows. Real results."
        />

        {/* Tab Bar */}
        <div
          className="verticals-tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--sp-2)',
            marginBottom: 'var(--sp-8)',
          }}
        >
          {VERTICALS.map((v, i) => (
            <button
              key={i}
              onClick={() => handleTabClick(i)}
              style={{
                padding: '8px 16px',
                borderRadius: 100,
                border: `1.5px solid ${activeIndex === i ? 'var(--accent)' : 'var(--border)'}`,
                background: activeIndex === i ? 'var(--accent-light)' : 'var(--surface)',
                color: activeIndex === i ? 'var(--accent)' : 'var(--text-2)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.2s var(--ease-silk)',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{v.emoji}</span>
              {v.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="verticals-content-grid">
          {/* Left — Persona Card */}
          <div
            className="verticals-persona-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: 'var(--sp-7)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'var(--sp-5)' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                {vertical.emoji}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.0625rem', color: 'var(--text)' }}>{vertical.persona}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{vertical.business}</div>
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: 'var(--sp-3)',
                lineHeight: 1.3,
              }}
            >
              Problem: {vertical.painPoint}
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 'var(--sp-5)' }}>
              See how {vertical.persona} uses Magic Staffer to automate {vertical.name.toLowerCase()} operations — from booking to payment, all through WhatsApp.
            </p>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
              {vertical.metrics.map((metric, j) => (
                <div
                  key={j}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 8,
                    background: 'var(--surface-green)',
                    border: '1px solid rgba(34,197,94,0.15)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--green-dark)',
                  }}
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="verticals-phone-col" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  width: 280,
                  height: 280,
                  borderRadius: '50%',
                  filter: 'blur(50px)',
                  background: 'rgba(255,90,95,0.06)',
                  top: -60,
                  right: -50,
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  filter: 'blur(50px)',
                  background: 'rgba(34,197,94,0.05)',
                  bottom: 40,
                  left: -40,
                  pointerEvents: 'none',
                }}
              />
              <div className="phone-tilt-wrap">
                <PhoneMockup
                  messages={[...vertical.messages]}
                  headerName="Magic Staffer"
                  headerEmoji={vertical.emoji}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone-tilt-wrap {
          transform: rotate(2deg);
          filter: drop-shadow(0 32px 64px rgba(0,0,0,0.14));
          transition: transform 0.4s var(--ease-silk);
        }
        .phone-tilt-wrap:hover {
          transform: rotate(0deg);
        }
        .verticals-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp-8);
          align-items: start;
        }
        @media (max-width: 768px) {
          .verticals-tabs {
            justify-content: flex-start !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: var(--sp-2);
            margin-left: calc(var(--container-px) * -1);
            margin-right: calc(var(--container-px) * -1);
            padding-left: var(--container-px);
            padding-right: var(--container-px);
          }
          .verticals-tabs::-webkit-scrollbar { display: none; }
          .verticals-content-grid { grid-template-columns: 1fr; }
          .verticals-phone-col { display: none; }
          .verticals-persona-card { padding: var(--sp-5) !important; }
        }
      `}</style>
    </section>
  );
}
