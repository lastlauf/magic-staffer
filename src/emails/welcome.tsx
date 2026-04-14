interface WelcomeEmailProps {
  name: string;
  businessType: string;
}

export function getWelcomeEmailHtml({ name, businessType }: WelcomeEmailProps): string {
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#FAFAF8;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF8;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#FFFFFF;border-radius:16px;border:1px solid #EAE4DD;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 0;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:32px;height:32px;background-color:#FF5A5F;border-radius:8px;text-align:center;vertical-align:middle;">
                    <span style="color:#FFFFFF;font-size:16px;font-weight:700;line-height:32px;">&#10003;</span>
                  </td>
                  <td style="padding-left:10px;font-size:18px;font-weight:700;color:#1C1917;letter-spacing:-0.02em;">
                    Magic Staffer
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px 32px;">
              <h1 style="font-size:24px;font-weight:700;color:#1C1917;margin:0 0 8px;letter-spacing:-0.02em;line-height:1.2;">
                Hey ${name}, you're in!
              </h1>
              <p style="font-size:15px;color:#57534E;line-height:1.65;margin:0 0 24px;">
                Welcome to the Magic Staffer waitlist. We're building something simple and powerful for <strong style="color:#1C1917;">${businessType}</strong> businesses&mdash;and you'll be among the first to try it.
              </p>

              <!-- What to expect -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF7F4;border-radius:12px;border:1px solid rgba(255,90,95,0.12);">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="font-size:14px;font-weight:600;color:#1C1917;margin:0 0 10px;">
                      What happens next:
                    </p>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:6px;font-size:14px;color:#57534E;line-height:1.5;">
                          <span style="color:#FF5A5F;font-weight:600;margin-right:8px;">1.</span> We're onboarding businesses in small groups
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:6px;font-size:14px;color:#57534E;line-height:1.5;">
                          <span style="color:#FF5A5F;font-weight:600;margin-right:8px;">2.</span> You'll get an invite when your spot opens
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#57534E;line-height:1.5;">
                          <span style="color:#FF5A5F;font-weight:600;margin-right:8px;">3.</span> Setup takes 5 minutes&mdash;just a WhatsApp conversation
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px;color:#78716C;line-height:1.6;margin:24px 0 0;">
                In the meantime, reply to this email if you have any questions. We read every one.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 32px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #EAE4DD;">
                <tr>
                  <td style="padding-top:20px;font-size:12px;color:#A8A29E;line-height:1.5;">
                    Magic Staffer&mdash;Run your whole crew from one WhatsApp number.
                    <br/>
                    You're receiving this because you signed up at magicstaffer.com.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
