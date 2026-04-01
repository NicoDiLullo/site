export interface Dataset {
  id: string
  shortTitle: string
  title: string
  authors: string
  date: string
  description: string
  fileSize: string
  link: string
}

export const datasets: Dataset[] = [
  {
    id: 'qg-jets-float32',
    shortTitle: 'Q&G Jets (float32)',
    title: 'Pythia8 Quark and Gluon Jets (float32)',
    authors: 'Nicholas DiLullo, Matt LeBlanc',
    date: 'April 2026',
    description:
      'Single-precision quark and gluon jet simulation data. 20 compressed NumPy files with 100,000 jets per file (50,000 quark and 50,000 gluon). Simulated using Pythia 8.226 at √s = 14 TeV with anti-kₜ clustering (R = 0.4, FastJet 3.3.0). Each jet includes four particle features: transverse momentum, rapidity, azimuthal angle, and particle ID. Transverse momentum range: 500–550 GeV, |y| < 1.7.',
    fileSize: '1.1 GB',
    link: 'https://zenodo.org/records/19362155',
  },
  {
    id: 'qg-jets-float16',
    shortTitle: 'Q&G Jets (float16)',
    title: 'Pythia8 Quark and Gluon Jets (float16)',
    authors: 'Nicholas DiLullo, Matt LeBlanc',
    date: 'April 2026',
    description:
      'Half-precision quark and gluon jet simulation data. 20 compressed NumPy files with 100,000 jets per file (50,000 quark and 50,000 gluon). Converted from float64 to float16, reducing file sizes by approximately half relative to float32. Simulated using Pythia 8.226 at √s = 14 TeV with anti-kₜ clustering (R = 0.4). Transverse momentum range: 500–550 GeV.',
    fileSize: '577 MB',
    link: 'https://zenodo.org/records/19362553',
  },
  {
    id: 'qg-jets-float8',
    shortTitle: 'Q&G Jets (float8)',
    title: 'Pythia8 Quark and Gluon Jets (float8 e4m3FN)',
    authors: 'Nicholas DiLullo, Matt LeBlanc',
    date: 'April 2026',
    description:
      'Float8 (e4m3FN) quantized quark and gluon jet simulation data. 20 compressed NumPy files with 100,000 jets per file (50,000 quark and 50,000 gluon). Generated using Pythia 8.226 at √s = 14 TeV with anti-kₜ clustering (R = 0.4). Represents the most aggressively compressed precision variant in this series, targeting neural network inference use cases.',
    fileSize: '418 MB',
    link: 'https://zenodo.org/records/19362689',
  },
]
