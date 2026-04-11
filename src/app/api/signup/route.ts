import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
