import { TESTIMONIALS } from '@/lib/constants';
import SectionHeader from './ui/section-header';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--bg)',
        padding: 'var(--sp-10) 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--sp-8)' }}>
        <SectionHeader
          eyebrow="Real businesses"
          title={<>Crews who got their<br />weekends back.</>}
        />

        <div className="testi-grid-wrap" style={{ marginTop: 'var(--sp-8)' }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: 'var(--sp-7)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.25s var(--ease-expo-out), box-shadow 0.25s var(--ease-silk)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{ color: 'var(--amber)', fontSize: '0.875rem', letterSpacing: 2, marginBottom: 'var(--sp-4)' }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: '0.9375rem',
                  fontStyle: 'italic',
                  color: 'var(--text)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--sp-5)',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--accent-light)',
                    border: '2px solid rgba(255,90,95,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testi-grid-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--sp-5);
        }
        @media (max-width: 768px) {
          .testi-grid-wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
