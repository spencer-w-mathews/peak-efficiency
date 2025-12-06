export const siteContent = {
  navigation: {
    links: [
      { label: 'Home', path: '/' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Security', path: '/security' },
      { label: 'AI Innovative Consulting', path: '/security' },
      { label: 'Resources', path: '/resources' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  footer: {
    description:
      'BlueBird AGI - Helping professionals lead again through clarity, focus, and automation.',
    email: 'chris@peakefficiency.ai',
    website: 'www.peakefficiency.ai',
    copyright: '2025 BlueBird AGI | All Rights Reserved',
  },
  hero: {
    introLines: [
      'Email and notification fatigue fogging up your days.',
      'Let BlueBird AGI clear your inbox.',
    ],
    heading: 'Work smarter. Reclaim your time.',
    subheading:
      'BlueBird AGI helps professionals cut through digital chaos — giving back clarity, focus, and control so every day starts with purpose, not distraction.',
    ctaLabel: 'Book a Consulting Call',
    email: {
      recipient: 'chris@peakefficiency.ai',
      subject: 'BlueBird AGI Consult Call',
      body: 'Hello, I would like to schedule a consult call.',
    },
  },
  services: {
    heading: 'Beyond tools. Real transformation.',
    subheading:
      'Our consulting and automation services help professionals and teams adopt AI efficiently and sustainably.',
    ctaLabel: 'Book a Consulting Call',
    items: [
      {
        title: 'Workflow Automation Consulting',
        description:
          'We build personalized automations using n8n, Microsoft 365, and OpenAI — saving hours every week by connecting your tools and streamlining your work.',
      },
      {
        title: 'AI Integration Coaching',
        description:
          'Strategy sessions designed to help leaders harness AI effectively, simplify processes, and make smarter decisions.',
      },
      {
        title: 'White-Glove Setup',
        description:
          'We analyze your emails and workflows to configure your tools for maximum efficiency — tailored to how you actually work.',
      },
    ],
    email: {
      recipient: 'chris@peakefficiency.ai',
      subject: 'BlueBird AGI Consult Call',
      body: 'Hello, I would like to schedule a consult call.',
    },
  },
  about: {
    heading: 'About BlueBird AGI',
    subheading: 'For professionals who value precision, not chaos',
    missionTitle: 'Mission Statement',
    mission:
      "We're on a mission to help professionals focus again. BlueBird AGI cuts through the digital chaos of too many tools and too little time — giving back clarity, focus, and control so every day starts with purpose, not distraction. We exist to help professionals reclaim their time, simplify how they work, and unlock growth by delivering exactly what they truly need: efficiency.",
    visionTitle: 'Vision Statement',
    vision:
      "Our vision is to give every professional back the freedom to focus, create, and grow — without being buried in tools, emails, and busywork. We're building a world where simplicity powers productivity, and technology quietly works in the background so people can focus on what truly matters.",
    valuesTitle: 'Values',
    values: [
      { key: 'C', title: 'Clarity', description: 'Lead with simplicity and transparency.' },
      { key: 'L', title: 'Leadership', description: 'Empower others to do their best work.' },
      { key: 'E', title: 'Efficiency', description: 'Work smarter, not harder.' },
      {
        key: 'A',
        title: 'Accountability',
        description: 'Take ownership for results and relationships.',
      },
      {
        key: 'R',
        title: 'Reliability',
        description: 'Build secure, dependable systems people can trust.',
      },
    ],
    clarityLine: 'We help professionals see CLEAR again',
    differenceTitle: 'What Makes Us Different',
    differenceSubheading: "We don't build tools — we build clarity.",
    differenceParagraphs: [
      "BlueBird AGI learns your workflow, your tone, and your priorities. There's no learning curve for you — it learns your style. Every product we design is buit to simplify your day, not complicate it.",
      "Our AI doesn't just automate tasks — it restores focus. Our system doesn't replace professionals — it empowers them.",
      'And our promise is simple: technology that fades into the background so you can focus on what matters most.',
    ],
  },
  pricing: {
    hero: {
      headline: 'Your Inbox, Upgraded.',
      subheadline:
        'An AI teammate that learns your rhythm, anticipates priorities, and clears the clutter before you even open your inbox.',
    },
    integrationBanner: {
      heading: 'Seamless integration with Gmail and Outlook.',
      subtext:
        'Built to work where you work — connecting effortlessly to your daily communication stack.',
    },
    plans: [
      {
        title: 'Basic',
        oldPrice: '$30.00',
        newPrice: '$15.00',
        note: 'First 3 months free',
        description: 'Your AI teammate for everyday clarity.',
        includes: [
          'Keeps 1 inbox and calendar organized',
          'Sorts and labels every email',
          'Drafts replies in your tone',
          'Weekly report card showing hours regained',
          "Daily 'Deleted Summary' of filtered noise",
        ],
        cta: 'Sign Me Up',
      },
      {
        title: 'Business',
        oldPrice: '$50.00',
        newPrice: '$30.00',
        note: 'First month free for up to 5 users',
        description: 'Your AI teammate for scalable clarity.',
        includes: [
          'Everything in Basic, plus:',
          'Connects multiple inboxes and shared calendars',
          'Morning Brief: personalized daily summary',
          'Custom tone profiles per department',
          'Team-wide priority tagging',
        ],
        cta: 'Sign Me Up',
        highlight: true,
      },
      {
        title: 'Executive',
        price: 'Custom — Let’s Talk',
        note: 'Includes a free consultation with our AI Innovation Team',
        description: 'Our white-glove concierge plan for total clarity.',
        includes: [
          'Everything in Business, plus:',
          'Dedicated AI Innovation Team consultation',
          'Morning Brief Pro executive summaries',
          'CRM & workflow integrations',
          'Priority support & optimization sessions',
        ],
        cta: 'Book Your Free Consultation',
      },
    ],
    featureComparison: {
      heading: 'Compare Plans',
      columns: ['Feature', 'Basic', 'Business', 'Executive'],
      rows: [
        {
          feature: 'Connected inboxes',
          values: ['1 inbox', 'Multiple inboxes', 'Multiple inboxes + command dashboard'],
        },
        { feature: 'Keeps inboxes organized', values: ['✓', '✓', '✓'] },
        { feature: 'Sorts and labels every email', values: ['✓', '✓', '✓'] },
        { feature: 'Drafts replies in your tone', values: ['✓', '✓', '✓'] },
        { feature: 'Weekly report card', values: ['✓', '✓', '✓'] },
        { feature: 'Security & data residency options', values: ['✓', '✓', '✓'] },
        { feature: 'Personalized onboarding', values: ['–', '✓', '✓'] },
        { feature: 'Morning Brief', values: ['–', '✓', '✓'] },
        { feature: 'Shared team dashboards', values: ['–', '✓', '✓'] },
        { feature: 'Custom tone profiles', values: ['–', '✓', '✓'] },
        { feature: 'AI-generated team briefs', values: ['–', '✓', '✓'] },
        { feature: 'Dedicated AI Innovation Team consultation', values: ['–', '–', '✓'] },
        { feature: 'Custom workflow integrations', values: ['–', '–', '✓'] },
        { feature: 'Priority support & optimization', values: ['–', '–', '✓'] },
      ],
    },
  },
  security: {
    subtitle:
      'At BlueBird AGI, your privacy, data, and systems are protected by design. Every feature we build is backed by enterprise-grade security and seamless integrations that fit your workflow.',
    securityTitle: 'Security You Can Trust',
    securityFeatures: [
      {
        icon: 'shield',
        title: 'Enterprise-Grade Encryption',
        description:
          'All data in BlueBird AGI is encrypted in transit and at rest using AES-256 and TLS 1.3 standards.',
      },
      {
        icon: 'lock',
        title: 'Zero-Trust Framework',
        description:
          'We authenticate every user and device, ensuring only verified connections are granted access.',
      },
      {
        icon: 'user-check',
        title: 'Role-Based Access',
        description:
          'Fine-grained permissions let you control who can view, edit, and manage critical information.',
      },
      {
        icon: 'key',
        title: 'Multi-Factor Authentication',
        description:
          'Protect accounts with MFA and SSO integrations, including Google Workspace and Microsoft 365.',
      },
    ],
    integrationTitle: 'Powerful Integrations',
    integrations: [
      {
        icon: 'plug',
        title: 'Seamless Integrations',
        description:
          'Connect with the tools you already use — Gmail, Slack, Asana, Notion, and more — without friction.',
      },
      {
        icon: 'cloud',
        title: 'API & Webhooks',
        description:
          'Our open API and webhook support let your team automate workflows and build custom extensions.',
      },
    ],
  },
  contact: {
    title: 'Get Your Time Back.',
    subtitle: 'Join the BlueBird AGI list for updates, insights, and early access to new features.',
    successMessage: '🎉 Thanks for joining! Check your inbox soon.',
    buttonLabel: 'Join Waitlist',
    placeholders: {
      name: 'Your name',
      email: 'you@example.com',
    },
    errors: {
      missingFields: 'Please fill in both fields.',
      invalidEmail: 'Please enter a valid email address.',
      submission: 'Something went wrong. Try again later.',
    },
  },
};

export default siteContent;
