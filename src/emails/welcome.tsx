import * as React from 'react';

interface WelcomeEmailProps {
  name: string;
  businessType: string;
}

export default function WelcomeEmail({ name, businessType }: WelcomeEmailProps) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#FAFAF8', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#FAFAF8', padding: '40px 20px' }}>
          <tbody>
            <tr>
              <td align="center">
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ maxWidth: 520, backgroundColor: '#FFFFFF', borderRadius: 16, border: '1px solid #EAE4DD', overflow: 'hidden' }}>
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td style={{ padding: '32px 32px 0', borderBottom: 'none' }}>
                        <table cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td style={{ width: 32, height: 32, backgroundColor: '#FF5A5F', borderRadius: 8, textAlign: 'center', verticalAlign: 'middle' }}>
                                <span style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700, lineHeight: '32px' }}>&#10003;</span>
                              </td>
                              <td style={{ paddingLeft: 10, fontSize: 18, fontWeight: 700, color: '#1C1917', letterSpacing: '-0.02em' }}>
                                Staffable
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={{ padding: '28px 32px 32px' }}>
                        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1C1917', margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                          Hey {name}, you&apos;re in!
                        </h1>
                        <p style={{ fontSize: 15, color: '#57534E', lineHeight: 1.65, margin: '0 0 24px' }}>
                          Welcome to the Staffable waitlist. We&apos;re building something simple and powerful for <strong style={{ color: '#1C1917' }}>{businessType}</strong> businesses&nbsp;&mdash; and you&apos;ll be among the first to try it.
                        </p>

                        {/* What to expect card */}
                        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#FFF7F4', borderRadius: 12, border: '1px solid rgba(255,90,95,0.12)' }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: '20px 24px' }}>
                                <p style={{ fontSize: 14, fontWeight: 600, color: '#1C1917', margin: '0 0 10px' }}>
                                  What happens next:
                                </p>
                                <table cellPadding={0} cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td style={{ paddingBottom: 6, fontSize: 14, color: '#57534E', lineHeight: 1.5 }}>
                                        <span style={{ color: '#FF5A5F', fontWeight: 600, marginRight: 8 }}>1.</span> We&apos;re onboarding businesses in small groups
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{ paddingBottom: 6, fontSize: 14, color: '#57534E', lineHeight: 1.5 }}>
                                        <span style={{ color: '#FF5A5F', fontWeight: 600, marginRight: 8 }}>2.</span> You&apos;ll get an invite when your spot opens
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{ fontSize: 14, color: '#57534E', lineHeight: 1.5 }}>
                                        <span style={{ color: '#FF5A5F', fontWeight: 600, marginRight: 8 }}>3.</span> Setup takes 5 minutes&nbsp;&mdash; just a WhatsApp conversation
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p style={{ fontSize: 14, color: '#78716C', lineHeight: 1.6, margin: '24px 0 0' }}>
                          In the meantime, reply to this email if you have any questions. We read every one.
                        </p>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={{ padding: '0 32px 28px' }}>
                        <table width="100%" cellPadding={0} cellSpacing={0} style={{ borderTop: '1px solid #EAE4DD', paddingTop: 20 }}>
                          <tbody>
                            <tr>
                              <td style={{ paddingTop: 20, fontSize: 12, color: '#A8A29E', lineHeight: 1.5 }}>
                                Staffable&nbsp;&mdash; Run your whole crew from one WhatsApp number.
                                <br />
                                You&apos;re receiving this because you signed up at staffable.vercel.app.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
