'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useRef, useEffect, FormEvent, useMemo } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(() => new DefaultChatTransport({ api: '/api/chat' }), []);

  const { messages, sendMessage, status } = useChat({
    transport,
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input.trim() });
    setInput('');
  };

  const displayMessages = messages.length === 0
    ? [{ id: 'welcome', role: 'assistant' as const, content: "Hi! I'm Magic Staffer's setup assistant. I can answer questions about features, pricing, and how to get started. What would you like to know?" }]
    : messages;

  const getContent = (msg: (typeof displayMessages)[number]) => {
    if ('content' in msg && typeof msg.content === 'string') return msg.content;
    if ('parts' in msg && Array.isArray(msg.parts)) {
      return msg.parts
        .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
        .map((p) => p.text)
        .join('');
    }
    return '';
  };

  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open support chat"
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.875rem',
            fontFamily: 'var(--font-body)',
            background: 'var(--accent)',
            color: 'white',
            borderRadius: 100,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s var(--ease-spring), box-shadow 0.2s var(--ease-silk)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Need help?
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window" role="dialog" aria-label="Support chat">
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 16,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              background: 'var(--accent)',
              color: 'white',
            }}
          >
            <div>
              <strong style={{ display: 'block', fontSize: '0.9375rem' }}>Magic Staffer Support</strong>
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{ background: 'none', border: 'none', color: 'white', fontSize: 18, cursor: 'pointer', padding: '4px 8px', opacity: 0.8 }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {displayMessages.map((msg) => {
              const content = getContent(msg);
              if (!content) return null;
              return (
                <div
                  key={msg.id}
                  style={{
                    maxWidth: '85%',
                    padding: '10px 14px',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    wordWrap: 'break-word',
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    background: msg.role === 'user' ? 'var(--accent)' : '#f4f4f5',
                    color: msg.role === 'user' ? 'white' : 'var(--text)',
                    borderRadius: msg.role === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                  }}
                >
                  {content}
                </div>
              );
            })}
            {isLoading && displayMessages[displayMessages.length - 1]?.role === 'user' && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  background: '#f4f4f5',
                  borderRadius: '12px 12px 12px 4px',
                  padding: '12px 16px',
                  display: 'flex',
                  gap: 4,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#999',
                      display: 'inline-block',
                      animation: `chatTyping 1.2s ease-in-out infinite ${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: 8,
              padding: '12px 16px',
              borderTop: '1px solid #eee',
              paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              autoFocus
              style={{
                flex: 1,
                padding: '10px 14px',
                border: '1px solid #ddd',
                borderRadius: 12,
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.2s var(--ease-silk)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              style={{
                padding: '10px 16px',
                border: 'none',
                cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                fontSize: 16,
                fontWeight: 'bold',
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 12,
                opacity: isLoading || !input.trim() ? 0.5 : 1,
                transition: 'opacity 0.2s var(--ease-silk)',
              }}
            >
              →
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        .chat-window {
          position: fixed;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: white;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          font-family: var(--font-body);
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
        @media (min-width: 640px) {
          .chat-window {
            bottom: 20px;
            right: 20px;
            width: 380px;
            height: 520px;
            border-radius: 20px;
          }
        }
        @keyframes chatTyping {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
