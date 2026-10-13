import type { StaticImageData } from 'next/image'
import agentHeadset from '@/public/images/agent-headset.jpg'
import athensAcropolis from '@/public/images/athens-acropolis.jpg'
import athensStreet from '@/public/images/athens-street.jpg'
import athensView from '@/public/images/athens-view.jpg'
import backofficeDesk from '@/public/images/backoffice-desk.jpg'
import conferenceThree from '@/public/images/conference-three.jpg'
import headsetLaptop from '@/public/images/headset-laptop.jpg'
import laptopWork from '@/public/images/laptop-work.jpg'
import opsComputers from '@/public/images/ops-computers.jpg'
import pairTable from '@/public/images/pair-table.jpg'

/**
 * Image manifest. All photographs are free images from Unsplash, served from images.unsplash.com
 * (not Unsplash+), downloaded at 1800px wide and stored locally in /public/images.
 * Licence: Unsplash License (https://unsplash.com/license) — free commercial use, no attribution
 * required. Re-confirm each source page before launch, as licence terms can change.
 *
 * Subjects are stock models and locations. They are not our employees, clients or offices,
 * and alt text is written to describe the scene rather than imply otherwise.
 * Alt text lives in the translation files under `images`.
 */
export type ImageKey =
  | 'hero'
  | 'dedicated'
  | 'customerCare'
  | 'specialist'
  | 'backOffice'
  | 'howItWorks'
  | 'markets'
  | 'athensView'
  | 'athensAcropolis'
  | 'athensStreet'

export type ManifestEntry = {
  image: StaticImageData
  localPath: string
  sourcePage: string
  photographer: string
  photographerProfile: string
  licence: string
  placement: string
}

const UNSPLASH_LICENCE = 'Unsplash License (free commercial use) — https://unsplash.com/license'

export const imageManifest: Record<ImageKey, ManifestEntry> = {
  hero: {
    image: pairTable,
    localPath: '/images/pair-table.jpg',
    sourcePage: 'https://unsplash.com/photos/man-and-woman-sitting-at-the-table-wR56AUlEsE4',
    photographer: 'Andreea Avramescu',
    photographerProfile: 'https://unsplash.com/@minakko',
    licence: UNSPLASH_LICENCE,
    placement: 'Home hero',
  },
  dedicated: {
    image: backofficeDesk,
    localPath: '/images/backoffice-desk.jpg',
    sourcePage: 'https://unsplash.com/photos/man-sitting-in-front-of-table-Kz8nHVg_tGI',
    photographer: 'Arlington Research',
    photographerProfile: 'https://unsplash.com/@arlington_research',
    licence: UNSPLASH_LICENCE,
    placement: 'Home — "Dedicated to you, supported by us"',
  },
  customerCare: {
    image: agentHeadset,
    localPath: '/images/agent-headset.jpg',
    sourcePage: 'https://unsplash.com/photos/a-smiling-woman-wearing-a-headset-at-a-computer-wnpf3Q5pkXA',
    photographer: 'BaljkanN 4',
    photographerProfile: 'https://unsplash.com/@baljkann4',
    licence: UNSPLASH_LICENCE,
    placement: 'Service — Dedicated customer care; Careers',
  },
  specialist: {
    image: laptopWork,
    localPath: '/images/laptop-work.jpg',
    sourcePage:
      'https://unsplash.com/photos/man-in-red-and-black-crew-neck-t-shirt-using-silver-macbook-wrdvOKfgzRo',
    photographer: 'airfocus',
    photographerProfile: 'https://unsplash.com/@airfocus',
    licence: UNSPLASH_LICENCE,
    placement: 'Service — Specialist support teams',
  },
  backOffice: {
    image: opsComputers,
    localPath: '/images/ops-computers.jpg',
    sourcePage: 'https://unsplash.com/photos/unknown-persons-using-computer-indoors-nFLmPAf9dVc',
    photographer: 'Arlington Research',
    photographerProfile: 'https://unsplash.com/@arlington_research',
    licence: UNSPLASH_LICENCE,
    placement: 'Service — Customer operations & back office',
  },
  howItWorks: {
    image: conferenceThree,
    localPath: '/images/conference-three.jpg',
    sourcePage: 'https://unsplash.com/photos/three-people-are-meeting-in-a-conference-room-bTkjP6aBmL0',
    photographer: 'TECNIC Bioprocess Solutions',
    photographerProfile: 'https://unsplash.com/@tecnic',
    licence: UNSPLASH_LICENCE,
    placement: 'How it works; Services overview',
  },
  markets: {
    image: headsetLaptop,
    localPath: '/images/headset-laptop.jpg',
    sourcePage: 'https://unsplash.com/photos/black-and-brown-headset-near-laptop-computer-BeVGrXEktIk',
    photographer: 'Petr Macháček',
    photographerProfile: 'https://unsplash.com/@machec',
    licence: UNSPLASH_LICENCE,
    placement: 'Markets & languages; Contact',
  },
  athensView: {
    image: athensView,
    localPath: '/images/athens-view.jpg',
    sourcePage: 'https://unsplash.com/photos/a-view-of-a-city-from-a-high-point-of-view-UHcnIzIFZw8',
    photographer: 'Rafael Hoyos Weht',
    photographerProfile: 'https://unsplash.com/@rhweht',
    licence: UNSPLASH_LICENCE,
    placement: 'Home — Greece-based delivery model',
  },
  athensAcropolis: {
    image: athensAcropolis,
    localPath: '/images/athens-acropolis.jpg',
    sourcePage: 'https://unsplash.com/photos/acropolis-of-athens-at-golden-hour-yqBvJJ8jGBQ',
    photographer: 'Constantinos Kollias',
    photographerProfile: 'https://unsplash.com/@ckollias',
    licence: UNSPLASH_LICENCE,
    placement: 'About — hero',
  },
  athensStreet: {
    image: athensStreet,
    localPath: '/images/athens-street.jpg',
    sourcePage: 'https://unsplash.com/photos/people-walking-on-street-near-building-during-daytime-qGtpTQrN7VU',
    photographer: 'Despina Galani',
    photographerProfile: 'https://unsplash.com/@despinagalani',
    licence: UNSPLASH_LICENCE,
    placement: 'About — Greece section; Careers',
  },
}
