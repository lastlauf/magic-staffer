'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? s / h : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(250,250,248,0.9)',
          backdropFilter: 'blur(16px) saturate(1.2)',
          borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          zIndex: 100,
          padding: '0 var(--sp-8)',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          transition: 'border-color 0.2s var(--ease-silk), box-shadow 0.2s var(--ease-silk), background 0.2s var(--ease-silk)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.375rem',
              color: 'var(--text)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 9,
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 2C5 2 2 5 2 8.5c0 1.1.27 2.14.75 3.05L2 15l3.55-.73A6.46 6.46 0 0 0 8.5 15C12 15 15 12 15 8.5S12 2 8.5 2z" fill="white" />
                <path d="M6 8.5l1.7 1.7L11 6" stroke="#FF5A5F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Staffable
          </a>

          <div
            className="nav-links-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sp-7)',
            }}
          >
            {[
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--text-2)',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'color 0.15s var(--ease-silk)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              style={{
                padding: '9px 22px',
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 100,
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'transform 0.15s var(--ease-spring), box-shadow 0.15s var(--ease-silk)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,90,95,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get started free
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          nav { padding: 0 var(--sp-5) !important; }
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </>
  );
}
