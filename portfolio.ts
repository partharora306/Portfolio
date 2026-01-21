import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Parth Arora",
  title: "Hi there, I'm Parth Arora",
  description:
    "Frontend Engineer with 4+ years of experience building scalable web applications using React, Angular, Next.js, JavaScript, TypeScript and effectively leveraging AI-assisted tools. Experienced in owning features end-to-end, collaborating with stakeholders & cross-functional teams, and delivering impactful solutions in Agile environments.",
  resumeLink: "https://drive.google.com/file/d/1kuXIwVzlGgS3_7nrpVTAwYz7Ou56CeXp/view?usp=sharing",
};

export const openSource = {
  githubUserName: "partharora306",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:arora.parth7306@gmail.com",
  linkedin: "https://www.linkedin.com/in/partharora306/",
  github: "https://github.com/partharora306",
};

export const educationInfo: EducationType[] = [ 
  {
    schoolName: "Chitkara University, Punjab",
    subHeader: "Bachelor of Engineering in Computer Science & Engineering",
    duration: "August 2018 - July 2022",
    desc: "",
    grade: "CGPA: 9.20/10",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer ||",
    company: "HashedIn by Deloitte",
    companyLogo: "/img/icons/common/HashedInLogo.png",
    date: "April 2024 - present",
    descBullets: [
    	"Led frontend implementation of a micro-frontend pricing & promotions platform for enterprise restaurant clients, collaborating with Deloitte US stakeholders and contributing to $10.2M in revenue.",
    	"Frontend point of contact for a monorepo-based cyber resilience platform, delivering 10+ core modules using React & TypeScript and ensuring on-time feature delivery & deployments.",
      "Revamped Deloitte’s AI Marketplace UI using React, Next.js and TypeScript, improving design consistency and increasing enterprise adoption by 20%.",
      "Delivered data-driven UI for a climate tech navigator using Angular & TypeScript with D3.js, ag-Grid & PptxGenJS, enabling faster analysis for 500+ stakeholders via interactive charts, maps and exportable reports.",
      "Recognized with 3 Spot Awards and 1 Top Impactor Award, for impactful frontend contributions."
    ],
  },
  {
    role: "Software Engineer",
    company: "Navtech",
    companyLogo: "/img/icons/common/navtechLogo.png",
    date: "Sept 2022 - March 2024",
    descBullets: [
    	"Primarily worked as a key frontend developer for a US-based tax credit platform, contributing to a 40% revenue boost.",
    	"Migrated an Angular app from v13 to v18, improving user experience & driving 100+ new users daily, and reduced API usage by 70% through caching.",
      "Built an extension using Angular & TypeScript, mentoring a developer and achieving 25% increase in users.",
      "Successfully resolved 85% production UI issues of the web application of a business community by using React.",
      "Enhanced an AI-based subscription-driven hiring platform using React, Next.js & TypeScript, garnering client praise for new features and improved functionalities."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "HighRadius",
    companyLogo: "/img/icons/common/highradiusLogo2.png",
    date: "Aug 2021 - June 2022",
    descBullets: [
    	"Developed a hiring platform to streamline internship program management, benefiting 3,000+ applicants annually.",
    	"Led a team of 7 peers to provide workflow and UI/UX design of the product.",
      "Built an app providing analysts a customer list with data-driven call recommendations via grid & graph visualizations.",
      "Created web interfaces using React & Material UI and was awarded as Star Intern for my dedication and skills.",
    ],
  },
  {
    role: "Summer Intern",
    company: "HighRadius",
    companyLogo: "/img/icons/common/highradiusLogo2.png",
    date: "June 2021 - July 2022",
    descBullets: [
      "Developed a FinTech B2B invoice management system using React, enabling faster invoice tracking and reporting.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "AI Expense Tracker",
    tech: 'React, Next.js, Firebase, Tailwind CSS',
    descBullets: [
    	"Built a personal finance web app with OCR-based receipt scanning and real time expense tracking.",
    	"Improved Lighthouse performance score from 68 to 94 by applying code-splitting, caching and image optimization."
    ],
  },
  {
    name: "Mini Market",
    tech: 'React.js, Node.js, Express, MongoDB',
    descBullets: [
    	"Developed a responsive e-commerce platform for purchasing everyday essentials with fast doorstep delivery.",
    	"Enhanced UI performance and optimized rendering, reduced page load times by 35%, ensuring a seamless user experience."
    ],
  },
  {
    name: "Compiler",
    tech: 'React.js, CSS',
    descBullets: [
    	"Developed a user-friendly compiler utilizing AJAX-based APIs, enabling code composition and execution.",
    	"Achieved efficient code translation for a variety of supported languages such as C, C++, Java, Python, and JavaScript."
    ],
  },
  {
    name: "Discussion App",
    tech: 'JavaScript, HTML, CSS',
    descBullets: [
    	"Designed to connect users with shared interests, enables them to create, join, and engage in discussions on diverse topics.",
    	"Users have the ability to upvote, downvote, and comment on answers, enhancing engagement, fostering open dialogue."
    ],
  }
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Parth Arora",
  description: greetings.description,
  author: "Parth Arora",
  image: "",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Parth",
    "Parth",
    "Portfolio",
    "Parth Portfolio ",
    "Parth Arora Portfolio",
  ],
};
