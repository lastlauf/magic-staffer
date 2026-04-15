import { FEATURES } from '@/lib/constants';
import SectionHeader from './ui/section-header';

const FEATURE_ICONS = [
  // Smart Scheduling
  <svg key="schedule" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="3" stroke="#FF5A5F" strokeWidth="2" />
    <path d="M3 10h18" stroke="#FF5A5F" strokeWidth="2" />
    <path d="M8 2v4M16 2v4" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="15" r="1.5" fill="#FF5A5F" />
    <circle cx="12" cy="15" r="1.5" fill="#FF5A5F" />
  </svg>,
  // Auto Reminders
  <svg key="reminders" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3a6 6 0 0 1 6 6c0 3 .8 5.2 1.6 6.5.3.4-.1 1-.6 1H5c-.5 0-.9-.6-.6-1C5.2 14.2 6 12 6 9a6 6 0 0 1 6-6z" stroke="#FF5A5F" strokeWidth="2" />
    <path d="M10 20.5a2.5 2.5 0 0 0 4 0" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Instant Invoicing
  <svg key="invoicing" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18l-3-2-3 2-3-2-3 2-3-2V4z" stroke="#FF5A5F" strokeWidth="2" strokeLinejoin="round" />
    <path d="M8 8h8M8 12h5" stroke="#FF5A5F" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Supply Ordering
  <svg key="supply" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="#FF5A5F" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 12l9-5M12 12v10M12 12L3 7" stroke="#FF5A5F" strokeWidth="2" />
  </svg>,
  // Morning Digest
  <svg key="digest" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" stroke="#FF5A5F" strokeWidth="2" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Card Payments
  <svg key="payments" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="3" stroke="#FF5A5F" strokeWidth="2" />
    <path d="M2 10h20" stroke="#FF5A5F" strokeWidth="2" />
    <path d="M6 15h4" stroke="#FF5A5F" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Multi-Crew
  <svg key="crew" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="3" stroke="#FF5A5F" strokeWidth="2" />
    <path d="M3 21v-1a5 5 0 0 1 10 0v1" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="8" r="2.5" stroke="#FF5A5F" strokeWidth="1.8" />
    <path d="M21 21v-.5a4 4 0 0 0-3-3.9" stroke="#FF5A5F" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Weekly Reports
  <svg key="reports" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7 17V11M12 17V7M17 17v-4" stroke="#FF5A5F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M3 21h18" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" />
  </svg>,
];

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
                className="feat-icon"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: 'var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--sp-4)',
                  flexShrink: 0,
                }}
              >
                {FEATURE_ICONS[i]}
              </div>
              <div className="feat-text">
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)', marginBottom: 'var(--sp-2)' }}>
                  {feature.title}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
                  {feature.description}
                </div>
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
          .feat-grid-wrap {
            grid-template-columns: 1fr;
            gap: var(--sp-3);
          }
          .feat-grid-wrap > :global(.feat-card-el) {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: var(--sp-4) !important;
            padding: var(--sp-4) var(--sp-5) !important;
            border-radius: 14px !important;
          }
          .feat-grid-wrap > :global(.feat-card-el) :global(.feat-icon) {
            margin-bottom: 0 !important;
          }
          .feat-grid-wrap > :global(.feat-card-el) :global(.feat-text) {
            flex: 1;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
}
