/**
 * Dutch dictionary (formal "u"). Translated from en.ts; must keep the same shape.
 * Brand messaging (descriptor, taglines, hero, CTAs) comes from lib/config/company.ts.
 */
import { brandMessaging, company } from '@/lib/config/company'
import type { Dictionary } from './en'

const brand = brandMessaging.nl

export const nl: Dictionary = {
  brand,

  closingCta: {
    title: 'Laten we samen het juiste specialistische team voor uw organisatie ontwerpen.',
    body: 'Vertel ons over uw cases, klanten, partners en talen. We nemen contact met u op om te bespreken hoe een toegewijd team eruit zou kunnen zien.',
  },

  meta: {
    siteDescription: brand.metaDescription,
    home: {
      title: `${company.name} | Specialistische support & customer operations`,
      description: brand.metaDescription,
    },
    services: {
      title: 'Diensten',
      description:
        'Specialistische en tweedelijns support, dealer- en partnersupport, B2B customer operations, en aanvullende klantenservice en backofficeondersteuning.',
    },
    howItWorks: {
      title: 'Werkwijze',
      description:
        'Van verkenning en het vastleggen van verantwoordelijkheden tot werving, kennisoverdracht, een gecontroleerde start en continue verbetering: zo zetten we een specialistisch supportteam op.',
    },
    markets: {
      title: 'Markten & talen',
      description:
        'Specialistische support in het Nederlands, Duits, Noors en Engels, met Duitstalige ondersteuning afgestemd op Duitsland, Zwitserland en Oostenrijk.',
    },
    about: {
      title: `Over ${company.name}`,
      description: `${company.name} bouwt kleine, toegewijde specialistische supportteams, gevormd door jarenlange praktijkervaring in Customer Experience-consultancy en operations.`,
    },
    careers: {
      title: 'Werken bij',
      description:
        'Specialistische functies in customer operations in het Nederlands, Duits, Noors en Engels, afhankelijk van klantprojecten. Meld uw interesse aan voor toekomstige vacatures.',
    },
    contact: {
      title: 'Bespreek uw team',
      description:
        'Vertel ons over uw cases, klanten en taalbehoeften, en we bespreken hoe een toegewijd specialistisch team er voor u uit zou kunnen zien.',
    },
    notFound: {
      title: 'Pagina niet gevonden',
      description: 'De pagina die u zoekt bestaat niet.',
    },
  },

  common: {
    skipToContent: 'Direct naar de inhoud',
    discussYourTeam: brand.primaryCta,
    exploreExpertise: brand.secondaryCta,
    seeHowItWorks: 'Bekijk de werkwijze',
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
    proposition:
      'Kleine, toegewijde specialistische supportteams voor tweedelijns support, dealernetwerken en B2B customer operations — in het Nederlands, Duits, Noors en Engels.',
    statusNote: `${company.name} is een merk in voorbereiding.`,
    statusLink: 'Bedrijfsstatus',
    pagesHeading: 'Bedrijf',
    servicesHeading: 'Diensten',
    legalHeading: 'Juridisch',
    contactHeading: 'Contact',
    contactLink: 'Bespreek uw team',
    privacy: 'Privacyverklaring',
    recruitmentPrivacy: 'Privacyverklaring werving',
    cookies: 'Cookie-informatie',
    company: 'Juridische & bedrijfsinformatie',
    rights: 'Alle rechten voorbehouden.',
    photoCredit: 'Foto’s zijn illustratieve stockbeelden van Unsplash.',
  },

  images: {
    hero: 'Vier collega’s rond een tafel die samen gedrukte documenten doornemen',
    dedicated: 'Drie mensen aan computerwerkplekken in een licht kantoor',
    customerCare: 'Een lachende klantenservicemedewerker met headset aan haar bureau',
    specialist: 'Twee collega’s met laptops in gesprek aan een houten tafel',
    backOffice: 'Collega’s geconcentreerd achter hun beeldschermen aan een gedeeld bureau',
    howItWorks: 'Drie mensen in een kleine vergaderruimte die documenten bespreken aan een ronde tafel',
    markets: 'Een headset naast een opengeklapte laptop',
    athensView: 'Uitzicht over Athene richting de zee, met de Akropolis op de voorgrond',
    athensAcropolis: 'De Akropolis van Athene in gouden avondlicht',
    athensStreet: 'Mensen die op een zonnige dag door een straat in Athene lopen',
  },

  experience: {
    listHeading: 'Eerdere werkervaring omvat werk voor',
    attribution:
      'Deze referenties betreffen de eerdere werkervaring van de oprichter, niet klantrelaties van Relavique. Er wordt geen aanbeveling gesuggereerd.',
  },

  home: {
    hero: {
      eyebrow: brand.tagline,
      title: brand.heroHeadline,
      intro: brand.heroCopy,
      shortLine: 'Duitstalige support afgestemd op Duitsland, Zwitserland en Oostenrijk. Andere talen beoordelen we op aanvraag.',
    },
    strip: {
      label: 'Wat we bieden',
      items: [
        'Toegewijde teams van 3–10',
        'Specialistisch case-eigenaarschap',
        'Dealer- en B2B-support',
        'Uitvoering vanuit Griekenland',
      ],
    },
    resolution: {
      eyebrow: brand.secondaryLine,
      title: 'Verder dan het eerste contact. Gericht op oplossing.',
      intro:
        'Sommige cases vragen meer dan een antwoord. Ze vragen om onderzoek, opvolging en iemand die begrijpt hoe uw organisatie werkt. Relavique bouwt kleine, toegewijde teams rond die verantwoordelijkheden.',
      points: [
        {
          title: 'Specialistisch, niet generiek',
          body: 'Uw team werkt alleen voor u en bouwt product-, proces- en partnerkennis op die bij uw cases blijft.',
        },
        {
          title: 'Verantwoordelijk, niet transactioneel',
          body: 'Cases worden opgevolgd tot ze zijn opgelost of volgens afspraak zijn overgedragen, met een vaste contactpersoon die verantwoordelijk is voor het team.',
        },
        {
          title: 'Nauw geïntegreerd',
          body: 'We werken in uw systemen en naast uw experts, interne afdelingen en eventuele bestaande supportpartners.',
        },
        {
          title: 'Case-eigenaarschap boven contactafhandeling',
          body: 'Succes meten we aan goed opgeloste en opgevolgde cases, niet alleen aan beantwoorde contacten.',
        },
      ],
    },
    services: {
      eyebrow: 'Onze expertise',
      title: 'Specialistische support waar het er het meest toe doet',
      intro:
        'We richten ons op werk dat diepere product- en proceskennis, goed oordeelsvermogen en coördinatie vraagt. Elke opdracht wordt afzonderlijk afgebakend voordat het team start.',
    },
    layer: {
      eyebrow: 'Hoe we aansluiten',
      title: 'Een specialistische laag binnen uw supportorganisatie',
      intro:
        'We zijn er om met uw organisatie samen te werken, niet om haar te vervangen. De meeste opdrachten volgen een van drie modellen.',
      models: [
        {
          title: 'Uw eerstelijnsteam aanvullen',
          body: 'We nemen de cases over die uw eerste lijn — intern of bij een bestaande partner — doorzet voor onderzoek en opvolging.',
        },
        {
          title: 'Een afgebakende wachtrij of een proces beheren',
          body: 'We nemen de verantwoordelijkheid voor een duidelijk afgebakende specialistische wachtrij, workflow of escalatieroute, met afgesproken grenzen.',
        },
        {
          title: 'Een toegewijd team opbouwen',
          body: 'We zetten een klein, toegewijd team op voor een specifieke markt, productlijn of een specifiek partnernetwerk.',
        },
      ],
      note: 'In elk model blijven uw interne afdelingen en bestaande partners betrokken. Overdrachtsmomenten en escalatieroutes worden met alle betrokkenen afgesproken.',
    },
    experience: {
      eyebrow: 'De ervaring achter onze aanpak',
      title: 'Specialistische uitvoering, gevormd door ervaring.',
      intro:
        'De ervaring achter Relavique omvat Customer Experience-consultancy en operations voor grote organisaties in telecom, consumentenproducten, automotive, bankwezen, betalingen en voeding.',
      cta: 'Meer over onze basis',
    },
    dedicated: {
      eyebrow: 'Toegewijd aan u, ondersteund door ons',
      title: 'Uw eigen team, gesteund door gedeelde ondersteuning',
      intro:
        'De mensen die uw cases behandelen, werken alleen voor u. Achter hen zorgen gedeelde functies ervoor dat het team bemand, getraind en aanspreekbaar blijft.',
      dedicatedHeading: 'Toegewijd aan uw organisatie',
      dedicatedItems: ['Klantspecifieke kennis', 'Vastgelegde verantwoordelijkheden', 'Toegewijde medewerkers'],
      sharedHeading: 'Ondersteund door onze gedeelde functies',
      sharedItems: [
        'Gedeelde werving, coaching en ondersteuning',
        'Duidelijke escalatieroutes',
        'Afgesproken rapportages',
      ],
    },
    process: {
      eyebrow: 'Werkwijze',
      title: 'Een helder traject van eerste gesprek tot draaiend team',
      steps: [
        { title: 'Verkenning', body: 'We leren hoe uw cases, klanten en partners werken, en waar specialistische support nodig is.' },
        { title: 'Teamontwerp', body: 'We bepalen teamgrootte, talen, verantwoordelijkheden en escalatieroutes.' },
        {
          title: 'Werving en training',
          body: 'We werven en beoordelen voor de functie en trainen vervolgens met uw materialen en experts.',
        },
        { title: 'Gecontroleerde start', body: 'Het team gaat live op basis van afgesproken criteria, met nauwe monitoring.' },
        { title: 'Continue verbetering', body: 'Rapportages, casereviews en coaching verfijnen de uitvoering in de loop van de tijd.' },
      ],
      cta: 'Lees de volledige werkwijze',
    },
    markets: {
      eyebrow: 'Markten en talen',
      title: 'Nederlands, Duits, Noors en Engels',
      body: 'Specialistische supportteams vanuit Griekenland voor Nederlands-, Duits-, Noors- en Engelstalige klanten, met Duitstalige ondersteuning afgestemd op Duitsland, Zwitserland en Oostenrijk.',
      items: [
        { title: 'Nederlands', body: 'Voor Nederland en Vlaanderen.' },
        { title: 'Duits', body: 'Voor klanten in Duitsland, Zwitserland en Oostenrijk, met aandacht voor lokale terminologie en omgangsvormen.' },
        { title: 'Noors', body: 'Voor klanten en partners in Noorwegen.' },
        { title: 'Engels', body: 'Voor internationale klanten, partners en Engelstalige operations.' },
      ],
      note: 'Een andere taal nodig? We beoordelen aanvullende taalbehoeften op basis van de functie, de beschikbaarheid op de arbeidsmarkt en de omvang van uw project.',
      cta: 'Markten & talen',
    },
    greece: {
      eyebrow: 'Uitvoering vanuit Griekenland',
      title: 'Een remote-first model vanuit Griekenland',
      paragraphs: [
        'De teams van Relavique zullen naar verwachting in Griekenland gevestigd zijn en remote-first werken, met gestructureerde begeleiding, regelmatige coaching en vaste communicatieafspraken.',
        'Griekenland biedt toegang tot meertalige professionals en een tijdzone die goed aansluit op werktijden in Nederland, Duitsland, Zwitserland, Oostenrijk en Noorwegen. De beschikbaarheid van talen wordt per functie beoordeeld.',
      ],
      points: [
        'Thuiswerken met vaste begeleiding en check-ins',
        'Werktijden afgestemd op de tijdzone van uw klanten',
        'Apparatuur, toegang en werkafspraken per klant overeengekomen',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Veelgestelde vragen',
      items: [
        {
          q: 'Hoe groot kan een team zijn?',
          a: 'Ons model is gebouwd rond kleine, toegewijde teams van ongeveer 3–10 mensen. De juiste omvang hangt af van uw casevolumes, complexiteit, talen en bereikbaarheid, en wordt tijdens de afbakening vastgesteld.',
        },
        {
          q: 'Kunt u samenwerken met onze bestaande BPO-partner of ons eerstelijnsteam?',
          a: 'Ja. Veel opdrachten zijn juist bedoeld om een bestaande eerste lijn aan te vullen, intern of bij een andere partner. Escalatiecriteria, overdrachtsmomenten en communicatielijnen spreken we vóór de start met alle betrokkenen af.',
        },
        {
          q: 'Wat bedoelt u met tweedelijns support?',
          a: 'Ondersteuning bij cases die verder onderzoek, product- of proceskennis en coördinatie vragen dan het eerste contactpunt kan bieden. De technische diepgang en de beslissingen die het team mag nemen, worden per opdracht afgesproken; engineering, softwareontwikkeling en gereguleerd advies vallen erbuiten.',
        },
        {
          q: 'Kunt u ons dealer- of partnernetwerk ondersteunen?',
          a: 'Ja, binnen een afgesproken scope. Een team kan partnervragen over bestellingen, beschikbaarheid en processen beantwoorden, cases met uw afdelingen coördineren en openstaande zaken opvolgen. Garantie-, financiële, contractuele en andere commerciële beslissingen blijven bij u, tenzij uitdrukkelijk anders afgesproken.',
        },
        {
          q: 'Kunt u B2B customer operations verzorgen?',
          a: 'Ja. Een team kan vragen van zakelijke klanten behandelen, account- en serviceadministratie verzorgen, orders en cases opvolgen en coördineren met sales, logistiek en service, volgens uw processen en goedkeuringsgrenzen.',
        },
        {
          q: 'Kunt u in onze bestaande systemen werken?',
          a: 'In de meeste gevallen wel. We werken bij voorkeur in uw CRM-, helpdesk- of ordersystemen, zodat u volledig zicht houdt. Welke toegang nodig is en hoe die wordt verleend en ingetrokken, spreken we tijdens de afbakening af.',
        },
        {
          q: 'Hoe worden verantwoordelijkheden en escalatieroutes vastgelegd?',
          a: 'Schriftelijk, vóór de start. We leggen vast wat het team beheert, welke beslissingen bij uw experts blijven, goedkeuringsgrenzen, escalatieroutes en overdrachtscriteria, en we herzien die naarmate de samenwerking zich ontwikkelt.',
        },
        {
          q: 'Kunt u Duitstalige support afstemmen op Zwitserland of Oostenrijk?',
          a: 'We stemmen Duitstalige ondersteuning af op lokale terminologie, omgangsvormen en marktverwachtingen, afhankelijk van functiespecifieke werving en beoordeling. Ondersteuning in Zwitserduits dialect bieden we niet standaard aan.',
        },
        {
          q: 'Kunt u andere talen beoordelen?',
          a: 'Ja. We beoordelen aanvullende taalbehoeften op basis van de functie, de beschikbaarheid op de arbeidsmarkt en de omvang van uw project. De beschikbaarheid bevestigen we voordat we ons vastleggen.',
        },
        {
          q: 'Hoe worden werktijden en bereikbaarheid afgesproken?',
          a: 'Samen met u, op basis van uw casevolumes en de verwachtingen van uw klanten. Openingstijden, vervanging tijdens vakanties en eventuele ruimere tijden worden vóór de start vastgelegd. Bereikbaarheid buiten kantoortijden, waaronder 24/7, is niet standaard inbegrepen.',
        },
        {
          q: 'Hoe is de prijs opgebouwd?',
          a: 'We prijzen elke opdracht als een afgebakend, beheerd team. Teamgrootte, talen, complexiteit en bereikbaarheid bepalen samen het voorstel, dat we na de verkenning delen in plaats van een standaardprijslijst te publiceren.',
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
      title: 'Specialistische support en customer operations, van begin tot eind',
      intro:
        'We richten ons op specialistische en tweedelijns support, dealer- en partnersupport en B2B customer operations. Klantenservice en backofficeondersteuning zijn daarnaast beschikbaar.',
    },
    approach: {
      title: 'Wat elke opdracht omvat',
      points: [
        'Een toegewijd team dat alleen voor u werkt',
        'Vastgelegde verantwoordelijkheden, goedkeuringsgrenzen en escalatieroutes',
        'Werving, personeelsadministratie en begeleiding',
        'Training op basis van uw producten, processen en voorbeeldcases',
        'Kwaliteitscoaching en afgesproken rapportages',
        'Een vaste contactpersoon',
      ],
    },
    scopeNote:
      'Gereguleerd advies, softwareontwikkeling, geavanceerde engineering en 24/7-bereikbaarheid bieden we niet standaard aan. Technische diepgang en werktijden worden tijdens de afbakening afgesproken.',
  },

  services: {
    labels: {
      problem: 'De uitdaging',
      scope: 'Typische scope',
      responsibilities: 'Verantwoordelijkheden en grenzen',
      weHandle: 'Ons team verzorgt',
      clientRetains: 'U behoudt',
      boundaries: 'Afgesproken vóór de start',
      onboarding: 'Zo verloopt de onboarding',
      onboardingLink: 'Lees de volledige werkwijze',
      experienceNote:
        'Onze aanpak is gebaseerd op praktijkervaring in Customer Experience-consultancy en operations: helder eigenaarschap, vastgelegde processen en effectieve escalatie.',
      quality: 'Kwaliteit en rapportage',
      related: 'Gerelateerde diensten',
    },
    items: {
      'specialist-support-teams': {
        name: 'Specialistische & tweedelijns support',
        summary:
          'Ondersteuning bij cases die verder onderzoek, product- of proceskennis en coördinatie vragen dan het eerste contactpunt kan bieden.',
        meta: {
          title: 'Specialistische & tweedelijns support',
          description:
            'Een toegewijd tweedelijnsteam voor geëscaleerde cases, product- en procesonderzoek en de opvolging van complexe klachten, tot de case is opgelost.',
        },
        eyebrow: 'Specialistische & tweedelijns support',
        title: 'Specialistische teams voor cases die meer vragen dan een standaardantwoord',
        intro:
          'Een klein, toegewijd team dat eigenaar wordt van cases die verder gaan dan het eerste contact: onderzoeken, afstemmen met uw experts en opvolgen tot de case is opgelost of volgens afspraak is overgedragen.',
        problem:
          'Wanneer complexe cases heen en weer gaan tussen eerstelijnsmedewerkers en drukke interne experts, wachten klanten en is niemand duidelijk eigenaar van de uitkomst. Een toegewijde specialistische laag geeft die cases een vaste plek.',
        scope: [
          'Cases die verder gaan dan het eerste contact',
          'Product- en procesvragen die onderzoek vereisen',
          'Opvolging van complexe klachten',
          'Afstemming met uw experts en interne afdelingen',
          'Casedocumentatie en voortgangsupdates',
          'Eigenaarschap tot oplossing of afgesproken overdracht',
        ],
        weHandle: [
          'Cases onderzoeken binnen de afgesproken scope',
          'Volledige informatie verzamelen voordat uw experts worden betrokken',
          'Klanten en collega’s op de hoogte houden van de voortgang',
          'Cases documenteren en kennisartikelen actueel houden',
        ],
        clientRetains: [
          'Beslissingen buiten de afgesproken scope',
          'Technische expertise voorbij de afgesproken diepgang',
          'Commerciële voorwaarden, creditnota’s en uitzonderingen',
          'De uiteindelijke beslissing over klachten en geschillen',
        ],
        boundaries: [
          'Technische diepgang wordt per opdracht afgesproken.',
          'Goedkeuringsgrenzen worden vastgelegd.',
          'Uw experts behouden beslissingen buiten de afgesproken scope.',
          'Escalatie- en overdrachtscriteria worden vóór de start vastgesteld.',
        ],
        onboarding:
          'We brengen de casetypen, kennis en beslissingen in kaart en bouwen een training op uit uw documentatie, voorbeeldcases en sessies met uw experts. Het team begint met duidelijk afgebakende casetypen voordat het meer oppakt.',
        quality: {
          body: 'Specialistisch werk vraagt om specifieke maatstaven. We spreken die met u af en evalueren ze samen.',
          points: [
            'Nauwkeurigheid en volledigheid van caseonderzoek',
            'Juist gebruik van escalatie- en overdrachtsroutes',
            'Afgesproken reactie- en opvolgtijden',
            'Regelmatige kalibratiesessies met uw experts',
          ],
        },
      },
      'dealer-partner-support': {
        name: 'Dealer- & partnersupport',
        summary:
          'Een vast aanspreekpunt voor dealer-, distributeurs- en partnernetwerken, dat cases coördineert tussen partners en uw afdelingen.',
        meta: {
          title: 'Dealer- & partnersupport',
          description:
            'Toegewijde support voor dealer-, distributeurs- en partnernetwerken: vragen over bestellingen en beschikbaarheid, casecoördinatie en opvolging van openstaande zaken.',
        },
        eyebrow: 'Dealer- & partnersupport',
        title: 'Betrouwbare support voor de partners die uw organisatie vertegenwoordigen',
        intro:
          'Dealers, distributeurs en partners hebben snelle, juiste antwoorden nodig en iemand die opvolgt. We bouwen een klein team dat uw netwerk, uw processen en de betrokken mensen kent.',
        problem:
          'Partnervragen raken vaak sales, logistiek en service tegelijk. Zonder duidelijke eigenaar blijven zaken openstaan en moeten partners verschillende afdelingen najagen voor één antwoord.',
        scope: [
          'Support voor dealer-, distributeurs- en partnernetwerken',
          'Vragen over bestellingen, beschikbaarheid en operationele processen',
          'Casecoördinatie tussen partners en uw afdelingen',
          'Opvolging van openstaande zaken',
          'Partnercommunicatie en correcte registratie',
        ],
        weHandle: [
          'Partnervragen beantwoorden binnen vastgelegde procedures',
          'Cases afstemmen met de juiste interne afdelingen',
          'Opvolgen tot zaken zijn opgelost of overgedragen',
          'Partnergegevens en casenotities correct houden',
        ],
        clientRetains: [
          'Garantiebeslissingen',
          'Financiële en contractuele beslissingen',
          'Commerciële voorwaarden en partnerovereenkomsten',
          'Beslissingen buiten de afgesproken bevoegdheid',
        ],
        boundaries: [
          'Het team is niet bevoegd om garantie-, financiële, contractuele of andere commerciële beslissingen goed te keuren, tenzij uitdrukkelijk afgesproken.',
          'Goedkeuringsgrenzen en escalatie-eigenaren worden vastgelegd.',
          'Partnercommunicatie volgt uw afgesproken richtlijnen.',
        ],
        onboarding:
          'We leren uw partnerstructuur, bestel- en serviceprocessen en de betrokken afdelingen kennen, en trainen het team met uw procedures en echte partnerscenario’s vóór een gecontroleerde start.',
        quality: {
          body: 'Partnersupport draait om juistheid en opvolging. We spreken maatstaven met u af en evalueren ze samen.',
          points: [
            'Juistheid van de informatie aan partners',
            'Tijdige opvolging van openstaande zaken',
            'Volledigheid van partnergegevens',
            'Regelmatige evaluaties met uw partner- of channelmanagers',
          ],
        },
      },
      'b2b-customer-operations': {
        name: 'B2B customer operations',
        summary:
          'Vragen van zakelijke klanten, accountadministratie en orderopvolging, afgestemd met uw sales-, logistiek- en serviceafdelingen.',
        meta: {
          title: 'B2B customer operations',
          description:
            'Toegewijde B2B customer-operationsteams voor vragen van zakelijke klanten, account- en serviceadministratie, order- en caseopvolging en juiste CRM-gegevens.',
        },
        eyebrow: 'B2B customer operations',
        title: 'Customer operations voor zakelijke klanten, met zorg uitgevoerd',
        intro:
          'Zakelijke klanten verwachten continuïteit, nauwkeurigheid en iemand die hun account begrijpt. Ons team neemt B2B customer operations op zich volgens uw workflows en goedkeuringsgrenzen.',
        problem:
          'B2B-accounts kennen veel stappen en belanghebbenden. Als administratie en opvolging versnipperd raken, lopen orders vast, raken gegevens verouderd en verliezen zakelijke klanten hun vertrouwen.',
        scope: [
          'Vragen van zakelijke klanten',
          'Account- en serviceadministratie',
          'Order- en caseopvolging',
          'Afstemming tussen sales, logistiek en service',
          'Juiste CRM-gegevens en workflowbeheer',
          'Afgesproken escalatieafhandeling',
        ],
        weHandle: [
          'Vragen en taken afhandelen binnen vastgelegde bevoegdheden',
          'Orders en cases opvolgen tot ze zijn afgerond',
          'CRM- en accountgegevens correct houden',
          'Uitzonderingen escaleren naar uw aangewezen eigenaren',
        ],
        clientRetains: [
          'Prijzen, contracten en commerciële beslissingen',
          'Goedkeuringen boven de afgesproken grenzen',
          'Bedrijfsregels en beleidsbeslissingen',
          'Het uiteindelijke eigenaarschap van de klantrelatie',
        ],
        boundaries: [
          'Bevoegdheden en goedkeuringsgrenzen worden per taak vastgelegd.',
          'Escalatie-eigenaren worden aan beide kanten benoemd.',
          'Wijzigingen in de scope worden schriftelijk afgesproken.',
        ],
        onboarding:
          'We brengen uw accounttypen, workflows en betrokken afdelingen in kaart en trainen het team in uw systemen met vastgelegde procedures en voorbeeldcases vóór een gecontroleerde start.',
        quality: {
          body: 'Bij B2B-operations tellen nauwkeurigheid en tijdigheid het zwaarst. We spreken maatstaven en controles met u af voordat we beginnen.',
          points: [
            'Nauwkeurigheidscontroles op een steekproef van afgerond werk',
            'Afgesproken doorlooptijden per taaktype',
            'Rapportage over openstaande cases en achterstanden',
            'Regelmatige procesevaluaties met uw team',
          ],
        },
      },
      'customer-care-back-office': {
        name: 'Klantenservice & backofficeondersteuning',
        summary:
          'Aanvullende klantenservice en backofficecapaciteit — e-mail, telefoon, tickets en chat, caseadministratie en CRM-updates.',
        meta: {
          title: 'Klantenservice & backofficeondersteuning',
          description:
            'Aanvullende klantenservice en backofficeondersteuning: e-mail, telefoon, tickets en chat, vragen over bestellingen en boekingen, caseadministratie, CRM-updates en ticketsortering.',
        },
        eyebrow: 'Klantenservice & backofficeondersteuning',
        title: 'Klantenservice en backofficeondersteuning naast specialistisch werk',
        intro:
          'Specialistische teams werken vaak het best met betrouwbare dagelijkse ondersteuning om zich heen. Waar het bij uw organisatie past, kan hetzelfde teammodel ook klantcontacten en backofficetaken verzorgen.',
        problem:
          'Routinecontacten en administratie moeten nog steeds juist en op tijd gebeuren. Door ze naast specialistisch werk af te handelen, blijft kennis in één team en voorkomt u onnodige overdrachten.',
        scope: [
          'E-mail, telefoon, tickets en chat',
          'Vragen over bestellingen en boekingen',
          'Caseadministratie',
          'CRM-updates',
          'Ticketsortering',
          'Workflowopvolging',
        ],
        weHandle: [
          'Contacten en taken afhandelen binnen de afgesproken scope',
          'Dagelijkse begeleiding en planning',
          'Cases documenteren in uw systemen',
          'Uitzonderingen escaleren naar uw aangewezen eigenaren',
        ],
        clientRetains: [
          'Klantbeleid, terugbetalingen en coulanceregels',
          'Beslissingen buiten de afgesproken bevoegdheid',
          'Het verlenen en intrekken van systeemtoegang',
          'De eindverantwoordelijkheid voor financiële transacties',
        ],
        boundaries: [
          'Kanalen en bereikbaarheid worden per klant afgesproken.',
          'Bevoegdheden en goedkeuringsgrenzen worden vastgelegd.',
          'Escalatieroutes worden vóór de start vastgesteld.',
        ],
        onboarding:
          'We trainen het team op uw producten, processen en systemen met uw materialen en input van uw experts. De start volgt zodra de training en systeemtoegang geregeld zijn.',
        quality: {
          body: 'Vóór de start spreken we af wat goede service voor uw klanten betekent. Daarna monitoren, coachen en rapporteren we op die maatstaven.',
          points: [
            'Kwaliteitscriteria op basis van uw normen en tone of voice',
            'Regelmatige beoordeling van een steekproef van contacten',
            'Afgesproken maatstaven zoals reactietijden en oplossing',
            'Een vast evaluatieritme met uw contactpersoon',
          ],
        },
      },
    },
  },

  howItWorks: {
    hero: {
      eyebrow: 'Werkwijze',
      title: 'Zo zetten we uw specialistische team op en sturen we het aan',
      intro:
        'Een gestructureerd, transparant proces. U weet wat er in elke fase gebeurt, wie verantwoordelijk is en wat er geregeld moet zijn voordat uw team live gaat.',
    },
    steps: [
      {
        title: 'Verkenning en scope',
        body: 'We leren hoe uw cases, klanten en partners werken, en spreken af wat het team wel — en niet — oppakt.',
        pointsLabel: 'We bepalen',
        points: [
          'Complexiteit van cases',
          'Verantwoordelijkheden van de eerste en tweede lijn',
          'Talen en markteisen',
          'Relaties met dealers, partners of zakelijke klanten',
          'Kanalen, volumes en werktijden',
        ],
      },
      {
        title: 'Ontwerp van team en verantwoordelijkheden',
        body: 'We ontwerpen het team rond de kennis en beslissingen die het werk vraagt.',
        pointsLabel: 'We bepalen',
        points: [
          'Benodigde product- en proceskennis',
          'Beslissingsbevoegdheid',
          'Verantwoordelijkheden van uw experts',
          'Escalatieroutes',
          'Criteria voor eigenaarschap en overdracht',
          'Verwachtingen rond rapportage en kwaliteit',
        ],
      },
      {
        title: 'Werving en beoordeling',
        body: 'We werven voor uw specifieke functie en beoordelen kandidaten op wat die functie vraagt.',
        pointsLabel: 'We beoordelen',
        points: [
          'Taalvaardigheid',
          'Communicatieve vaardigheden',
          'Relevante ervaring',
          'Het vermogen om cases te onderzoeken, te documenteren en te coördineren',
        ],
      },
      {
        title: 'Kennisoverdracht en training',
        body: 'Uw experts delen producten, processen en beleid. Wij vertalen dit naar een training en een klantspecifieke kennisbank.',
        pointsLabel: 'We bouwen',
        points: [
          'Klantspecifieke kennis',
          'Vastgelegde procedures',
          'Voorbeeldcases',
          'Richtlijnen voor escalatie',
          'Duidelijke goedkeuringsgrenzen',
        ],
      },
      {
        title: 'Gecontroleerde start',
        body: 'We spreken startcriteria met u af en volgen de eerste periode nauwgezet, bijvoorbeeld door te beginnen met geselecteerde casetypen of kanalen.',
        pointsLabel: '',
        points: [],
      },
      {
        title: 'Continue verbetering',
        body: 'Met rapportages, casereviews en coaching verfijnen we de uitvoering en blijven we samen met u verbeteren.',
        pointsLabel: '',
        points: [],
      },
    ],
    responsibilities: {
      eyebrow: 'Verantwoordelijkheden',
      title: 'Duidelijke verantwoordelijkheden aan beide kanten',
      intro: 'Een specialistisch team werkt het best als iedereen weet wie waarvoor verantwoordelijk is.',
      weTitle: 'Wij verzorgen',
      we: [
        'Werving en beoordeling',
        'Personeelsadministratie',
        'Dagelijkse teambegeleiding',
        'Case-eigenaarschap binnen de afgesproken scope',
        'Kwaliteitscoaching en afgesproken rapportages',
      ],
      clientTitle: 'U levert',
      client: [
        'Product- en procesexpertise',
        'De benodigde systeemtoegang',
        'Eigenaren voor goedkeuring en escalatie',
        'Bedrijfsregels en beleidsbeslissingen',
      ],
    },
    define: {
      eyebrow: 'Vóór de start',
      title: 'Wat we vóór de start vastleggen',
      intro: 'Deze punten spreken we tijdens de afbakening schriftelijk af, zodat beide partijen met dezelfde verwachtingen beginnen.',
      items: [
        { title: 'Casetypen', body: 'Welke cases, wachtrijen of processen het team beheert, en welke bij uw eerste lijn of experts blijven.' },
        { title: 'Talen', body: 'Welke talen en markten nodig zijn, voor welke kanalen en op welk niveau.' },
        { title: 'Bevoegdheid', body: 'Wat het team mag beslissen, de goedkeuringsgrenzen en wat uw akkoord vraagt.' },
        { title: 'Escalaties en overdrachten', body: 'Routes, eigenaren en reactieverwachtingen voor alles buiten de bevoegdheid van het team.' },
        { title: 'Werktijden en bereikbaarheid', body: 'Openingstijden, piekperiodes en hoe vakanties en afwezigheid worden opgevangen.' },
        { title: 'Volumes', body: 'Verwachte casevolumes en -patronen, op basis waarvan we het team dimensioneren.' },
        { title: 'Training', body: 'Inhoud, voorbeeldcases, betrokken experts en akkoord vóór de start.' },
        { title: 'Toegang tot gegevens', body: 'Welke systemen en gegevens het team nodig heeft, en hoe toegang wordt verleend en ingetrokken.' },
        { title: 'Rapportage', body: 'De kwaliteits- en prestatiemaatstaven waarover we rapporteren, en het evaluatieritme.' },
      ],
    },
    timing: {
      title: 'Over planning',
      body: 'De startdatum hangt af van werving, toegang tot uw systemen en training. We maken tijdens de afbakening samen een realistische planning in plaats van een vaste startdatum te beloven.',
    },
  },

  markets: {
    hero: {
      eyebrow: 'Markten & talen',
      title: 'Nederlands, Duits, Noors en Engels — markt voor markt benaderd',
      intro:
        'Specialistische supportteams vanuit Griekenland voor Nederlands-, Duits-, Noors- en Engelstalige klanten, met Duitstalige ondersteuning afgestemd op Duitsland, Zwitserland en Oostenrijk.',
    },
    distinction: {
      title: 'Websitetalen en dienstverleningstalen zijn niet hetzelfde',
      websiteTitle: 'Websitetalen',
      websiteBody:
        'Deze website is momenteel beschikbaar in het Engels en het Nederlands. Eventuele verdere websitetalen staan los van de talen waarin onze teams werken.',
      deliveryTitle: 'Dienstverleningstalen',
      deliveryBody:
        'We bieden dienstverleningstalen aan zodra werving en beschikbaarheid voor uw project zijn bevestigd. Niet elke taal is direct bemand en beschikbaar.',
    },
    marketsTitle: 'Onze marktfocus',
    marketsIntro:
      'Dit zijn de markten waarvoor onze teams zijn ontworpen. We hebben daar geen lokale kantoren en claimen geen bestaande klanten of personeel in elke markt.',
    items: [
      {
        name: 'Nederland & Vlaanderen',
        language: 'Nederlands',
        body: 'Support voor klanten in Nederland en Vlaanderen. Voor Frans- en Duitstalig België is aparte taaldekking nodig.',
      },
      {
        name: 'Duitsland',
        language: 'Duits',
        body: 'Duitstalige support voor klanten en partners in Duitsland, volgens Duitse zakelijke en communicatieve omgangsvormen.',
      },
      {
        name: 'Duitstalig Zwitserland',
        language: 'Duits',
        body: 'Duitstalige support met aandacht voor Zwitserse terminologie en omgangsvormen. Ondersteuning in Zwitserduits dialect of in de andere talen van Zwitserland bieden we niet standaard aan.',
      },
      {
        name: 'Oostenrijk',
        language: 'Duits',
        body: 'Duitstalige support met aandacht voor Oostenrijkse terminologie, omgangsvormen en marktverwachtingen.',
      },
      {
        name: 'Noorwegen',
        language: 'Noors',
        body: 'Noorstalige support voor klanten en partners in Noorwegen.',
      },
      {
        name: 'Engelstalige operations',
        language: 'Engels',
        body: 'Engels voor internationale klanten en partners, of in combinatie met de andere dienstverleningstalen.',
      },
    ],
    principles: {
      title: 'Hoe we taalondersteuning benaderen',
      items: [
        {
          title: 'Taal is maar een deel van de match',
          body: 'Taal is maar een deel van de match. We beoordelen ook de communicatieve vaardigheden, marktkennis en specialistische kennis die uw account vraagt.',
        },
        {
          title: 'Eén taal, drie markten',
          body: 'Duitstalige ondersteuning voor Zwitserland en Oostenrijk vraagt om passende lokale terminologie en marktkennis, niet alleen om beheersing van het Duits.',
        },
        {
          title: 'Beoordeeld voor de functie',
          body: 'We beoordelen taalvaardigheid op het niveau dat de functie vraagt, schriftelijk en mondeling waar relevant, afhankelijk van functiespecifieke werving.',
        },
        {
          title: 'Beschikbaarheid per project bevestigd',
          body: 'Of en wanneer een taal kan worden bemand, bevestigen we per project tijdens de afbakening.',
        },
      ],
    },
    otherLanguages: {
      title: 'Andere talen',
      body: 'Voor geschikte projecten kunnen we aanvullende taalbehoeften beoordelen. Beschikbaarheid, werving en scope bevestigen we voordat we ons vastleggen.',
    },
    cta: {
      title: 'Bespreek uw taalbehoeften.',
      body: 'Vertel ons welke markten en talen u nodig hebt. We vertellen u eerlijk wat haalbaar is en wat ervoor nodig is.',
      button: 'Bespreek uw taalbehoeften',
    },
  },

  about: {
    hero: {
      eyebrow: `Over ${company.name}`,
      title: brand.secondaryLine,
      intro: `${company.name} bouwt kleine, toegewijde specialistische supportteams voor het mkb en voor specialistische afdelingen binnen multinationals — en neemt het eigenaarschap van cases die diepere kennis, goed oordeelsvermogen en opvolging vragen.`,
    },
    philosophy: {
      title: 'Ons werkmodel',
      intro:
        'We richten ons op specialistische en tweedelijns support, dealer- en partnersupport en B2B customer operations, naast uw eigen teams en eventuele bestaande partners.',
      items: [
        {
          title: 'Een specialistisch werkmodel',
          body: 'Teams zijn gebouwd voor werk dat product- en proceskennis, goed oordeelsvermogen en coördinatie vraagt — niet alleen contactafhandeling.',
        },
        {
          title: 'Kleine, toegewijde teams',
          body: 'Teams van ongeveer 3–10 mensen zijn groot genoeg voor continuïteit en klein genoeg om persoonlijk te blijven.',
        },
        {
          title: 'Persoonlijke verantwoordelijkheid',
          body: 'Elke klant heeft een vaste contactpersoon die verantwoordelijk is voor het team en direct bereikbaar is.',
        },
        {
          title: 'Begrip van klanten en partners',
          body: 'We nemen de tijd om uw klanten, partners en producten te begrijpen, en hoe u vertegenwoordigd wilt worden.',
        },
        {
          title: 'Uitvoering vanuit Griekenland',
          body: 'Onze teams zullen naar verwachting in Griekenland gevestigd zijn, met werktijden afgestemd op de markten die ze bedienen.',
        },
        {
          title: 'Langdurige relaties',
          body: 'We streven naar duurzame samenwerkingen, waarin het team in de loop van de tijd groeit in kennis en verantwoordelijkheid.',
        },
      ],
    },
    experience: {
      eyebrow: 'Ervaring',
      title: 'Een nieuw bedrijf. Een ervaren basis.',
      paragraphs: [
        'Relavique is gebouwd op jarenlange praktijkervaring in Customer Experience-consultancy en operations, waaronder werk voor Vodafone, Philips, Miele, Stellantis, ANZ Bank, ABN AMRO, Dyson, Klarna, Danone en FrieslandCampina.',
        'Die ervaring bepaalt onze aanpak: de klantreis begrijpen, verantwoordelijkheden helder vastleggen, mensen de juiste kennis meegeven en cases zorgvuldig en verantwoordelijk opvolgen.',
      ],
      connectionsTitle: 'Hoe die ervaring onze uitvoering vormt',
      connections: [
        'Helder case-eigenaarschap',
        'Begrip van klanten en partners',
        'Vastgelegde processen',
        'Effectieve escalatie',
        'Afstemming tussen afdelingen',
        'Praktische kwaliteitscoaching',
        'Verantwoordelijke uitvoering',
      ],
      scopeNote:
        'Onze concrete dienstverlening staat beschreven op onze dienstenpagina’s. Dit is geen beschrijving van de rol van de oprichter bij de genoemde organisaties.',
    },
    greece: {
      title: 'Waarom Griekenland',
      paragraphs: [
        'Griekenland heeft een meertalige beroepsbevolking en een tijdzone die nauw aansluit op werkdagen in Nederland, Duitsland, Zwitserland, Oostenrijk en Noorwegen.',
        'We plannen een remote-first werkmodel met gestructureerde begeleiding, zodat we per functie de juiste mensen kunnen werven en niet alleen degenen die dicht bij een bepaald kantoor wonen.',
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
      title: 'Specialistische functies in customer operations, vanuit Griekenland',
      intro:
        'We bouwen kleine, toegewijde teams voor specialistische cases, partnersupport en operations voor zakelijke klanten. Beheerst u de talen en vindt u het prettig om cases tot het einde op te volgen? Dan horen we graag van u.',
    },
    roles: {
      title: 'Goed om te weten voordat u reageert',
      items: [
        {
          title: 'Taalfocus',
          body: 'Functies kunnen Nederlands, Duits, Noors of Engels omvatten. Afhankelijk van klantprojecten kunnen aanvullende talen nodig zijn.',
        },
        {
          title: 'Functies hangen af van klantprojecten',
          body: 'We werven wanneer een klantproject een team nodig heeft. Er is mogelijk niet direct een vacature die bij uw profiel past.',
        },
        {
          title: 'Individueel beoordeeld',
          body: 'Taal- en functie-eisen verschillen per project. We beoordelen ze individueel tijdens de werving.',
        },
        {
          title: 'Werkplek en werkvergunning',
          body: 'Uw werkplek en of u mag werken, worden tijdens het wervingsproces bevestigd.',
        },
      ],
    },
    process: {
      title: 'Zo werkt het',
      steps: [
        'Meld uw interesse aan via het formulier hieronder.',
        'Wanneer een project bij uw profiel past, nemen we contact met u op.',
        'We beoordelen uw taalvaardigheid en geschiktheid voor de functie.',
        'Geselecteerde kandidaten ontvangen de functiedetails en voorwaarden op schrift.',
      ],
    },
    form: {
      title: 'Meld uw interesse aan',
      intro: 'Dit is een algemene interesseaanmelding, geen sollicitatie op een specifieke vacature. Vermeld geen gevoelige persoonsgegevens.',
    },
  },

  contact: {
    hero: {
      eyebrow: 'Bespreek uw team',
      title: 'Vertel ons welk team u nodig hebt',
      intro:
        'Deel enkele details over uw cases, klanten, partners en talen. We bekijken uw aanvraag en nemen contact met u op om een gesprek in te plannen.',
    },
    aside: {
      title: 'Wat er daarna gebeurt',
      steps: [
        'We bekijken uw aanvraag en eventuele vragen.',
        'We plannen een kennismakingsgesprek met u.',
        'Als er een match is, starten we met de verkenning en afbakening.',
        'U ontvangt een voorstel voor een afgebakend, beheerd team.',
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
      notConfiguredTitle: 'Het formulier is nog niet geactiveerd',
      notConfiguredBody:
        'Dit formulier is compleet, maar er is nog geen e-mail- of CRM-dienst gekoppeld. Wat u invult, wordt niet verstuurd of opgeslagen.',
      notConfiguredResult:
        'Uw gegevens zijn gecontroleerd, maar niet verstuurd omdat de formulierverwerking niet is ingesteld. Er is niets opgeslagen.',
      successTitle: 'Bedankt — uw bericht is verstuurd',
      successBody: 'We bekijken het en nemen contact met u op.',
      errorTitle: 'Uw bericht kon niet worden verstuurd',
      errorBody: 'Er ging aan onze kant iets mis. Probeer het later opnieuw.',
      spamBlocked: 'Uw inzending kon niet worden geaccepteerd. Probeer het opnieuw.',
      honeypot: 'Laat dit veld leeg',
      selectPlaceholder: 'Kies…',
      privacyBefore: 'Ik heb de',
      privacyAfter: 'gelezen en begrijp hoe mijn gegevens worden gebruikt.',
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
        languages: 'Benodigde dienstverleningstalen',
        languagesHint: 'Kies alles wat van toepassing is. De beschikbaarheid wordt tijdens de afbakening bevestigd.',
        otherLanguage: 'Andere taal — graag specificeren',
        otherLanguageHint: 'Verplicht als u “Anders” hebt gekozen.',
        teamSize: 'Indicatieve teamgrootte',
        services: 'Gewenste diensten',
        coverage: 'Gewenste bereikbaarheid of werktijden',
        coverageHint: 'Bijvoorbeeld: werkdagen 08:00–18:00 CET.',
        startDate: 'Indicatieve startdatum',
        startDateHint: 'Bijvoorbeeld: Q2 of “na de zomer”.',
        message: 'Bericht',
        messageHint: 'Beschrijf kort uw cases, klanten of partners, en waar u naar op zoek bent.',
        marketing: 'Optioneel: ik ontvang graag af en toe updates van u per e-mail.',
      },
      languageOptions: {
        dutch: 'Nederlands',
        germanGermany: 'Duits — Duitsland',
        germanSwitzerland: 'Duits — Zwitserland',
        germanAustria: 'Duits — Oostenrijk',
        norwegian: 'Noors',
        english: 'Engels',
        other: 'Anders',
      },
      teamSizeOptions: {
        '3-5': '3–5 personen',
        '6-10': '6–10 personen',
        '11+': '11+ personen',
        unsure: 'Weet ik nog niet',
      },
      serviceOptions: {
        specialist: 'Specialistische / tweedelijns support',
        dealer: 'Dealer- / partnersupport',
        b2b: 'B2B customer operations',
        care: 'Klantenservice',
        backOffice: 'Backofficeondersteuning',
        unsure: 'Weet ik nog niet',
      },
    },
    candidate: {
      fields: {
        fullName: 'Volledige naam',
        email: 'E-mailadres',
        country: 'Huidig woonland',
        languages: 'Talen en niveau',
        languagesHint: 'Bijvoorbeeld: Nederlands – moedertaal, Duits – vloeiend, Engels – vloeiend.',
        experience: 'Relevante ervaring',
        experienceHint: 'Beschrijf kort uw ervaring in klantenservice, casebehandeling of vergelijkbaar werk.',
        profileUrl: 'LinkedIn- of profiel-URL',
        message: 'Bericht',
      },
    },
    errors: {
      required: 'Dit veld is verplicht.',
      email: 'Vul een geldig e-mailadres in, bijvoorbeeld naam@bedrijf.nl.',
      url: 'Vul een geldig webadres in dat begint met http:// of https://.',
      tooLong: 'Deze invoer is te lang.',
      selectOne: 'Kies ten minste één optie.',
      privacy: 'Bevestig dat u de privacyverklaring hebt gelezen.',
    },
  },

  legal: {
    draftNotice:
      'Deze pagina wordt nog beoordeeld door een gekwalificeerd adviseur en kan worden aangepast. Onderdelen die nog moeten worden aangevuld, worden na die beoordeling afgerond. Dit is geen juridisch advies.',
    toComplete: 'Nog aan te vullen',
    toConfirm: 'Te bevestigen vóór de lancering',
    notYetRegistered: 'Nog niet geregistreerd',
    docs: {
      privacy: {
        title: 'Privacyverklaring',
        description: 'Hoe persoonsgegevens die via deze website worden verstrekt, worden verwerkt.',
        sections: [
          {
            heading: 'Wie is verantwoordelijk',
            body: `De verwerkingsverantwoordelijke voor persoonsgegevens die via deze website worden verstrekt, is ${company.legal.dataController} (ondernemingsnummer ${company.legal.belgianEntity.registrationNumber}). In 2026 worden de voorbereidende activiteiten voor Relavique uitgevoerd via deze Belgische vennootschap. Voor vragen of verzoeken over privacy kunt u mailen naar ${company.legal.privacyContact}.`,
          },
          { heading: 'Welke gegevens we verzamelen', body: 'Wanneer u een aanvraag indient, ontvangen we de gegevens die u in het formulier invult, zoals uw naam, zakelijk e-mailadres, bedrijf en bericht.' },
          { heading: 'Waarvoor we ze gebruiken', body: 'We gebruiken de gegevens van uw aanvraag om op uw verzoek te reageren en een mogelijke samenwerking te bespreken. Als u daar apart voor kiest, sturen we u af en toe updates.' },
          { heading: 'Rechtsgrond', body: 'De rechtsgrond voor elk verwerkingsdoel wordt hier na juridische beoordeling vastgelegd.' },
          { heading: 'Wie ze ontvangt', body: 'Formulierinzendingen worden per e-mail verstuurd via Resend, een dienst voor e-mailverzending, en de website wordt gehost door Vercel. Een volledige lijst van verwerkers wordt hier na juridische beoordeling bevestigd.' },
          { heading: 'Hoe lang we ze bewaren', body: 'Bewaartermijnen worden na juridische beoordeling vastgesteld en hier vermeld.' },
          { heading: 'Uw rechten', body: 'Afhankelijk van het toepasselijke recht hebt u mogelijk het recht op inzage, correctie, verwijdering of beperking van het gebruik van uw gegevens, en het recht om een klacht in te dienen bij een toezichthouder (in België de Gegevensbeschermingsautoriteit). Om uw rechten uit te oefenen, mailt u naar privacy@relavique.com.' },
        ],
      },
      'recruitment-privacy': {
        title: 'Privacyverklaring werving',
        description: 'Hoe persoonsgegevens van mensen die bij ons willen werken, worden verwerkt.',
        sections: [
          {
            heading: 'Wie is verantwoordelijk',
            body: `De verwerkingsverantwoordelijke voor gegevens van kandidaten is ${company.legal.dataController} (ondernemingsnummer ${company.legal.belgianEntity.registrationNumber}). In 2026 wordt de voorbereiding van de werving voor Relavique uitgevoerd via deze Belgische vennootschap. Voor vragen of verzoeken over privacy kunt u mailen naar ${company.legal.privacyContact}.`,
          },
          { heading: 'Doel', body: 'We gebruiken de gegevens die u verstrekt om te beoordelen of u geschikt kunt zijn voor huidige of toekomstige functies binnen klantprojecten.' },
          { heading: 'Welke gegevens we verzamelen', body: 'Uw naam, e-mailadres, woonland, talen, ervaring, optionele profiellink en bericht. In deze fase vragen we niet om een cv of gevoelige persoonsgegevens.' },
          { heading: 'Rechtsgrond', body: 'De rechtsgrond voor de verwerking bij werving wordt hier na juridische beoordeling vastgelegd.' },
          { heading: 'Bewaartermijn', body: 'Hoe lang interesseaanmeldingen worden bewaard, en hoe u om verwijdering kunt vragen, wordt hier na juridische beoordeling vermeld.' },
          { heading: 'Uw rechten', body: 'Afhankelijk van het toepasselijke recht kunt u uw gegevens inzien, corrigeren of laten verwijderen en een klacht indienen bij een toezichthouder (in België de Gegevensbeschermingsautoriteit). Om uw rechten uit te oefenen, mailt u naar privacy@relavique.com.' },
        ],
      },
      cookies: {
        title: 'Cookie-informatie',
        description: 'Informatie over cookies die op deze website worden gebruikt.',
        sections: [
          { heading: 'Huidig gebruik', body: 'Deze website gebruikt geen analytische, advertentie- of trackingcookies. Er wordt één functionele cookie geplaatst om de door u gekozen websitetaal te onthouden.' },
          { heading: 'Cookie voor taalvoorkeur', body: 'Naam: NEXT_LOCALE. Doel: onthoudt de door u gekozen websitetaal. Looptijd: één jaar. De cookie wordt alleen geplaatst wanneer u een taal kiest.' },
          { heading: 'Toekomstige wijzigingen', body: 'Als er in de toekomst analytische of andere niet-noodzakelijke cookies worden toegevoegd, wordt deze pagina bijgewerkt en vragen we vooraf om toestemming.' },
        ],
      },
      company: {
        title: 'Juridische & bedrijfsinformatie',
        description: 'Bedrijfsstatus en juridische gegevens.',
        sections: [],
      },
    },
    companyStatus: {
      title: 'Bedrijfsstatus',
      body: 'Relavique is een merk dat wordt ontwikkeld voor een specialistisch customer-operationsbedrijf in Griekenland. In 2026 worden de voorbereidende activiteiten uitgevoerd via de Belgische vennootschap van de oprichter. Er wordt een Griekse besloten vennootschap (IKE) opgericht die naar verwachting op 1 januari 2027 operationeel wordt, onder voorbehoud van de afronding van de oprichting en de operationele voorbereidingen. Deze datum is een voornemen, geen toezegging. Overeenkomsten, persoonsgegevens en verplichtingen gaan op die datum niet automatisch over; een wijziging van de verantwoordelijke entiteit wordt op deze pagina vermeld.',
      brandNote: '“Relavique” is een merknaam, niet de geregistreerde juridische naam van een van beide vennootschappen.',
    },
    belgianEntityTitle: 'Belgische vennootschap (voorbereidende activiteiten, 2026)',
    greekEntityTitle: 'Griekse besloten vennootschap (IKE) — in oprichting',
    companyFields: {
      brand: 'Merk',
      legalName: 'Naam van de rechtspersoon',
      legalForm: 'Rechtsvorm',
      registrationNumber: 'Ondernemings- / registratienummer',
      vatNumber: 'Btw-nummer',
      taxNumber: 'Fiscale registratie',
      registeredAddress: 'Statutair adres',
      transitionDate: 'Beoogde operationele datum',
      dataController: 'Verwerkingsverantwoordelijke voor deze website',
      privacyContact: 'Contact voor privacy',
      email: 'E-mail',
      phone: 'Telefoon',
    },
  },

  notFound: {
    title: 'Pagina niet gevonden',
    body: 'De pagina die u zoekt bestaat niet of is verplaatst.',
  },
}
