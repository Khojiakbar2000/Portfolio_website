import { artHaus, meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    docker,
    estate,
    express,
    git,
    github,
    graphql,
    greekArt,
    html,
    javascript,
    linkedin,
    linux,
    mongodb,
    motion,
    mui,
    mysql,
    nestjs,
    nextjs,
    nginx,
    nodejs,
    nvm,
    php,
    pm2,
    postman,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    socketdotio,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nestjs,
        name: "NestJS",
        type: "Backend",
    },
    {
        imageUrl: graphql,
        name: "GraphQL",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: socketdotio,
        name: "Socket.io",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: nginx,
        name: "Nginx",
        type: "DevOps",
    },
    {
        imageUrl: pm2,
        name: "PM2",
        type: "DevOps",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Tools",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "DevOps",
    }
];

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "Fintegra",
        location: "United States",
        icon: null,
        iconBg: "#4a90e2",
        date: "Mar 2023 – Sep 2025",
        points: [
            "Contributed to the backend foundation of multiple full-stack platforms using NestJS, MongoDB, and GraphQL, ensuring scalable, secure, and maintainable APIs.",
            "Developed authentication flows, data management modules, and real-time features powered by Socket.io.",
            "Deployed and maintained production environments on Ubuntu VPS with Docker, Nginx, and PM2, while implementing SSL/HTTPS and automated CI/CD pipelines through GitHub Actions.",
            "Reduced average API response times via caching and query optimization, and maintained test coverage and API documentation in Postman.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "SkyTech solutions",
        location: "Tashkent, Uzbekistan",
        icon: null,
        iconBg: "#61dafb",
        date: "Apr 2022 – Jan 2023",
        points: [
            "Delivered modern, responsive interfaces using React.js, TypeScript, and Redux Toolkit, with a strong focus on usability and clean architecture.",
            "Translated Figma wireframes into dynamic, production-ready views built with SCSS/SASS and Axios, integrating data layers seamlessly with backend APIs.",
            "Improved page performance through lazy loading, code splitting, and optimized bundling.",
            "Collaborated closely with backend and QA engineers to ensure consistency and release stability, maintaining workflow and deployment efficiency via Git and GitHub Actions.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    }
];

export const projects = [
    {
        iconUrl: greekArt,
        theme: 'btn-back-purple',
        name: 'ArtHaus',
        description: 'Built a full-stack art marketplace focused on showcasing artwork through a clean, scalable platform designed for real-world use.',
        link: 'http://72.60.236.97:4000/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-orange',
        name: 'Cafert',
        description: 'Built a full-stack platform for cafés to manage menus, orders, and operations efficiently, with a focus on reliability and performance.',
        link: 'http://72.60.236.97:3000/',
    }
];