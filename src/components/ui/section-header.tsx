export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center" style={{ marginBottom: 'var(--sp-8)' }}>
      <span
        className="reveal"
        style={{
          display: 'inline-block',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 'var(--sp-4)',
        }}
      >
        {eyebrow}
      </span>
      <h2
        className="reveal"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          color: 'var(--text)',
          marginBottom: subtitle ? 'var(--sp-4)' : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="reveal"
          style={{
            fontSize: '1.0625rem',
            color: 'var(--text-2)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
