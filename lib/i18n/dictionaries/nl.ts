/**
 * Dutch dictionary. Draft translation for native-speaker review; not professionally reviewed.
 * Must match the shape of en.ts.
 */
import { brandMessaging, company } from '@/lib/config/company'
import type { Dictionary } from './en'

const brand = brandMessaging.nl

export const nl: Dictionary = {
  brand,

  closingCta: {
    title: 'Laten we samen het juiste team voor uw organisatie ontwerpen.',
    body: 'Vertel ons over uw klanten, talen en gewenste bereikbaarheid. We nemen contact met u op om te bespreken hoe een toegewijd team eruit zou kunnen zien.',
  },

  meta: {
    siteDescription: brand.metaDescription,
    home: {
      title: `${company.name} | ${brand.descriptor}`,
      description: brand.metaDescription,
    },
    services: {
      title: 'Diensten',
      description:
        'Toegewijde klantenservice, gespecialiseerde supportteams en customer operations, geleverd door kleine, aangestuurde teams in Griekenland.',
    },
    howItWorks: {
      title: 'Werkwijze',
      description:
        'Van verkenning en teamontwerp tot werving, training, een gecontroleerde start en continue verbetering — zo zetten we uw toegewijde team op en sturen we het aan.',
    },
    markets: {
      title: 'Markten & talen',
      description:
        'Onze focus op Nederland, Vlaanderen, Noorwegen, Zweden, Denemarken en Finland, en hoe we de dienstverleningstalen per project bevestigen.',
    },
    about: {
      title: `Over ${company.name}`,
      description: `${company.name} is een boutique customer-operationspartner in Griekenland, gericht op kleine, toegewijde teams voor Nederlandstalige en Noordse markten.`,
    },
    careers: {
      title: 'Werken bij',
      description:
        'Remote functies in de klantenservice vanuit Griekenland, voor Nederlandstalige en Noordse klanten. Meld je interesse aan voor toekomstige vacatures.',
    },
    contact: {
      title: 'Bespreek uw team',
      description:
        'Vertel ons over uw klanten, talen en gewenste bereikbaarheid, en we bespreken hoe een toegewijd team er voor u uit zou kunnen zien.',
    },
    notFound: {
      title: 'Pagina niet gevonden',
      description: 'De pagina die u zoekt bestaat niet.',
    },
  },

  common: {
    skipToContent: 'Direct naar de inhoud',
    discussYourTeam: brand.primaryCta,
    seeHowItWorks: brand.secondaryCta,
    homeLabel: `${company.name} — home`,
    learnMore: 'Meer informatie',
    viewService: 'Bekijk dienst',
    allServices: 'Alle diensten',
    mainNav: 'Hoofdnavigatie',
    footerNav: 'Footernavigatie',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    language: 'Taal',
    selectLanguage: 'Kies de taal van de website',
    stepLabel: 'Stap',
    backToHome: 'Terug naar home',
  },

  nav: {
    services: 'Diensten',
    howItWorks: 'Werkwijze',
    markets: 'Markten & talen',
    about: 'Over ons',
    careers: 'Werken bij',
    contact: 'Contact',
  },

  footer: {
    proposition: 'Toegewijde klantenserviceteams van 3–10 mensen, gevestigd in Griekenland, voor Nederlandstalige en Noordse markten.',
    pagesHeading: 'Organisatie',
    servicesHeading: 'Diensten',
    legalHeading: 'Juridisch',
    contactHeading: 'Contact opnemen',
    contactLink: 'Bespreek uw team',
    privacy: 'Privacyverklaring',
    recruitmentPrivacy: 'Privacyverklaring werving',
    cookies: 'Cookie-informatie',
    company: 'Juridische en bedrijfsgegevens',
    rights: 'Alle rechten voorbehouden.',
    photoCredit: 'De foto’s zijn illustratieve stockbeelden van Unsplash.',
  },

  images: {
    hero: 'Vier collega’s rond een tafel die samen geprinte documenten doornemen',
    dedicated: 'Drie mensen aan computerwerkplekken in een licht kantoor',
    customerCare: 'Een lachende klantenservicemedewerker met headset aan haar bureau',
    specialist: 'Twee collega’s met laptops in gesprek aan een houten tafel',
    backOffice: 'Collega’s geconcentreerd achter hun beeldschermen aan een gedeeld bureau',
    howItWorks: 'Drie mensen in een kleine vergaderruimte die documenten bespreken aan een ronde tafel',
    markets: 'Een headset naast een geopende laptop',
    athensView: 'Uitzicht over Athene richting de zee, met de Akropolis op de voorgrond',
    athensAcropolis: 'De Akropolis van Athene in goudkleurig avondlicht',
    athensStreet: 'Mensen die op een zonnige dag door een straat in Athene lopen',
  },

  home: {
    hero: {
      eyebrow: brand.tagline,
      title: brand.heroHeadline,
      intro: brand.heroCopy,
    },
    strip: {
      label: 'Wat we bieden',
      items: [
        'Teams van 3–10 mensen',
        'Dienstverlening vanuit Griekenland',
        'Vaste accountverantwoordelijke',
        'Focus op Nederlandstalige en Noordse markten',
      ],
    },
    why: {
      eyebrow: 'Waarom een boutique team?',
      title: 'Een team op maat van uw organisatie — niet andersom.',
      intro:
        'Grote contactcenters zijn gebouwd op schaal. Veel organisaties hebben iets anders nodig: een kleine groep mensen die hun klanten, producten en tone of voice kent.',
      points: [
        {
          title: 'Persoonlijke verantwoordelijkheid',
          body: 'U werkt met één aanspreekpunt dat uw account, uw team en uw prioriteiten kent — geen wisselende ticketwachtrij.',
        },
        {
          title: 'Specialistische kennis',
          body: 'Uw medewerkers richten zich alleen op uw organisatie. Productkennis, procedures en context bouwen zich op in het team in plaats van verspreid te raken over veel klanten.',
        },
        {
          title: 'Passend van omvang',
          body: 'We ontwerpen teams van ongeveer 3–10 mensen rond uw volumes, kanalen en openingstijden, en passen de opzet aan wanneer uw behoeften veranderen.',
        },
      ],
    },
    services: {
      eyebrow: 'Diensten',
      title: 'Drie manieren waarop een toegewijd team u kan ondersteunen',
      intro:
        'Elke samenwerking wordt afzonderlijk afgebakend. Kanalen, bereikbaarheid en verantwoordelijkheden spreken we met u af voordat het team start.',
    },
    clients: {
      eyebrow: 'Met wie we werken',
      title: 'Gebouwd voor twee soorten klanten',
      items: [
        {
          title: 'Mkb-bedrijven die hun klantenservice willen uitbesteden',
          body: 'U wilt uw klantenservice professioneel geregeld hebben zonder zelf een afdeling op te bouwen.',
          points: [
            'Een compleet klein team in plaats van losse aanwervingen',
            'Werving, aansturing en coaching worden voor u geregeld',
            'Eén aanspreekpunt voor dagelijkse vragen',
          ],
        },
        {
          title: 'Multinationals die een gericht specialistisch team nodig hebben',
          body: 'U heeft een toegewijd team nodig voor een specifieke markt, productlijn of proces, dat samenwerkt met uw eigen organisatie.',
          points: [
            'Een team gericht op één duidelijk afgebakende scope',
            'Werkt binnen uw systemen, beleid en goedkeuringsregels',
            'Heldere rapportage binnen uw bestaande governance',
          ],
        },
      ],
    },
    dedicated: {
      eyebrow: 'Toegewijd aan u, ondersteund door ons',
      title: 'Uw eigen team, gesteund door gedeelde operationele ondersteuning',
      intro:
        'De mensen die met uw klanten spreken, werken alleen voor u. Daarachter zorgen gedeelde processen ervoor dat het team bemand, getraind en aanspreekbaar blijft.',
      dedicatedHeading: 'Toegewijd aan uw organisatie',
      dedicatedItems: [
        'Medewerkers die alleen aan uw account werken',
        'Klantspecifieke kennisbank en procedures',
        'Vertrouwd met uw producten, klanten en tone of voice',
        'Een vast aanspreekpunt voor uw account',
      ],
      sharedHeading: 'Ondersteund door onze gedeelde functies',
      sharedItems: [
        'Werving en taaltoetsing',
        'Kwaliteitsmonitoring en coaching',
        'Delivery management en rapportage',
        'IT-inrichting en toegangsbeheer',
      ],
    },
    process: {
      eyebrow: 'Werkwijze',
      title: 'Een helder pad van eerste gesprek tot draaiend team',
      steps: [
        { title: 'Verkenning', body: 'We leren uw klanten, contacttypes, systemen en doelen kennen.' },
        { title: 'Teamontwerp', body: 'We stellen teamomvang, talen, kanalen en bereikbaarheid voor.' },
        {
          title: 'Werving en training',
          body: 'We werven voor de functie, toetsen de taalvaardigheid en trainen met uw materiaal.',
        },
        { title: 'Start', body: 'Een gecontroleerde livegang met afgesproken escalatieroutes en nauwe monitoring.' },
        {
          title: 'Continue verbetering',
          body: 'Regelmatige rapportage, coaching en evaluaties om de kwaliteit steeds te verbeteren.',
        },
      ],
      cta: 'Lees de volledige werkwijze',
    },
    markets: {
      eyebrow: 'Markten en talen',
      title: 'Gericht op Nederlandstalige en Noordse markten',
      body: 'We richten ons op een klein aantal markten, zodat we hun klanten en verwachtingen goed begrijpen.',
      dutchTitle: 'Nederlandstalige markten',
      dutchBody: 'Klantenservice voor Nederland en Nederlandstalig België (Vlaanderen).',
      nordicTitle: 'Geselecteerde Noordse kansen',
      nordicBody: 'Noorse, Zweedse, Deense en Finse klantenservice, per project beoordeeld.',
      note: 'Dienstverleningstalen, bezetting en startdata worden tijdens de afbakening bevestigd, op basis van werving en beschikbaarheid.',
      cta: 'Markten & talen',
    },
    greece: {
      eyebrow: 'Dienstverlening vanuit Griekenland',
      title: 'Een remote-first model vanuit Griekenland',
      paragraphs: [
        'Onze teams zijn gevestigd in Griekenland en ingericht om op afstand te werken, met gestructureerde aansturing, regelmatige coaching en duidelijke communicatieroutines.',
        'Griekenland biedt toegang tot meertalige professionals, onder wie mensen die Nederlands of een Noordse taal spreken, en een tijdzone die goed aansluit op Noord-Europese werktijden.',
      ],
      points: [
        'Werken op afstand met vaste aansturing en check-ins',
        'Werktijden afgestemd op de tijdzone van uw klanten',
        'Apparatuur, toegang en werkafspraken per account vastgelegd',
      ],
    },
    clarity: {
      eyebrow: 'Wat u kunt verwachten',
      title: 'Operationele duidelijkheid vanaf dag één',
      intro: 'In plaats van beloftes leggen we de details schriftelijk met u vast voordat het team live gaat.',
      items: [
        {
          title: 'Afgesproken scope',
          body: 'Een schriftelijke beschrijving van contacttypes, kanalen, tijden en wat het team wel en niet mag beslissen.',
        },
        {
          title: 'Eigenaarschap van escalaties',
          body: 'Benoemde eigenaren aan beide kanten voor escalaties, uitzonderingen en beslissingen buiten de bevoegdheid van het team.',
        },
        {
          title: 'Prestatierapportage',
          body: 'Rapportage op de maatstaven die we samen afspreken, met vaste evaluatiemomenten.',
        },
        {
          title: 'Gecontroleerde systeemtoegang',
          body: 'Alleen toegang tot uw systemen voor zover de functie dat vereist, verleend en ingetrokken via een afgesproken proces.',
        },
      ],
    },
    faq: {
      eyebrow: 'Veelgestelde vragen',
      title: 'Veelgestelde vragen',
      items: [
        {
          q: 'Hoe groot kan het team zijn?',
          a: 'We richten ons op teams van ongeveer 3–10 fulltime medewerkers. Heeft u meer nodig, dan kunnen we dat bespreken, maar ons model is gebouwd rond kleine, toegewijde teams.',
        },
        {
          q: 'Werken de medewerkers alleen voor onze organisatie?',
          a: 'Ja. Medewerkers in een toegewijd team werken aan uw account. Gedeelde functies zoals werving, kwaliteit en IT ondersteunen meerdere teams, maar de mensen die uw klanten helpen niet.',
        },
        {
          q: 'Kunt u in onze bestaande systemen werken?',
          a: 'In de meeste gevallen wel. We werken bij voorkeur in uw helpdesk, CRM of ordersystemen, zodat u volledig zicht houdt. Toegangsvereisten spreken we af tijdens de afbakening.',
        },
        {
          q: 'Welke talen kunt u ondersteunen?',
          a: 'Onze focus ligt op het Nederlands en de Noordse talen, naast Engels. Of een taal voor uw project bemand kan worden, bevestigen we tijdens de afbakening, nadat we werving en beschikbaarheid hebben beoordeeld.',
        },
        {
          q: 'Hoe worden werktijden en bereikbaarheid afgesproken?',
          a: 'Samen met u, op basis van uw contactvolumes en de verwachtingen van uw klanten. Openingstijden, vakantievervanging en eventuele verlengde tijden worden vóór de start vastgelegd en in het voorstel opgenomen.',
        },
        {
          q: 'Hoe verloopt de onboarding?',
          a: 'Na de werving wordt het team getraind op uw producten, processen en systemen, met uw materiaal en input van uw experts. De start volgt zodra training en systeemtoegang op orde zijn.',
        },
        {
          q: 'Hoe pakt u kwaliteit en rapportage aan?',
          a: 'We spreken kwaliteitscriteria en rapportagemaatstaven met u af, monitoren interacties, coachen medewerkers regelmatig en bespreken de resultaten volgens een vast schema met u.',
        },
        {
          q: 'Kan het team in de loop van de tijd groeien?',
          a: 'Ja. Teams kunnen worden aangepast wanneer volumes of scope veranderen. Uitbreiding hangt af van werving en training, dus plannen we wijzigingen vooraf met u.',
        },
        {
          q: 'Hoe is de prijs opgebouwd?',
          a: 'We prijzen elke samenwerking als een afgebakend, aangestuurd team. Teamomvang, talen, complexiteit en bereikbaarheid bepalen de offerte. Na de verkenning ontvangt u een voorstel; we publiceren geen standaardprijslijst.',
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
      eyebrow: 'Diensten',
      title: 'Aangestuurde teams voor klantenservice en customer operations',
      intro:
        'Elke samenwerking draait om één toegewijd team. Kies de focus die bij uw behoeften past — of combineer ze binnen één duidelijk afgebakend team.',
    },
    approach: {
      title: 'Wat elke samenwerking omvat',
      points: [
        'Een toegewijd team dat alleen aan uw account werkt',
        'Werving, personeelsadministratie en aansturing',
        'Training op basis van uw producten en processen',
        'Kwaliteitscoaching en afgesproken prestatierapportage',
        'Een vast aanspreekpunt',
      ],
    },
    scopeNote:
      'Standaard bieden we geen gereguleerd advies, geavanceerde technische engineeringsupport of 24/7-bereikbaarheid. Verlengde tijden kunnen tijdens de afbakening worden besproken.',
  },

  services: {
    labels: {
      useCases: 'Typische toepassingen',
      handles: 'Wat het team kan afhandelen',
      responsibilities: 'Verantwoordelijkheden en grenzen',
      weHandle: 'Ons team handelt af',
      clientRetains: 'U behoudt',
      quality: 'Kwaliteit en rapportage',
      related: 'Gerelateerde diensten',
    },
    items: {
      'dedicated-customer-care': {
        name: 'Toegewijde klantenservice',
        summary:
          'Een toegewijd team dat uw klantcontacten via e-mail, telefoon en chat afhandelt — in uw tone of voice en binnen uw processen.',
        meta: {
          title: 'Toegewijde klantenservice',
          description:
            'Een toegewijd klantenserviceteam in Griekenland voor e-mail, tickets, telefoon en chat voor Nederlandstalige en Noordse klanten.',
        },
        eyebrow: 'Dienst',
        title: 'Toegewijde klantenservice, als verlengstuk van uw organisatie',
        intro:
          'Een klein, toegewijd team dat uw dagelijkse klantcontacten afhandelt. Wij werven en sturen het team aan; u bepaalt hoe uw klanten geholpen worden.',
        useCases: [
          'E-commerce- en retailbedrijven met vragen over bestellingen en levering',
          'Reis-, boekings- en abonnementsdiensten met terugkerende klantvragen',
          'Groeiende bedrijven die losse support vervangen door een gestructureerd team',
          'Bedrijven die een Nederlandstalige of Noordse markt betreden',
        ],
        handles: [
          { title: 'E-mail- en ticketsupport', body: 'Klantmails en tickets in uw helpdesk beantwoorden en oplossen.' },
          { title: 'Telefonische support', body: 'Inkomende gesprekken tijdens afgesproken tijden, met duidelijke routering en gespreksnotities.' },
          { title: 'Livechat', body: 'Realtime chatsupport op uw website of app tijdens afgesproken tijden.' },
          { title: 'Vragen over bestellingen en boekingen', body: 'Statusvragen, wijzigingen en annuleringen binnen uw regels.' },
          { title: 'Klantopvolging', body: 'Proactieve opvolging van openstaande zaken, terugbelverzoeken en tevredenheidschecks.' },
        ],
        channelsNote: 'Kanalen en bereikbaarheid worden per account afgesproken.',
        weHandle: [
          'Contacten afhandelen binnen de afgesproken scope',
          'Dagelijkse aansturing en roostering',
          'Zaken vastleggen in uw systemen',
          'Uitzonderingen escaleren naar uw benoemde eigenaren',
        ],
        clientRetains: [
          'Klantbeleid, terugbetalingen en coulanceregels',
          'Beslissingen buiten de afgesproken bevoegdheid',
          'Product-, prijs- en servicewijzigingen',
          'Het uiteindelijke eigenaarschap van de klantrelatie',
        ],
        quality: {
          body: 'Vóór de start spreken we af wat goede service voor uw klanten betekent. Daarna monitoren, coachen en rapporteren we op die maatstaven.',
          points: [
            'Kwaliteitscriteria op basis van uw normen en tone of voice',
            'Regelmatige beoordeling van een steekproef van interacties',
            'Afgesproken maatstaven zoals reactietijden en oplossing',
            'Een vast evaluatieritme met uw contactpersoon',
          ],
        },
      },
      'specialist-support-teams': {
        name: 'Gespecialiseerde supportteams',
        summary:
          'Een gericht team voor B2B-, dealer- en partnersupport, klachtenafhandeling of productspecifieke eerstelijnssupport.',
        meta: {
          title: 'Gespecialiseerde supportteams',
          description:
            'Gerichte specialistische supportteams voor zakelijke klanten, dealers en partners, klachtenafhandeling en productspecifieke eerstelijnssupport.',
        },
        eyebrow: 'Dienst',
        title: 'Gespecialiseerde supportteams met een duidelijk afgebakende taak',
        intro:
          'Sommige support vraagt om diepere product- of proceskennis. We bouwen een gericht team dat uw specifieke domein leert kennen, terwijl uw experts de beslissingen houden die bij hen horen.',
        useCases: [
          'Dealers, resellers of partners ondersteunen bij bestellingen en productvragen',
          'B2B-klantenservice voor zakelijke accounts',
          'Klachtenafhandeling met gestructureerde escalatie',
          'Eerstelijnssupport voor een specifiek product of een productlijn',
        ],
        handles: [
          { title: 'Dealer- en partnersupport', body: 'Partnervragen beantwoorden over bestellingen, beschikbaarheid, documentatie en procedures.' },
          { title: 'B2B-klantenservice', body: 'Accountgerichte support voor zakelijke klanten, volgens uw serviceafspraken.' },
          { title: 'Klachten- en escalatieafhandeling', body: 'Klachten registreren, onderzoeken en opvolgen volgens afgesproken stappen.' },
          { title: 'Productspecifieke eerstelijnssupport', body: 'Gestructureerde eerstelijns probleemoplossing op basis van uw documentatie, met een duidelijke overdracht.' },
        ],
        channelsNote: 'Kanalen, bereikbaarheid en de grenzen van de bevoegdheid van het team worden per account afgesproken.',
        weHandle: [
          'Eerstelijnsafhandeling volgens gedocumenteerde procedures',
          'Volledige informatie verzamelen vóór escalatie',
          'Opvolgen tot zaken zijn afgesloten of overgedragen',
          'Kennisartikelen en notities actueel houden',
        ],
        clientRetains: [
          'Technische beslissingen en tweedelijnsexpertise',
          'Commerciële voorwaarden, creditnota’s en uitzonderingen',
          'Beslissingen buiten de afgesproken bevoegdheid',
          'Definitieve uitkomsten bij klachten en geschillen',
        ],
        quality: {
          body: 'Specialistisch werk vraagt om specifieke maatstaven. We spreken ze met u af en evalueren ze samen.',
          points: [
            'Nauwkeurigheid en volledigheid van de afhandeling',
            'Correct gebruik van escalatieroutes',
            'Afgesproken reactie- en opvolgtijden',
            'Regelmatige kalibratiesessies met uw experts',
          ],
        },
      },
      'customer-operations': {
        name: 'Customer operations & backoffice',
        summary:
          'Dossierbeheer, CRM-updates, orderverwerking en tickettriage, met gedocumenteerde bevoegdheden en goedkeuringslimieten.',
        meta: {
          title: 'Customer operations & backoffice',
          description:
            'Backofficeondersteuning voor customer operations: dossierbeheer, CRM-updates, orderverwerking, tickettriage en workflowopvolging.',
        },
        eyebrow: 'Dienst',
        title: 'Customer operations en backoffice, zorgvuldig uitgevoerd',
        intro:
          'Achter elk klantgesprek zit administratie die nauwkeurig en op tijd moet gebeuren. Ons team neemt die taken op zich binnen uw workflows, met gedocumenteerde bevoegdheden en goedkeuringslimieten.',
        useCases: [
          'Achterstanden in dossiers en bestellingen gestructureerd wegwerken',
          'CRM- en klantgegevens nauwkeurig en volledig houden',
          'Inkomende tickets triëren zodat specialisten zich kunnen concentreren',
          'Workflows opvolgen die anders zouden stilvallen',
        ],
        handles: [
          { title: 'Dossierbeheer', body: 'Zaken aanmaken, bijwerken en afsluiten volgens uw procedures.' },
          { title: 'CRM-updates', body: 'Klant-, contact- en accountgegevens in uw CRM bijhouden.' },
          { title: 'Orderverwerking', body: 'Bestellingen invoeren, controleren en aanpassen binnen afgesproken limieten.' },
          { title: 'Tickettriage', body: 'Inkomende tickets categoriseren, prioriteren en naar de juiste eigenaar doorsturen.' },
          { title: 'Workflowopvolging', body: 'Openstaande stappen, herinneringen en overdrachten opvolgen tot het werk klaar is.' },
        ],
        channelsNote: 'Bevoegdheden en goedkeuringslimieten worden per account gedocumenteerd en afgesproken.',
        weHandle: [
          'Taken uitvoeren binnen gedocumenteerde bevoegdheden',
          'Datakwaliteit en volledigheid controleren',
          'Uitzonderingen en afwijkingen signaleren',
          'Een controleerbaar verslag bijhouden van uitgevoerd werk',
        ],
        clientRetains: [
          'Goedkeuringen boven de afgesproken limieten',
          'Bedrijfsregels en beleidsbeslissingen',
          'Het verlenen en intrekken van systeemtoegang',
          'De eindverantwoordelijkheid voor financiële transacties',
        ],
        quality: {
          body: 'Bij operationeel werk draait het vooral om nauwkeurigheid en tijdigheid. We spreken maatstaven en controles met u af voordat we beginnen.',
          points: [
            'Nauwkeurigheidscontroles op een steekproef van afgeronde taken',
            'Afgesproken doorlooptijden per taaktype',
            'Rapportage over achterstanden en volumes',
            'Regelmatige procesevaluaties met uw team',
          ],
        },
      },
    },
  },

  howItWorks: {
    hero: {
      eyebrow: 'Werkwijze',
      title: 'Hoe we uw toegewijde team opzetten en aansturen',
      intro:
        'Een gestructureerd, transparant proces. U weet wat er in elke fase gebeurt, wie verantwoordelijk is en wat er geregeld moet zijn voordat uw team live gaat.',
    },
    steps: [
      {
        title: 'Verkenning en scope',
        body: 'We leren uw klanten, contacttypes, volumes, systemen en doelen kennen, en spreken af wat het team wel — en niet — afhandelt.',
      },
      {
        title: 'Ontwerp van team en bereikbaarheid',
        body: 'We stellen een teamomvang, talenmix, kanalen en werktijden voor die bij uw volumes passen, inclusief vakantievervanging.',
      },
      {
        title: 'Werving en taaltoetsing',
        body: 'We werven voor uw specifieke functie en toetsen taalvaardigheid en klantgerichte vaardigheden op het niveau dat de functie vraagt.',
      },
      {
        title: 'Kennisoverdracht en training',
        body: 'Uw experts delen producten, processen en beleid. Wij vertalen dat naar training en een klantspecifieke kennisbank.',
      },
      {
        title: 'Gecontroleerde start',
        body: 'Het team gaat gecontroleerd live — bijvoorbeeld eerst op geselecteerde kanalen of volumes — met nauwe monitoring en snelle feedback.',
      },
      {
        title: 'Rapportage, coaching en verbetering',
        body: 'We rapporteren op afgesproken maatstaven, coachen medewerkers doorlopend en bespreken resultaten met u om steeds beter te worden.',
      },
    ],
    responsibilities: {
      eyebrow: 'Verantwoordelijkheden',
      title: 'Duidelijke verantwoordelijkheden aan beide kanten',
      intro: 'Een toegewijd team werkt het best wanneer iedereen weet wie waarvoor verantwoordelijk is.',
      weTitle: 'Wij regelen',
      we: [
        'Werving',
        'Personeelsadministratie',
        'Dagelijkse aansturing van het team',
        'Kwaliteitscoaching',
        'Afgesproken prestatierapportage',
      ],
      clientTitle: 'U levert',
      client: [
        'Product- en proceskennis',
        'De benodigde systeemtoegang',
        'Eigenaren voor goedkeuring en escalatie',
        'Bedrijfsregels en beleidsbeslissingen',
      ],
    },
    define: {
      eyebrow: 'Vóór de start',
      title: 'Wat we vóór de start vastleggen',
      intro: 'Deze punten leggen we tijdens de afbakening schriftelijk vast, zodat beide partijen met dezelfde verwachtingen beginnen.',
      items: [
        { title: 'Talen', body: 'Welke talen nodig zijn, voor welke kanalen en op welk niveau.' },
        { title: 'Kanalen', body: 'E-mail, tickets, telefoon, chat of backofficewerk — en hoe die worden geprioriteerd.' },
        { title: 'Werktijden en vakantievervanging', body: 'Openingstijden, piekperiodes en hoe vakantie en afwezigheid worden opgevangen.' },
        { title: 'Contactvolumes', body: 'Verwachte volumes en patronen, gebruikt om het team te dimensioneren.' },
        { title: 'Serviceniveaus', body: 'Reactie- en afhandeltijden waar het team naartoe werkt.' },
        { title: 'Training', body: 'Inhoud, materiaal, betrokken experts en akkoord vóór de start.' },
        { title: 'Escalaties', body: 'Routes, eigenaren en reactieverwachtingen voor alles buiten de bevoegdheid van het team.' },
        { title: 'Datatoegang', body: 'Welke systemen en gegevens het team nodig heeft, en hoe toegang wordt verleend en ingetrokken.' },
        { title: 'Commerciële scope', body: 'Teamomvang, bereikbaarheid en de diensten die in de samenwerking zijn inbegrepen.' },
      ],
    },
    timing: {
      title: 'Over doorlooptijden',
      body: 'Startdata hangen af van werving, systeemtoegang en training. We spreken tijdens de afbakening een realistische planning met u af in plaats van een vaste doorlooptijd te beloven.',
    },
  },

  markets: {
    hero: {
      eyebrow: 'Markten & talen',
      title: 'Nederlandstalige en Noordse markten, één voor één benaderd',
      intro:
        'We richten ons op een kleine groep Noord-Europese markten. Elke markt heeft een eigen taal, eigen klantverwachtingen en een eigen manier van zakendoen.',
    },
    distinction: {
      title: 'Websitetalen en dienstverleningstalen zijn niet hetzelfde',
      websiteTitle: 'Websitetalen',
      websiteBody:
        'Deze website is beschikbaar in het Engels, Nederlands, Noors, Zweeds, Deens en Fins, zodat u in uw eigen taal over onze diensten kunt lezen.',
      deliveryTitle: 'Klantenservicetalen',
      deliveryBody:
        'Dienstverleningstalen bieden we aan nadat we werving en beschikbaarheid voor uw project hebben bevestigd. Een vertaalde webpagina betekent niet dat er direct een bemand team in die taal beschikbaar is.',
    },
    marketsTitle: 'Onze marktfocus',
    marketsIntro:
      'We hebben geen kantoren in deze landen en claimen daar geen vaste klanten. Het zijn de markten waarvoor onze teams zijn ontworpen.',
    items: [
      {
        name: 'Nederland',
        language: 'Nederlands',
        body: 'Klanten waarderen doorgaans directe, duidelijke en efficiënte communicatie, met snelle oplossingen via digitale kanalen.',
      },
      {
        name: 'Nederlandstalig België',
        language: 'Nederlands (Vlaams)',
        body: 'We ondersteunen Nederlandstalige klanten in Vlaanderen. Frans- of Duitstalig België valt hier niet onder; daarvoor is aparte taaldekking nodig.',
      },
      {
        name: 'Noorwegen',
        language: 'Noors',
        body: 'Noorse klantenservice vraagt om Noorse taalvaardigheid en een informele maar precieze toon die Noorse klanten verwachten.',
      },
      {
        name: 'Zweden',
        language: 'Zweeds',
        body: 'Zweedse klanten verwachten over het algemeen een vriendelijke, gelijkwaardige toon en goed gestructureerde, betrouwbare opvolging.',
      },
      {
        name: 'Denemarken',
        language: 'Deens',
        body: 'Deense klantenservice vraagt om Deense taalvaardigheid en een rechtstreekse, persoonlijke communicatiestijl.',
      },
      {
        name: 'Finland',
        language: 'Fins',
        body: 'Het Fins is een andere taal dan de Scandinavische talen, en klanten waarderen vaak beknopte, zakelijke service.',
      },
    ],
    principles: {
      title: 'Hoe we taaldienstverlening aanpakken',
      items: [
        {
          title: 'De Noordse landen zijn niet één markt',
          body: 'Noors, Zweeds, Deens en Fins zijn afzonderlijke talen met verschillende verwachtingen. We bakenen elke taal apart af.',
        },
        {
          title: 'Taalvaardigheid getoetst voor de functie',
          body: 'We toetsen taalvaardigheid op het niveau dat de functie vraagt, schriftelijk en mondeling waar relevant.',
        },
        {
          title: 'Beschikbaarheid per project bevestigd',
          body: 'Of en wanneer een taal bemand kan worden, bevestigen we per project tijdens de afbakening.',
        },
        {
          title: 'Engels ernaast',
          body: 'Engels kan worden gecombineerd met de andere talen, bijvoorbeeld voor internationale klanten of partners.',
        },
      ],
    },
    cta: {
      title: 'Bespreek uw taalbehoeften.',
      body: 'Vertel ons welke markten en talen u nodig heeft. We vertellen u eerlijk wat haalbaar is en wat ervoor nodig is.',
    },
  },

  about: {
    hero: {
      eyebrow: `Over ${company.name}`,
      title: brand.secondaryLine,
      intro: `${company.name} is een boutique customer-operationspartner in Griekenland, gericht op kleine, toegewijde teams voor Nederlandstalige en Noordse markten.`,
    },
    philosophy: {
      title: 'Waar we in geloven',
      intro:
        'We helpen mkb-bedrijven en gespecialiseerde afdelingen binnen grotere organisaties om klantenserviceteams op te bouwen rond hun eigen processen, klanten en merk — met duidelijke verantwoordelijkheid en actieve aansturing.',
      items: [
        {
          title: 'Kleine teams',
          body: 'Teams van ongeveer 3–10 mensen zijn groot genoeg voor continuïteit en klein genoeg om persoonlijk te blijven.',
        },
        {
          title: 'Persoonlijke verantwoordelijkheid',
          body: 'Elk account heeft een vast aanspreekpunt dat verantwoordelijk is voor het team en direct bereikbaar is.',
        },
        {
          title: 'Begrip van uw klanten',
          body: 'We nemen de tijd om uw klanten, uw producten en de manier waarop u vertegenwoordigd wilt worden te begrijpen.',
        },
        {
          title: 'Praktische operationele ervaring',
          body: 'We richten ons op het praktische werk van goede klantenservice: heldere procedures, goede aansturing en consequente coaching.',
        },
        {
          title: 'Dienstverlening vanuit Griekenland',
          body: 'Onze teams zijn gevestigd in Griekenland, met werktijden afgestemd op Noord-Europese klanten.',
        },
        {
          title: 'Langdurige relaties',
          body: 'We streven naar blijvende partnerschappen, waarin het team in de loop van de tijd groeit in kennis en verantwoordelijkheid.',
        },
      ],
    },
    greece: {
      title: 'Waarom Griekenland',
      paragraphs: [
        'Griekenland heeft een meertalige beroepsbevolking, onder wie mensen die Nederlands of een Noordse taal spreken, en een tijdzone die nauw aansluit op Noord-Europese werkdagen.',
        'We werken volgens een remote-first model met gestructureerde aansturing, zodat we voor elke functie de juiste mensen kunnen werven en niet alleen mensen die dicht bij een bepaald kantoor wonen.',
      ],
      note: 'De foto’s tonen Athene ter illustratie en geven niet onze werkplek weer.',
    },
    founder: {
      title: 'Geleid door de oprichter',
    },
  },

  careers: {
    hero: {
      eyebrow: 'Werken bij',
      title: 'Remote klantenservicefuncties vanuit Griekenland',
      intro:
        'We bouwen toegewijde teams die Nederlandstalige en Noordse klanten ondersteunen. Spreek je de talen en wil je in de klantenservice werken, dan horen we graag van je.',
    },
    roles: {
      title: 'Goed om te weten voordat je reageert',
      items: [
        {
          title: 'Nederlandstalige en Noordse klanten',
          body: 'Functies kunnen klanten ondersteunen in het Nederlands, Noors, Zweeds, Deens of Fins, vaak naast Engels.',
        },
        {
          title: 'Taal- en functie-eisen',
          body: 'Kandidaten moeten voldoen aan het taalniveau en de eisen van de specifieke functie. Dit toetsen we tijdens de werving.',
        },
        {
          title: 'Werkvergunning en werkplek',
          body: 'Of je mag werken en waar je werkt, wordt tijdens het wervingsproces beoordeeld.',
        },
        {
          title: 'Vacatures hangen af van klantprojecten',
          body: 'We werven wanneer een klantproject een team nodig heeft. Mogelijk is er niet direct een vacature die bij je profiel past.',
        },
      ],
    },
    process: {
      title: 'Zo werkt het',
      steps: [
        'Meld je interesse aan via het formulier hieronder.',
        'Als een project bij je profiel past, nemen we contact met je op.',
        'We toetsen je taalvaardigheid en geschiktheid voor de functie.',
        'Geschikte kandidaten ontvangen de functiedetails en voorwaarden schriftelijk.',
      ],
    },
    form: {
      title: 'Meld je interesse aan',
      intro: 'Dit is een algemene interesseregistratie, geen sollicitatie op een specifieke vacature. Vermeld geen gevoelige persoonsgegevens.',
    },
  },

  contact: {
    hero: {
      eyebrow: 'Bespreek uw team',
      title: 'Vertel ons over het team dat u nodig heeft',
      intro:
        'Deel enkele gegevens over uw klanten, talen en bereikbaarheid. We bekijken uw aanvraag en nemen contact met u op om een gesprek in te plannen.',
    },
    aside: {
      title: 'Wat er daarna gebeurt',
      steps: [
        'We bekijken uw aanvraag en eventuele vragen.',
        'We plannen een kennismakingsgesprek met u.',
        'Als er een match is, starten we met verkenning en afbakening.',
        'U ontvangt een voorstel voor een afgebakend, aangestuurd team.',
      ],
      note: 'Geheel vrijblijvend. Een aanvraag verplicht u tot niets.',
    },
  },

  forms: {
    common: {
      required: 'Verplicht',
      optional: 'optioneel',
      submit: 'Aanvraag versturen',
      submitInterest: 'Interesse aanmelden',
      submitting: 'Bezig met versturen…',
      errorSummary: 'Controleer de gemarkeerde velden.',
      notConfiguredTitle: 'Het verzenden van formulieren is nog niet ingeschakeld',
      notConfiguredBody:
        'Dit formulier is compleet, maar er is nog geen e-mail- of CRM-dienst gekoppeld. Wat u invult, wordt niet verzonden of opgeslagen.',
      notConfiguredResult:
        'Uw gegevens zijn gevalideerd, maar niet verzonden omdat het verzenden van formulieren niet is ingesteld. Er is niets opgeslagen.',
      successTitle: 'Bedankt — uw bericht is verzonden',
      successBody: 'We bekijken het en nemen contact met u op.',
      errorTitle: 'Uw bericht kon niet worden verzonden',
      errorBody: 'Er ging aan onze kant iets mis. Probeer het later opnieuw.',
      spamBlocked: 'Uw inzending kon niet worden geaccepteerd. Probeer het opnieuw.',
      honeypot: 'Laat dit veld leeg',
      selectPlaceholder: 'Selecteer…',
      privacyBefore: 'Ik heb de',
      privacyAfter: 'gelezen en begrijp hoe mijn gegevens worden gebruikt om op deze aanvraag te reageren.',
      privacyLinkText: 'privacyverklaring',
      recruitmentPrivacyLinkText: 'privacyverklaring werving',
    },
    enquiry: {
      title: 'Uw aanvraag',
      fields: {
        name: 'Naam',
        workEmail: 'Zakelijk e-mailadres',
        company: 'Bedrijf',
        website: 'Website van het bedrijf',
        languages: 'Gewenste dienstverleningstalen',
        languagesHint: 'Selecteer alles wat van toepassing is. Beschikbaarheid wordt tijdens de afbakening bevestigd.',
        teamSize: 'Indicatieve teamomvang',
        services: 'Gewenste diensten',
        coverage: 'Gewenste bereikbaarheid of werktijden',
        coverageHint: 'Bijvoorbeeld: werkdagen 08:00–18:00 CET.',
        startDate: 'Indicatieve startdatum',
        startDateHint: 'Bijvoorbeeld: Q2 of “na de zomer”.',
        message: 'Bericht',
        messageHint: 'Beschrijf kort uw klanten, contacttypes en waar u naar op zoek bent.',
        marketing: 'Optioneel: ik ontvang graag af en toe updates van u per e-mail.',
      },
      languageOptions: {
        dutch: 'Nederlands',
        norwegian: 'Noors',
        swedish: 'Zweeds',
        danish: 'Deens',
        finnish: 'Fins',
        english: 'Engels',
        other: 'Anders',
      },
      teamSizeOptions: {
        '3-5': '3–5 mensen',
        '6-10': '6–10 mensen',
        '11+': '11+ mensen',
        unsure: 'Nog niet zeker',
      },
      serviceOptions: {
        care: 'Toegewijde klantenservice',
        specialist: 'Gespecialiseerd supportteam',
        operations: 'Customer operations & backoffice',
        unsure: 'Nog niet zeker',
      },
    },
    candidate: {
      fields: {
        fullName: 'Volledige naam',
        email: 'E-mailadres',
        country: 'Huidig woonland',
        languages: 'Talen en niveau',
        languagesHint: 'Bijvoorbeeld: Nederlands – moedertaal, Engels – vloeiend, Zweeds – conversatieniveau.',
        experience: 'Relevante ervaring',
        experienceHint: 'Beschrijf kort je ervaring in klantenservice of een vergelijkbaar vakgebied.',
        profileUrl: 'LinkedIn- of profiel-URL',
        message: 'Bericht',
      },
    },
    errors: {
      required: 'Dit veld is verplicht.',
      email: 'Vul een geldig e-mailadres in, bijvoorbeeld naam@bedrijf.nl.',
      url: 'Vul een geldig webadres in dat begint met http:// of https://.',
      tooLong: 'Deze invoer is te lang.',
      selectOne: 'Selecteer ten minste één optie.',
      privacy: 'Bevestig dat u de privacyverklaring heeft gelezen.',
    },
  },

  legal: {
    draftNotice:
      'Concept voor juridische controle. Deze pagina is een opzet die vóór de lancering moet worden aangevuld met geverifieerde bedrijfsgegevens en beoordeeld door een gekwalificeerde adviseur. Dit is geen juridisch advies.',
    toComplete: 'Nog aan te vullen',
    docs: {
      privacy: {
        title: 'Privacyverklaring',
        description: 'Hoe we omgaan met persoonsgegevens die via deze website worden verstrekt.',
        sections: [
          { heading: 'Wie we zijn', body: 'De verwerkingsverantwoordelijke voor uw persoonsgegevens is het bedrijf dat op de pagina met juridische en bedrijfsgegevens wordt genoemd.' },
          { heading: 'Welke gegevens we verzamelen', body: 'Wanneer u een aanvraag indient, ontvangen we de gegevens die u in het formulier invult, zoals uw naam, zakelijk e-mailadres, bedrijf en bericht.' },
          { heading: 'Waarom we ze gebruiken', body: 'We gebruiken aanvraaggegevens om op uw verzoek te reageren en een mogelijke samenwerking te bespreken. Als u daar apart toestemming voor geeft, kunnen we u af en toe updates sturen.' },
          { heading: 'Rechtsgrond', body: 'De rechtsgrond voor elk verwerkingsdoel wordt hier na juridische controle vastgelegd.' },
          { heading: 'Wie ze ontvangt', body: 'Dienstverleners voor het versturen van formulieren en e-mail worden hier vermeld zodra ze zijn gekozen.' },
          { heading: 'Hoe lang we ze bewaren', body: 'Bewaartermijnen worden na juridische controle bepaald en hier vermeld.' },
          { heading: 'Uw rechten', body: 'Afhankelijk van het toepasselijke recht heeft u mogelijk het recht om uw gegevens in te zien, te corrigeren, te verwijderen of het gebruik ervan te beperken, en om een klacht in te dienen bij een toezichthouder. Details en contactmogelijkheden worden hier toegevoegd.' },
        ],
      },
      'recruitment-privacy': {
        title: 'Privacyverklaring werving',
        description: 'Hoe we omgaan met persoonsgegevens van mensen die interesse hebben om met ons te werken.',
        sections: [
          { heading: 'Doel', body: 'We gebruiken de gegevens die je verstrekt om te beoordelen of je geschikt kunt zijn voor huidige of toekomstige functies in klantprojecten.' },
          { heading: 'Welke gegevens we verzamelen', body: 'Je naam, e-mailadres, woonland, talen, ervaring, optionele profiellink en bericht. In deze fase vragen we niet om een cv of gevoelige persoonsgegevens.' },
          { heading: 'Rechtsgrond', body: 'De rechtsgrond voor de verwerking bij werving wordt hier na juridische controle vastgelegd.' },
          { heading: 'Bewaartermijn', body: 'Hoe lang interesseregistraties worden bewaard en hoe je om verwijdering kunt vragen, wordt hier na juridische controle vermeld.' },
          { heading: 'Je rechten', body: 'Afhankelijk van het toepasselijke recht kun je je gegevens inzien, corrigeren of verwijderen en een klacht indienen bij een toezichthouder. Contactmogelijkheden worden hier toegevoegd.' },
        ],
      },
      cookies: {
        title: 'Cookie-informatie',
        description: 'Informatie over de cookies die op deze website worden gebruikt.',
        sections: [
          { heading: 'Huidig gebruik', body: 'Deze website gebruikt geen analytische, advertentie- of trackingcookies. Er wordt één functionele cookie geplaatst om de door u gekozen websitetaal te onthouden.' },
          { heading: 'Cookie voor taalvoorkeur', body: 'Naam: NEXT_LOCALE. Doel: onthoudt de door u gekozen websitetaal. Looptijd: één jaar. Wordt alleen geplaatst wanneer u een taal kiest.' },
          { heading: 'Toekomstige wijzigingen', body: 'Als er in de toekomst analytische of andere niet-noodzakelijke cookies worden toegevoegd, wordt deze pagina bijgewerkt en wordt vooraf om toestemming gevraagd.' },
        ],
      },
      company: {
        title: 'Juridische en bedrijfsgegevens',
        description: 'Juridische en bedrijfsgegevens.',
        sections: [],
      },
    },
    companyFields: {
      name: 'Bedrijfsnaam',
      legalName: 'Naam van de rechtspersoon',
      registrationNumber: 'Registratienummer',
      vatNumber: 'Btw-nummer',
      registeredAddress: 'Statutair adres',
      email: 'E-mail',
      phone: 'Telefoon',
    },
  },

  notFound: {
    title: 'Pagina niet gevonden',
    body: 'De pagina die u zoekt bestaat niet of is verplaatst.',
  },
}
