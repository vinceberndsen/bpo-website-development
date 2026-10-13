/**
 * English source dictionary. This file defines the shape every other language must match
 * (TypeScript will flag missing or misspelt keys in nl/nb/sv/da/fi).
 * Translations are drafts for native-speaker review; they have not been professionally reviewed.
 * Brand messaging (descriptor, taglines, hero, CTAs) comes from lib/config/company.ts.
 */
import { brandMessaging, company } from '@/lib/config/company'

const brand = brandMessaging.en

export const en = {
  brand,

  /** Closing call to action on inner pages; the homepage closes with the brand tagline instead. */
  closingCta: {
    title: 'Let’s design the right team for your business.',
    body: 'Tell us about your customers, languages and coverage needs. We will come back to you to discuss what a dedicated team could look like.',
  },

  meta: {
    siteDescription: brand.metaDescription,
    home: {
      title: `${company.name} | ${brand.descriptor}`,
      description: brand.metaDescription,
    },
    services: {
      title: 'Services',
      description:
        'Dedicated customer care, specialist support teams and customer operations, delivered by small managed teams in Greece.',
    },
    howItWorks: {
      title: 'How it works',
      description:
        'From discovery and team design to recruitment, training, a controlled launch and continuous improvement — how we set up and run your dedicated team.',
    },
    markets: {
      title: 'Markets & languages',
      description:
        'Our focus on the Netherlands, Dutch-speaking Belgium, Norway, Sweden, Denmark and Finland, and how delivery languages are confirmed for each project.',
    },
    about: {
      title: `About ${company.name}`,
      description: `${company.name} is a Greece-based boutique customer-operations partner focused on small, dedicated teams for Dutch-speaking and Nordic markets.`,
    },
    careers: {
      title: 'Careers',
      description:
        'Greece-based remote customer-care roles supporting Dutch-speaking and Nordic customers. Register your interest for future openings.',
    },
    contact: {
      title: 'Discuss your team',
      description:
        'Tell us about your customers, languages and coverage needs, and we will discuss what a dedicated team could look like for you.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
    },
  },

  common: {
    skipToContent: 'Skip to main content',
    discussYourTeam: brand.primaryCta,
    seeHowItWorks: brand.secondaryCta,
    homeLabel: `${company.name} — home`,
    learnMore: 'Learn more',
    viewService: 'View service',
    allServices: 'All services',
    mainNav: 'Main navigation',
    footerNav: 'Footer navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    selectLanguage: 'Select website language',
    stepLabel: 'Step',
    backToHome: 'Back to home',
  },

  nav: {
    services: 'Services',
    howItWorks: 'How it works',
    markets: 'Markets & languages',
    about: 'About',
    careers: 'Careers',
    contact: 'Contact',
  },

  footer: {
    proposition: 'Dedicated customer-care teams of 3–10 people, based in Greece, for Dutch-speaking and Nordic markets.',
    pagesHeading: 'Company',
    servicesHeading: 'Services',
    legalHeading: 'Legal',
    contactHeading: 'Get in touch',
    contactLink: 'Discuss your team',
    privacy: 'Privacy notice',
    recruitmentPrivacy: 'Recruitment privacy notice',
    cookies: 'Cookie information',
    company: 'Legal & company information',
    rights: 'All rights reserved.',
    photoCredit: 'Photography is illustrative stock imagery from Unsplash.',
  },

  images: {
    hero: 'Four colleagues gathered around a table, reviewing printed documents together',
    dedicated: 'Three people working at computer workstations in a bright office',
    customerCare: 'A smiling customer-service professional wearing a headset at her desk',
    specialist: 'Two colleagues with laptops in conversation at a wooden table',
    backOffice: 'Colleagues focused on their monitors at a shared office desk',
    howItWorks: 'Three people in a small meeting room discussing documents at a round table',
    markets: 'A headset resting beside an open laptop',
    athensView: 'View over Athens towards the sea, with the Acropolis in the foreground',
    athensAcropolis: 'The Acropolis of Athens in golden evening light',
    athensStreet: 'People walking along a street in Athens on a sunny day',
  },

  home: {
    hero: {
      eyebrow: brand.tagline,
      title: brand.heroHeadline,
      intro: brand.heroCopy,
    },
    strip: {
      label: 'What we offer',
      items: [
        'Teams of 3–10 people',
        'Greece-based delivery',
        'Dedicated account ownership',
        'Dutch-speaking and Nordic market focus',
      ],
    },
    why: {
      eyebrow: 'Why a boutique team?',
      title: 'A team sized around your business — not the other way round.',
      intro:
        'Large contact centres are built for scale. Many businesses need something different: a small group of people who know their customers, their products and their tone of voice.',
      points: [
        {
          title: 'Personal accountability',
          body: 'You work with one accountable delivery contact who knows your account, your team and your priorities — not a rotating ticket queue.',
        },
        {
          title: 'Specialist knowledge',
          body: 'Your agents focus on your business only. Product knowledge, procedures and context build up in the team instead of being spread across many clients.',
        },
        {
          title: 'Sized to fit',
          body: 'We design teams of roughly 3–10 people around your volumes, channels and hours, and adjust the set-up as your needs change.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Three ways a dedicated team can support you',
      intro:
        'Each engagement is scoped individually. Channels, coverage and responsibilities are agreed with you before the team starts.',
    },
    clients: {
      eyebrow: 'Who we work with',
      title: 'Built for two kinds of clients',
      items: [
        {
          title: 'SMEs looking for an outsourced customer-care department',
          body: 'You want customer care handled professionally without building a department yourself.',
          points: [
            'A complete small team instead of individual hires',
            'Recruitment, supervision and coaching handled for you',
            'A single delivery contact for day-to-day questions',
          ],
        },
        {
          title: 'Multinationals needing a focused specialist team',
          body: 'You need a dedicated team for a specific market, product line or process, working alongside your own organisation.',
          points: [
            'A team focused on one clearly defined scope',
            'Works within your systems, policies and approval rules',
            'Clear reporting into your existing governance',
          ],
        },
      ],
    },
    dedicated: {
      eyebrow: 'Dedicated to you, supported by us',
      title: 'Your own team, backed by shared operational support',
      intro:
        'The people who speak to your customers work only for you. Behind them, shared processes keep the team staffed, trained and accountable.',
      dedicatedHeading: 'Dedicated to your business',
      dedicatedItems: [
        'Agents who work on your account only',
        'Client-specific knowledge base and procedures',
        'Familiarity with your products, customers and tone of voice',
        'A named delivery contact for your account',
      ],
      sharedHeading: 'Supported by our shared functions',
      sharedItems: [
        'Recruitment and language assessment',
        'Quality monitoring and coaching',
        'Delivery management and reporting',
        'IT set-up and access administration',
      ],
    },
    process: {
      eyebrow: 'How it works',
      title: 'A clear path from first conversation to a running team',
      steps: [
        { title: 'Discovery', body: 'We learn about your customers, contact types, systems and goals.' },
        { title: 'Team design', body: 'We propose team size, languages, channels and coverage.' },
        {
          title: 'Recruitment and training',
          body: 'We recruit for the role, assess language skills and train with your materials.',
        },
        { title: 'Launch', body: 'A controlled go-live with agreed escalation routes and close monitoring.' },
        {
          title: 'Continuous improvement',
          body: 'Regular reporting, coaching and reviews to keep improving quality.',
        },
      ],
      cta: 'Read the full process',
    },
    markets: {
      eyebrow: 'Markets and languages',
      title: 'Focused on Dutch-speaking and Nordic markets',
      body: 'We concentrate on a small number of markets so we can understand their customers and expectations properly.',
      dutchTitle: 'Dutch-speaking markets',
      dutchBody: 'Customer care for the Netherlands and Dutch-speaking Belgium (Flanders).',
      nordicTitle: 'Selected Nordic opportunities',
      nordicBody:
        'Norwegian, Swedish, Danish and Finnish customer care, considered project by project.',
      note: 'Delivery languages, staffing and start dates are confirmed during scoping, based on recruitment and availability.',
      cta: 'Markets & languages',
    },
    greece: {
      eyebrow: 'Delivery from Greece',
      title: 'A Greece-based, remote-first delivery model',
      paragraphs: [
        'Our teams are based in Greece and are set up to work remotely, with structured supervision, regular coaching and clear routines for communication.',
        'Greece offers access to multilingual professionals, including people with Dutch or Nordic language skills, and a time zone that overlaps well with Northern European working hours.',
      ],
      points: [
        'Remote working with defined supervision and check-ins',
        'Working hours aligned with your customers’ time zone',
        'Equipment, access and working practices agreed per account',
      ],
    },
    clarity: {
      eyebrow: 'What you can expect',
      title: 'Operational clarity from day one',
      intro: 'Instead of promises, we agree specifics with you in writing before the team goes live.',
      items: [
        {
          title: 'Agreed scope',
          body: 'A written description of contact types, channels, hours and what the team may and may not decide.',
        },
        {
          title: 'Escalation ownership',
          body: 'Named owners on both sides for escalations, exceptions and decisions outside the team’s authority.',
        },
        {
          title: 'Performance reporting',
          body: 'Reporting on the measures we agree together, reviewed with you on a fixed rhythm.',
        },
        {
          title: 'Controlled system access',
          body: 'Access to your systems only as needed for the role, granted and removed through an agreed process.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'What size team can you provide?',
          a: 'We focus on teams of approximately 3–10 full-time people. If you need more, we can discuss it, but our model is built around small, dedicated teams.',
        },
        {
          q: 'Are the agents dedicated to our business?',
          a: 'Yes. Agents in a dedicated team work on your account. Shared functions such as recruitment, quality and IT support several teams, but the people handling your customers do not.',
        },
        {
          q: 'Can you work in our existing systems?',
          a: 'In most cases, yes. We prefer to work in your helpdesk, CRM or order systems so that you keep full visibility. Access requirements are agreed during scoping.',
        },
        {
          q: 'Which languages can you support?',
          a: 'Our focus is Dutch and the Nordic languages, alongside English. Whether a language can be staffed for your project is confirmed during scoping, after we have assessed recruitment and availability.',
        },
        {
          q: 'How are working hours and coverage agreed?',
          a: 'Together with you, based on your contact volumes and customer expectations. Opening hours, holiday cover and any extended hours are defined before launch and reflected in the proposal.',
        },
        {
          q: 'How does onboarding work?',
          a: 'After recruitment, the team is trained on your products, processes and systems using your materials and input from your experts. Launch follows once training and system access are in place.',
        },
        {
          q: 'How do you approach quality and reporting?',
          a: 'We agree quality criteria and reporting measures with you, monitor interactions, coach agents regularly and review results with you on a fixed schedule.',
        },
        {
          q: 'Can the team grow over time?',
          a: 'Yes. Teams can be adjusted as volumes or scope change. Additions depend on recruitment and training, so we plan changes with you in advance.',
        },
        {
          q: 'How is pricing structured?',
          a: 'We price each engagement as a scoped, managed team. Team size, languages, complexity and coverage all affect the quote. We share a proposal after discovery rather than publishing a standard price list.',
        },
      ],
    },
    finalCta: {
      title: brand.tagline,
      body: brand.finalCtaBody,
    },
  },

  servicesPage: {
    hero: {
      eyebrow: 'Services',
      title: 'Managed teams for customer care and customer operations',
      intro:
        'Every engagement is built around one dedicated team. Choose the focus that matches your needs — or combine them within a single, clearly scoped team.',
    },
    approach: {
      title: 'What every engagement includes',
      points: [
        'A dedicated team working on your account only',
        'Recruitment, employment administration and supervision',
        'Training based on your products and processes',
        'Quality coaching and agreed performance reporting',
        'A named delivery contact',
      ],
    },
    scopeNote:
      'We do not provide regulated advice, advanced technical engineering support or 24/7 coverage as standard. Extended hours can be discussed during scoping.',
  },

  services: {
    labels: {
      useCases: 'Typical use cases',
      handles: 'What the team can handle',
      responsibilities: 'Responsibilities and boundaries',
      weHandle: 'Our team handles',
      clientRetains: 'You retain',
      quality: 'Quality and reporting',
      related: 'Related services',
    },
    items: {
      'dedicated-customer-care': {
        name: 'Dedicated customer care',
        summary:
          'A dedicated team handling your customer contacts by email, phone and chat — in your tone of voice and within your processes.',
        meta: {
          title: 'Dedicated customer care',
          description:
            'A dedicated customer-care team in Greece handling email, tickets, phone and chat for Dutch-speaking and Nordic customers.',
        },
        eyebrow: 'Service',
        title: 'Dedicated customer care, run as an extension of your business',
        intro:
          'A small, dedicated team that handles your everyday customer contacts. We recruit and manage the team; you decide how your customers should be served.',
        useCases: [
          'E-commerce and retail businesses handling order and delivery questions',
          'Travel, booking and subscription services with recurring customer enquiries',
          'Growing businesses replacing ad-hoc support with a structured team',
          'Companies entering a Dutch-speaking or Nordic market',
        ],
        handles: [
          { title: 'Email and ticket support', body: 'Responding to and resolving customer emails and tickets in your helpdesk.' },
          { title: 'Phone support', body: 'Inbound calls during agreed hours, with clear routing and call notes.' },
          { title: 'Live chat', body: 'Real-time chat support on your website or app during agreed hours.' },
          { title: 'Order and booking enquiries', body: 'Status questions, changes and cancellations within your rules.' },
          { title: 'Customer follow-up', body: 'Proactive follow-up on open cases, callbacks and satisfaction checks.' },
        ],
        channelsNote: 'Channels and coverage are agreed per account.',
        weHandle: [
          'Handling contacts within the agreed scope',
          'Day-to-day supervision and scheduling',
          'Documenting cases in your systems',
          'Escalating exceptions to your named owners',
        ],
        clientRetains: [
          'Customer policies, refunds and goodwill rules',
          'Decisions outside the agreed authority',
          'Product, pricing and service changes',
          'Final ownership of the customer relationship',
        ],
        quality: {
          body: 'Before launch we agree what good looks like for your customers. We then monitor, coach and report against those measures.',
          points: [
            'Quality criteria based on your standards and tone of voice',
            'Regular review of a sample of interactions',
            'Agreed measures such as response times and resolution',
            'A fixed review rhythm with your contact person',
          ],
        },
      },
      'specialist-support-teams': {
        name: 'Specialist support teams',
        summary:
          'A focused team for B2B, dealer and partner support, complaints or product-specific first-line support.',
        meta: {
          title: 'Specialist support teams',
          description:
            'Focused specialist support teams for B2B customers, dealers and partners, complaints handling and product-specific first-line support.',
        },
        eyebrow: 'Service',
        title: 'Specialist support teams with a clearly defined remit',
        intro:
          'Some support requires deeper product or process knowledge. We build a focused team that learns your specific domain, while your experts keep the decisions that belong with them.',
        useCases: [
          'Supporting dealers, resellers or partners with orders and product questions',
          'B2B customer service for business accounts',
          'Complaints handling with structured escalation',
          'First-line support for a specific product or product line',
        ],
        handles: [
          { title: 'Dealer and partner support', body: 'Answering partner questions on orders, availability, documentation and procedures.' },
          { title: 'B2B customer service', body: 'Account-based support for business customers, following your service agreements.' },
          { title: 'Complaints and escalation handling', body: 'Registering, investigating and following up complaints within agreed steps.' },
          { title: 'Product-specific first-line support', body: 'Structured first-line troubleshooting based on your documentation, with clear hand-over.' },
        ],
        channelsNote: 'Channels, coverage and the limits of the team’s authority are agreed per account.',
        weHandle: [
          'First-line handling within documented procedures',
          'Gathering complete information before escalation',
          'Following up until cases are closed or handed over',
          'Keeping knowledge articles and notes up to date',
        ],
        clientRetains: [
          'Technical decisions and second-line expertise',
          'Commercial terms, credits and exceptions',
          'Decisions outside the agreed authority',
          'Final outcomes on complaints and disputes',
        ],
        quality: {
          body: 'Specialist work needs specific measures. We agree them with you and review them together.',
          points: [
            'Accuracy and completeness of case handling',
            'Correct use of escalation routes',
            'Agreed response and follow-up times',
            'Regular calibration sessions with your experts',
          ],
        },
      },
      'customer-operations': {
        name: 'Customer operations & back office',
        summary:
          'Case administration, CRM updates, order processing and ticket triage, using documented permissions and approval limits.',
        meta: {
          title: 'Customer operations & back office',
          description:
            'Back-office support for customer operations: case administration, CRM updates, order processing, ticket triage and workflow follow-up.',
        },
        eyebrow: 'Service',
        title: 'Customer operations and back office, handled with care',
        intro:
          'Behind every customer conversation is administration that needs to be accurate and on time. Our team takes on those tasks using your workflows, with documented permissions and approval limits.',
        useCases: [
          'Clearing case and order backlogs in a structured way',
          'Keeping CRM and customer records accurate and complete',
          'Triage of incoming tickets so specialists can focus',
          'Following up workflows that would otherwise stall',
        ],
        handles: [
          { title: 'Case administration', body: 'Creating, updating and closing cases according to your procedures.' },
          { title: 'CRM updates', body: 'Maintaining customer, contact and account data in your CRM.' },
          { title: 'Order processing', body: 'Entering, checking and amending orders within agreed limits.' },
          { title: 'Ticket triage', body: 'Categorising, prioritising and routing incoming tickets to the right owner.' },
          { title: 'Workflow follow-up', body: 'Chasing open steps, reminders and hand-overs until work is completed.' },
        ],
        channelsNote: 'Permissions and approval limits are documented and agreed per account.',
        weHandle: [
          'Executing tasks within documented permissions',
          'Checking data quality and completeness',
          'Flagging exceptions and anomalies',
          'Keeping an audit-friendly record of work done',
        ],
        clientRetains: [
          'Approvals above the agreed limits',
          'Business rules and policy decisions',
          'Granting and removing system access',
          'Final responsibility for financial transactions',
        ],
        quality: {
          body: 'For operational work, accuracy and timeliness matter most. We agree measures and checks with you before we start.',
          points: [
            'Accuracy checks on a sample of completed tasks',
            'Agreed turnaround times per task type',
            'Backlog and volume reporting',
            'Regular process reviews with your team',
          ],
        },
      },
    },
  },

  howItWorks: {
    hero: {
      eyebrow: 'How it works',
      title: 'How we set up and run your dedicated team',
      intro:
        'A structured, transparent process. You know what happens at each stage, who is responsible and what needs to be in place before your team goes live.',
    },
    steps: [
      {
        title: 'Discovery and scope',
        body: 'We learn about your customers, contact types, volumes, systems and goals, and agree what the team should — and should not — handle.',
      },
      {
        title: 'Team and coverage design',
        body: 'We propose a team size, language mix, channels and working hours that fit your volumes, including holiday cover.',
      },
      {
        title: 'Recruitment and language assessment',
        body: 'We recruit for your specific role and assess language proficiency and customer-service skills for the level the role requires.',
      },
      {
        title: 'Knowledge transfer and training',
        body: 'Your experts share products, processes and policies. We turn this into training and a client-specific knowledge base.',
      },
      {
        title: 'Controlled launch',
        body: 'The team goes live in a controlled way — for example on selected channels or volumes first — with close monitoring and quick feedback loops.',
      },
      {
        title: 'Reporting, coaching and improvement',
        body: 'We report on agreed measures, coach agents continuously and review results with you to keep improving.',
      },
    ],
    responsibilities: {
      eyebrow: 'Responsibilities',
      title: 'Clear responsibilities on both sides',
      intro: 'A dedicated team works best when everyone knows who owns what.',
      weTitle: 'We manage',
      we: [
        'Recruitment',
        'Employment administration',
        'Day-to-day team supervision',
        'Quality coaching',
        'Agreed performance reporting',
      ],
      clientTitle: 'You provide',
      client: [
        'Product and process expertise',
        'Required system access',
        'Approval and escalation owners',
        'Business rules and policy decisions',
      ],
    },
    define: {
      eyebrow: 'Before launch',
      title: 'What we define before launch',
      intro: 'These points are agreed in writing during scoping, so both sides start with the same expectations.',
      items: [
        { title: 'Languages', body: 'Which languages are needed, for which channels and at what level.' },
        { title: 'Channels', body: 'Email, tickets, phone, chat or back-office work — and how they are prioritised.' },
        { title: 'Working hours and holiday coverage', body: 'Opening hours, peak periods and how holidays and absence are covered.' },
        { title: 'Contact volumes', body: 'Expected volumes and patterns, used to size the team.' },
        { title: 'Service levels', body: 'Response and handling times the team will work towards.' },
        { title: 'Training', body: 'Content, materials, experts involved and sign-off before launch.' },
        { title: 'Escalations', body: 'Routes, owners and response expectations for anything outside the team’s authority.' },
        { title: 'Data access', body: 'Which systems and data the team needs, and how access is granted and removed.' },
        { title: 'Commercial scope', body: 'Team size, coverage and services included in the engagement.' },
      ],
    },
    timing: {
      title: 'About timelines',
      body: 'Launch dates depend on recruitment, systems access and training. We agree a realistic plan with you during scoping instead of promising a fixed lead time.',
    },
  },

  markets: {
    hero: {
      eyebrow: 'Markets & languages',
      title: 'Dutch-speaking and Nordic markets, approached one by one',
      intro:
        'We focus on a small group of Northern European markets. Each has its own language, customer expectations and ways of doing business.',
    },
    distinction: {
      title: 'Website languages and delivery languages are not the same',
      websiteTitle: 'Website languages',
      websiteBody:
        'This website is available in English, Dutch, Norwegian, Swedish, Danish and Finnish so you can read about our services in your own language.',
      deliveryTitle: 'Customer-service languages',
      deliveryBody:
        'Delivery languages are offered after we have confirmed recruitment and availability for your project. A translated web page does not mean a staffed team is immediately available in that language.',
    },
    marketsTitle: 'Our market focus',
    marketsIntro:
      'We do not have offices in these countries and do not claim established customers there. They are the markets our teams are designed to serve.',
    items: [
      {
        name: 'Netherlands',
        language: 'Dutch',
        body: 'Customers tend to value direct, clear and efficient communication, with quick resolution through digital channels.',
      },
      {
        name: 'Dutch-speaking Belgium',
        language: 'Dutch (Flemish)',
        body: 'We support Dutch-speaking customers in Flanders. This does not cover French- or German-speaking Belgium, which require separate language coverage.',
      },
      {
        name: 'Norway',
        language: 'Norwegian',
        body: 'Norwegian customer care requires Norwegian-language skills and an informal yet precise tone that Norwegian customers expect.',
      },
      {
        name: 'Sweden',
        language: 'Swedish',
        body: 'Swedish customers generally expect a friendly, egalitarian tone and well-structured, reliable follow-up.',
      },
      {
        name: 'Denmark',
        language: 'Danish',
        body: 'Danish customer care requires Danish-language skills and a straightforward, personable communication style.',
      },
      {
        name: 'Finland',
        language: 'Finnish',
        body: 'Finnish is a distinct language from the Scandinavian languages, and customers often value concise, matter-of-fact service.',
      },
    ],
    principles: {
      title: 'How we approach language delivery',
      items: [
        {
          title: 'Nordic markets are not one market',
          body: 'Norwegian, Swedish, Danish and Finnish are separate languages with different expectations. We scope each one individually.',
        },
        {
          title: 'Proficiency assessed for the role',
          body: 'We assess language skills for the level the role requires, for written and spoken channels as relevant.',
        },
        {
          title: 'Availability confirmed per project',
          body: 'Whether a language can be staffed, and when, is confirmed during scoping for each project.',
        },
        {
          title: 'English alongside',
          body: 'English can be combined with the other languages, for example for international customers or partners.',
        },
      ],
    },
    cta: {
      title: 'Discuss your language requirements.',
      body: 'Tell us which markets and languages you need. We will tell you honestly what is feasible and what it would take.',
    },
  },

  about: {
    hero: {
      eyebrow: `About ${company.name}`,
      title: brand.secondaryLine,
      intro: `${company.name} is a Greece-based boutique customer-operations partner focused on small, dedicated teams for Dutch-speaking and Nordic markets.`,
    },
    philosophy: {
      title: 'What we believe in',
      intro:
        'We help SMEs and specialist departments within larger organisations build customer-care teams around their own processes, customers and brand—with clear accountability and hands-on management.',
      items: [
        {
          title: 'Small teams',
          body: 'Teams of roughly 3–10 people are large enough to provide continuity and small enough to stay personal.',
        },
        {
          title: 'Personal accountability',
          body: 'Every account has a named delivery contact who is responsible for the team and reachable directly.',
        },
        {
          title: 'Customer understanding',
          body: 'We take time to understand your customers, your products and how you want to be represented.',
        },
        {
          title: 'Practical operational experience',
          body: 'We focus on the practical work of running customer care well: clear procedures, good supervision and steady coaching.',
        },
        {
          title: 'Greece-based delivery',
          body: 'Our teams are based in Greece, with working hours aligned to Northern European customers.',
        },
        {
          title: 'Long-term relationships',
          body: 'We aim for lasting partnerships, where the team grows in knowledge and responsibility over time.',
        },
      ],
    },
    greece: {
      title: 'Why Greece',
      paragraphs: [
        'Greece has a multilingual workforce, including people who speak Dutch or Nordic languages, and a time zone that overlaps closely with Northern European working days.',
        'We use a remote-first working model with structured supervision, so we can recruit the right people for each role rather than only those living near a particular office.',
      ],
      note: 'Photographs show Athens for illustration and do not depict our premises.',
    },
    founder: {
      title: 'Founder-led',
    },
  },

  careers: {
    hero: {
      eyebrow: 'Careers',
      title: 'Remote customer-care roles, based in Greece',
      intro:
        'We build dedicated teams that support Dutch-speaking and Nordic customers. If you have the languages and want to work in customer care, we would like to hear from you.',
    },
    roles: {
      title: 'What to know before you apply',
      items: [
        {
          title: 'Dutch-speaking and Nordic customers',
          body: 'Roles may support customers in Dutch, Norwegian, Swedish, Danish or Finnish, often alongside English.',
        },
        {
          title: 'Language and role requirements',
          body: 'Applicants need to meet the language level and requirements of the specific role. We assess this during recruitment.',
        },
        {
          title: 'Eligibility and place of work',
          body: 'Your eligibility to work and your place of work are assessed during the recruitment process.',
        },
        {
          title: 'Openings depend on client projects',
          body: 'We recruit when a client project needs a team. There may not be an opening that matches your profile right away.',
        },
      ],
    },
    process: {
      title: 'How it works',
      steps: [
        'Register your interest with the form below.',
        'When a project matches your profile, we contact you.',
        'We assess language skills and fit for the role.',
        'Successful candidates receive role details and terms in writing.',
      ],
    },
    form: {
      title: 'Register your interest',
      intro: 'This is a general expression of interest, not an application for a specific vacancy. Please do not include sensitive personal data.',
    },
  },

  contact: {
    hero: {
      eyebrow: 'Discuss your team',
      title: 'Tell us about the team you need',
      intro:
        'Share a few details about your customers, languages and coverage. We will review your enquiry and get back to you to arrange a conversation.',
    },
    aside: {
      title: 'What happens next',
      steps: [
        'We review your enquiry and any questions.',
        'We arrange an introductory call with you.',
        'If there is a fit, we start discovery and scoping.',
        'You receive a proposal for a scoped, managed team.',
      ],
      note: 'There is no obligation. Submitting an enquiry does not commit you to anything.',
    },
  },

  forms: {
    common: {
      required: 'Required',
      optional: 'optional',
      submit: 'Send enquiry',
      submitInterest: 'Register interest',
      submitting: 'Sending…',
      errorSummary: 'Please check the highlighted fields.',
      notConfiguredTitle: 'Form submission is not enabled yet',
      notConfiguredBody:
        'This form is complete, but no email or CRM provider has been connected. Nothing you enter will be sent or stored.',
      notConfiguredResult:
        'Your details passed validation, but they were not sent because form delivery is not configured. Nothing has been stored.',
      successTitle: 'Thank you — your message has been sent',
      successBody: 'We will review it and get back to you.',
      errorTitle: 'Your message could not be sent',
      errorBody: 'Something went wrong on our side. Please try again later.',
      spamBlocked: 'Your submission could not be accepted. Please try again.',
      honeypot: 'Leave this field empty',
      selectPlaceholder: 'Select…',
      privacyBefore: 'I have read the',
      privacyAfter: 'and understand how my details will be used to respond to this enquiry.',
      privacyLinkText: 'privacy notice',
      recruitmentPrivacyLinkText: 'recruitment privacy notice',
    },
    enquiry: {
      title: 'Your enquiry',
      fields: {
        name: 'Name',
        workEmail: 'Work email',
        company: 'Company',
        website: 'Company website',
        languages: 'Required delivery languages',
        languagesHint: 'Select all that apply. Availability is confirmed during scoping.',
        teamSize: 'Indicative team size',
        services: 'Services required',
        coverage: 'Preferred coverage or working hours',
        coverageHint: 'For example: weekdays 08:00–18:00 CET.',
        startDate: 'Indicative start date',
        startDateHint: 'For example: Q2 or “after the summer”.',
        message: 'Message',
        messageHint: 'Briefly describe your customers, contact types and what you are looking for.',
        marketing: 'Optional: I would like to receive occasional updates from you by email.',
      },
      languageOptions: {
        dutch: 'Dutch',
        norwegian: 'Norwegian',
        swedish: 'Swedish',
        danish: 'Danish',
        finnish: 'Finnish',
        english: 'English',
        other: 'Other',
      },
      teamSizeOptions: {
        '3-5': '3–5 people',
        '6-10': '6–10 people',
        '11+': '11+ people',
        unsure: 'Not sure yet',
      },
      serviceOptions: {
        care: 'Dedicated customer care',
        specialist: 'Specialist support team',
        operations: 'Customer operations & back office',
        unsure: 'Not sure yet',
      },
    },
    candidate: {
      fields: {
        fullName: 'Full name',
        email: 'Email',
        country: 'Current country of residence',
        languages: 'Languages and proficiency',
        languagesHint: 'For example: Dutch – native, English – fluent, Swedish – conversational.',
        experience: 'Relevant experience',
        experienceHint: 'Briefly describe customer-service or related experience.',
        profileUrl: 'LinkedIn or profile URL',
        message: 'Message',
      },
    },
    errors: {
      required: 'This field is required.',
      email: 'Enter a valid email address, for example name@company.com.',
      url: 'Enter a valid web address starting with http:// or https://.',
      tooLong: 'This entry is too long.',
      selectOne: 'Select at least one option.',
      privacy: 'Please confirm you have read the privacy notice.',
    },
  },

  legal: {
    draftNotice:
      'Draft for legal review. This page is a structure to be completed with verified company information and reviewed by a qualified advisor before launch. It is not legal advice.',
    toComplete: 'To be completed',
    docs: {
      privacy: {
        title: 'Privacy notice',
        description: 'How we handle personal data submitted through this website.',
        sections: [
          { heading: 'Who we are', body: 'The controller of your personal data is the company identified on the legal and company information page.' },
          { heading: 'What data we collect', body: 'When you submit an enquiry, we receive the details you enter in the form, such as your name, work email, company and message.' },
          { heading: 'Why we use it', body: 'We use enquiry details to respond to your request and to discuss a possible engagement. If you opt in separately, we may send occasional updates.' },
          { heading: 'Legal basis', body: 'The legal basis for each processing purpose will be documented here after legal review.' },
          { heading: 'Who receives it', body: 'Service providers used to deliver form submissions and email will be listed here once selected.' },
          { heading: 'How long we keep it', body: 'Retention periods will be defined and stated here after legal review.' },
          { heading: 'Your rights', body: 'Depending on applicable law, you may have rights to access, correct, delete or restrict the use of your data, and to complain to a supervisory authority. Details and contact routes will be added here.' },
        ],
      },
      'recruitment-privacy': {
        title: 'Recruitment privacy notice',
        description: 'How we handle personal data submitted by people interested in working with us.',
        sections: [
          { heading: 'Purpose', body: 'We use the details you submit to assess whether you may be suitable for current or future roles in client projects.' },
          { heading: 'What data we collect', body: 'Your name, email, country of residence, languages, experience, optional profile link and message. We do not ask for CVs or sensitive personal data at this stage.' },
          { heading: 'Legal basis', body: 'The legal basis for recruitment processing will be documented here after legal review.' },
          { heading: 'Retention', body: 'How long expressions of interest are kept, and how you can ask for removal, will be stated here after legal review.' },
          { heading: 'Your rights', body: 'Depending on applicable law, you may access, correct or delete your data and complain to a supervisory authority. Contact routes will be added here.' },
        ],
      },
      cookies: {
        title: 'Cookie information',
        description: 'Information about cookies used on this website.',
        sections: [
          { heading: 'Current use', body: 'This website does not use analytics, advertising or tracking cookies. It sets one functional cookie to remember the website language you choose.' },
          { heading: 'Language preference cookie', body: 'Name: NEXT_LOCALE. Purpose: remembers your selected website language. Duration: one year. It is only set when you choose a language.' },
          { heading: 'Future changes', body: 'If analytics or other non-essential cookies are added in future, this page will be updated and consent will be requested before they are used.' },
        ],
      },
      company: {
        title: 'Legal & company information',
        description: 'Legal and company details.',
        sections: [],
      },
    },
    companyFields: {
      name: 'Company name',
      legalName: 'Legal entity name',
      registrationNumber: 'Registration number',
      vatNumber: 'VAT number',
      registeredAddress: 'Registered address',
      email: 'Email',
      phone: 'Phone',
    },
  },

  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has been moved.',
  },
}

export type Dictionary = typeof en
