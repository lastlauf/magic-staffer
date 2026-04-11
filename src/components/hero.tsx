'use client';

import PhoneMockup from './ui/phone-mockup';
import LeadCaptureForm from './ui/lead-capture-form';

const HERO_MESSAGES = [
  { text: 'Book Rosa at Johnson house Thursday 9am', direction: 'out' as const, time: '9:01 AM' },
  { text: 'Done! Rosa confirmed for Thu 9am at Johnson house. Client notified.', direction: 'in' as const, time: '9:01 AM', emoji: '✅' },
  { text: 'Send invoice to Johnson, $240', direction: 'out' as const, time: '9:04 AM' },
  { text: 'Invoice sent to Sarah Johnson — card payment link included. You\'ll get notified when she pays.', direction: 'in' as const, time: '9:04 AM', emoji: '💳' },
  { text: 'Running low on microfiber cloths', direction: 'out' as const, time: '9:07 AM' },
  { text: 'Order placed with CleanPro Supply — 24 cloths, delivery Thursday. Want a low-stock reminder next time?', direction: 'in' as const, time: '9:07 AM', emoji: '📦' },
];

export default function Hero() {
  return (
    <section className="hero-section" style={{ paddingTop: 120, paddingBottom: 96, overflow: 'visible' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <div className="hero-grid">
          {/* Left Column — Content */}
          <div style={{ maxWidth: 540 }}>
            <div
              className="reveal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                padding: '7px 16px',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--text-2)',
                marginBottom: 'var(--sp-5)',
                boxShadow: 'var(--shadow-xs)',
              }}
            >
              <span style={{ color: 'var(--amber)', letterSpacing: 1, fontSize: '0.75rem' }}>★★★★★</span>
              <span>4.9 · Trusted by 200+ service crews</span>
            </div>

            <h1
              className="reveal"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: 'var(--sp-5)',
                transitionDelay: '0.08s',
              }}
            >
              Run your whole crew from{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>one WhatsApp number.</em>
            </h1>

            <p
              className="reveal"
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-2)',
                lineHeight: 1.65,
                marginBottom: 'var(--sp-7)',
                maxWidth: 440,
                transitionDelay: '0.16s',
              }}
            >
              Staffable handles scheduling, job reminders, invoices, and supply orders — all inside
              the conversations you&apos;re already having. No app. No training. Five minutes to set up.
            </p>

            <div className="reveal" style={{ transitionDelay: '0.24s' }}>
              <LeadCaptureForm variant="hero" />
            </div>

            <p
              className="reveal"
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 'var(--sp-4)',
                transitionDelay: '0.32s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="#A8A29E" strokeWidth="1.4" />
                <path d="M5 7.5l1.8 1.8L10.5 5.5" stroke="#A8A29E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Free 30-day trial&nbsp;·&nbsp;No credit card&nbsp;·&nbsp;Cancel anytime
            </p>
          </div>

          {/* Right Column — Phone Visual */}
          <div className="hero-visual-col">
            <div style={{ position: 'relative' }}>
              {/* Decorative blobs */}
              <div
                style={{
                  position: 'absolute',
                  width: 380,
                  height: 380,
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                  background: 'rgba(255,90,95,0.06)',
                  top: -80,
                  right: -60,
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: 260,
                  height: 260,
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                  background: 'rgba(34,197,94,0.05)',
                  bottom: 60,
                  right: 120,
                  pointerEvents: 'none',
                }}
              />

              <div className="phone-tilt-wrap">
                <PhoneMockup messages={HERO_MESSAGES} />
              </div>

              {/* Floating Badges */}
              <div className="fbadge fbadge-1">
                <span style={{ fontSize: '1.3rem' }}>⏱️</span>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', lineHeight: 1.2 }}>Saves 4+ hrs</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>every week</div>
                </div>
              </div>
              <div className="fbadge fbadge-2">
                <span style={{ fontSize: '1.3rem' }}>💰</span>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', lineHeight: 1.2 }}>94% paid</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>on time</div>
                </div>
              </div>
              <div className="fbadge fbadge-3">
                <span style={{ fontSize: '1.3rem' }}>⚡</span>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', lineHeight: 1.2 }}>5-min setup</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>no app needed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--sp-9);
          align-items: center;
        }
        .hero-visual-col {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          position: relative;
        }
        .phone-tilt-wrap {
          transform: rotate(2deg);
          filter: drop-shadow(0 32px 64px rgba(0,0,0,0.14));
          transition: transform 0.4s var(--ease-silk);
        }
        .phone-tilt-wrap:hover {
          transform: rotate(0deg);
        }
        .fbadge {
          position: absolute;
          background: white;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 10px 14px;
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .fbadge-1 { top: -10px; right: -24px; animation: floatA 3s var(--ease-silk) infinite alternate; }
        .fbadge-2 { bottom: 36px; left: -44px; animation: floatB 3.4s var(--ease-silk) infinite alternate; }
        .fbadge-3 { top: 44%; right: -52px; animation: floatA 2.8s var(--ease-silk) infinite alternate 1.2s; }

        @media (max-width: 768px) {
          .hero-section { padding-top: 80px !important; padding-bottom: 56px !important; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-visual-col { display: none; }
        }
      `}</style>
    </section>
  );
}
