'use client';

import { PROOF_STATS } from '@/lib/constants';
import { useCountUp } from '@/lib/hooks/use-count-up';

function ProofItem({
  stat,
  index,
}: {
  stat: (typeof PROOF_STATS)[number];
  index: number;
}) {
  const { ref, display } = useCountUp(stat.value, stat.isFloat);

  return (
    <div
      className="reveal proof-item-cell"
      style={{
        textAlign: 'center',
        padding: '0 var(--sp-5)',
        transitionDelay: `${index * 0.06}s`,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.25rem',
          fontWeight: 700,
          lineHeight: 1,
          color: 'var(--text)',
          letterSpacing: '-0.025em',
          marginBottom: 4,
        }}
      >
        {stat.display ? (
          <span style={{ color: 'var(--accent)' }}>{stat.display}</span>
        ) : (
          <>
            <span ref={ref} style={stat.isAccent ? { color: 'var(--accent)' } : undefined}>
              {display}
            </span>
            <span style={{ color: 'var(--accent)' }}>{stat.suffix}</span>
          </>
        )}
      </div>
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--text-muted)',
          lineHeight: 1.35,
          whiteSpace: 'pre-line',
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function ProofBar() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: 'var(--sp-7) 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--sp-8)' }}>
        <div className="proof-grid-wrap">
          {PROOF_STATS.map((stat, i) => (
            <ProofItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .proof-grid-wrap {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .proof-grid-wrap > :global(.proof-item-cell) {
          border-right: 1px solid var(--border);
        }
        .proof-grid-wrap > :global(.proof-item-cell:last-child) {
          border-right: none;
        }
        @media (max-width: 768px) {
          .proof-grid-wrap {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--sp-4);
          }
          .proof-grid-wrap > :global(.proof-item-cell) {
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding-bottom: var(--sp-4);
          }
        }
      `}</style>
    </section>
  );
}
