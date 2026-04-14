import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';
import { getResend } from '@/lib/resend';
import { getWelcomeEmailHtml } from '@/emails/welcome';

export async function POST(req: NextRequest) {
  try {
    const { name, email, businessType } = await req.json();

    if (!name || !email || !businessType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = createServerSupabase();

    const { error } = await supabase.from('email_signups').insert({
      name,
      email,
      business_type: businessType,
    });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Already signed up' }, { status: 409 });
      }
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Send welcome email (non-blocking — signup succeeds even if email fails)
    const resend = getResend();
    if (resend) {
      try {
        const { data, error: emailError } = await resend.emails.send({
          from: 'Magic Staffer <hello@magicstaffer.com>',
          to: email,
          subject: `Welcome to the waitlist, ${name}!`,
          html: getWelcomeEmailHtml({ name, businessType }),
        });
        if (emailError) {
          console.error('Resend API error:', JSON.stringify(emailError));
        } else {
          console.log('Welcome email sent:', data?.id);
        }
      } catch (emailError) {
        console.error('Welcome email failed:', emailError instanceof Error ? emailError.message : emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
