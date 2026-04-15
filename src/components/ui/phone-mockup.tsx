interface Message {
  text: string;
  direction: 'in' | 'out';
  time: string;
  emoji?: string;
}

export default function PhoneMockup({
  messages,
  headerName = 'Magic Staffer',
  headerEmoji = '🧹',
  className = '',
  size = 'large',
}: {
  messages: readonly Message[];
  headerName?: string;
  headerEmoji?: string;
  className?: string;
  size?: 'large' | 'small';
}) {
  const isSmall = size === 'small';
  const width = isSmall ? 264 : 300;
  const radius = isSmall ? 36 : 42;

  return (
    <div
      className={className}
      style={{
        width,
        borderRadius: radius,
        background: 'var(--surface)',
        border: '2px solid var(--border)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
      }}
    >
      {/* Notch */}
      <div
        style={{
          background: 'var(--text)',
          height: isSmall ? 24 : 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 60,
            height: 5,
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 100,
          }}
        />
      </div>

      {/* WhatsApp Header */}
      <div
        style={{
          background: '#075E54',
          padding: isSmall ? '12px 14px' : '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: isSmall ? 32 : 36,
            height: isSmall ? 32 : 36,
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isSmall ? '0.875rem' : '1rem',
            flexShrink: 0,
          }}
        >
          {headerEmoji}
        </div>
        <div>
          <div style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.2 }}>
            {headerName}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>online</div>
        </div>
      </div>

      {/* Chat Area */}
      <div
        style={{
          background: '#ECE5DD',
          padding: isSmall ? '12px 10px' : '14px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: isSmall ? 6 : 7,
          minHeight: isSmall ? 310 : 420,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`wa-msg ${msg.direction}`}
          >
            {msg.emoji && `${msg.emoji} `}
            {msg.text.split('\n').map((line, j) => (
              <span key={j}>
                {j > 0 && <br />}
                {line}
              </span>
            ))}
            <span className="wa-time">
              {msg.time}
              {msg.direction === 'out' && <span className="wa-check"> ✓✓</span>}
            </span>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div
        style={{
          background: 'white',
          borderTop: '1px solid #DDD',
          padding: isSmall ? '8px 10px' : '9px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            flex: 1,
            background: isSmall ? '#F5F5F5' : '#F8F8F8',
            borderRadius: 20,
            padding: '6px 12px',
            fontSize: isSmall ? '0.68rem' : '0.7rem',
            color: '#999',
            border: isSmall ? 'none' : '1px solid #EEE',
          }}
        >
          Message Magic Staffer…
        </div>
        <span style={{ fontSize: isSmall ? '0.875rem' : '1rem' }}>🎤</span>
      </div>
    </div>
  );
}
