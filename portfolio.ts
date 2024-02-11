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
    "Skilled frontend developer with more than two years of expertise in web technologies such as React, Angular, NextJS, JavaScript, TypeScript, and CSS frameworks. Effective in Agile methodology and Scrum frameworks. Staying updated with industry trends to advance in frontend development. Collaborated with cross-functional teams in fluid environments, resulting in a top-tier customer experience through tech innovations.",
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
    role: "Software Engineer",
    company: "Navtech",
    companyLogo: "/img/icons/common/navtechLogo.png",
    date: "Sept 2022 - Present",
    descBullets: [
    	"Primarily worked with the US-based client team as a key frontend developer, contributed to its 40% revenue boost.",
    	"Contributed to the migration of a web app resulting in an improved user experience, having an average 100 new users daily and enhanced by optimising API calls, reducing redundancy by 3x.",
      "Built an extension in AngularTS, providing mentorship to a junior developer, achieved a 25% increase in users.",
      "Successfully resolved 85% production UI issues of the web application of a business community by using ReactJS.",
      "Enhanced an AI-based subscription-driven hiring platform with ReactTS & NextJS, garnering client praise for new features and improved functionalities."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "HighRadius",
    companyLogo: "/img/icons/common/highradiusLogo2.png",
    date: "Aug 2021 - June 2022",
    descBullets: [
    	"Built a hiring platform with frontend team to improve internship program management, benefiting 3,000+ applicants.",
    	"Led a team of 7 peers to provide workflow and UI/UX design of the product.",
      "Built an app providing analysts a customer list with data-driven call recommendations via grid & graph visualizations.",
      "Created web interfaces using ReactJS & Material UI, and was awarded as STAR INTERN for my dedication and skills.",
      "Developed a Fintech B2B full-stack Invoice Management Application using ReactJS, JDBC, Java & Servlets.",
      "The web app featured CRUD operations impacting MySQL behavior and integrated pagination for easier data access."
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Mini Market",
    tech: 'React.js, Node.js, Express, MongoDB',
    descBullets: [
    	"Created a robust online platform for the purchase of everyday essentials and provide fast doorstep delivery.",
    	"Aimed to collaborate with local suppliers and logistics for improved product availability and streamlined delivery."
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
