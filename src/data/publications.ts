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
    title: 'Flight of the Bumblebee: the Early Excess Flux of Type Ia Supernova 2023bee revealed by TESS, Swift and Young Supernova Experiment Observations',
    citation:
      'Wang, Qinan, et al. "Flight of the Bumblebee: the Early Excess Flux of Type Ia Supernova 2023bee Revealed by TESS, Swift, and Young Supernova Experiment Observations." The Astrophysical Journal 962.1 (2024): 17.',
    contribution:
      "Data gathering and processing with our (the Thacher School Astronomy Program's) 0.7 meter robotic observatory and proprietary reduction pipeline. Also helped write and edit various sections.",
    abstract: 'We present high-cadence ultraviolet through near-infrared observations of the Type Ia supernova (SN Ia) 2023bee in NGC~2708 (D=32±3 Mpc), finding excess flux in the first days after explosion relative to the expected power-law rise from an expanding fireball. This deviation from typical behavior for SNe Ia is particularly obvious in our 10-minute cadence TESS light curve and Swift UV data. Compared to a few other normal SNe Ia with detected early excess flux, the excess flux in SN 2023bee is redder in the UV and less luminous. We present optical spectra of SN 2023bee, including two spectra during the period where the flux excess is dominant. At this time, the spectra are similar to those of other SNe Ia but with weaker Si II, C II and Ca II absorption lines, perhaps because the excess flux creates a stronger continuum. We compare the data to several theoretical models that have been proposed to explain the early flux excess in SNe Ia. Interaction with either a nearby companion star or close-in circumstellar material is expected to produce a faster evolution than seen in the data. Radioactive material in the outer layers of the ejecta, either from a double detonation explosion or simply an explosion with a 56Ni clump near the surface, can not fully reproduce the evolution either, likely due to the sensitivity of early UV observable to the treatment of the outer part of ejecta in simulation. We conclude that no current model can adequately explain the full set of observations. We find that a relatively large fraction of nearby, bright SNe Ia with high-cadence observations have some amount of excess flux within a few days of explosion. Considering potential asymmetric emission, the physical cause of this excess flux may be ubiquitous in normal SNe Ia.',
    fullText: 'Viewable at the provided link',
    link: 'https://arxiv.org/abs/2305.03779',
  },
  {
    id: 'singh-2023',
    title: 'Observational Properties of a Bright Type lax SN 2018cni and a Faint Type Iax SN 2020kyg',
    citation:
      'Singh, Mridweeka, et al. "Observational Properties of a Bright Type lax SN 2018cni and a Faint Type Iax SN 2020kyg." The Astrophysical Journal 953.1 (2023): 93.',
    contribution:
      "Data gathering and processing with our (the Thacher School Astronomy Program's) 0.7 meter robotic observatory and proprietary reduction pipeline. Also helped write and edit various sections.",
    abstract: 'We present the optical photometric and spectroscopic analysis of two Type Iax supernovae (SNe), 2018cni and 2020kyg. SN 2018cni is a bright Type Iax SN (MV,peak = −17.81 ± 0.21 mag), whereas SN 2020kyg (MV,peak = −14.52 ± 0.21 mag) is a faint one. We derive 56Ni mass of 0.07 and 0.002 M⊙ and ejecta mass of 0.48 and 0.14 M⊙ for SNe 2018cni and 2020kyg, respectively. A combined study of the bright and faint Type Iax SNe in R/r-band reveals that the brighter objects tend to have a longer rise time. However, the correlation between the peak luminosity and decline rate shows that bright and faint Type Iax SNe exhibit distinct behavior. Comparison with standard deflagration models suggests that SN 2018cni is consistent with the deflagration of a CO white dwarf, whereas the properties of SN 2020kyg can be better explained by the deflagration of a hybrid CONe white dwarf. The spectral features of both the SNe point to the presence of similar chemical species but with different mass fractions. Our spectral modeling indicates stratification at the outer layers and mixed inner ejecta for both of the SNe.',
    fullText: 'Viewable at the provided link',
    link: 'https://iopscience.iop.org/article/10.3847/1538-4357/acd559',
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
