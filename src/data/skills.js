export const SHELVES = [
  {
    floor: "1er Étage", floorJP: "一階",
    category: "Développement Web", icon: "⚙️", color: "#FF6B9D",
    scrolls: [
      { id:"html",   name:"HTML5",      icon:"📄", levelName:"Intermédiaire", levelColor:"#FFD700", desc:"Structure sémantique, balises, formulaires, accessibilité de base.", tags:["Sémantique","Forms","SEO"], color:"#FF6B4A" },
      { id:"css",    name:"CSS3",        icon:"🎨", levelName:"Intermédiaire", levelColor:"#FFD700", desc:"Flexbox, Grid, animations CSS, responsive design.", tags:["Flexbox","Grid","Animations"], color:"#FF6B9D" },
      { id:"js",     name:"JavaScript",  icon:"⚡", levelName:"Notions",       levelColor:"#FF6B9D", desc:"Bases du DOM, événements, fetch API. En progression active.", tags:["DOM","Events","Fetch"], color:"#FFD700" },
      { id:"php",    name:"PHP",         icon:"🐘", levelName:"Notions",       levelColor:"#FF6B9D", desc:"Utilisé via Laravel en stage. Logique serveur, routes, Blade.", tags:["Laravel","Backend","Stage"], color:"#8892BF" },
      { id:"python", name:"Python",      icon:"🐍", levelName:"Notions",       levelColor:"#FF6B9D", desc:"Scripts simples, automatisation, bases de la programmation.", tags:["Scripts","Automatisation"], color:"#B04AFF" },
      { id:"laravel",name:"Laravel 11",  icon:"🔴", levelName:"Intermédiaire", levelColor:"#FFD700", desc:"Framework PHP utilisé en stage. Blade, Eloquent ORM, middlewares, multi-tenant.", tags:["PHP","MVC","Eloquent","Stage"], color:"#FF4444" },
      { id:"mysql",  name:"MySQL",       icon:"🗄️", levelName:"Intermédiaire", levelColor:"#FFD700", desc:"BDD relationnelle utilisée en stage. Modélisation (9 tables), SQL, migrations.", tags:["SQL","BDD","Migrations"], color:"#00AAFF" },
    ],
  },
  {
    floor: "2ème Étage", floorJP: "二階",
    category: "Systèmes & Réseau", icon: "🛡️", color: "#00E5FF",
    scrolls: [
      { id:"linux",   name:"Linux",          icon:"🐧", levelName:"Notions", levelColor:"#FF6B9D", desc:"Administration système Linux (Debian/Ubuntu), shell, permissions, utilisateurs. Projet GitHub + stage.", tags:["Shell","Debian","Ubuntu"], color:"#00E5FF" },
      { id:"windows", name:"Windows Server", icon:"🪟", levelName:"Notions", levelColor:"#FF6B9D", desc:"Installation, gestion des utilisateurs et des services. Vu en cours BTS SIO.", tags:["WinServer","AD","Services"], color:"#00AAFF" },
      { id:"bash",    name:"Bash",            icon:"💻", levelName:"Notions", levelColor:"#FF6B9D", desc:"Scripts d'automatisation, monitoring, backups. Projets GitHub.", tags:["Scripting","Monitoring","Cron"], color:"#00FFB3" },
      { id:"vbox",    name:"Virtualisation",  icon:"📦", levelName:"Notions", levelColor:"#FF6B9D", desc:"VirtualBox, création d'environnements de test isolés. Cours et labo.", tags:["VirtualBox","VM","Sandbox"], color:"#FF69B4" },
      { id:"cisco",   name:"Réseau / Cisco",  icon:"🌐", levelName:"Notions", levelColor:"#FF6B9D", desc:"Cisco Packet Tracer. Adressage IP, VLAN, DHCP, DNS, TCP/IP, ACL, diagnostic réseau.", tags:["Packet Tracer","VLAN","DHCP","DNS","ACL"], color:"#0091EA" },
      { id:"secu",    name:"Cybersécurité",   icon:"🔐", levelName:"Notions", levelColor:"#FF6B9D", desc:"Nmap, TryHackMe (offensive & défensive). Analyse de ports, bonnes pratiques.", tags:["Nmap","TryHackMe","OWASP"], color:"#B04AFF" },
    ],
  },
  {
    floor: "3ème Étage", floorJP: "三階",
    category: "Langues & Culture", icon: "🌏", color: "#FFD700",
    scrolls: [
      { id:"fr", name:"Français", icon:"🇫🇷", levelName:"Langue maternelle", levelColor:"#00FFB3", desc:"Langue maternelle. Expression écrite et orale fluide, niveau C2.", tags:["Natif","C2"], color:"#4A90E2" },
      { id:"en", name:"Anglais",  icon:"🇬🇧", levelName:"Intermédiaire B1",  levelColor:"#FFD700", desc:"Bon niveau à l'écrit et en lecture technique. Contenu consommé en VO.", tags:["B1","Technique","VO"], color:"#FF6B4A" },
      { id:"jp", name:"Japonais", icon:"🇯🇵", levelName:"Débutant A1",       levelColor:"#FF6B9D", desc:"Hiragana/katakana en cours. Immersion quotidienne via anime VO, mangas.", tags:["A1","Hiragana","En cours"], color:"#FF6B9D" },
      { id:"kr", name:"Coréen",   icon:"🇰🇷", levelName:"Débutant A1",       levelColor:"#FF6B9D", desc:"Bases de l'alphabet hangeul. Immersion passive via K-pop et K-drama.", tags:["A1","Hangeul","Passif"], color:"#00E5FF" },
      { id:"zh", name:"Chinois",  icon:"🇨🇳", levelName:"Initiation",        levelColor:"#CC77FF", desc:"Quelques caractères via manhua et donghua. Curiosité culturelle forte.", tags:["Hanzi","Initiation"], color:"#FFD700" },
    ],
  },
];
