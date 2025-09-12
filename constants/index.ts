import { ThingsIDo } from "@/types";
import { baseUrlTech } from "./techData";

export const profile = {
  summary: ` 👋 Hi, I’m Ajay 😊
B.Tech graduate from NIT Warangal, currently pursuing M.Tech in CSE at NIT Hamirpur. 

Passionate about problem-solving and software development, with strong skills in C++, Python, DSA, and hands-on experience in full-stack development (MERN), plus exposure to AI/ML.`,
  gitHub: "https://github.com/ajay1214/3d-portfolio",
  name: "Ajay Bind",
  title: "Full Stack Developer",
  gitHubUserName: "ajay1214",
  xUserName: "ajay1214",
  linkedin: 'https://www.linkedin.com/in/ajaybind/',
  x: 'https://www.instagram.com/ajay_bind786/',
  instagram: "https://www.instagram.com/ajay_bind786/"
};
export const hostedUrl = "https://muhammedsinan.space";
export const canonicalUrl = "https://muhammedsinan.space";

export const TYPEWRITER_WORDS = [
  { text: "Passionate" },
  { text: "about" },
  { text: "Full" },
  { text: "Stack" },
  { text: "development," },
  { text: "AI" },
  // { text: "Intelligence" },
  { text: "and" },
  { text: "Machine" },
  { text: "Learning" },
  { text: "!" }
];


export const socialMediaLinks = [
  {
    title: 'LinkedIn',
    icon: '/assets/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/ajaybind/',
    smLabel: 'LN',
  },
  {
    title: 'Email',
    icon: '/assets/social/email.svg',
    href: 'mailto:adarshbind61@gmail.com',
    smLabel: 'EM',
  },
  {
    title: 'GitHub',
    icon: '/assets/social/github.svg',
    href: 'https://github.com/ajay1214',
    smLabel: 'GH',
  },
  // {
  //   title: 'Stack Overflow',
  //   icon: '/assets/social/stackoverflow.png',
  //   href: 'https://github.com/ajay1214',
  //   smLabel: 'SO',
  // },
  {
    title: 'LeetCode',
    icon: '/assets/social/leetcode.jpg',
    href: 'https://leetcode.com/u/ajaybind786/',
    smLabel: 'LC',
  },
  
  {
    title: 'Instagram',
    icon: '/assets/social/x.png',
    href: 'https://www.instagram.com/ajay_bind786/',
    smLabel: 'TW',
  }
];


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  // { href: "/open-source", label: "Open Source" },
  { href: "/experience", label: "Education" },
  { href: "/stack", label: "Skills" },
  { href: "/contact", label: "Contact Me" },
];

export const openSourceOrganizations = [
  { name: "Strapi", url: "https://strapi.io", logo: "/assets/org/strapi.png" },
  { name: "Impler", url: "https://impler.io", logo: "/assets/org/impler.png" },
  { name: "Origin Ui", url: "https://originui.com", logo: "/assets/org/origin.ico" },
  { name: "OpenCut", url: "https://opencut.app", logo: "/assets/org/opencut.png" },
  { name: "Gemini CLI", url: "https://github.com/google-gemini/gemini-cli", logo: "/assets/org/gemini.png" }
];


export const thingsIDo: ThingsIDo[] = [
  {
    name: "Full Stack Development",
    image: "/assets/images/fullstack.svg",
    tech: [
      { name: "Node JS", url: `${baseUrlTech}/nodejs.svg` },
      { name: "Express JS", url: `${baseUrlTech}/express.svg` },
      { name: "React JS", url: `${baseUrlTech}/react.svg` },
      { name: "Next JS", url: `${baseUrlTech}/nextjs.svg` },
      // { name: "Nest JS", url: `${baseUrlTech}/nestjs.svg` },
      // { name: "Expo", url: `${baseUrlTech}/expo.svg` },
      { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
      { name: "Tailwind", url: `${baseUrlTech}/tailwind.svg` },
      // { name: "WebRTC", url: `${baseUrlTech}/webrtc.svg` },
    ],
    capabilities: [
      { text: 'Developing modern web applications with React, Next.js, and TypeScript', icon: '💻' },
      { text: 'Building robust backend services with Node.js', icon: '⚙️' },
      { text: 'Develop secure APIs and handle database management with Database', icon: '🎨' },
      { text: 'Focus on clean code, performance optimization, and scalability', icon: '🎢' }
    ]
  },
  {
    name: "AI & Machine Learning",
    image: "/assets/images/statics.svg",
    tech: [
      { name: "AWS", url: `${baseUrlTech}/aws.svg` },
      { name: "Firebase", url: `${baseUrlTech}/firebase.svg` },
      { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },
      { name: "Postgres", url: `${baseUrlTech}/postgresql.svg` },
      { name: "Redis", url: `${baseUrlTech}/redis.png` },
      { name: "Vercel", url: `${baseUrlTech}/vercel.svg` },
      { name: "Cloudinary", url: `${baseUrlTech}/cloudinary.png` },
      { name: "Nginx", url: `${baseUrlTech}/nginx.svg` },
    ],
    capabilities: [
      { text: 'Apply ML algorithms for prediction, classification, and optimization', icon: '🤖 ' },
      { text: 'Work with Python libraries (TensorFlow, scikit-learn, NumPy, Pandas)', icon: '🗂️' },
      { text: 'Develop data-driven solutions by analyzing and processing large datasets', icon: '🛢' },
      { text: 'Experiment with intelligent systems to enhance decision-making and automation', icon: '🧠' },
    ]
  },
  {
    name: "Achivements",
    image: "/assets/images/devops.svg",
    tech: [
      // { name: "Docker", url: `${baseUrlTech}/docker.svg` },
      // { name: "GitHub Actions", url: `${baseUrlTech}/github-action.svg` },
      // { name: "Jest", url: `${baseUrlTech}/jest.png` },
      // { name: "ESLint", url: `${baseUrlTech}/eslint.svg` },
      // { name: "Prettier", url: `${baseUrlTech}/prettier.svg` },
      // { name: "PM2", url: `${baseUrlTech}/pm2.png` },
      // { name: "Winston", url: `${baseUrlTech}/winston.svg` },
      // { name: "Postman", url: `${baseUrlTech}/postman.svg` },
    ],
    capabilities: [
      { text: ' Codeforces: Specialist (Max Rating: 1501)', icon: '🔄' },
      { text: 'LeetCode: Knight Level (Max 1859 Rating)', icon: '✅' },
      { text: 'CodeChef: 3★ Coder (Max Rating: 1667)', icon: '📊' },
      { text: 'GATE CSE Qualified in 2025', icon: '✅' },
    ]
  }
];
// Audio file path
export const AUDIO_SRC = "/assets/keyboardpress.mp3";

// Timing constants
export const KEY_PRESS_DURATION = 150;

