const publications = [
  {
    citation:
      'Mushtukov, A. A., Ingram, A., Suleimanov, V. F., DiLullo, N., Middleton, M., Tsygankov, S. S., ... & Portegies Zwart, S. (2024). Magnetospheric flows in X-ray pulsars–I. Instability at super-Eddington regime of accretion. Monthly Notices of the Royal Astronomical Society, 530(1), 730-742.',
    role: 'Responsible for code simulating gravitational attraction and centrifugal force. Also helped write and edit various sections.',
    link: null,
  },
  {
    citation:
      'Wang, Qinan, et al. "Flight of the Bumblebee: the Early Excess Flux of Type Ia Supernova 2023bee Revealed by TESS, Swift, and Young Supernova Experiment Observations." The Astrophysical Journal 962.1 (2024): 17.',
    role: "Data gathering and processing with our (the Thacher School Astronomy Program's) 0.7 meter robotic observatory and proprietary reduction pipeline. Also helped write and edit various sections.",
    link: null,
  },
  {
    citation:
      'Singh, Mridweeka, et al. "Observational Properties of a Bright Type lax SN 2018cni and a Faint Type Iax SN 2020kyg." The Astrophysical Journal 953.1 (2023): 93.',
    role: "Data gathering and processing with our (the Thacher School Astronomy Program's) 0.7 meter robotic observatory and proprietary reduction pipeline. Also helped write and edit various sections.",
    link: null,
  },
  {
    citation:
      'Zhou, H., DiLullo, N., Scheer, J., Yang, G., Swift, J., Foley, R., & Coulter, D. (2023). When Opportunity Knocks: Latest Results from the Thacher Supernova Search and Followup Program. Bulletin of the AAS, 55(6).',
    role: "Abstract submitted to the American Astronomical Society for my group's presentation at AAS 242. I worked on our proprietary data reduction pipeline, and built the first version of an image classifier for the UCSC/Thacher joint supernova search project.",
    link: 'https://baas.aas.org/pub/2023n6i208p01',
  },
]

export function AstroView() {
  return (
    <div className="view-content">
      <h2>Astronomy & Astrophysics Publications</h2>
      <p className="view-subtitle">
        A full formatted list with working links is available{' '}
        <a
          href="https://docs.google.com/document/d/1PLK9VTKgtluENDqd0KV_402BAaDs-SGyXhBGcDgCbmw/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <div className="publications-list">
        {publications.map((pub, i) => (
          <div key={i} className="publication-card">
            <p className="citation">
              {pub.link ? (
                <a href={pub.link} target="_blank" rel="noreferrer">
                  {pub.citation}
                </a>
              ) : (
                pub.citation
              )}
            </p>
            <p className="contribution">{pub.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
