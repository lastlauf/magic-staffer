export const PROOF_STATS: readonly { value: number; suffix: string; label: string; isFloat: boolean; isAccent: boolean; display?: string }[] = [
  { value: 4.2, suffix: ' hrs', label: 'saved per week\nper business', isFloat: true, isAccent: false },
  { value: 94, suffix: '%', label: 'invoices paid\non time', isFloat: false, isAccent: false },
  { value: 5, suffix: ' min', label: 'average\nsetup time', isFloat: false, isAccent: false },
  { value: 33, suffix: 'M+', label: 'service businesses\nunderserved', isFloat: false, isAccent: false },
  { value: 0, suffix: '', label: 'app download\never required', isFloat: false, isAccent: false, display: '$0' },
];

export const PROBLEMS = [
  {
    stat: '2+ hrs',
    title: 'Lost to scheduling every single day',
    description: "Back-and-forth texts, missed calls, double-bookings. Every morning starts with chaos before the first job begins.",
    icon: 'schedule',
  },
  {
    stat: '38%',
    title: 'Of invoices get paid late',
    description: "Paper invoices get lost. Venmo requests get ignored. Following up feels awkward and wastes more of your time.",
    icon: 'chart',
  },
  {
    stat: '$60K+',
    title: 'For a real operations manager',
    description: "Big companies have whole teams for this. Small businesses get enterprise software that requires a week of training.",
    icon: 'lock',
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    title: 'Book a job in seconds',
    description: 'Text a client name, address, and date. Magic Staffer confirms the crew member, adds it to the schedule, and notifies everyone automatically.',
    messages: [
      { text: 'Book Rosa for Johnson house Thursday 9am', direction: 'out' as const, time: '9:01 AM' },
      { text: 'Booked! Rosa confirmed Thu 9am at Johnson house. Both Rosa and client notified.', direction: 'in' as const, time: '9:01 AM', emoji: '✅' },
    ],
  },
  {
    title: 'Automatic reminders go out',
    description: 'Crew and clients get a message 24 hours before every job. No-shows drop to near zero without you lifting a finger.',
    messages: [
      { text: 'Reminder: Rosa has a job tomorrow at 9am — Johnson house, 1234 Oak St. Client also notified.', direction: 'in' as const, time: '8:00 AM', emoji: '📅' },
      { text: 'Perfect 👍', direction: 'out' as const, time: '8:02 AM' },
    ],
  },
  {
    title: 'Invoice with one message',
    description: 'Say "send invoice to Johnson $240" and a professional invoice with a card payment link goes out instantly. Get paid the same day.',
    messages: [
      { text: 'Send invoice to Johnson $240', direction: 'out' as const, time: '3:10 PM' },
      { text: 'Invoice sent to Sarah Johnson. Card payment link included. You\'ll be notified when she pays.', direction: 'in' as const, time: '3:10 PM', emoji: '💳' },
    ],
  },
  {
    title: 'Reorder supplies automatically',
    description: 'Tell Magic Staffer what you\'re running low on. It places the order with your usual supplier and confirms the delivery date.',
    messages: [
      { text: 'Running low on microfiber cloths', direction: 'out' as const, time: '9:05 AM' },
      { text: 'Order placed with CleanPro Supply — 24 cloths ($18.50). Delivery Thursday. Low-stock alert set for next time.', direction: 'in' as const, time: '9:05 AM', emoji: '📦' },
    ],
  },
  {
    title: 'Daily digest, every morning',
    description: 'Wake up to a clean summary of today\'s jobs, who\'s on each one, and any pending invoices. No app. Just one message at 7am.',
    messages: [
      { text: 'Good morning! Today:\n\n• 9am – Rosa @ Johnson\n• 11am – Carlos @ Williams\n• 2pm – Maria @ Torres\n\nPending invoices: 2 ($380)', direction: 'in' as const, time: '7:00 AM', emoji: '☀️' },
    ],
  },
] as const;

export const FEATURES = [
  { icon: '📅', title: 'Smart Scheduling', description: 'Book, reschedule, and assign jobs by text. No app, no calendar syncing required.' },
  { icon: '💬', title: 'Auto Reminders', description: 'Crew and client reminders sent automatically 24 hours before every job.' },
  { icon: '🧾', title: 'Instant Invoicing', description: 'Professional invoices with card payment links sent in seconds with a single text.' },
  { icon: '📦', title: 'Supply Ordering', description: 'Reorder from your supplier through a quick message — no logging into portals.' },
  { icon: '☀️', title: 'Morning Digest', description: 'A clean daily summary of jobs, crew, and outstanding invoices. Every morning at 7am.' },
  { icon: '💳', title: 'Card Payments', description: 'Clients tap a secure link to pay by card. Money hits your account within 2 business days.' },
  { icon: '👥', title: 'Multi-Crew', description: 'Manage up to 20 crew members, each with their own assignments and reminders.' },
  { icon: '📊', title: 'Weekly Reports', description: 'Revenue summary, jobs completed, and payments outstanding — every Sunday evening.' },
] as const;

export const TESTIMONIALS = [
  {
    quote: "I used to spend Sunday nights texting everyone about Monday's jobs. Now Magic Staffer does it automatically at 8pm. I can't imagine going back.",
    name: 'Maria Rodriguez',
    initials: 'MR',
    image: '/testimonials/maria.jpg',
    business: 'Crystal Clean · Chicago · 6 crew',
  },
  {
    quote: "My guys don't use apps. But they all use WhatsApp. Magic Staffer was literally the only tool that worked for my landscaping crew without any convincing.",
    name: 'Derek Kim',
    initials: 'DK',
    image: '/testimonials/derek.jpg',
    business: 'GreenEdge Landscaping · Austin · 9 crew',
  },
  {
    quote: "Invoicing used to take me two hours on Fridays. Now it takes five minutes. And I get paid faster because clients just tap a link.",
    name: 'Sandra Perez',
    initials: 'SP',
    image: '/testimonials/sandra.jpg',
    business: 'Spotless Pro · Miami · 4 crew',
  },
] as const;

export const PRICING_TIERS = [
  {
    name: 'Starter',
    price: 79,
    period: 'per month · up to 3 crew',
    features: [
      'Scheduling via WhatsApp',
      'Crew & client reminders',
      'Invoicing + card payments',
      'Morning digest',
      'Supply ordering (1 supplier)',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: 149,
    period: 'per month · up to 10 crew',
    features: [
      'Everything in Starter',
      'Up to 10 crew members',
      'Multiple supplier integrations',
      'Weekly revenue reports',
      'Priority WhatsApp support',
      'Custom message templates',
    ],
    featured: true,
  },
  {
    name: 'Pro',
    price: 299,
    period: 'per month · up to 20 crew',
    features: [
      'Everything in Growth',
      'Up to 20 crew members',
      'Multi-location support',
      'QuickBooks integration',
      'Dedicated onboarding call',
      'Custom workflows',
    ],
    featured: false,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Does my crew need to download an app?',
    answer: 'No — Magic Staffer runs entirely through WhatsApp. Your crew receives and replies to messages as they always have. The only "setup" is you texting your business number to our onboarding line.',
  },
  {
    question: "What if my clients don't use WhatsApp?",
    answer: 'You can configure Magic Staffer to reach clients via SMS instead. Most US clients prefer SMS for business messages, and the invoice payment link works identically in both channels.',
  },
  {
    question: 'How does the 5-minute setup actually work?',
    answer: "You text your business phone number to our setup line. Magic Staffer asks a few questions — crew names, service area, working hours — in a WhatsApp conversation. No forms. No portals. You're running before your second cup of coffee.",
  },
  {
    question: 'Is my client and payment data secure?',
    answer: 'Yes. All data is encrypted at rest and in transit. Payments are processed via Stripe, the same infrastructure used by Amazon and Google. We never sell or share your data.',
  },
  {
    question: 'Can I use my existing WhatsApp Business number?',
    answer: "Yes — if you have a WhatsApp Business account, Magic Staffer can connect directly to it. If not, we'll provision a dedicated number for you during setup at no extra charge.",
  },
  {
    question: 'What industries does Magic Staffer support?',
    answer: 'Magic Staffer is built for any field service business: residential cleaning, commercial cleaning, landscaping, pool service, pest control, HVAC, and more. If you schedule crews and send invoices, Magic Staffer will work for you from day one.',
  },
] as const;

export const VERTICALS = [
  {
    name: 'Cleaning',
    emoji: '🧹',
    persona: 'Rosa',
    business: 'Crystal Clean Services',
    painPoint: 'Sunday night scheduling chaos',
    metrics: ['4.5 hrs saved/week', '96% on-time payments', 'Zero no-shows'],
    messages: [
      { text: 'Book Maya + Jasmine for Martinez house Monday 9am', direction: 'out' as const, time: '8:14 PM' },
      { text: 'Confirmed! Maya + Jasmine → Martinez house, Monday 9:00 AM.\n\n✓ Maya notified\n✓ Jasmine notified\n✓ Client (Martinez) reminded', direction: 'in' as const, time: '8:14 PM', emoji: '✅' },
      { text: 'Send invoice Martinez $240', direction: 'out' as const, time: '3:30 PM' },
      { text: 'Invoice sent to Martinez with card payment link. You\'ll be notified when she pays.', direction: 'in' as const, time: '3:30 PM', emoji: '💳' },
    ],
  },
  {
    name: 'Landscaping',
    emoji: '🌿',
    persona: 'James',
    business: 'GreenEdge Landscaping',
    painPoint: 'Multi-site crew coordination',
    metrics: ['15 jobs/week managed', '95% payment rate', '3 crews coordinated'],
    messages: [
      { text: 'Good morning', direction: 'out' as const, time: '6:58 AM' },
      { text: 'Monday Digest:\n\n• 8am – Carlos + Miguel @ Johnson estate (trim hedges)\n• 10am – James + David @ Martinez commercial\n• 12pm – Diego + Luis @ Smith residential\n\nOutstanding: $250 (1 invoice)', direction: 'in' as const, time: '6:58 AM', emoji: '📋' },
    ],
  },
  {
    name: 'Detailing',
    emoji: '🚗',
    persona: 'Ahmed',
    business: 'Premium Mobile Detail',
    painPoint: 'Chasing payments via Venmo',
    metrics: ['$4,200/week revenue', '100% payment rate', '12 details/week'],
    messages: [
      { text: 'Client wants Saturday 2pm, 1455 Oak St, full detail', direction: 'out' as const, time: '10:15 AM' },
      { text: 'Booked! Saturday 2:00 PM\n📍 1455 Oak St\n💰 $350 (exterior + interior)\n\nPayment link sent to client. Scott + Tyler assigned.', direction: 'in' as const, time: '10:15 AM', emoji: '✅' },
    ],
  },
  {
    name: 'Pet Grooming',
    emoji: '🐕',
    persona: 'Priya',
    business: 'Pawfect Grooming',
    painPoint: 'Manual rebooking & no-shows',
    metrics: ['95% rebooking rate', 'Zero no-shows', '30 regular clients'],
    messages: [
      { text: 'Auto-reminder sent to client:\n\n"Hi! Fluffy is due for grooming (last visit: 6 weeks ago). Available: Wed 10 AM or Fri 2 PM?"', direction: 'in' as const, time: '9:00 AM', emoji: '🐾' },
      { text: 'Client picked Friday 2pm', direction: 'in' as const, time: '9:12 AM' },
      { text: 'Booked! Fluffy\'s groom, Fri 2:00 PM. Invoice ($85) will be sent after completion.', direction: 'in' as const, time: '9:12 AM', emoji: '✅' },
    ],
  },
  {
    name: 'Pool Service',
    emoji: '🏊',
    persona: 'Marcus',
    business: 'Blue Wave Pools',
    painPoint: 'Paper routes & late payments',
    metrics: ['22 pools/week', '96% payment rate', '$9,800/mo revenue'],
    messages: [
      { text: 'All 22 pools done for the week', direction: 'out' as const, time: '4:30 PM' },
      { text: 'Weekly invoices sent!\n\n• 22 invoices generated ($2,860 total)\n• Payment links sent to all clients\n• Auto-reminders set for unpaid\n\nLast week: 18/20 paid within 48hrs', direction: 'in' as const, time: '4:30 PM', emoji: '💥' },
    ],
  },
  {
    name: 'Pressure Washing',
    emoji: '💦',
    persona: 'Devon',
    business: 'BlastClean Pro',
    painPoint: 'Cash-only, no invoice trail',
    metrics: ['$2,400/week revenue', '8 jobs/week', '75% same-day payment'],
    messages: [
      { text: 'Job complete at 123 Main, driveway wash $350', direction: 'out' as const, time: '12:45 PM' },
      { text: 'Logged! $350 driveway wash.\n\nPayment link sent to client. Job duration: 2 hrs.\n\n📊 This week so far: 6 jobs, $1,900 revenue.\n\nWeather check: Tomorrow looks clear for the Elm St job.', direction: 'in' as const, time: '12:45 PM', emoji: '✅' },
    ],
  },
] as const;

export const BUSINESS_TYPES = [
  'Residential Cleaning',
  'Landscaping & Lawn Care',
  'Mobile Auto Detailing',
  'Mobile Pet Grooming',
  'Pool Service',
  'Pressure Washing',
  'Handyman Services',
  'HVAC',
  'Pest Control',
  'Junk Removal',
  'Other',
] as const;
