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
    "Skilled frontend developer with more than two years of expertise in web technologies such as React, Angular, NextJS, JavaScript, TypeScript, and CSS frameworks. Effective in Agile methodology and Scrum frameworks. I stay updated with industry trends to advance in frontend development. Collaborated with cross-functional teams in dynamic environments, resulting in a top-tier customer experience through tech innovations.",
  resumeLink: "https://drive.google.com/file/d/1kuXIwVzlGgS3_7nrpVTAwYz7Ou56CeXp/view?usp=drive_link",
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
    	"Primarily worked as a key frontend developer for a US-based client, thereby contributed to its 40% revenue boost.",
    	"Worked on the migration of a web app resulting in an improved user experience, having an average 100 new users daily and enhanced by optimising API calls, reducing redundancy by 23%.",
      "Developed an extension in AngularTS with a junior developer, providing mentorship, and achieved a 15%-20% increase in user engagement.",
      "Resolved numerous UI issues of the web application of a business community by using ReactJS.",
      "Enhanced an AI-based subscription-driven hiring platform with ReactTS & NextJS, garnering client praise for new features and improved functionalities."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "HighRadius",
    companyLogo: "/img/icons/common/highradiusLogo2.png",
    date: "Aug 2021 - June 2022",
    descBullets: [
    	"Worked with the frontend team to build a hiring platform.",
    	"Created web interfaces improving internship program management by 30%, benefiting 3,000+ applicants.",
      "Led a team of 7 peers to provide workflow and UI/UX design of the product.",
      "Developed a fully responsive Call Workboard Application using ReactJS and Material UI.",
      "Aims to offer analysts a customer list with data-driven call recommendations through grid and graph visualizations.",
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
    	"Designed a user-friendly compiler utilizing AJAX-based APIs, enabling code composition and execution.",
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

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
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
