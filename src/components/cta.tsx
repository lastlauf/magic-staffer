'use client';

import LeadCaptureForm from './ui/lead-capture-form';

export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: 'linear-gradient(135deg, #FF5A5F 0%, #FF8566 100%)',
        padding: 'var(--section-py) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ghost text */}
      <div className="cta-ghost-text">Staffable</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)', position: 'relative' }}>
        <div style={{ textAlign: 'center' }}>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 'var(--sp-4)',
            }}
          >
            Your crew is ready.<br />
            <em style={{ fontStyle: 'italic', opacity: 0.92 }}>Are you?</em>
          </h2>

          <p
            className="reveal"
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 'var(--sp-7)',
              maxWidth: 460,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Start your free 30-day trial. No credit card. No contract. Sign up now and you&apos;re running in 5 minutes.
          </p>

          <div className="reveal" style={{ maxWidth: 480, margin: '0 auto var(--sp-4)' }}>
            <LeadCaptureForm variant="cta" />
          </div>

          <p className="reveal" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)' }}>
            Free for 30 days&nbsp;·&nbsp;5-minute setup&nbsp;·&nbsp;Cancel anytime
          </p>
        </div>
      </div>

      <style jsx>{`
        .cta-ghost-text {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: 18rem;
          font-weight: 700;
          -webkit-text-stroke: 1px rgba(255,255,255,0.08);
          color: transparent;
          line-height: 1;
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: -0.04em;
        }
        @media (max-width: 768px) {
          .cta-ghost-text { display: none; }
        }
      `}</style>
    </section>
  );
}
