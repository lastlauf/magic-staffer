'use client';

import { useState, FormEvent } from 'react';
import { BUSINESS_TYPES } from '@/lib/constants';

export default function LeadCaptureForm({ variant = 'hero' }: { variant?: 'hero' | 'cta' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [customBusinessType, setCustomBusinessType] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');

  const isCTA = variant === 'cta';

  const isOther = businessType === 'Other';
  const resolvedBusinessType = isOther ? customBusinessType.trim() : businessType;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !businessType) return;
    if (isOther && !customBusinessType.trim()) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), businessType: resolvedBusinessType }),
      });

      if (res.ok) {
        setStatus('success');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        style={{
          padding: 'var(--sp-5)',
          borderRadius: 16,
          background: isCTA ? 'rgba(255,255,255,0.16)' : 'var(--surface-green)',
          border: isCTA ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(34,197,94,0.15)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '1.5rem', marginBottom: 'var(--sp-2)' }}>🎉</div>
        <div style={{ fontWeight: 600, color: isCTA ? 'white' : 'var(--green-dark)', marginBottom: 4 }}>
          You&apos;re on the list!
        </div>
        <div style={{ fontSize: '0.875rem', color: isCTA ? 'rgba(255,255,255,0.8)' : 'var(--text-2)' }}>
          We&apos;ll reach out when Staffable is ready for you.
        </div>
      </div>
    );
  }

  if (status === 'duplicate') {
    return (
      <div
        style={{
          padding: 'var(--sp-5)',
          borderRadius: 16,
          background: isCTA ? 'rgba(255,255,255,0.16)' : 'var(--accent-light)',
          border: isCTA ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,90,95,0.15)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontWeight: 600, color: isCTA ? 'white' : 'var(--accent)', marginBottom: 4 }}>
          You&apos;re already on the list!
        </div>
        <div style={{ fontSize: '0.875rem', color: isCTA ? 'rgba(255,255,255,0.8)' : 'var(--text-2)' }}>
          We&apos;ve got your email. Sit tight — we&apos;ll be in touch soon.
        </div>
      </div>
    );
  }

  const inputStyle = isCTA
    ? {
        padding: '12px 16px',
        borderRadius: 12,
        border: '2px solid rgba(255,255,255,0.3)',
        background: 'rgba(255,255,255,0.16)',
        color: 'white',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9375rem',
        outline: 'none',
        backdropFilter: 'blur(4px)',
        width: '100%',
      }
    : {
        padding: '12px 16px',
        borderRadius: 12,
        border: '1.5px solid var(--border)',
        background: 'var(--surface)',
        color: 'var(--text)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9375rem',
        outline: 'none',
        boxShadow: 'var(--shadow-xs)',
        width: '100%',
      };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }} className="form-row">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
      </div>

      <select
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        required
        style={{
          ...inputStyle,
          color: businessType ? (isCTA ? 'white' : 'var(--text)') : (isCTA ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)'),
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='${isCTA ? 'white' : '%23A8A29E'}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 16px center',
          paddingRight: 40,
        }}
      >
        <option value="" disabled>
          Type of business
        </option>
        {BUSINESS_TYPES.map((type) => (
          <option key={type} value={type} style={{ color: 'var(--text)' }}>
            {type}
          </option>
        ))}
      </select>

      {isOther && (
        <input
          type="text"
          placeholder="What's your business type?"
          value={customBusinessType}
          onChange={(e) => setCustomBusinessType(e.target.value)}
          required
          style={{
            ...inputStyle,
            transition: 'border-color 0.15s var(--ease-silk)',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = isCTA ? 'rgba(255,255,255,0.5)' : 'var(--accent)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = isCTA ? 'rgba(255,255,255,0.3)' : 'var(--border)';
          }}
        />
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          padding: '13px 26px',
          background: isCTA ? 'white' : 'var(--accent)',
          color: isCTA ? 'var(--accent)' : 'white',
          border: 'none',
          borderRadius: 12,
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: isCTA ? 700 : 600,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1,
          transition: 'transform 0.15s var(--ease-spring), box-shadow 0.15s var(--ease-silk)',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          if (status !== 'loading') {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = isCTA
              ? '0 6px 24px rgba(0,0,0,0.2)'
              : '0 6px 24px rgba(255,90,95,0.35)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {status === 'loading' ? 'Joining...' : 'Join the waitlist →'}
      </button>

      {status === 'error' && (
        <p style={{ fontSize: '0.8125rem', color: isCTA ? 'rgba(255,255,255,0.8)' : 'var(--red)', textAlign: 'center' }}>
          Something went wrong. Please try again.
        </p>
      )}

      <style jsx>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
