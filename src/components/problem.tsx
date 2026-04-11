import { PROBLEMS } from '@/lib/constants';
import SectionHeader from './ui/section-header';

const ICONS = {
  schedule: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="20" rx="4" stroke="#FF5A5F" strokeWidth="2" />
      <path d="M9 14h10M9 10h10M9 18h6" stroke="#FF5A5F" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M6 22l4-8 4 4 4-6 4 4" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 24h20" stroke="#FF5A5F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  lock: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="8" width="20" height="16" rx="3" stroke="#FF5A5F" strokeWidth="2" />
      <path d="M10 8V6a4 4 0 0 1 8 0v2" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="16" r="2" fill="#FF5A5F" />
    </svg>
  ),
};

export default function Problem() {
  return (
    <section id="problem" style={{ padding: 'var(--sp-10) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--sp-8)' }}>
        <SectionHeader
          eyebrow="The real cost"
          title={<>Running a crew is a full-time job<br />on top of your full-time job.</>}
          subtitle="Most tools were built for offices. You work with your hands."
        />

        <div className="problem-grid-wrap">
          {PROBLEMS.map((problem, i) => (
            <div
              key={i}
              className="reveal prob-card-el"
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
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: 'var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--sp-5)',
                }}
              >
                {ICONS[problem.icon]}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.75rem',
                  fontWeight: 700,
                  color: 'var(--red)',
                  letterSpacing: '-0.035em',
                  lineHeight: 1,
                  marginBottom: 'var(--sp-3)',
                }}
              >
                {problem.stat}
              </div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text)', marginBottom: 'var(--sp-3)' }}>
                {problem.title}
              </div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
                {problem.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .problem-grid-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--sp-5);
        }
        @media (max-width: 768px) {
          .problem-grid-wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
