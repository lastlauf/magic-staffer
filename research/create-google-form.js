// Paste this into script.google.com → New Project → Run
// It will create a Google Form and log the URL

function createMagicStafferSurvey() {
  var form = FormApp.create('Magic Staffer — Discovery Questionnaire');
  form.setDescription('Help us build the right tool for service businesses like yours. Takes ~4 minutes.');
  form.setIsQuiz(false);
  form.setCollectEmail(false);

  // ── Section 1: About You ──
  form.addSectionHeaderItem()
    .setTitle('About You');

  form.addMultipleChoiceItem()
    .setTitle('1. What type of service business do you run?')
    .setChoiceValues([
      'Residential cleaning',
      'Commercial cleaning',
      'Landscaping / lawn care',
      'Mobile auto detailing',
      'Pool service',
      'Pressure washing',
      'Pet grooming',
      'Pest control',
      'HVAC',
      'Handyman',
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('2. How many crew members do you manage?')
    .setChoiceValues([
      'Just me (solo)',
      '2–3',
      '4–10',
      '11–20',
      '20+',
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('3. How many jobs does your team complete per week?')
    .setChoiceValues([
      '1–5',
      '6–15',
      '16–30',
      '30+',
    ])
    .setRequired(true);

  // ── Section 2: Current Process ──
  form.addPageBreakItem()
    .setTitle('Current Process');

  form.addMultipleChoiceItem()
    .setTitle('4. How do you currently schedule jobs and assign crew?')
    .setChoiceValues([
      'Text messages / group chat',
      'Phone calls',
      'Paper / whiteboard',
      'Spreadsheet (Google Sheets, Excel)',
      'Scheduling software (Jobber, Housecall Pro, etc.)',
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('5. How do you send invoices and collect payment?')
    .setChoiceValues([
      'Cash / check at the job',
      'Venmo / Zelle / CashApp',
      'QuickBooks / FreshBooks',
      'Invoicing software (Jobber, HCP, etc.)',
      "I don't invoice — I just collect on-site",
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("6. What's the most frustrating part of running your day-to-day operations?")
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('7. How many hours per week do you spend on scheduling, invoicing, and coordinating crew?')
    .setChoiceValues([
      'Less than 1 hour',
      '1–3 hours',
      '4–7 hours',
      '8+ hours',
    ])
    .setRequired(true);

  // ── Section 3: Tools & Technology ──
  form.addPageBreakItem()
    .setTitle('Tools & Technology');

  form.addCheckboxItem()
    .setTitle('8. Which apps does your crew already use daily? (select all)')
    .setChoiceValues([
      'WhatsApp',
      'iMessage / SMS',
      'Facebook Messenger',
      'Jobber',
      'Housecall Pro',
      'ServiceTitan',
      'Google Calendar',
      'None — calls only',
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('9. Have you tried scheduling or business management software before?')
    .setChoiceValues([
      'Yes, and I still use it',
      'Yes, but I stopped — it was too complicated or expensive',
      "Yes, but my crew wouldn't use it",
      'No, never tried one',
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("10. If yes, what made you stop or what's missing?")
    .setRequired(false);

  // ── Section 4: Concept Reaction ──
  form.addPageBreakItem()
    .setTitle('Concept Reaction')
    .setHelpText('Imagine a tool that lets you run your entire operation — scheduling, reminders, invoicing, supply orders, and daily briefings — by texting a single WhatsApp number. No app to download. No training. Your crew gets notified through WhatsApp messages they already know how to use. Setup takes 5 minutes.');

  form.addMultipleChoiceItem()
    .setTitle('11. How useful would this be for your business?')
    .setChoiceValues([
      'Would change everything — I need this',
      'Very useful — would save me real time',
      'Somewhat useful — nice to have',
      "Not useful — I'm fine with what I have",
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('12. Which of these would save you the most time? (pick up to 2)')
    .setChoiceValues([
      'Scheduling crew by text instead of calls/group chats',
      'Automatic reminders to crew and clients before each job',
      'Sending invoices with a payment link in one message',
      'Daily morning summary of the day\'s jobs',
      'Reordering supplies through a text',
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('13. What would make you hesitant to try a tool like this?')
    .setChoiceValues([
      'Cost',
      "Don't trust it to get things right",
      "My crew won't engage with it",
      "I'd need to see it work first",
      'Privacy / data concerns',
    ])
    .showOtherOption(true)
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('14. What would you pay per month for a tool that saves you 4+ hours a week on admin?')
    .setChoiceValues([
      '$0 — free only',
      '$25–50',
      '$50–100',
      '$100–200',
      '$200+ if it actually works',
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('15. Anything else you\'d want a tool like this to do?')
    .setRequired(false);

  // ── Confirmation ──
  form.setConfirmationMessage('Thank you — your answers directly shape what we build.');

  Logger.log('Form created: ' + form.getEditUrl());
  Logger.log('Share this link: ' + form.getPublishedUrl());
}
