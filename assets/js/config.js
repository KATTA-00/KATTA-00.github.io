// Website Configuration
const siteConfig = {
  // Personal Information
  name: "Kanishka Gunawardana",
  title: "Computer Engineering Graduate",
  email: "kanishkagunawarthana@gmail.com",
  uniEmail: "e19129@eng.pdn.ac.lk",
  location: "University of Peradeniya, Sri Lanka",

  // Research Specializations (in order of priority)
  specializations: [
    "Computer Architecture",
    "Embedded Systems",
    "Neuromorphic Computing",
  ],

  // Social Media Links
  socialLinks: {
    github: "https://github.com/KATTA-00",
    linkedin: "https://www.linkedin.com/in/kanishka-gunawardana-285aa4201",
    googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
    email: "mailto:kanishkagunawarthana@gmail.com",
  },

  // Document Links
  documents: {
    cvPhd: "docs/Kanishka_Gunawardana_CV_Hardware_Site.pdf",
    cvStandard: "docs/Kanishka_Gunawardana_CV.pdf",
    transcript: "docs/Kanishka_Gunawardana_Transcript.pdf",
    papers: "docs/Papers/",
    certificates: "docs/Certificates/",
  },

  // Quick Stats
  quickStats: {
    recentPublications: "IEEE ICAC 2024",
    researchGroups: "PeraMorphIQ, ESCAL",
  },

  // Academic Information
  academic: {
    gpa: "4.0/4.0",
    rank: "1st out of 90 students",
    institution: "University of Peradeniya",
    degree: "B.Sc. Engineering (Hons.) in Computer Engineering",
  },

  // Research Groups
  researchGroups: [
    {
      name: "PeraMorphIQ",
      focus: "Neuromorphic Computing Research Group",
      description:
        "Developing brain-inspired computing systems for edge applications",
    },
    {
      name: "ESCAL",
      focus: "Embedded Systems and Computer Architecture Lab",
      description:
        "Advanced research in embedded systems and computer architecture",
    },
  ],

  // Professional Experience
  experience: [
    {
      title: "Temporary Instructor",
      organization: "University of Peradeniya",
      duration: "2024 - Present",
      type: "Academic",
      tags: ["Teaching", "Research Mentoring", "Computer Architecture"],
      description:
        "Teaching computer architecture and embedded systems courses to undergraduate students. Mentoring research teams on neuromorphic accelerators and on-chip learning capabilities. Contributing to curriculum development and academic research initiatives.",
    },
    {
      title: "Software Engineering Intern",
      organization: "WSO2 LLC",
      duration: "2023",
      type: "Industry",
      tags: ["Ballerina", "API Integration", "OpenAI"],
      description:
        "Developed Ballerina integrations including the OpenAI Finetunes Connector and ISO20022-to-SwiftMT message conversion systems. Worked on enterprise-level software solutions and API integrations for cloud-native applications.",
    },
    {
      title: "Research Assistant",
      organization: "PeraMorphIQ Research Group",
      duration: "2023 - Present",
      type: "Research",
      tags: ["Neuromorphic Computing", "Hardware Design", "Edge AI"],
      description:
        "Contributing to cutting-edge research in neuromorphic computing and brain-inspired hardware architectures. Developing configurable neuromorphic accelerators for edge applications and investigating on-chip learning algorithms.",
    },
    {
      title: "Head of Web Development",
      organization: "Robotics Society, University of Peradeniya",
      duration: "2022 - 2023",
      type: "Leadership",
      tags: ["Leadership", "Web Development", "Team Management"],
      description:
        "Led the web development team for the university's robotics society. Managed website development projects, organized technical workshops, and coordinated with cross-functional teams for robotics competitions and events.",
    },
  ],

  // Recent Publications
  publications: [
    {
      title: "JPEG Encoding Optimization through Pipelined MPSoC Architecture",
      venue: "IEEE ICAC 2024",
      authors: "Kanishka Gunawardana, et al.",
      type: "Conference Paper",
      link: "docs/Papers/",
      ieeeLink: "https://ieeexplore.ieee.org/abstract/document/10851123",
    },
  ],

  // Featured Projects
  projects: [
    {
      title:
        "A RISC-V SoC with Configurable Neuromorphic Acceleration for Small-Scale Spiking Neural Networks (FYP)",
      type: "Final Year Project",
      tags: ["RISC-V", "Verilog-HDL", "Neuromorphic", "SoC", "FPGA"],
      description:
        "Developing a neuromorphic SoC for small-scale SNNs, featuring a configurable neuromorphic accelerator with on-chip learning, tailored for low-power edge applications such as robotics. Integrating RISC-V-based general-purpose computing and sensor interfacing capabilities.",
      duration: "Nov. 2024 - Present",
      technologies:
        "RISC-V, Verilog-HDL, Synopsys Tools, FPGA, Cyclone IV, Quartus II",
      supervision: "Dr. Isuru Nawinne, Prof. Roshan G. Ragel",
      github:
        "https://github.com/cepdnaclk/e19-4yp-RISC-V-SoC-With-Neuromorphic-Accelerator-for-SNNs",
      website:
        "https://cepdnaclk.github.io/e19-4yp-RISC-V-SoC-With-Neuromorphic-Accelerator-for-SNNs/",
    },
    {
      title: "RV32IM Pipeline Processor",
      type: "Academic Project",
      tags: ["RISC-V", "Verilog HDL", "CPU Design", "Pipelining"],
      description:
        "Designing and implementing a CPU supporting the RISC-V 32IM instruction set architecture with a 5-stage pipelined design, focusing on high efficiency and accurate instruction execution.",
      duration: "Dec. 2024 - Present",
      technologies:
        "Verilog HDL, Icarus Verilog, GTKWave, Synopsys DC, Synopsys VCS",
      github:
        "https://github.com/cepdnaclk/e19-co502-RV32IM-Pipeline-Implementation-Group1",
      website:
        "https://cepdnaclk.github.io/e19-co502-RV32IM-Pipeline-Implementation-Group1/",
    },
    {
      title: "Impact Tracking System For Athletes (3YP)",
      type: "Third Year Project",
      tags: ["IoT", "Wearable Tech", "Real-time", "Cloud Analytics", "AWS"],
      description:
        "Developed a real-time head impact monitoring system for contact sports using wearable devices and desktop dashboards, facilitating prompt concussion identification, post-session data transmission, and comprehensive analytics for player safety.",
      duration: "Nov. 2023 - Mar. 2024",
      technologies:
        "Arduino, Raspberry PI, MQTT, Python, Express.js, MongoDB, AWS",
      contributions:
        "Designed and developed wearable device hardware and firmware, established the centralized hub and local area network, contributed to backend API development, and handled deployment on AWS infrastructure.",
      github: "https://github.com/cepdnaclk/e19-3yp-impact-tracker",
      website: "https://cepdnaclk.github.io/e19-3yp-impact-tracker/",
    },
    {
      title: "Field-Based Approach for Quantifying Plant Leaf Color",
      type: "Academic Project",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Mask R-CNN",
        "Image Processing",
      ],
      description:
        "Developed a mobile application with a backend that utilizes Image Processing and Computer Vision to objectively quantify plant leaf colour by analyzing information extracted from captured leaf images.",
      duration: "Aug. 2023 - Nov. 2023",
      technologies: "Python, OpenCV, PyTorch, FastAPI, Flutter",
      techniques:
        "Image Segmentation using Mask R-CNN, Colour Extraction, K-mean Clustering",
      contributions:
        "Developed the backend API using FastAPI and contributed to image preprocessing, including segmentation using deep learning techniques (Mask R-CNN).",
      github: "https://github.com/cepdnaclk/e19-co227-Leaf-Colour-Quantifier",
      website: "https://cepdnaclk.github.io/e19-co227-Leaf-Colour-Quantifier/",
    },
    {
      title: "Obstacle Robot Swarm for Swarm Robotic Project",
      type: "Research Project",
      tags: ["Robotics", "Swarm Intelligence", "Arduino", "Computer Vision"],
      description:
        "Leading the development and firmware update of obstacle robots with collision avoidance algorithms for the swarm robotics platform. Integrating obstacle robots with the existing swarm platform, enabling studies of dynamic obstacle scenarios.",
      duration: "Feb. 2024 - Nov. 2023",
      technologies: "Arduino, Python, Java, MQTT, OpenCV",
      github: "https://github.com/Pera-Swarm",
      website: "https://pera-swarm.ce.pdn.ac.lk/",
    },
    {
      title: "8-bit Single-cycle Processor",
      type: "Academic Project",
      tags: ["Verilog-HDL", "Processor Design", "MIPS", "Hardware"],
      description:
        "Designed and implemented an 8-bit single-cycle processor architecture in Verilog HDL to emulate a MIPS inspired ISA, enabling functionality for arithmetic, logic, data transfer, and control flow operations. Built a comprehensive testbench for verification.",
      duration: "Mar. 2023 - Jun. 2023",
      technologies: "Verilog-HDL, GTKWave",
      github: "https://github.com/KATTA-00/CO224-Labs/tree/master/Lab05",
    },
  ],

  // Achievements
  achievements: [
    {
      title: "SLIot Challenge 2023",
      award: "1st Runners-up",
      description: "Sri Lanka's biggest IoT competition (100+ teams)",
      details:
        "Organized by University of Moratuwa in collaboration with SLT-MOBITEL and IESL",
      team: "IMPAX",
      date: "Mar. 2024",
      link: "https://sliot.cse.mrt.ac.lk/",
    },
    {
      title: "MoraXtreme 8.0",
      award: "4th Place National",
      description: "12 hour algorithmic programming competition (400+ teams)",
      details:
        "Organized by the IEEE Student Branch of the University of Moratuwa",
      team: "Five4Five",
      date: "Nov. 2023",
    },
    {
      title: "IEEEXtreme 17.0",
      award: "Global Rank 374",
      description:
        "24 hour algorithmic programming competition (16,500+ participants)",
      details: "National Rank - 24 (Out of 330 Teams)",
      team: "Five4Five",
      date: "Nov. 2023",
      link: "https://ieeextreme.org/ieeextreme-17-0-ranking/",
    },
    {
      title: "ACES Coders v10.0",
      award: "12th Place National",
      description:
        "12 hour algorithmic programming competition (350+ participants)",
      details:
        "Organized by the Association of Computer Engineering Students of the University of Peradeniya",
      team: "Five4Five",
      date: "Oct. 2023",
    },
    {
      title: "ACES PreCoders v10.0",
      award: "2nd Place University",
      description: "6 hour algorithmic programming competition (50+ teams)",
      team: "Five4Five",
      date: "Sep. 2023",
    },
    {
      title: "ACES Hackathon 2023",
      award: "Participant",
      description: "Inter-university hackathon organized by ACES",
      details:
        "LearnLink - An innovative online marketplace for buying and selling books",
      team: "LearnLink",
      date: "Sep. 2023",
    },
  ],

  // Certificates
  certificates: [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI (Coursera)",
      date: "Sep. 2023",
      link: "https://katta-00.github.io/docs/Certificates/ML.pdf",
      subcertificates: [
        {
          title: "Supervised Machine Learning: Regression and Classification",
          link: "https://katta-00.github.io/docs/Certificates/SL.pdf",
        },
        {
          title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
          link: "https://katta-00.github.io/docs/Certificates/UL.pdf",
        },
        {
          title: "Advanced Learning Algorithms",
          link: "https://katta-00.github.io/docs/Certificates/AA.pdf",
        },
      ],
    },
    {
      title: "Engineering Drawing and 3D Modelling using AutoCAD",
      issuer: "TecView Institute",
      date: "Mar. 2021",
      link: "https://katta-00.github.io/docs/Certificates/CAD_E1_1017.pdf",
    },
  ],

  // Theme Colors (CSS variables)
  theme: {
    primaryColor: "#1e3a8a",
    secondaryColor: "#3b82f6",
    accentColor: "#10b981",
    textDark: "#1f2937",
    textLight: "#6b7280",
    bgLight: "#f8fafc",
    bgWhite: "#ffffff",
  },
};

// Make config available globally
window.siteConfig = siteConfig;
