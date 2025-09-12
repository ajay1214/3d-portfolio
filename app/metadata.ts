import { canonicalUrl, hostedUrl, profile } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: `Ajay Bind - Full Stack Developer `,
        template: "%s | Ajay Bind - Full Stack Developer",
    },
    description: "Full Stack Developer specializing in MERN stack. Building scalable web apps with React, Node.js, Express, MongoDB, and Next.js. Open for collaboration.",
    keywords: [
        "Ajay Bind",
        "Ajay Bind Developer",
        "Ajay Bind Full Stack Developer",
        "Ajay Bind Jaunpur, Uttar Pradesh, India",
        "Ajay Bind Portfolio",
        "Ajay Bind projects",
        "Ajay Bind tech stack",
        "Ajay Bind Portfolio",
        "Full Stack Developer Portfolio",
        "MERN Stack Specialist",
        "React Developer Portfolio",
        "Node.js Developer Portfolio",
        "Kerala Full Stack Developer",
        "India MERN Stack Developer",
        "Kozhikode Software Engineer",
        "Portfolio Web Developer India",
        "Ajay Bind MERN",
        "Software Engineer Portfolio India",
        "MERN Developer in Kerala",
        "Ajay Bind Professional Portfolio",
        "Top MERN Stack Developer India",
        "Next.js Developer Portfolio",
        "Ajay Bind Jaunpur",
        "Express.js Developer Portfolio",
        "MongoDB Developer Portfolio",
    ],
    authors: [
        {
            name: "Ajay Bind",
            url: "https://github.com/ajay1214",
        }
    ],
    creator: "Ajay Bind (ajay1214)",
    publisher: "ajay1214",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    applicationName: "Ajay Portfolio",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: hostedUrl,
        siteName: "Ajay Portfolio",
        title: `${profile.name} | ${profile.title}`,
        description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js.",
        images: [
            {
                url: "/screenshots/ajayPic.png",
                width: 1200,
                height: 630,
                alt: "Ajay Bind - Full Stack Developer Portfolio",
                type: "image/png",
            }
        ],
        countryName: "India",
    },
    appleWebApp: {
        capable: true,
        title: "Ajay Portfolio",
        statusBarStyle: "black-translucent",
    },
    verification: {
        google: "google332e521595495b52",
    },
    twitter: {
        card: "summary_large_image",
        title: `${profile.name} | ${profile.title}`,
        description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js.",
        images: ["/screenshots/twitter-image.png"],
        creator: `@${profile.xUserName}`,
        site: `@${profile.xUserName}`,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/icons/ajayIco.ico" },
            { url: "/icons/ajayPic16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/icons/ajayPic32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/icons/ajayPic96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/icons/ajayPic57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/icons/ajayPic60x60.png", sizes: "60x60", type: "image/png" },
            { url: "/icons/ajayPic72x72.png", sizes: "72x72", type: "image/png" },
            { url: "/icons/ajayPic76x76.png", sizes: "76x76", type: "image/png" },
            { url: "/icons/ajayPic114x114.png", sizes: "114x114", type: "image/png" },
            { url: "/icons/ajayPic120x120.png", sizes: "120x120", type: "image/png" },
            { url: "/icons/ajayPic144x144.png", sizes: "144x144", type: "image/png" },
            { url: "/icons/ajayPic152x152.png", sizes: "152x152", type: "image/png" },
            { url: "/icons/ajayPic180x180.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/icons/ajayIco.ico"]
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: canonicalUrl,
        languages: {
            "en-US": canonicalUrl,
        },
    },
    category: "technology",
    classification: "Portfolio Website",
    metadataBase: new URL(hostedUrl),
    assets: '/assets',
    other: {
        "google-site-verification": "google332e521595495b52",
        "msapplication-TileColor": "#d830dc",
        "msapplication-TileImage": "/icons/ajayPic144x144.png",
        "msapplication-config": "/browserconfig.xml",
        "llms-txt": `${hostedUrl}/llms.txt`
    },
};

export default metadata;