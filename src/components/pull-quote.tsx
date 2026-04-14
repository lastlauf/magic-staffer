export default function PullQuote() {
  return (
    <section
      style={{
        background: 'var(--surface-warm)',
        borderTop: '1px solid #F0E6E1',
        borderBottom: '1px solid #F0E6E1',
        padding: 'var(--section-py) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Giant ghost quotation mark */}
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(10rem, 25vw, 20rem)',
          fontWeight: 700,
          color: 'rgba(255,90,95,0.06)',
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.375rem)',
            fontWeight: 300,
            lineHeight: 1.45,
            textAlign: 'center',
            color: 'var(--text)',
            maxWidth: 780,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          &ldquo;I didn&apos;t start a cleaning business to spend all day{' '}
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>texting from my phone.</span>{' '}
          Magic Staffer gives me those hours back.&rdquo;
        </p>
        <p
          className="reveal"
          style={{
            textAlign: 'center',
            marginTop: 'var(--sp-5)',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            position: 'relative',
            transitionDelay: '0.1s',
          }}
        >
          Maria Rodriguez — Crystal Clean, Chicago
        </p>
      </div>
    </section>
  );
}
