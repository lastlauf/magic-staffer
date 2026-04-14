const FOOTER_LINKS = {
  Product: ['How it works', 'Features', 'Pricing', 'Integrations'],
  Industries: ['Residential Cleaning', 'Commercial Cleaning', 'Landscaping', 'Pool Service'],
  Company: ['About', 'Blog', 'Privacy', 'Terms'],
};

export default function Footer() {
  return (
    <footer style={{ background: '#1C1917', color: '#A8A29E', padding: 'var(--section-py) 0 var(--sp-7)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)' }}>
        <div className="footer-grid-wrap" style={{ marginBottom: 'var(--sp-8)' }}>
          {/* Brand Column */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.375rem',
                color: 'white',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--sp-4)',
                display: 'block',
              }}
            >
              Magic Staffer
            </span>
            <p style={{ fontSize: '0.875rem', color: '#78716C', lineHeight: 1.65, maxWidth: 240 }}>
              The WhatsApp-native operations platform for cleaning, landscaping, and field service businesses.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#57534E',
                  marginBottom: 'var(--sp-5)',
                }}
              >
                {title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: '0.875rem',
                        color: '#78716C',
                        textDecoration: 'none',
                        transition: 'color 0.15s var(--ease-silk)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#78716C')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid #292524',
            paddingTop: 'var(--sp-5)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8125rem',
            color: '#57534E',
            flexWrap: 'wrap',
            gap: 'var(--sp-4)',
          }}
        >
          <span>&copy; 2026 Magic Staffer. All rights reserved.</span>
          <span>Built for the people who make things clean</span>
        </div>
      </div>

      <style jsx>{`
        .footer-grid-wrap {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--sp-8);
        }
        @media (max-width: 768px) {
          .footer-grid-wrap {
            grid-template-columns: 1fr 1fr;
            gap: var(--sp-6);
          }
        }
      `}</style>
    </footer>
  );
}
