'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import SectionHeader from './ui/section-header';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: 'var(--section-py) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <SectionHeader
          eyebrow="Questions answered"
          title={<>Everything you&apos;re<br />wondering about.</>}
        />

        <div style={{ maxWidth: 700, margin: 'var(--sp-8) auto 0' }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <div
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--sp-5) 0',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    gap: 'var(--sp-5)',
                    transition: 'color 0.15s var(--ease-silk)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
                >
                  {item.question}
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      flexShrink: 0,
                      borderRadius: '50%',
                      border: `1.5px solid ${isOpen ? 'var(--accent)' : 'var(--border)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--accent)' : 'var(--text-muted)',
                      fontSize: '1.1rem',
                      fontWeight: 300,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s var(--ease-expo-out), border-color 0.2s var(--ease-silk), color 0.2s var(--ease-silk)',
                    }}
                  >
                    +
                  </span>
                </div>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: 'hidden',
                    fontSize: '0.9375rem',
                    color: 'var(--text-2)',
                    lineHeight: 1.7,
                    paddingBottom: isOpen ? 'var(--sp-5)' : 0,
                    transition: 'max-height 0.4s var(--ease-expo-out), padding 0.3s var(--ease-expo-out)',
                  }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
