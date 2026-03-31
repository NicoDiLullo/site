export interface Publication {
  id: string
  title: string
  citation: string
  contribution: string
  abstract: string
  fullText: string
  link: string | null
}

export const publications: Publication[] = [
  {
    id: 'mushtukov-2024',
    title: 'Magnetospheric Flows in X-ray Pulsars',
    citation:
      'Mushtukov, A. A., Ingram, A., Suleimanov, V. F., DiLullo, N., Middleton, M., Tsygankov, S. S., ... & Portegies Zwart, S. (2024). Magnetospheric flows in X-ray pulsars–I. Instability at super-Eddington regime of accretion. Monthly Notices of the Royal Astronomical Society, 530(1), 730-742.',
    contribution:
      'Responsible for code simulating gravitational attraction and centrifugal force. Also helped write and edit various sections.',
    abstract: 'TODO: paste abstract here.',
    fullText: 'TODO: paste or link to full paper text here.',
    link: null,
  },
  {
    id: 'wang-2024',
    title: 'Flight of the Bumblebee: SN 2023bee',
    citation:
      'Wang, Qinan, et al. "Flight of the Bumblebee: the Early Excess Flux of Type Ia Supernova 2023bee Revealed by TESS, Swift, and Young Supernova Experiment Observations." The Astrophysical Journal 962.1 (2024): 17.',
    contribution:
      "Data gathering and processing with our (the Thacher School Astronomy Program's) 0.7 meter robotic observatory and proprietary reduction pipeline. Also helped write and edit various sections.",
    abstract: 'TODO: paste abstract here.',
    fullText: 'TODO: paste or link to full paper text here.',
    link: null,
  },
  {
    id: 'singh-2023',
    title: 'SN 2018cni & SN 2020kyg: Type Iax Supernovae',
    citation:
      'Singh, Mridweeka, et al. "Observational Properties of a Bright Type lax SN 2018cni and a Faint Type Iax SN 2020kyg." The Astrophysical Journal 953.1 (2023): 93.',
    contribution:
      "Data gathering and processing with our (the Thacher School Astronomy Program's) 0.7 meter robotic observatory and proprietary reduction pipeline. Also helped write and edit various sections.",
    abstract: 'TODO: paste abstract here.',
    fullText: 'TODO: paste or link to full paper text here.',
    link: null,
  },
  {
    id: 'zhou-2023',
    title: 'When Opportunity Knocks: Thacher Supernova Search',
    citation:
      'Zhou, H., DiLullo, N., Scheer, J., Yang, G., Swift, J., Foley, R., & Coulter, D. (2023). When Opportunity Knocks: Latest Results from the Thacher Supernova Search and Followup Program. Bulletin of the AAS, 55(6).',
    contribution:
      'Abstract submitted to the American Astronomical Society for my group\'s presentation at AAS 242. I worked on our proprietary data reduction pipeline, and built the first version of an image classifier for the UCSC/Thacher joint supernova search project.',
    abstract: 'We present the latest results from the Thacher Supernova Search and Follow-up Program, including new nightly-sampled, multi-band light curves and analyses aimed at better understanding the progenitor objects and their environments. These new data and techniques are explored in the context of recent supernovae with high scientific value that we have been studying in collaboration with the Young Supernova Experiment. Additionally, we present progress on our supernova search program that includes an improved observational strategy, difference imaging techniques, and automated transient candidate identification.',
    fullText: 'Presentation; no text',
    link: 'https://baas.aas.org/pub/2023n6i208p01',
  },
]
