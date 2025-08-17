export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: "RDTech" | "CoreGrid" | "Al Ausus";
  location: string;
  year: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  duration: string;
  size: string;
  client: string;
  budget: string;
  services: string[];
  features: string[];
  challenges: string;
}

export const projects: Project[] = [
  // RDTech
  {
    id: "1",
    slug: "jw-marriott-marquis-security",
    title: "JW Marriott Marquis – Security & Surveillance",
    description:
      "Installation of over 2,200 CCTV cameras and a state-of-the-art control room at one of the world’s tallest 5-star hotels.",
    fullDescription:
      "RDTech successfully delivered a large-scale surveillance and control solution for JW Marriott Marquis, enhancing guest safety and operational monitoring. The project included more than 2,200 CCTV cameras, centralized monitoring systems, and advanced threat detection features, ensuring round-the-clock security for a luxury hospitality environment.",
    category: "RDTech",
    location: "Dubai, UAE",
    year: "2021",
    thumbnail: "/projects/rdtech/jwHero.jpeg",
    heroImage: "/projects/rdtech/jwHero.jpeg",
    gallery: [
      "/projects/rdtech/jwG1.webp",
      "/projects/rdtech/jwG2.webp",
      "/projects/rdtech/jwG3.webp",
    ],
    duration: "18 months",
    size: "1,608 rooms (covered under surveillance)",
    client: "JW Marriott Marquis",
    budget: "$5M+",
    services: [
      "CCTV Installation",
      "Centralized Control Room",
      "Access Control Systems",
    ],
    features: [
      "Over 2,200 CCTV cameras",
      "Centralized surveillance and monitoring",
      "Integrated access control",
      "Advanced threat detection",
    ],
    challenges:
      "Coordinating installation in a fully operational luxury hotel without disturbing guest experience was the key challenge. Work was scheduled in phases and executed with minimal disruption.",
  },
  {
    id: "2",
    slug: "ajman-transport-vehicle-surveillance",
    title: "Ajman Transport – Vehicle Surveillance",
    description:
      "Deployment of advanced surveillance systems for over 2,600 public transport vehicles in Ajman.",
    fullDescription:
      "RDTech implemented a large-scale surveillance project for Ajman Transport, equipping 2,600 vehicles with robust CCTV and monitoring systems. This ensured passenger safety, operational efficiency, and compliance with regulatory standards.",
    category: "RDTech",
    location: "Ajman, UAE",
    year: "2022",
    thumbnail: "/projects/rdtech/ajmanHero.jpg",
    heroImage: "/projects/rdtech/ajmanHero.jpg",
    gallery: [
      "/projects/rdtech/ajmanG1.webp",
      "/projects/rdtech/ajmanG2.webp",
      "/projects/rdtech/ajmanG3.jpg",
    ],
    duration: "12 months",
    size: "2,600 vehicles",
    client: "Ajman Public Transport Corporation",
    budget: "$3M+",
    services: ["Vehicle Surveillance", "Fleet Security Systems"],
    features: [
      "Onboard CCTV for 2,600 vehicles",
      "Live monitoring integration",
      "Tamper-proof recording",
    ],
    challenges:
      "The project required simultaneous retrofitting of multiple vehicles while ensuring fleet availability. A phased rollout minimized downtime.",
  },
  {
    id: "3",
    slug: "burj-khalifa-security-systems",
    title: "Burj Khalifa – Integrated Security Systems",
    description:
      "Comprehensive security integration at the tallest building in the world, including surveillance, access control, and monitoring systems.",
    fullDescription:
      "RDTech implemented a world-class integrated security solution for the Burj Khalifa. The project included CCTV surveillance, access control systems, intrusion detection, and a centralized monitoring control room. This deployment ensured the safety of visitors, residents, and businesses within one of the most iconic landmarks globally.",
    category: "RDTech",
    location: "Dubai, UAE",
    year: "2018",
    thumbnail: "/projects/rdtech/burjHero.jpeg",
    heroImage: "/projects/rdtech/burjHero.jpeg",
    gallery: [
      "/projects/rdtech/burjG1.webp",
      "/projects/rdtech/burjG2.webp",
      "/projects/rdtech/burjG3.jpg",
    ],
    duration: "24 months",
    size: "828 m tower – mixed-use facility",
    client: "Emaar Properties",
    budget: "$20M+",
    services: [
      "CCTV Systems",
      "Access Control",
      "Centralized Monitoring",
      "Intrusion Detection",
    ],
    features: [
      "Advanced surveillance coverage",
      "Centralized security command center",
      "Biometric access control",
      "Redundant system design",
    ],
    challenges:
      "Due to the size and global prominence of the project, RDTech had to ensure zero downtime and seamless integration of multiple systems with ongoing daily operations.",
  },
  // CoreGrid
  {
    id: "4",
    slug: "coregrid-bms-anfa-place-mall",
    title: "Anfa Place Mall – Building Management System",
    description:
      "Integrated BMS solution for Anfa Place Mall, optimizing energy efficiency and centralized building control.",
    fullDescription:
      "CoreGrid, in partnership with LOYTEC, delivered a comprehensive Building Management System (BMS) for Anfa Place Mall. The project enabled centralized monitoring and control of HVAC, lighting, and energy consumption, resulting in significant operational efficiency and cost savings.",
    category: "CoreGrid",
    location: "Casablanca, Morocco",
    year: "2020",
    thumbnail: "/projects/coregrid/anfaHero.webp",
    heroImage: "/projects/coregrid/anfaHero.webp",
    gallery: [
      "/projects/coregrid/anfaG1.webp",
      "/projects/coregrid/anfaG2.webp",
      "/projects/coregrid/anfaG3.webp",
    ],
    duration: "14 months",
    size: "93,000 sq m",
    client: "Anfa Place Shopping Center",
    budget: "$7M+",
    services: ["Building Management System", "Energy Optimization"],
    features: [
      "Centralized HVAC control",
      "Energy-efficient lighting automation",
      "Real-time energy monitoring",
      "Scalable BMS architecture",
    ],
    challenges:
      "Maintaining mall operations during system installation required precise planning. The integration was carried out overnight and during off-peak hours to avoid disruption.",
  },
  {
    id: "5",
    slug: "lusail-palace-bms",
    title: "Lusail Palace – Building Management System",
    description:
      "Deployment of a cutting-edge Building Management System (BMS) for Lusail Palace, integrating HVAC, lighting, and energy monitoring under a single smart platform.",
    fullDescription:
      "CoreGrid, in partnership with LOYTEC technologies, delivered an advanced BMS solution for Lusail Palace. The system provides centralized monitoring and control of all critical building services, including HVAC, lighting, security interfaces, and energy optimization. This project represents one of the most prestigious government facility automation undertakings in the region.",
    category: "CoreGrid",
    location: "Lusail, Qatar",
    year: "2021",
    thumbnail: "/projects/coregrid/lusailHero.jpeg",
    heroImage: "/projects/coregrid/lusailHero.jpeg",
    gallery: [
      "/projects/coregrid/lusailG1.webp",
      "/projects/coregrid/lusailG2.jpg",
      "/projects/coregrid/lusailG3.webp",
    ],
    duration: "20 months",
    size: "45,000 sq m",
    client: "Government of Qatar",
    budget: "$15M+",
    services: [
      "Building Management System",
      "HVAC Automation",
      "Energy Optimization",
      "Lighting Control",
    ],
    features: [
      "Centralized HVAC monitoring",
      "Intelligent lighting automation",
      "Energy-efficient operation",
      "Integrated smart building interface",
      "Scalable and future-ready system",
    ],
    challenges:
      "The sensitive nature of the project demanded enhanced cybersecurity and system redundancy. CoreGrid engineered a fully redundant BMS architecture with secure communication layers.",
  },
  {
    id: "6",
    slug: "king-mohammed-vi-tower-bms",
    title: "King Mohammed VI Tower – Smart Building Automation",
    description:
      "Advanced Building Management System (BMS) for Africa’s tallest tower, integrating HVAC, lighting, and energy optimization.",
    fullDescription:
      "CoreGrid, leveraging LOYTEC technology, provided a comprehensive BMS solution for the King Mohammed VI Tower (also known as O Tower). This system integrated HVAC, lighting, shading, and energy monitoring under a centralized smart platform, ensuring operational excellence for Africa’s tallest skyscraper.",
    category: "CoreGrid",
    location: "Rabat, Morocco",
    year: "2022",
    thumbnail: "/projects/coregrid/kingHero.webp",
    heroImage: "/projects/coregrid/kingHero.webp",
    gallery: [
      "/projects/coregrid/kingG1.webp",
      "/projects/coregrid/kingG2.webp",
      "/projects/coregrid/kingG3.webp",
    ],
    duration: "26 months",
    size: "250 m tower – mixed-use",
    client: "BMCE Bank Foundation",
    budget: "$30M+",
    services: [
      "Building Management System",
      "Energy Optimization",
      "HVAC Control",
      "Smart Lighting",
    ],
    features: [
      "Full integration of HVAC, lighting, and shading",
      "Real-time energy monitoring",
      "Centralized command and control",
      "Scalable automation for future expansion",
    ],
    challenges:
      "The project required delivering a BMS of global standards for a supertall structure, ensuring redundancy, cybersecurity, and integration with international smart city frameworks.",
  },
  // Al Ausus
  {
    id: "7",
    slug: "emirates-post-office-construction",
    title: "Emirates Post Office Construction",
    description:
      "Civil works and building construction for Emirates Post Office facilities.",
    fullDescription:
      "Al Ausus executed the full civil works and building construction of the Emirates Post Office complex, covering architectural design, MEP coordination, and structural delivery. The project enhanced postal service infrastructure with modern and durable facilities.",
    category: "Al Ausus",
    location: "Al Ain – Al Amera-Alhayar-Al Qoua-AlWagan",
    year: "2019",
    thumbnail: "/projects/alAusus/emiratesHero.webp",
    heroImage: "/projects/alAusus/emiratesHero.webp",
    gallery: [
      "/projects/alAusus/emiratesG1.webp",
      "/projects/alAusus/emiratesG2.webp",
      "/projects/alAusus/emiratesG3.webp",
    ],
    duration: "16 months",
    size: "12,000 sq m",
    client: "Emirates Post",
    budget: "$12M+",
    services: ["Civil Works", "Structural Engineering", "Project Management"],
    features: [
      "Modern postal facilities",
      "High-quality building construction",
      "Integrated MEP systems",
    ],
    challenges:
      "The challenge was constructing across multiple sites simultaneously, which required strict scheduling and logistics management.",
  },
  {
    id: "8",
    slug: "al-ain-club-restaurants",
    title: "Al Ain Club – Restaurants",
    description:
      "Construction of modern restaurants within the Al Ain sports club facilities.",
    fullDescription:
      "Al Ausus carried out full civil works for the restaurant complexes inside Al Ain Club, providing durable infrastructure and quality finishes suited for high footfall hospitality spaces.",
    category: "Al Ausus",
    location: "Al Ain – Al Sanaiya",
    year: "2020",
    thumbnail: "/projects/alAusus/alAinHero.jpeg",
    heroImage: "/projects/alAusus/alAinHero.jpeg",
    gallery: [
      "/projects/alAusus/alAinG1.webp",
      "/projects/alAusus/alAinG2.webp",
      "/projects/alAusus/alAinG3.webp",
    ],
    duration: "10 months",
    size: "3,500 sq m",
    client: "Al Ain Sports Club",
    budget: "$4M+",
    services: ["Civil Works", "Fit-out"],
    features: [
      "High-quality dining facilities",
      "Structural construction",
      "Modern finishes",
    ],
    challenges:
      "Strict deadlines were imposed to complete the project before a sports season opening event, requiring efficient resource allocation.",
  },
  {
    id: "9",
    slug: "al-ain-dar-zayed-cultural-house",
    title: "Cultural House – Al Ain Dar Zayed",
    description:
      "Civil and electromechanical works for a landmark Cultural House project in Al Ain.",
    fullDescription:
      "Al Ausus executed complete civil construction and electromechanical installations for the Cultural House in Al Ain Dar Zayed. The project included structural works, HVAC, electrical systems, and finishing tailored to cultural and community usage.",
    category: "Al Ausus",
    location: "Al Ain – Dar Zayed",
    year: "2020",
    thumbnail: "/projects/alAusus/culturalHero.jpeg",
    heroImage: "/projects/alAusus/culturalHero.jpeg",
    gallery: [
      "/projects/alAusus/culturalG1.webp",
      "/projects/alAusus/culturalG2.webp",
      "/projects/alAusus/culturalG3.webp",
    ],
    duration: "14 months",
    size: "8,000 sq m",
    client: "Government of Al Ain",
    budget: "$6M+",
    services: ["Civil Works", "Electromechanical Installations"],
    features: [
      "Modern cultural and community facilities",
      "Integrated HVAC and electrical systems",
      "Durable construction for high footfall",
    ],
    challenges:
      "The project required careful alignment with cultural guidelines and delivering within tight deadlines to coincide with public events.",
  },
];
