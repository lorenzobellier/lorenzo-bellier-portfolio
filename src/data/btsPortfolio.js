// Dossier BTS SIO : ne remplace pas les pièces officielles.
// Les éléments « À joindre » doivent être remplacés par les preuves réelles avant l'épreuve.
export const BTS_IDENTITY = {
  name: "Lorenzo Bellier",
  option: "BTS SIO - option SISR",
  school: "My Digital School, Paris",
  session: "À renseigner",
};

export const BTS_SITUATIONS = [
  {
    id: "support",
    title: "Application de support interne - VANDJI CONSULTING",
    period: "Mai à août 2026",
    context: "Stage : conception et développement d'une application web de support interne de type catalogue de services et tickets.",
    role: "À préciser : vos responsabilités exactes, les décisions prises seul et les éléments réalisés en équipe.",
    need: "Centraliser les demandes, suivre leur traitement et proposer une base de connaissances aux utilisateurs.",
    results: "Application Laravel avec authentification multi-rôles, tickets, catalogue de services, base de connaissances et tableau de bord.",
    skills: ["B1 - Répondre aux incidents et demandes", "B1 - Mettre à disposition un service", "B1 - Travailler en mode projet", "B3 - Garantir confidentialité, intégrité et disponibilité"],
    evidence: ["À joindre : attestation de stage", "À joindre : cahier des charges ou expression du besoin", "À joindre : modèle de données et captures légendées", "À joindre : tests, procédure de recette et extrait Git", "À joindre : documentation utilisateur et technique"],
  },
  {
    id: "hotel-les-cedres",
    title: "Conception et sécurisation de l'infrastructure réseau de l'Hôtel Les Cèdres",
    period: "1re année BTS SIO - date à préciser",
    context: "Projet de synthèse réalisé sur Cisco Packet Tracer pour l'Hôtel Les Cèdres, composé de deux bâtiments à interconnecter et sécuriser.",
    role: "Conception et déploiement de la maquette réseau, configuration des équipements Cisco et réalisation des tests de validation.",
    need: "Segmenter les services de l'hôtel, assurer le routage contrôlé entre les VLAN, maintenir la connectivité WAN et limiter les accès non autorisés.",
    results: "Infrastructure de 9 VLAN, routage inter-VLAN sur switch L3, EtherChannel LACP, ACL de filtrage, port security et administration SSH limitée au réseau technique. Les tests de connectivité et d'isolation sont consignés dans le compte-rendu.",
    skills: ["B2 SISR - Concevoir une solution d'infrastructure", "B2 SISR - Installer, tester et déployer", "B2 SISR - Exploiter, dépanner et superviser", "B3 - Assurer la cybersécurité de sa spécialité"],
    evidence: ["Compte_Rendu_Hotel_Les_Cedres.pdf", "HOTEL_BellierLorenzo_FINAL.pkt", "PROJET_Hotel_Sujet.pdf", "À ajouter : captures personnelles de la maquette et des tests"],
  },
];

export const BTS_CHECKLIST = [
  ["Tableau de synthèse officiel, une ligne par situation", "À faire"],
  ["Attestations de stage / certificats de travail (10 semaines au total)", "À joindre"],
  ["Attestation de réalité des activités, signée", "À joindre"],
  ["CV à jour", "À joindre"],
  ["Correspondance situations ↔ compétences des blocs 1, 2 et 3", "En cours"],
  ["Deux réalisations SISR démontrables hors réseau de l'établissement", "À préparer"],
  ["Copie hors-ligne testée (PDF ou clé USB)", "À préparer"],
];
