import { Project } from "@/types";

/**
 * Add these indexes to your project according to technologies you used.
 */
//eslint-disable-next-line
const INDEXES = {
    "TypeScript": 0,
    "Next.js": 1,
    "Nest.js": 2,
    "React": 3,
    "Redux": 4,
    "React Query": 5,
    "Vite": 6,
    "AWS": 7,
    "Stripe": 8,
    "WebRTC": 9,
    "Socket.io": 10,
    "Google AI": 11,
    "OpenAI": 12,
    "MongoDB": 13,
    "PostgreSQL": 14,
    "Zod": 15,
    "Clean Architecture": 16,
    "SOLID Principles": 17,
    "Node.js": 18,
    "Express.js": 19,
    "Tailwind CSS": 20,
    "Vercel": 21,
    "Firebase": 22,
    "Razorpay": 23,
    "Google Analytics": 24,
    "Vercel Analytics": 25,
    "Styled Components": 26,
    "Radix UI": 27,
    "Axios": 28,
    "JWT": 29,
    "OAuth": 30,
    "Joi": 31,
    "Winston": 32,
    "Shadcn UI": 33,
    "Recharts": 34,
    "Prettier": 35,
    "ESLint": 36,
    "GitHub Actions": 37,
    "Nginx": 38,
    "Render": 39,
    "Cloudflare": 40,
    "V0": 41,
    "React Hook Form": 42,
    "Context API": 43,
    "JavaScript": 44,
    "MySQL": 45,
    "Bootstrap": 46,
    "jQuery": 47,
    "NPM": 48,
    "Nodemon": 49,
    "Postman": 50,
    "Figma": 51,
    "Framer": 52,
    "PDFKit": 53,
    "Sharp": 54,
    "PDF Viewer": 55,
    "Cookies": 56,
    "EJS": 57,
    "Nuqs": 58,
    "Cloudinary": 59,
    "Next.js 15": 60,
    "React 19": 61,
    "Hostinger": 62,
    "Multer": 63,
    "Jest": 64,
    "Redis": 65,
    "Passport": 66,
    "Geolocation": 67,
    "Framer Motion": 68,
    "Chalk": 69,
    "Commander": 70,
    "Execa": 71,
    "Inquirer": 71,
    "Ora": 73,
    "Lucide Icons": 74,
    "Zustand": 75,
    "Inversify": 76,
    "bcryptjs": 77,
    "Nodemailer": 78,
};

export const projects: Project[] = [
    {
        title: "Interactive Language Learning Platform",
        description: "This project demonstrates a sophisticated approach to creating an interactive, engaging, and user-friendly language learning experience. It leverages modern web technologies to provide an immersive learning environment",
        detailedDescription: "Built a full-stack application using Next.js, React, and PostgreSQL, featuring an engaging UI, progress tracking, and gamification for thousands of active users. Integrated secure authentication and payment processing with Stripe and Clerk, ensuring seamless transactions and data protection. Developed a scalable, modular component system with Shadcn UI and React Admin for managing learningpaths in 5 languages using RESTful APIs.",
        technologies: [
            0,  // TypeScript
            18, // Node.js
            19, // Express.js
            1,  // Next.js
            20, // Tailwind CSS
            14, // PostgreSQL
            21, // Vercel
            29, // JWT
            33, // Shadcn UI
            35, // Prettier
            36, // ESLint
            37, // GitHub Actions
            42, // React Hook Form
            49, // Nodemon
            61, // React 19
        ],
        link: "https://ab-languages.vercel.app/",
        githubLink: "https://github.com/ajay1214/abLanguages",
        thumbnail: "/assets/projects/abLanguages.jpg",
        // demoLink: "https://www.linkedin.com/posts/sinanptm_webdevelopment-opensource-nextjs-activity-7340757181467607043-1qZd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ-UEEBRMD-TDWuU0pd3KhZH3Ti1MlQ-nU",
        isLinkedin: true,
        showGitStats: true,
        achievements: [
            "🌐 Next.js 14 & Server Actions: Optimized performance with the latest Next.js framework, utilizing server-side rendering and efficient server actions.",
            "🗣 AI Voices using Elevenlabs AI: Realistic voice synthesis for language lessons, enhancing auditory learning.",
            "🎨 Shadcn UI: A responsive and visually appealing interface designed with Shadcn's component system.",
            "🎭 KenneyNL Characters: High-quality character graphics for an engaging learning environment.",
            "🔐 Authentication with Clerk: Secure user authentication and management with Clerk integration.",
            "🔊 Enhanced User Experience: Immersive sound effects to complement the learning process.",
            "❤️ Hearts System: Gamified system to track progress and motivate users.",
            "🌟 Points and XP System: Rewarding system to incentivize learning and track achievements.",
            "💔 No Hearts Left Popup: User-friendly notifications for resource management.",
            "🚪 Exit Confirmation Popup: Safeguards to prevent accidental data loss.",
            "🔄 Lesson Review for Heart Regain: Users can review lessons to regain hearts, promoting continuous learning.",
            "🏆 Leaderboard: Competitive leaderboard to encourage user participation.",
            "💳 Pro Tier with Stripe Integration: Premium subscription tier with unlimited hearts, secured with Stripe.",
            "📊 Admin Dashboard with React Admin: Efficient content management and user data analysis."
        ]
    },
    {
        title: "Collaborative Whiteboard",
        description: "This application is a real-time, collaborative whiteboard tool designed for seamless and interactive experiences. Whether you're brainstorming, teaching, or designing, this tool provides all the essential features to bring your ideas to life.",
        detailedDescription: "Created a real-time, collaborative whiteboard application using Convex, can support up to 5 users per organization and scalable to thousands of monthly active users. Engineered advanced features like layering, undo/redo, and a customizable toolbar (text, shapes, sticky notes), enhancing collaboration and state management. Crafted a responsive, cross-browser UI using Tailwind CSS and Shadcn/UI, ensuring consistent functionality across devices. Optimized platform scalability for thousands of concurrent users, can support up to 100 active organizations monthly, with CI/CD pipelines for efficient and seamless updates. ",
        technologies: [1, 18, 19, 13, 9, 10, 68, 17, 20, 21, 22, 23, 24, 25, 26, 27, 61, 28, 29, 30, 31, 32, 33, 51, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        link: "https://ab-white-board.vercel.app/",
        githubLink: "https://github.com/ajay1214/abWhiteBoard",
        showGitStats: true,
        thumbnail: "/assets/projects/abWhiteBoard.png",
        // demoLink: "https://youtu.be/fpOPtDixtD4",
        achievements: [
            "🛠️ Whiteboard from Scratch: Start with a blank canvas and create your own whiteboard.",
            "🧰 Toolbar with Text, Shapes, Sticky Notes & Pencil: Use a comprehensive set of tools to annotate and draw on the whiteboard.",
            "🪄 Layering Functionality: Organize elements on the board with layers, giving you full control over the content.",
            "↩️ Undo & Redo Functionality: Easily correct mistakes with undo and redo options.",
            "🎨 Coloring System: Customize your board with a full spectrum of colors.",
            "🤝 Real-Time Collaboration: Work with others in real-time, making remote collaboration smooth and effective.",
            "💾 Real-Time Database: Ensure your data is always up-to-date with real-time synchronization.",
            "🔐 Auth, Organizations, and Invites: Secure your workspace with authentication, manage organizations, and invite team members.",
            "⭐️ Favoriting Functionality: Mark important boards as favorites for quick access.",
            "🌐 Built with Next.js 14: Leveraging the power of Next.js 14 for a modern, fast, and scalable application.",
            "💅 Styled with TailwindCSS & ShadcnUI: Enjoy a sleek and responsive design, styled with TailwindCSS and ShadcnUI.",
            "💸 Making it SaaS app: (TO DO)."
        ]
    },
    {
        title: "Image Transformation Platform",
        description: "An interactive web application designed to empower users with cutting-edge AI-driven image manipulation and enhancement tools. This platform provides a seamless, secure, and intuitive experience for users looking to transform their images effortlessly.",
        detailedDescription: "Developed a full-stack solution using Next.js, TypeScript, MongoDB, and Cloudinary, can deliver a smooth user experience for thousands of monthly active users. Implemented image processing algorithms and backend optimization, supporting five types of image transformations with efficient storage using cloud infrastructure. Created a credit system with Stripe with secure transactions and scalability, can handle thousands of concurrent users adhering to best practices in DevOps.",
        technologies: [18, 19, 13, 29, 7, 44, 23, 62, 30, 61, 38, 39, 54, 57, 49, 56],
        link: "https://ab-images.vercel.app/",
        githubLink: "https://github.com/ajay1214/abImages",
        thumbnail: "/assets/projects/abImages.png",
        // demoLink: "https://youtu.be/8w6HqmgeDcA",
        achievements: [
            "🔒 Authentication & Authorization -> Secure Access: User registration, login, and protected routes ensure that only authorized users can access platform features.",
            "🖼️ Community Image Showcase -> Explore & Inspire: Discover and browse through an array of user-transformed images with easy-to-use pagination.",
            "🔍 Advanced Image Search -> Find What You Need: (TO DO)",
            "🛠️ Image Restoration & Enhancement -> Revive & Improve: Breathe new life into old or damaged images with AI-driven restoration and enhancement features.",
            "🎨 Image Recoloring -> Customize Colors: Change object colors within images to suit your creative needs.",
            "✨ Image Generative Fill -> Fill the Gaps: Seamlessly complete images by filling in missing areas using generative AI.",
            "🧽 Object & Background Removal -> Precision Editing: Remove unwanted objects or extract backgrounds with high accuracy.",
            "💾 Save & Share -> Download with Ease: Save your transformed images in high quality for easy sharing and further use.",
            "🔢 Transformation Management -> Control Your Content: Manage your transformations with options to delete or update as needed.",
            "💳 Credits System & Purchase -> Credits for Transformations: Earn or purchase credits to use platform features. Integrated Stripe ensures secure transactions.",
            "📱 Responsive UI/UX -> Access Anywhere: Enjoy a consistent and user-friendly experience across all devices."
        ]
    },
    {
        title: "Instagram UI Clone",
        description: "Instagram Clone using React and Firebase with features like authentication, real-time posts, likes, comments, and user profiles.",
        detailedDescription: "A responsive single-page app where users can sign up/sign in, upload photos with captions, follow/unfollow other users, like and comment on posts, and edit their profile.Real-time feed updates so new posts, likes, and comments appear without page reloads. Image upload and serving via Firebase Storage; post metadata and relationships stored in Cloud Firestore. Authentication with Firebase Authentication (email/password and Google Sign-In). Basic access control with Firebase Security Rules so users can only modify their own data.",
        technologies: [0, 18, 19, 13, 64, 63, 65, 66, 29, 30, 38, 31, 50, 67],
        link: "https://ajay-bind.vercel.app/auth",
        githubLink: "https://github.com/ajay1214/InstaClone",
        thumbnail: "/assets/projects/instaClone.png",
        achievements: [
            "🔐 Authentication – Secure login/signup with email & Google OAuth, persistent sessions, protected routes.",
            "⚡ Real-time Feed – Live post updates in reverse chronological order without page reloads.",
            "📷 Uploads & Storage – Smooth image uploads to Firebase Storage with preview & validation.",
            "❤️💬 Likes & Comments – Optimistic UI updates, real-time interactions, and counters.",
            "👤 Profiles & Follow System – User pages with posts, followers/following counts, and profile editing.",
            "🔎 Search & Discovery – Find users by username and explore suggested posts.",
            "📱 Responsive Design – Mobile-first layout with accessible UI and media-friendly cards.",
            "🛡️ Security & Rules – Firebase Firestore & Storage rules ensuring secure data access.",
            "🌐 Deployment – Deployed seamlessly on Vercel with Firebase backend integration."
        ]
    },
    {
        title: "ChatApp",
        description: "Developed a real-time chat application using the MERN stack with secure authentication (JWT), WebSocket-based communication (Socket.io), and MongoDB for scalable data storage.",
        detailedDescription: "Built a responsive chat application from scratch using MongoDB, Express, React, and Node.js. The app enables users to sign up, log in securely with JWT-based authentication, and communicate instantly through Socket.io-powered WebSockets. Implemented private and group chat functionality with real-time message delivery, online user status, and persistent chat history stored in MongoDB. Focused on scalability, security, and user experience, making it a solid project to demonstrate full-stack and real-time development skills.",
        technologies: [1, 3, 0, 68, 20, 27, 33, 58, 51, 36],
        link: "https://chatapp-h2h0.onrender.com/",
        githubLink: "https://github.com/ajay1214/ChatApp",
        thumbnail: "/assets/projects/chatApp.png",
        // demoLink: "https://www.youtube.com/channel/UCLM9UEYxJMq2lXXjycxeOTQ",
        achievements: [
            "🔐 Secure Authentication – Implemented JWT-based login/signup with hashed passwords (bcrypt).",
            "💬 Real-time Messaging – Powered by Socket.io for instant message delivery without page reloads.",
            "👥 Private & Group Chats – One-to-one and multi-user chat rooms with dynamic updates.",
            "📂 Persistent Chat History – Messages stored in MongoDB for retrieval on login.",
            "🟢 Online/Offline Status – Real-time presence indicators for connected users.",
            "📱 Responsive UI – Clean and mobile-friendly interface built with React and Tailwind CSS.",
            "🛡️ Role-based Access – Restricted routes and APIs protected via JWT.",
            "🛠️ Deployed with automated CI/CD pipelines, ensuring consistent and error-free production workflows."
        ]
    },
    {
        title: "Movie Found React App",
        description: "Developed a React-based movie discovery app using TMDb API to search for movies/TV shows, watch trailers, and view ratings, cast, and detailed information.",
        detailedDescription: "Built a Movie Finder application with React that integrates the TMDb (The Movie Database) API. The app allows users to search for movies and TV shows, fetch trailers, ratings, cast, and other details in real-time. Designed a clean, responsive interface with React and styled components/Tailwind, focusing on user-friendly search and quick access to relevant information. This project helped strengthen skills in API integration, state management, and UI development.",
        technologies: [2, 0, 3, 20, 21, 24, 27, 33, 36, 37,],
        link: "https://movie-found.vercel.app/",
        githubLink: "https://github.com/ajay1214/movie-found",
        isLinkedin: true,
        thumbnail: "/assets/projects/movieFound.png",
        // demoLink: "https://www.linkedin.com/posts/sinanptm_nuqs-statemanagement-urlpersistence-activity-7259535302615080961-F5Pf?utm_source=share&utm_medium=member_desktop",
        achievements: [
            "🔎 Search Functionality – Search movies and TV shows by title using TMDb API.",
            "🎬 Movie & Show Trailers – Embedded trailers fetched directly from the API.",
            "⭐ Ratings & Reviews – Display user ratings and popularity scores.",
            "👥 Cast & Actor Details – Show main cast, actors, and related information.",
            "📱 Responsive Design – Optimized for both desktop and mobile users.",
            "⚡ Fast API Integration – Smooth data fetching and rendering with React hooks."
        ]
    }
    // {
    //     title: "Sahithyolsav Manager",
    //     description: "A program management system with participant tracking and mark list generation for event organization.",
    //     detailedDescription: "Developed in three days using the MERN stack, this app includes mark lists, participant management, and caching for performance boosts. The UI is optimized for fast load times, and JWT authentication ensures data security.",
    //     technologies: [3, 4, 19, 18, 13],
    //     link: "https://sahityotsav-manager.onrender.com",
    //     githubLink: "https://github.com/sinanptm/Program-manager",
    //     isLinkedin: true,
    //     demoLink: "https://www.linkedin.com/posts/sinanptm_mern-react-redux-activity-7220717132450254848-7bGb?utm_source=share&utm_medium=member_desktop",
    //     thumbnail: "/assets/projects/program-manager.png",
    //     achievements: [
    //         "⚡ Improved performance by 70% through strategic memoization, optimizing rendering and data processing.",
    //         "📉 Reduced API calls by 80% with smart caching techniques, enhancing application efficiency.",
    //         "🔐 Implemented JWT authentication for secure access, protecting sensitive event and participant data.",
    //         "📑 Developed mark lists and participant management features, streamlining event organization tasks.",
    //         "🎨 Leveraged Mui Components for a smooth and intuitive user interface, improving user experience"
    //     ]
    // },
    // {
    //     title: "URL Shortener",
    //     description: "A URL shortening platform with click tracking analytics and personalized user dashboard features.",
    //     detailedDescription: "Developed with MERN stack and NestJS, this app offers URL shortening, click tracking, and personalized user dashboards. It provides experience in NestJS, focusing on modular architecture and dependency injection.",
    //     technologies: [2, 18, 13, 3, 21],
    //     link: "https://url-shortener-sooty-five.vercel.app",
    //     isLinkedin: true,
    //     githubLink: "https://github.com/sinanptm/url-shortener",
    //     demoLink: "https://www.linkedin.com/posts/sinanptm_nestjs-typescript-nodejs-activity-7252588020401389567-tyYv?utm_source=share&utm_medium=member_desktop",
    //     thumbnail: "/assets/projects/url-shortener.png",
    //     achievements: [
    //         "📊 Implemented click tracking and personalized user dashboards, providing actionable insights for link performance.",
    //         "🛠️ Gained hands-on experience with NestJS, focusing on modular clean architecture and dependency injection for scalability"
    //     ]
    // },
    // {
    //     title: "Ace-Quiz: Quiz App",
    //     description: "A modern quiz application with clean architecture implementation and automated deployment workflow.",
    //     detailedDescription: "This quiz app focuses on scalability and maintainable code, using tools like Radix UI and Redux for efficient state management. GitHub workflows and CI enhance deployment and testing capabilities.",
    //     technologies: [1, 0, 13, 4, 19, 18, 27, 33],
    //     link: "https://quiz-app-six-dusky.vercel.app",
    //     githubLink: "https://github.com/sinanptm/Quiz-app",
    //     thumbnail: "/assets/projects/quiz.png",
    //     isLinkedin: true,
    //     demoLink: "https://www.linkedin.com/posts/sinanptm_nextjs-typescript-cleanarchitecture-activity-7232711700452425729-J_81?utm_source=share&utm_medium=member_desktop",
    //     achievements: [
    //         "🎨 Integrated Radix UI and Redux Toolkit for efficient state management and a modern, accessible interface.",
    //         "🔄 Leveraged CI pipelines for automated deployment and testing, ensuring a robust and reliable release process"
    //     ]
    // },
    // {
    //     title: "Role-Based Candidate Management",
    //     description: "A secure candidate management system with role-based access control and file handling features.",
    //     detailedDescription: "A comprehensive candidate management platform featuring role-based access control, secure file uploads with AWS S3 presigned URLs, and real-time profile management. Built with TypeScript throughout the stack, it implements secure authentication, file handling, and extensive API endpoints for both admin and candidate portals.",
    //     technologies: [0, 3, 18, 19, 13, 7, 20, 27, 33, 28, 29, 42, 56],
    //     link: "https://candidate-management-psi.vercel.app",
    //     githubLink: "https://github.com/sinanptm/candidate-management",
    //     showGitStats: true,
    //     thumbnail: "/assets/projects/c-manage.png",
    //     achievements: [
    //         "🔐 Implemented secure JWT authentication with refresh tokens, ensuring robust and seamless user sessions.",
    //         "📁 Built a secure file management system with AWS S3 presigned URLs, enabling safe document uploads.",
    //         "👥 Developed a comprehensive role-based access control system, managing permissions for admins and candidates.",
    //         "🎨 Created a responsive UI with Tailwind CSS and shadcn/ui, optimized for all device sizes and accessibility.",
    //         "🔒 Ensured end-to-end type safety with TypeScript, reducing runtime errors and improving code reliability.",
    //         "🚀 Deployed frontend on Vercel and backend on AWS EC2, achieving high availability and performance.",
    //         "📊 Built an admin dashboard with analytics and candidate management tools for efficient oversight.",
    //         "🔄 Designed a RESTful API with Express.js, adhering to industry best practices for scalability.",
    //         "📱 Optimized for responsive design, supporting seamless experiences across desktops, tablets, and mobiles.",
    //         "🛡️ Implemented secure cookie-based session management, enhancing user data protection.",
    //         "📄 Added a comprehensive document upload and verification system, streamlining candidate workflows.",
    //         "⚡ Optimized performance with effective data caching strategies, reducing server load and latency.",
    //         "🔍 Integrated advanced search and filtering capabilities, improving usability for candidate management.",
    //         "📈 Enabled real-time progress tracking for candidates, enhancing transparency and engagement"
    //     ]
    // }
    // {
    //     title: "OLX & Netflix Clones",
    //     description: "Platform clones featuring real-time data synchronization and secure authentication implementation.",
    //     detailedDescription: "These clones, developed using React and Firebase, showcase responsive design and real-time data. TMDb API is used in the Netflix clone for movie data, and Firebase handles authentication and image uploads for the OLX clone.",
    //     technologies: [3, 22],
    //     githubLink: "https://github.com/sinanptm/OLX-clone",
    //     link: "https://netflix-clone-gamma-virid.vercel.app",
    //     thumbnail: "/assets/projects/netflix.png",
    //     isLinkedin: true,
    //     demoLink: "https://www.linkedin.com/posts/sinanptm_reactjs-firebase-tmdb-activity-7211610477729054720-nLr1?utm_source=share&utm_medium=member_desktop",
    //     achievements: [
    //        "📡 Integrated TMDb API for the Netflix clone, enabling dynamic and real-time movie data retrieval.",
    //        "🔐 Leveraged Firebase for secure authentication and efficient image uploads in the OLX clone, ensuring user safety"
    //     ]
    // }
];
