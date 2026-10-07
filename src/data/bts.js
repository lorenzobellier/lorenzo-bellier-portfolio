// Présentation générale du diplôme BTS SIO (contenu factuel, indépendant du parcours personnel).

export const BTS_OVERVIEW = {
  title: "BTS Services Informatiques aux Organisations",
  acronym: "BTS SIO",
  level: "Bac +2 · Niveau 5 (RNCP)",
  duration: "2 ans (ou 12 à 16 mois en rythme accéléré selon les établissements)",
  rncp: "RNCP 40792 (option SISR) · RNCP 35340 (option SLAM)",
  desc: "Diplôme national reconnu par l'État, préparant aux métiers du support, de l'administration systèmes et réseaux ou du développement d'applications. Peut se préparer en formation initiale, en alternance ou en contrat de professionnalisation.",
};

export const BTS_OPTIONS = [
  {
    code: "SISR",
    name: "Solutions d'Infrastructure, Systèmes et Réseaux",
    desc: "Installer, configurer, sécuriser et administrer un parc informatique en réseau : serveurs, postes de travail, équipements réseau, virtualisation, cybersécurité des infrastructures.",
    metiers: ["Administrateur systèmes et réseaux", "Technicien support N2/N3", "Technicien cybersécurité", "Alternant infrastructure"],
    current: true,
  },
  {
    code: "SLAM",
    name: "Solutions Logicielles et Applications Métiers",
    desc: "Concevoir, développer et maintenir des applications et des bases de données répondant aux besoins métier d'une organisation, du cahier des charges à la mise en production.",
    metiers: ["Développeur web / mobile", "Développeur full-stack", "Concepteur de bases de données"],
    current: false,
  },
];

// 3 blocs de compétences du référentiel (2 communs aux deux options, 1 spécifique)
export const BTS_BLOCKS = [
  {
    id: "bloc1",
    title: "Bloc 1 — Support et mise à disposition de services informatiques",
    common: true,
    desc: "Répondre aux besoins des utilisateurs, assurer la disponibilité des services existants, gérer le patrimoine informatique et accompagner la transformation numérique de l'organisation.",
  },
  {
    id: "bloc2-sisr",
    title: "Bloc 2 (SISR) — Administration des systèmes et des réseaux",
    common: false,
    desc: "Concevoir, déployer, exploiter et dépanner une infrastructure réseau et système : serveurs, VLAN, routage, virtualisation, supervision.",
  },
  {
    id: "bloc2-slam",
    title: "Bloc 2 (SLAM) — Conception et développement d'applications",
    common: false,
    desc: "Concevoir, développer, tester et maintenir une solution applicative, gérer les données associées.",
  },
  {
    id: "bloc3",
    title: "Bloc 3 — Cybersécurité des services informatiques",
    common: true,
    desc: "Protéger les données, les équipements et les usages des utilisateurs ; garantir la confidentialité, l'intégrité et la disponibilité des services.",
  },
];

// Épreuves officielles de l'examen (référentiel en vigueur)
export const BTS_EXAMS = [
  { code: "E1", title: "Culture générale et expression", coeff: 2, duree: "4h", forme: "Écrite ponctuelle" },
  { code: "E2", title: "Expression et communication en langue anglaise", coeff: 2, duree: "2h + 20 min", forme: "Écrite et orale" },
  { code: "E3", title: "Mathématiques pour l'informatique", coeff: 3, duree: "2h", forme: "Écrite ponctuelle" },
  { code: "E4", title: "Culture économique, juridique et managériale pour l'informatique", coeff: 3, duree: "4h", forme: "Écrite ponctuelle" },
  { code: "E5", title: "Support et mise à disposition de services informatiques", coeff: 4, duree: "40 min", forme: "Orale ponctuelle", highlight: true },
  { code: "E6", title: "Administration des systèmes et réseaux (SISR) / Conception et développement d'applications (SLAM)", coeff: 4, duree: "40 min + 1h30 de préparation", forme: "Pratique et orale", highlight: true },
  { code: "E7", title: "Cybersécurité des services informatiques", coeff: 4, duree: "4h", forme: "Écrite ponctuelle" },
];

export const BTS_TRAINING = {
  school: "My Digital School, Paris",
  option: "SISR",
  period: "2025 – 2027",
  rhythm: "1 semaine / 1 semaine en alternance (en recherche active d'entreprise d'accueil)",
};
