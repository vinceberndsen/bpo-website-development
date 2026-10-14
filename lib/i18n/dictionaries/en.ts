/**
 * English source dictionary (British English). This file defines the shape every other language
 * must match before it can be registered in get-dictionary.ts.
 * Brand messaging (descriptor, taglines, hero, CTAs) comes from lib/config/company.ts.
 */
import { brandMessaging, company } from '@/lib/config/company'

const brand = brandMessaging.en

export const en = {
  brand,

  /** Closing call to action on inner pages; the homepage closes with the brand tagline instead. */
  closingCta: {
    title: 'Let’s design the right specialist team for your business.',
    body: 'Tell us about your cases, customers, partners and languages. We will come back to you to discuss what a dedicated team could look like.',
  },

  meta: {
    siteDescription: brand.metaDescription,
    home: {
      title: `${company.name} | Specialist Support & Customer Operations`,
      description: brand.metaDescription,
    },
    services: {
      title: 'Services',
      description:
        'Specialist and second-line support, dealer and partner support, B2B customer operations, and complementary customer care and back-office support.',
    },
    howItWorks: {
      title: 'How it works',
      description:
        'From discovery and responsibility design to recruitment, knowledge transfer, a controlled launch and ongoing improvement — how we set up a specialist support team.',
    },
    markets: {
      title: 'Markets & languages',
      description:
        'Specialist support in Dutch, German, Norwegian and English, with German-language delivery tailored to Germany, Switzerland and Austria.',
    },
    about: {
      title: `About ${company.name}`,
      description: `${company.name} builds small, dedicated specialist support teams, shaped by years of hands-on Customer Experience consulting and operational experience.`,
    },
    careers: {
      title: 'Careers',
      description:
        'Specialist customer-operations roles in Dutch, German, Norwegian and English, depending on client projects. Register your interest for future openings.',
    },
    contact: {
      title: 'Discuss your team',
      description:
        'Tell us about your cases, customers and language requirements, and we will discuss what a dedicated specialist team could look like for you.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
    },
  },

  common: {
    skipToContent: 'Skip to main content',
    discussYourTeam: brand.primaryCta,
    exploreExpertise: brand.secondaryCta,
    seeHowItWorks: 'See how it works',
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
    proposition:
      'Small, dedicated specialist support teams for second-line support, dealer networks and B2B customer operations — in Dutch, German, Norwegian and English.',
    statusNote: `${company.name} is a brand in preparation.`,
    statusLink: 'Company status',
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

  /** Founder-experience presentation. The organisation names live in lib/config/company.ts. */
  experience: {
    listHeading: 'Prior professional experience includes work for',
    attribution:
      'These references relate to the founder’s prior professional experience, not to client relationships with Relavique. No endorsement is implied.',
  },

  home: {
    hero: {
      eyebrow: brand.tagline,
      title: brand.heroHeadline,
      intro: brand.heroCopy,
      shortLine: 'German-language support tailored to Germany, Switzerland and Austria. Other languages assessed on request.',
    },
    strip: {
      label: 'What we offer',
      items: [
        'Dedicated teams of 3–10',
        'Specialist case ownership',
        'Dealer and B2B support',
        'Greece-based delivery model',
      ],
    },
    resolution: {
      eyebrow: brand.secondaryLine,
      title: 'Beyond first contact. Focused on resolution.',
      intro:
        'Some cases need more than an answer. They need investigation, follow-through and someone who understands how your business works. Relavique builds small, dedicated teams around those responsibilities.',
      points: [
        {
          title: 'Specialist, not generic',
          body: 'Your team works on your account only, building product, process and partner knowledge that stays with your cases.',
        },
        {
          title: 'Accountable, not transactional',
          body: 'Cases are owned through to resolution or an agreed handover, with a named delivery contact responsible for the team.',
        },
        {
          title: 'Closely integrated',
          body: 'We work in your systems and alongside your experts, internal departments and any existing support providers.',
        },
        {
          title: 'Case ownership over contact handling',
          body: 'Success is measured by cases resolved and followed up properly, not only by contacts answered.',
        },
      ],
    },
    services: {
      eyebrow: 'Our expertise',
      title: 'Specialist support where it matters most',
      intro:
        'Our focus is work that needs deeper product and process knowledge, sound judgement and coordination. Each engagement is scoped individually before the team starts.',
    },
    layer: {
      eyebrow: 'How we fit in',
      title: 'A specialist layer within your support operation',
      intro:
        'We are designed to work with your organisation, not to replace it. Most engagements follow one of three models.',
      models: [
        {
          title: 'Complement your first-line team',
          body: 'We take the cases your first line — in-house or with an existing provider — escalates for investigation and follow-up.',
        },
        {
          title: 'Own a defined queue or process',
          body: 'We take responsibility for a clearly scoped specialist queue, workflow or escalation route, with agreed boundaries.',
        },
        {
          title: 'Build a dedicated team',
          body: 'We set up a small, dedicated team for a specific market, product line or partner network.',
        },
      ],
      note: 'In every model, your internal departments and existing providers stay part of the picture. Handover points and escalation routes are agreed with everyone involved.',
    },
    experience: {
      eyebrow: 'Experience behind the approach',
      title: 'Specialist delivery, shaped by experience.',
      intro:
        'The experience behind Relavique spans Customer Experience consulting and operations for major organisations across telecommunications, consumer products, automotive, banking, payments and food.',
      cta: 'More about our foundation',
    },
    dedicated: {
      eyebrow: 'Dedicated to you, supported by us',
      title: 'Your own team, backed by shared delivery support',
      intro:
        'The people who handle your cases work only for you. Behind them, shared functions keep the team staffed, trained and accountable.',
      dedicatedHeading: 'Dedicated to your business',
      dedicatedItems: ['Account-specific knowledge', 'Defined responsibilities', 'Dedicated agents'],
      sharedHeading: 'Supported by our shared functions',
      sharedItems: [
        'Shared recruitment, coaching and delivery support',
        'Clear escalation routes',
        'Agreed reporting',
      ],
    },
    process: {
      eyebrow: 'How it works',
      title: 'A clear path from first conversation to a running team',
      steps: [
        { title: 'Discovery', body: 'We learn how your cases, customers and partners work, and where specialist support is needed.' },
        { title: 'Team design', body: 'We define team size, languages, responsibilities and escalation routes.' },
        {
          title: 'Recruitment and training',
          body: 'We recruit and assess for the role, then train with your materials and experts.',
        },
        { title: 'Controlled launch', body: 'The team goes live against agreed readiness criteria, with close monitoring.' },
        { title: 'Ongoing improvement', body: 'Reporting, case reviews and coaching refine delivery over time.' },
      ],
      cta: 'Read the full process',
    },
    markets: {
      eyebrow: 'Markets and languages',
      title: 'Dutch, German, Norwegian and English',
      body: 'Greece-based specialist support teams for Dutch-, German-, Norwegian- and English-speaking customers, with German-language delivery tailored to Germany, Switzerland and Austria.',
      items: [
        { title: 'Dutch', body: 'For the Netherlands and Dutch-speaking Belgium.' },
        { title: 'German', body: 'For customers in Germany, Switzerland and Austria, with attention to local terminology and conventions.' },
        { title: 'Norwegian', body: 'For customers and partners in Norway.' },
        { title: 'English', body: 'For international customers, partners and English-language operations.' },
      ],
      note: 'Need another language? We assess additional language requirements against the role, recruitment availability and scope of your project.',
      cta: 'Markets & languages',
    },
    greece: {
      eyebrow: 'Delivery from Greece',
      title: 'A Greece-based, remote-first delivery model',
      paragraphs: [
        'Relavique’s teams are planned to be based in Greece and set up for remote-first working, with structured supervision, regular coaching and clear communication routines.',
        'Greece offers access to multilingual professionals and a time zone that overlaps well with working hours in the Netherlands, Germany, Switzerland, Austria and Norway. Language availability is assessed for each role.',
      ],
      points: [
        'Remote working with defined supervision and check-ins',
        'Working hours aligned with your customers’ time zone',
        'Equipment, access and working practices agreed per account',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'What size team can you provide?',
          a: 'Our model is built around small, dedicated teams of approximately 3–10 people. The right size depends on your case volumes, complexity, languages and coverage, and is agreed during scoping.',
        },
        {
          q: 'Can you work alongside our existing BPO or first-line team?',
          a: 'Yes. Many engagements are designed to complement an existing first line, whether in-house or with another provider. We agree escalation criteria, handover points and communication routes with everyone involved before launch.',
        },
        {
          q: 'What do you mean by second-line support?',
          a: 'Support for cases that require deeper investigation, product or process knowledge, and coordination beyond the first point of contact. The technical depth and the decisions the team may take are agreed per engagement; it does not include engineering, software development or regulated advice.',
        },
        {
          q: 'Can you support our dealer or partner network?',
          a: 'Yes, within an agreed scope. A team can handle partner enquiries about orders, availability and processes, coordinate cases with your departments and follow up open issues. Warranty, financial, contractual and other commercial decisions stay with you unless explicitly agreed otherwise.',
        },
        {
          q: 'Can you handle B2B customer operations?',
          a: 'Yes. A team can handle business-customer enquiries, account and service administration, order and case follow-up, and coordination with sales, logistics and service functions, following your processes and approval limits.',
        },
        {
          q: 'Can you work in our existing systems?',
          a: 'In most cases, yes. We prefer to work in your CRM, helpdesk or order systems so that you keep full visibility. Access requirements and how access is granted and removed are agreed during scoping.',
        },
        {
          q: 'How are responsibilities and escalation routes agreed?',
          a: 'In writing, before launch. We document what the team owns, which decisions remain with your experts, approval limits, escalation routes and handover criteria, and review them as the engagement develops.',
        },
        {
          q: 'Can you adapt German-language support for Switzerland or Austria?',
          a: 'We tailor German-language delivery to local terminology, communication conventions and market expectations, subject to role-specific recruitment and assessment. We do not offer Swiss German dialect support as standard.',
        },
        {
          q: 'Can you assess other languages?',
          a: 'Yes. We assess additional language requirements against the role, recruitment availability and scope of your project. Availability is confirmed before we commit.',
        },
        {
          q: 'How are working hours and coverage agreed?',
          a: 'Together with you, based on your case volumes and customer expectations. Opening hours, holiday cover and any extended hours are defined before launch. Coverage outside standard business hours, including 24/7, is not included by default.',
        },
        {
          q: 'How is pricing structured?',
          a: 'We price each engagement as a scoped, managed team. Team size, languages, complexity and coverage all affect the proposal, which we share after discovery rather than publishing a standard price list.',
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
      title: 'Specialist support and customer operations, owned end to end',
      intro:
        'Our focus is specialist and second-line support, dealer and partner support and B2B customer operations. Customer care and back-office support are available alongside them.',
    },
    approach: {
      title: 'What every engagement includes',
      points: [
        'A dedicated team working on your account only',
        'Documented responsibilities, approval limits and escalation routes',
        'Recruitment, employment administration and supervision',
        'Training based on your products, processes and example cases',
        'Quality coaching and agreed reporting',
        'A named delivery contact',
      ],
    },
    scopeNote:
      'We do not provide regulated advice, software development, advanced engineering or 24/7 coverage as standard. Technical depth and working hours are agreed during scoping.',
  },

  services: {
    labels: {
      problem: 'The challenge',
      scope: 'Typical scope',
      responsibilities: 'Responsibilities and boundaries',
      weHandle: 'Our team handles',
      clientRetains: 'You retain',
      boundaries: 'Agreed before launch',
      onboarding: 'How onboarding works',
      onboardingLink: 'Read the full process',
      experienceNote:
        'Our approach draws on practical Customer Experience consulting and operations experience: clear ownership, documented processes and effective escalation.',
      quality: 'Quality and reporting',
      related: 'Related services',
    },
    items: {
      'specialist-support-teams': {
        name: 'Specialist & second-line support',
        summary:
          'Support for cases that require deeper investigation, product or process knowledge, and coordination beyond the first point of contact.',
        meta: {
          title: 'Specialist & second-line support',
          description:
            'A dedicated second-line team for escalated cases, product and process investigations and complex complaint follow-up, owned through to resolution.',
        },
        eyebrow: 'Specialist & second-line support',
        title: 'Specialist teams for the cases that need more than a scripted answer',
        intro:
          'A small, dedicated team that takes ownership of cases escalated beyond first contact — investigating, coordinating with your experts and following through to resolution or an agreed handover.',
        problem:
          'When complex cases bounce between first-line agents and busy internal experts, customers wait and nobody clearly owns the outcome. A dedicated specialist layer gives those cases a home.',
        scope: [
          'Cases escalated beyond first contact',
          'Product and process enquiries requiring investigation',
          'Complex complaint follow-up',
          'Coordination with your experts and internal departments',
          'Case documentation and progress updates',
          'Ownership through resolution or an agreed handover',
        ],
        weHandle: [
          'Investigating cases within the agreed scope',
          'Gathering complete information before involving your experts',
          'Keeping customers and colleagues updated on progress',
          'Documenting cases and keeping knowledge articles current',
        ],
        clientRetains: [
          'Decisions outside the agreed scope',
          'Technical expertise beyond the agreed depth',
          'Commercial terms, credits and exceptions',
          'Final outcomes on complaints and disputes',
        ],
        boundaries: [
          'Technical depth is agreed per engagement.',
          'Approval limits are documented.',
          'Your experts retain decisions outside the agreed scope.',
          'Escalation and handover criteria are defined before launch.',
        ],
        onboarding:
          'We map the case types, knowledge and decisions involved, then build training from your documentation, example cases and sessions with your experts. The team starts with clearly defined case types before taking on more.',
        quality: {
          body: 'Specialist work needs specific measures. We agree them with you and review them together.',
          points: [
            'Accuracy and completeness of case investigation',
            'Correct use of escalation and handover routes',
            'Agreed response and follow-up times',
            'Regular calibration sessions with your experts',
          ],
        },
      },
      'dealer-partner-support': {
        name: 'Dealer & partner support',
        summary:
          'A dedicated point of contact for dealer, distributor and partner networks, coordinating cases between partners and your departments.',
        meta: {
          title: 'Dealer & partner support',
          description:
            'Dedicated support for dealer, distributor and partner networks: order and availability enquiries, case coordination and follow-up on outstanding issues.',
        },
        eyebrow: 'Dealer & partner support',
        title: 'Reliable support for the partners who represent your business',
        intro:
          'Dealers, distributors and partners need quick, accurate answers and someone who follows up. We build a small team that knows your network, your processes and the people involved.',
        problem:
          'Partner questions often cut across sales, logistics and service. Without a clear owner, issues stay open and partners end up chasing several departments for one answer.',
        scope: [
          'Support for dealer, distributor and partner networks',
          'Enquiries about orders, availability and operational processes',
          'Case coordination between partners and your departments',
          'Follow-up on outstanding issues',
          'Partner communication and accurate records',
        ],
        weHandle: [
          'Answering partner enquiries within documented procedures',
          'Coordinating cases with the right internal departments',
          'Following up until issues are resolved or handed over',
          'Keeping partner records and case notes accurate',
        ],
        clientRetains: [
          'Warranty decisions',
          'Financial and contractual decisions',
          'Commercial terms and partner agreements',
          'Decisions outside the agreed authority',
        ],
        boundaries: [
          'The team has no authority to approve warranty, financial, contractual or other commercial decisions unless explicitly agreed.',
          'Approval limits and escalation owners are documented.',
          'Partner communication follows your agreed guidelines.',
        ],
        onboarding:
          'We learn your partner structure, ordering and service processes and the departments involved, then train the team using your procedures and real partner scenarios before a controlled start.',
        quality: {
          body: 'Partner support depends on accuracy and follow-through. We agree measures with you and review them together.',
          points: [
            'Accuracy of information given to partners',
            'Timely follow-up on open issues',
            'Completeness of partner records',
            'Regular reviews with your partner or channel managers',
          ],
        },
      },
      'b2b-customer-operations': {
        name: 'B2B customer operations',
        summary:
          'Business-customer enquiries, account administration and order follow-up, coordinated across your sales, logistics and service functions.',
        meta: {
          title: 'B2B customer operations',
          description:
            'Dedicated B2B customer-operations teams for business-customer enquiries, account and service administration, order and case follow-up and CRM accuracy.',
        },
        eyebrow: 'B2B customer operations',
        title: 'Customer operations for business customers, handled with care',
        intro:
          'Business customers expect continuity, accuracy and someone who understands their account. Our team takes on B2B customer operations using your workflows and approval limits.',
        problem:
          'B2B accounts involve many steps and stakeholders. When administration and follow-up are spread thinly, orders stall, records drift and business customers lose confidence.',
        scope: [
          'Business-customer enquiries',
          'Account and service administration',
          'Order and case follow-up',
          'Coordination across sales, logistics and service functions',
          'CRM accuracy and workflow management',
          'Defined escalation handling',
        ],
        weHandle: [
          'Handling enquiries and tasks within documented permissions',
          'Following orders and cases through to completion',
          'Keeping CRM and account data accurate',
          'Escalating exceptions to your named owners',
        ],
        clientRetains: [
          'Pricing, contracts and commercial decisions',
          'Approvals above the agreed limits',
          'Business rules and policy decisions',
          'Final ownership of the customer relationship',
        ],
        boundaries: [
          'Permissions and approval limits are documented per task.',
          'Escalation owners are named on both sides.',
          'Changes to scope are agreed in writing.',
        ],
        onboarding:
          'We map your account types, workflows and the functions involved, then train the team in your systems with documented procedures and example cases before a controlled start.',
        quality: {
          body: 'For B2B operations, accuracy and timeliness matter most. We agree measures and checks with you before we start.',
          points: [
            'Accuracy checks on a sample of completed work',
            'Agreed turnaround times per task type',
            'Open-case and backlog reporting',
            'Regular process reviews with your team',
          ],
        },
      },
      'customer-care-back-office': {
        name: 'Customer care & back-office support',
        summary:
          'Complementary customer care and back-office capability — email, phone, tickets and chat, case administration and CRM updates.',
        meta: {
          title: 'Customer care & back-office support',
          description:
            'Complementary customer care and back-office support: email, phone, tickets and chat, order and booking enquiries, case administration, CRM updates and ticket triage.',
        },
        eyebrow: 'Customer care & back-office support',
        title: 'Customer care and back-office support alongside specialist work',
        intro:
          'Specialist teams often work best with reliable everyday support around them. Where it fits your set-up, the same team model can handle customer contacts and back-office tasks.',
        problem:
          'Routine contacts and administration still need to be accurate and on time. Handling them alongside specialist work keeps knowledge in one team and avoids unnecessary handovers.',
        scope: [
          'Email, phone, tickets and chat',
          'Order and booking enquiries',
          'Case administration',
          'CRM updates',
          'Ticket triage',
          'Workflow follow-up',
        ],
        weHandle: [
          'Handling contacts and tasks within the agreed scope',
          'Day-to-day supervision and scheduling',
          'Documenting cases in your systems',
          'Escalating exceptions to your named owners',
        ],
        clientRetains: [
          'Customer policies, refunds and goodwill rules',
          'Decisions outside the agreed authority',
          'Granting and removing system access',
          'Final responsibility for financial transactions',
        ],
        boundaries: [
          'Channels and coverage are agreed per account.',
          'Permissions and approval limits are documented.',
          'Escalation routes are defined before launch.',
        ],
        onboarding:
          'We train the team on your products, processes and systems using your materials and input from your experts. Launch follows once training and system access are in place.',
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
    },
  },

  howItWorks: {
    hero: {
      eyebrow: 'How it works',
      title: 'How we set up and run your specialist team',
      intro:
        'A structured, transparent process. You know what happens at each stage, who is responsible and what needs to be in place before your team goes live.',
    },
    steps: [
      {
        title: 'Discovery and scope',
        body: 'We learn how your cases, customers and partners work, and agree what the team should — and should not — handle.',
        pointsLabel: 'We define',
        points: [
          'Case complexity',
          'First-line versus second-line responsibilities',
          'Languages and market requirements',
          'Dealer, partner or business-customer relationships',
          'Channels, volumes and working hours',
        ],
      },
      {
        title: 'Team and responsibility design',
        body: 'We design the team around the knowledge and decisions the work requires.',
        pointsLabel: 'We define',
        points: [
          'Required product and process knowledge',
          'Decision-making authority',
          'Your experts’ responsibilities',
          'Escalation routes',
          'Ownership and handover criteria',
          'Reporting and quality expectations',
        ],
      },
      {
        title: 'Recruitment and assessment',
        body: 'We recruit for your specific role and assess candidates against what it requires.',
        pointsLabel: 'We assess',
        points: [
          'Language proficiency',
          'Communication skills',
          'Relevant experience',
          'Ability to investigate, document and coordinate cases',
        ],
      },
      {
        title: 'Knowledge transfer and training',
        body: 'Your experts share products, processes and policies. We turn this into training and a client-specific knowledge base.',
        pointsLabel: 'We build',
        points: [
          'Account-specific knowledge',
          'Documented procedures',
          'Example cases',
          'Escalation guidance',
          'Clear approval boundaries',
        ],
      },
      {
        title: 'Controlled launch',
        body: 'We agree readiness criteria with you and monitor early delivery closely, for example by starting with selected case types or channels.',
        pointsLabel: '',
        points: [],
      },
      {
        title: 'Ongoing improvement',
        body: 'We use reporting, case reviews and coaching to refine delivery and keep improving with you.',
        pointsLabel: '',
        points: [],
      },
    ],
    responsibilities: {
      eyebrow: 'Responsibilities',
      title: 'Clear responsibilities on both sides',
      intro: 'A specialist team works best when everyone knows who owns what.',
      weTitle: 'We manage',
      we: [
        'Recruitment and assessment',
        'Employment administration',
        'Day-to-day team supervision',
        'Case ownership within the agreed scope',
        'Quality coaching and agreed reporting',
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
        { title: 'Case types', body: 'Which cases, queues or processes the team owns, and which stay with your first line or experts.' },
        { title: 'Languages', body: 'Which languages and markets are needed, for which channels and at what level.' },
        { title: 'Authority', body: 'What the team may decide, approval limits and what requires your sign-off.' },
        { title: 'Escalations and handovers', body: 'Routes, owners and response expectations for anything outside the team’s authority.' },
        { title: 'Working hours and coverage', body: 'Opening hours, peak periods and how holidays and absence are covered.' },
        { title: 'Volumes', body: 'Expected case volumes and patterns, used to size the team.' },
        { title: 'Training', body: 'Content, example cases, experts involved and sign-off before launch.' },
        { title: 'Data access', body: 'Which systems and data the team needs, and how access is granted and removed.' },
        { title: 'Reporting', body: 'The quality and performance measures we report on, and the review rhythm.' },
      ],
    },
    timing: {
      title: 'About timelines',
      body: 'Launch dates depend on recruitment, access to your systems and training. We agree a realistic plan with you during scoping instead of promising a fixed launch date.',
    },
  },

  markets: {
    hero: {
      eyebrow: 'Markets & languages',
      title: 'Dutch, German, Norwegian and English — approached market by market',
      intro:
        'Greece-based specialist support teams for Dutch-, German-, Norwegian- and English-speaking customers, with German-language delivery tailored to Germany, Switzerland and Austria.',
    },
    distinction: {
      title: 'Website languages and delivery languages are not the same',
      websiteTitle: 'Website languages',
      websiteBody:
        'This website is currently published in English. Any further website languages are a separate decision from the languages our teams deliver in.',
      deliveryTitle: 'Delivery languages',
      deliveryBody:
        'Delivery languages are offered once we have confirmed recruitment and availability for your project. Not every delivery language is staffed and immediately available.',
    },
    marketsTitle: 'Our market focus',
    marketsIntro:
      'These are the markets our teams are designed to serve. We do not have local offices there and do not claim established clients or existing staffing in each market.',
    items: [
      {
        name: 'Netherlands & Dutch-speaking Belgium',
        language: 'Dutch',
        body: 'Support for customers in the Netherlands and Flanders. French- and German-speaking Belgium would require separate language coverage.',
      },
      {
        name: 'Germany',
        language: 'German',
        body: 'German-language support for customers and partners in Germany, following German business and communication conventions.',
      },
      {
        name: 'German-speaking Switzerland',
        language: 'German',
        body: 'German-language support with attention to Swiss terminology and communication conventions. We do not offer Swiss German dialect support or coverage of Switzerland’s other languages as standard.',
      },
      {
        name: 'Austria',
        language: 'German',
        body: 'German-language support with attention to Austrian terminology, conventions and market expectations.',
      },
      {
        name: 'Norway',
        language: 'Norwegian',
        body: 'Norwegian-language support for customers and partners in Norway.',
      },
      {
        name: 'English-language operations',
        language: 'English',
        body: 'English for international customers and partners, or combined with the other delivery languages.',
      },
    ],
    principles: {
      title: 'How we approach language delivery',
      items: [
        {
          title: 'Language is only part of the fit',
          body: 'Language is only part of the fit. We assess the communication skills, market familiarity and specialist knowledge required for your account.',
        },
        {
          title: 'One language, three markets',
          body: 'German-language delivery for Switzerland and Austria requires appropriate local terminology and market awareness, not only German proficiency.',
        },
        {
          title: 'Assessed for the role',
          body: 'We assess language skills for the level the role requires, for written and spoken channels as relevant, subject to role-specific recruitment.',
        },
        {
          title: 'Availability confirmed per project',
          body: 'Whether a language can be staffed, and when, is confirmed during scoping for each project.',
        },
      ],
    },
    otherLanguages: {
      title: 'Other languages',
      body: 'We can assess additional language requirements for suitable projects. Availability, recruitment and delivery scope are confirmed before we commit.',
    },
    cta: {
      title: 'Discuss your language requirements.',
      body: 'Tell us which markets and languages you need. We will tell you honestly what is feasible and what it would take.',
      button: 'Discuss your language requirements',
    },
  },

  about: {
    hero: {
      eyebrow: `About ${company.name}`,
      title: brand.secondaryLine,
      intro: `${company.name} builds small, dedicated specialist support teams for SMEs and specialist departments within multinational organisations — taking ownership of the cases that need deeper knowledge, judgement and follow-through.`,
    },
    philosophy: {
      title: 'Our operating model',
      intro:
        'We focus on specialist and second-line support, dealer and partner support and B2B customer operations, working alongside your own teams and any existing providers.',
      items: [
        {
          title: 'A specialist operating model',
          body: 'Teams are built for work that needs product and process knowledge, sound judgement and coordination — not only contact handling.',
        },
        {
          title: 'Small dedicated teams',
          body: 'Teams of roughly 3–10 people are large enough to provide continuity and small enough to stay personal.',
        },
        {
          title: 'Personal accountability',
          body: 'Every account has a named delivery contact who is responsible for the team and reachable directly.',
        },
        {
          title: 'Customer and partner understanding',
          body: 'We take time to understand your customers, partners, products and how you want to be represented.',
        },
        {
          title: 'Greece-based delivery plans',
          body: 'Our teams are planned to be based in Greece, with working hours aligned to the markets they serve.',
        },
        {
          title: 'Long-term relationships',
          body: 'We aim for lasting partnerships, where the team grows in knowledge and responsibility over time.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'A new company. An experienced foundation.',
      paragraphs: [
        'Relavique is built on years of hands-on Customer Experience consulting and operational experience, including work for Vodafone, Philips, Miele, Stellantis, ANZ Bank, ABN AMRO, Dyson, Klarna, Danone and FrieslandCampina.',
        'That experience shapes our approach: understand the customer journey, define responsibilities clearly, equip people with the right knowledge and follow cases through with care and accountability.',
      ],
      connectionsTitle: 'How that experience shapes our delivery',
      connections: [
        'Clear case ownership',
        'Customer and partner understanding',
        'Documented processes',
        'Effective escalation',
        'Cross-functional coordination',
        'Practical quality coaching',
        'Accountable delivery',
      ],
      scopeNote:
        'Our specific service capabilities are described on our service pages. They are not a description of the founder’s role at each organisation listed.',
    },
    greece: {
      title: 'Why Greece',
      paragraphs: [
        'Greece has a multilingual workforce and a time zone that overlaps closely with working days in the Netherlands, Germany, Switzerland, Austria and Norway.',
        'We plan a remote-first working model with structured supervision, so we can recruit the right people for each role rather than only those living near a particular office.',
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
      title: 'Specialist customer-operations roles, based in Greece',
      intro:
        'We build small, dedicated teams that handle specialist cases, partner support and business-customer operations. If you have the languages and enjoy following cases through, we would like to hear from you.',
    },
    roles: {
      title: 'What to know before you apply',
      items: [
        {
          title: 'Language focus',
          body: 'Roles may involve Dutch, German, Norwegian or English. Additional languages may be needed depending on client projects.',
        },
        {
          title: 'Roles depend on client projects',
          body: 'We recruit when a client project needs a team. There may not be an opening that matches your profile right away.',
        },
        {
          title: 'Assessed individually',
          body: 'Language and role requirements differ per project. We assess them individually during recruitment.',
        },
        {
          title: 'Place of work and eligibility',
          body: 'Your place of work and eligibility to work are confirmed during the recruitment process.',
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
        'Share a few details about your cases, customers, partners and languages. We will review your enquiry and get back to you to arrange a conversation.',
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
      privacyAfter: 'and understand how my details will be used.',
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
        otherLanguage: 'Other language — please specify',
        otherLanguageHint: 'Required if you selected “Other”.',
        teamSize: 'Indicative team size',
        services: 'Services required',
        coverage: 'Preferred coverage or working hours',
        coverageHint: 'For example: weekdays 08:00–18:00 CET.',
        startDate: 'Indicative start date',
        startDateHint: 'For example: Q2 or “after the summer”.',
        message: 'Message',
        messageHint: 'Briefly describe your cases, customers or partners, and what you are looking for.',
        marketing: 'Optional: I would like to receive occasional updates from you by email.',
      },
      languageOptions: {
        dutch: 'Dutch',
        germanGermany: 'German — Germany',
        germanSwitzerland: 'German — Switzerland',
        germanAustria: 'German — Austria',
        norwegian: 'Norwegian',
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
        specialist: 'Specialist / second-line support',
        dealer: 'Dealer / partner support',
        b2b: 'B2B customer operations',
        care: 'Customer care',
        backOffice: 'Back-office support',
        unsure: 'Not sure yet',
      },
    },
    candidate: {
      fields: {
        fullName: 'Full name',
        email: 'Email',
        country: 'Current country of residence',
        languages: 'Languages and proficiency',
        languagesHint: 'For example: Dutch – native, German – fluent, English – fluent.',
        experience: 'Relevant experience',
        experienceHint: 'Briefly describe customer-service, case-handling or related experience.',
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
      'This page is pending review by a qualified adviser and may be updated. Sections marked as still to be completed will be finalised after that review. It is not legal advice.',
    toComplete: 'To be completed',
    toConfirm: 'To be confirmed before launch',
    notYetRegistered: 'Not yet registered',
    docs: {
      privacy: {
        title: 'Privacy notice',
        description: 'How personal data submitted through this website is handled.',
        sections: [
          {
            heading: 'Who is responsible',
            body: `The data controller for personal data submitted through this website is ${company.legal.dataController} (enterprise number ${company.legal.belgianEntity.registrationNumber}). During 2026, preparatory activities for Relavique are conducted through this Belgian corporation. For any privacy question or request, email ${company.legal.privacyContact}.`,
          },
          { heading: 'What data we collect', body: 'When you submit an enquiry, we receive the details you enter in the form, such as your name, work email, company and message.' },
          { heading: 'Why we use it', body: 'We use enquiry details to respond to your request and to discuss a possible engagement. If you opt in separately, we may send occasional updates.' },
          { heading: 'Legal basis', body: 'The legal basis for each processing purpose will be documented here after legal review.' },
          { heading: 'Who receives it', body: 'Form submissions are delivered by email using Resend, an email delivery provider, and the website is hosted by Vercel. A complete list of processors will be confirmed here after legal review.' },
          { heading: 'How long we keep it', body: 'Retention periods will be defined and stated here after legal review.' },
          { heading: 'Your rights', body: 'Depending on applicable law, you may have rights to access, correct, delete or restrict the use of your data, and to complain to a supervisory authority (in Belgium, the Data Protection Authority). To exercise your rights, email hello@relavique.com.' },
        ],
      },
      'recruitment-privacy': {
        title: 'Recruitment privacy notice',
        description: 'How personal data submitted by people interested in working with us is handled.',
        sections: [
          {
            heading: 'Who is responsible',
            body: `The data controller for applicant data is ${company.legal.dataController} (enterprise number ${company.legal.belgianEntity.registrationNumber}). During 2026, recruitment preparation for Relavique is conducted through this Belgian corporation. For any privacy question or request, email ${company.legal.privacyContact}.`,
          },
          { heading: 'Purpose', body: 'We use the details you submit to assess whether you may be suitable for current or future roles in client projects.' },
          { heading: 'What data we collect', body: 'Your name, email, country of residence, languages, experience, optional profile link and message. We do not ask for CVs or sensitive personal data at this stage.' },
          { heading: 'Legal basis', body: 'The legal basis for recruitment processing will be documented here after legal review.' },
          { heading: 'Retention', body: 'How long expressions of interest are kept, and how you can ask for removal, will be stated here after legal review.' },
          { heading: 'Your rights', body: 'Depending on applicable law, you may access, correct or delete your data and complain to a supervisory authority (in Belgium, the Data Protection Authority). To exercise your rights, email hello@relavique.com.' },
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
        description: 'Company status and legal details.',
        sections: [],
      },
    },
    companyStatus: {
      title: 'Company status',
      body: 'Relavique is a brand being developed for a Greece-based specialist customer-operations business. During 2026, preparatory activities are conducted through the founder’s Belgian corporation. A Greek private company (IKE) is being established and is intended to become operational on 1 January 2027, subject to completion of the necessary incorporation and operational arrangements. This date is an intention, not a commitment. Agreements, personal data and obligations do not transfer automatically on that date; any change in the responsible entity will be reflected on this page.',
      brandNote: '“Relavique” is a brand name, not the registered legal name of either company.',
    },
    belgianEntityTitle: 'Belgian corporation (preparatory activities, 2026)',
    greekEntityTitle: 'Greek private company (IKE) — being established',
    companyFields: {
      brand: 'Brand',
      legalName: 'Legal entity name',
      legalForm: 'Legal form',
      registrationNumber: 'Enterprise / registration number',
      vatNumber: 'VAT number',
      taxNumber: 'Tax registration',
      registeredAddress: 'Registered address',
      transitionDate: 'Intended operational date',
      dataController: 'Data controller for this website',
      privacyContact: 'Privacy contact',
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
