export const VEILLE = [
  {
    id:"cyber", color:"#FF6B9D", icon:"🔐", kanji:"攻", rarity:"LÉGENDAIRE", rarityColor:"#FFD700",
    title:"Cybersécurité & Attaques", subtitle:"Thématique 1",
    articles:[
      { title:"Les attaques par ransomware en 2024", source:"ANSSI", tag:"Ransomware" },
      { title:"OWASP Top 10 : nouvelles vulnérabilités web", source:"OWASP", tag:"Web Sec" },
      { title:"Phishing & ingénierie sociale : évolution des techniques", source:"CERT-FR", tag:"Social Eng." },
      { title:"Zero-day : comment les entreprises réagissent", source:"Kaspersky", tag:"Zero-day" },
    ],
    tools:["TryHackMe","Nmap","Wireshark"], sources:["ANSSI","CERT-FR","OWASP","Kaspersky"],
    synthesis:"Les cyberattaques se sophistiquent : ransomware-as-a-service, phishing mobile, zero-days revendus. La réponse passe par threat intelligence, segmentation réseau et formation des utilisateurs.",
    stat:"72% des entreprises victimes d'une cyberattaque en 2024",
  },
  {
    id:"vr", color:"#CC77FF", icon:"🥽", kanji:"幻", rarity:"ÉPIQUE", rarityColor:"#CC77FF",
    title:"VR & AR", subtitle:"Thématique 2",
    articles:[
      { title:"Meta Quest 3 : état de l'art de la VR grand public", source:"The Verge", tag:"Hardware" },
      { title:"L'AR dans l'industrie : cas d'usage concrets", source:"MIT Tech Review", tag:"Industrie" },
      { title:"XR et formation professionnelle : ROI mesuré", source:"Gartner", tag:"Formation" },
      { title:"WebXR : la réalité mixte dans le navigateur", source:"MDN Web Docs", tag:"Web" },
    ],
    tools:["Unity","Unreal Engine","WebXR"], sources:["The Verge","MIT Tech Review","Gartner","Road to VR"],
    synthesis:"La VR sort du gaming pour s'imposer dans la formation, la médecine et l'industrie. L'AR enrichit les interfaces physiques. WebXR ouvre la voie à une XR accessible sans casque dédié.",
    stat:"Le marché VR/AR atteindra 87 Mds$ d'ici 2027",
  },
  {
    id:"ia-cyber", color:"#00E5FF", icon:"🤖", kanji:"知", rarity:"ÉPIQUE", rarityColor:"#00E5FF",
    title:"IA & Cybersécurité", subtitle:"Thématique 3",
    articles:[
      { title:"ChatGPT utilisé pour générer des malwares", source:"Check Point", tag:"Malware IA" },
      { title:"Détection d'anomalies par ML dans les SIEM", source:"Splunk Blog", tag:"Défense" },
      { title:"Deepfakes et fraude : le nouveau phishing vocal", source:"Europol", tag:"Deepfake" },
      { title:"IA générative : vecteur d'attaque ou bouclier ?", source:"ENISA", tag:"Analyse" },
    ],
    tools:["Darktrace","CrowdStrike","IBM QRadar"], sources:["ENISA","Check Point","Europol","Splunk"],
    synthesis:"L'IA est une arme à double tranchant : elle accélère les attaques (malwares générés, deepfakes) mais renforce aussi la défense (détection comportementale, corrélation d'incidents).",
    stat:"Les attaques assistées par IA ont augmenté de 135% en 2024",
  },
  {
    id:"ia-emploi", color:"#00FFB3", icon:"💼", kanji:"職", rarity:"RARE", rarityColor:"#00FFB3",
    title:"IA & Emploi", subtitle:"Thématique 4",
    articles:[
      { title:"Les ATS et l'IA : comment les CV sont filtrés", source:"LinkedIn Blog", tag:"Recrutement" },
      { title:"Faut-il mentionner l'IA dans son CV ?", source:"Le Monde", tag:"CV" },
      { title:"Métiers de la tech face à l'automatisation", source:"McKinsey", tag:"Futur du travail" },
      { title:"L'alternance et l'IA : nouvelles compétences attendues", source:"APEC", tag:"Alternance" },
    ],
    tools:["LinkedIn","ChatGPT","Indeed"], sources:["LinkedIn Blog","McKinsey","APEC","Le Monde"],
    synthesis:"L'IA transforme le recrutement : les ATS filtrent les CV avant tout regard humain. Pour les alternants tech, l'enjeu est de montrer initiative, curiosité et adaptabilité — ce que l'IA ne sait pas encore faire.",
    stat:"75% des recruteurs utilisent un ATS alimenté par IA",
  },
];
