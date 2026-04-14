import { PRICING_TIERS } from '@/lib/constants';
import SectionHeader from './ui/section-header';

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: 'var(--surface)',
        padding: 'var(--section-py) 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <SectionHeader
          eyebrow="Transparent pricing"
          title={<>Pricing that grows<br />with your crew.</>}
          subtitle="No setup fees. No contracts. Cancel or upgrade anytime."
        />

        <div className="pricing-grid-wrap" style={{ marginTop: 'var(--sp-8)' }}>
          {PRICING_TIERS.map((tier, i) => (
            <div
              key={i}
              className="reveal pricing-card"
              style={{
                border: `1.5px solid ${tier.featured ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 20,
                padding: 'var(--sp-7)',
                background: tier.featured ? 'var(--surface)' : 'var(--bg)',
                position: 'relative',
                boxShadow: tier.featured
                  ? '0 0 0 3px rgba(255,90,95,0.08), var(--shadow-lg)'
                  : 'none',
                transition: 'transform 0.25s var(--ease-expo-out), box-shadow 0.25s var(--ease-silk)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = tier.featured
                  ? '0 0 0 3px rgba(255,90,95,0.08), var(--shadow-xl)'
                  : 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = tier.featured
                  ? '0 0 0 3px rgba(255,90,95,0.08), var(--shadow-lg)'
                  : 'none';
              }}
            >
              {tier.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: 100,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most popular
                </div>
              )}

              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: 'var(--sp-2)' }}>
                {tier.name}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.25rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 2 }}>
                <sup style={{ fontSize: '1.25rem', verticalAlign: 'super', lineHeight: 0 }}>$</sup>
                {tier.price}
              </div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--sp-5)',
                  paddingBottom: 'var(--sp-5)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {tier.period}
              </div>

              <ul style={{ listStyle: 'none', marginBottom: 'var(--sp-7)' }}>
                {tier.features.map((feature, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: '0.9375rem',
                      color: 'var(--text-2)',
                      padding: '5px 0',
                    }}
                  >
                    <span style={{ color: 'var(--green-2)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: '100%',
                  padding: 13,
                  borderRadius: 12,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: tier.featured ? 'none' : '1.5px solid var(--border)',
                  background: tier.featured ? 'var(--accent)' : 'transparent',
                  color: tier.featured ? 'white' : 'var(--text)',
                  transition: 'transform 0.15s var(--ease-spring), box-shadow 0.15s var(--ease-silk), border-color 0.15s var(--ease-silk), color 0.15s var(--ease-silk)',
                }}
                onMouseEnter={(e) => {
                  if (tier.featured) {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,90,95,0.35)';
                  } else {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  if (!tier.featured) {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text)';
                  }
                }}
              >
                Start free trial
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 'var(--sp-5)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          + 0.5% on card payments processed through Magic Staffer. No monthly minimum.
        </p>
      </div>

      <style jsx>{`
        .pricing-grid-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--sp-5);
        }
        @media (max-width: 768px) {
          .pricing-grid-wrap { grid-template-columns: 1fr; gap: var(--sp-4); }
          .pricing-grid-wrap > :global(.pricing-card) { padding: var(--sp-5) !important; }
        }
      `}</style>
    </section>
  );
}
