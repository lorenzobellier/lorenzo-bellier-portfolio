export const SHELVES = [
  {
    floor: "1er Étage", floorJP: "一階",
    category: "Développement Web", icon: "⚙️", color: "#FF6B9D",
    scrolls: [
      { id:"html",   name:"HTML5",      icon:"📄", level:75, levelName:"Chūnin", desc:"Structure sémantique, balises, formulaires, accessibilité de base. Utilisé sur plusieurs projets perso et scolaires.", tags:["Sémantique","Forms","SEO base"], color:"#FF6B4A" },
      { id:"css",    name:"CSS3",        icon:"🎨", level:60, levelName:"Chūnin", desc:"Flexbox, Grid, animations CSS, responsive design. Style de plusieurs pages et projets GitHub.", tags:["Flexbox","Grid","Animations"], color:"#FF6B9D" },
      { id:"js",     name:"JavaScript",  icon:"⚡", level:25, levelName:"Académie",  desc:"Bases du DOM, événements, fetch API, logique algorithmique simple. En progression active.", tags:["DOM","Events","Fetch"], color:"#FFD700" },
      { id:"python", name:"Python",      icon:"🐍", level:10, levelName:"Novice",  desc:"Scripts simples, automatisation, bases de la programmation. Utilisé en cours et pour des scripts IA.", tags:["Scripts","Automatisation","IA"], color:"#B04AFF" },
    ],
  },
  {
    floor: "2ème Étage", floorJP: "二階",
    category: "Cybersécurité & Réseau", icon: "🛡️", color: "#00E5FF",
    scrolls: [
      { id:"linux", name:"Linux",          icon:"🐧", level:25, levelName:"Académie",   desc:"Administration système, commandes shell, gestion des permissions et utilisateurs. Projet GitHub dédié.", tags:["Shell","Permissions","Users"], color:"#00E5FF" },
      { id:"bash",  name:"Bash",            icon:"💻", level:10, levelName:"Novice",    desc:"Scripts d'automatisation, monitoring, backups. Apprentissage par la pratique sur projets GitHub.", tags:["Scripting","Monitoring","Cron"], color:"#00FFB3" },
      { id:"cisco", name:"Cisco / Réseau",  icon:"🌐", level:10, levelName:"Académie", desc:"Simulations réseau sur Cisco Packet Tracer, cours TCP/IP, VLAN, routage de base.", tags:["Packet Tracer","TCP/IP","VLAN"], color:"#0091EA" },
      { id:"vm",    name:"Virtualisation",  icon:"📦", level:20, levelName:"Novice",   desc:"Utilisation de VMs (VirtualBox / VMware), création d'environnements de test isolés.", tags:["VirtualBox","VMware","Sandbox"], color:"#FF69B4" },
      { id:"secu",  name:"Cybersécurité",   icon:"🔐", level:5, levelName:"Novice",   desc:"Bases de la sécurité offensive et défensive, OWASP, simulation d'incidents.", tags:["OWASP","Blue Team","Red Team"], color:"#B04AFF" },
    ],
  },
  {
    floor: "3ème Étage", floorJP: "三階",
    category: "Langues & Culture", icon: "🌏", color: "#FFD700",
    scrolls: [
      { id:"fr", name:"Français", icon:"🇫🇷", level:100, levelName:"Maître", desc:"Langue maternelle. Expression écrite et orale fluide.", tags:["Natif","C2"], color:"#4A90E2" },
      { id:"en", name:"Anglais",  icon:"🇬🇧", level:65,  levelName:"Chūnin", desc:"Bon niveau à l'écrit et en lecture technique. Prononciation orale à améliorer. Contenu consommé quotidiennement en VO.", tags:["Écrit B2","Technique","VO"], color:"#FF6B4A" },
      { id:"jp", name:"Japonais", icon:"🇯🇵", level:5,  levelName:"Novice", desc:"Objectif principal. Apprentissage des hiragana/katakana en cours. Immersion via anime VO, mangas, drama.", tags:["Hiragana","Katakana","En cours"], color:"#FF6B9D" },
      { id:"kr", name:"Coréen",   icon:"🇰🇷", level:2,   levelName:"Novice", desc:"Objectif futur. Bases de l'alphabet hangeul. Immersion passive via K-pop et K-drama.", tags:["Hangeul","Passif"], color:"#00E5FF" },
      { id:"zh", name:"Chinois",  icon:"🇨🇳", level:2,   levelName:"Novice", desc:"Objectif futur. Quelques caractères appris via manhua et donghua. Curiosité culturelle forte.", tags:["Hanzi","Passif"], color:"#FFD700" },
    ],
  },
];
