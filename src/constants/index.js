export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const skills = [
  {
    logo: '/assets/python.svg',
    name: 'Python',
    level: 90,
  },
  {
    logo: '/assets/java.svg',
    name: 'Java',
    level: 70,
  },
  {
    logo: '/assets/js.svg',
    name: 'JavaScript',
    level: 85,
  },
  {
    logo: '/assets/html.svg',
    name: 'HTML',
    level: 90,
  },
  {
    logo: '/assets/css.svg',
    name: 'CSS',
    level: 85,
  },
  {
    logo: '/assets/react.svg',
    name: 'React',
    level: 80,
  },
  {
    logo: '/assets/node.svg',
    name: 'Node.js',
    level: 75,
  },
  {
    logo: '/assets/mongodb.svg',
    name: 'MongoDB',
    level: 70,
  },
  {
    logo: '/assets/Mysql.svg',
    name: 'MySQL',
    level: 75,
  },
  {
    logo: '/assets/postman.svg',
    name: 'Postman',
    level: 80,
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.05 : 0.05,
    deskPosition: isMobile ? [0.5, -6.0, 0] : [0.25, -6.0, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Projects',
    pos: 'Web Developer',
    duration: 'AI and ML',
    title: "I apply my skills by building real-world projects such as AI dashboards, object detection systems, chatbots, and full-stack applications. Each project is designed to solve practical problems and demonstrate end-to-end development.",
    icon: '/assets/project.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'React',
    pos: 'Web Development',
    duration: 'Gsap,three.js',
    title: "I build responsive and interactive user interfaces using React. I focus on component-based architecture, state management, API integration, and creating smooth user experiences with modern frontend practices.",
    icon: '/assets/react.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Python',
    pos: 'Backend ',
    duration: 'AI/ML',
    title: "I use Python to develop backend systems, REST APIs, and AI-powered features. My work includes building FastAPI applications, handling databases, integrating AI models, and writing clean, maintainable code for real-world scenarios.",
    icon: '/assets/python.svg',
    animation: 'salute',
  },
];

export const projects = [
  {
    id: 1,
    title: "CampusBuzz AI – Smart Student Clubs & Event Platform",
    image: "/assets/campus.png",
    description: "A full-stack AI-powered platform designed to manage student clubs and events. It features AI-driven event recommendations, chatbot assistance, QR-based attendance, certificates, leaderboards, and analytics to enhance campus engagement.",
    tech: "React, FastAPI, Python, MongoDB, AI/ML"
  },
  {
    id: 2,
    title: "Cyber Threat Intelligence Dashboard",
    image: "/assets/cyber.png",
    description: "A real-time cybersecurity dashboard that analyzes threat indicators and alerts using machine learning, helping security teams visualize threat lifecycles and make data-driven decisions.",
    tech: "React, FastAPI, Python, Machine Learning"
  },
  {
    id: 3,
    title: "AI Trip Planner",
    image: "/assets/tripai.png",
    description: "An intelligent travel planning application that generates personalized trip itineraries based on user preferences, budget, and travel duration. The system uses AI to recommend destinations, activities, and optimized travel plans.",
    tech: "Python, FastAPI, AI/ML, APIs"
  },
  {
    id: 4,
    title: "AI Coffee Shop Assistant",
    image: "/assets/cofee.png",
    description: "An AI-powered virtual assistant designed for a coffee shop platform. It interacts with customers in natural language, suggests coffee and snacks based on preferences and sentiment, manages orders, and enhances the overall customer experience.",
    tech: "Python, FastAPI, NLP, AI Chatbot, MongoDB"
  },
  {
    id: 5,
    title: "Driver Drowsiness Detection System",
    image: "/assets/driver.png",
    description: "A computer vision–based system that detects driver fatigue in real time by analyzing eye movement and facial features, triggering alerts to prevent accidents caused by drowsiness.",
    tech: "Python, OpenCV, TensorFlow, Keras"
  },
  {
    id: 6,
    title: "Object Detection System",
    image: "/assets/object.png",
    description: "A real-time object detection application built using YOLO to detect and classify objects from images and video streams with visual overlays and automated processing.",
    tech: "Python, OpenCV, YOLO, NumPy"
  }
];
