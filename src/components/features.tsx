import { FEATURES } from '@/lib/constants';
import SectionHeader from './ui/section-header';

export default function Features() {
  return (
    <section id="features" style={{ padding: 'var(--section-py) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <SectionHeader
          eyebrow="Everything included"
          title={<>Every tool you need.<br />Nothing you don&apos;t.</>}
        />

        <div className="feat-grid-wrap" style={{ marginTop: 'var(--sp-8)' }}>
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="reveal feat-card-el"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: 'var(--sp-6)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.25s var(--ease-expo-out), box-shadow 0.25s var(--ease-silk)',
                transitionDelay: `${(i % 4) * 0.06}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: 'var(--bg)',
                  border: '1px solid var(--border-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  marginBottom: 'var(--sp-4)',
                }}
              >
                {feature.icon}
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)', marginBottom: 'var(--sp-2)' }}>
                {feature.title}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feat-grid-wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--sp-5);
        }
        @media (max-width: 1024px) {
          .feat-grid-wrap { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .feat-grid-wrap { grid-template-columns: 1fr 1fr; gap: var(--sp-3); }
          .feat-grid-wrap > :global(.feat-card-el) {
            padding: var(--sp-4) !important;
            border-radius: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
