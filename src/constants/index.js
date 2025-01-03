import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  motherson,
  clg,
  school,
  chitchat,
  leetcode,
  github,
  linkedin,
  medium,
  pokedex,
  worldmap,
  quiz,
  empathy,
  resilience,
  innovation,
  youtube,
  estate,
  db,
  sdlc,
  stakeholders,
  C,
  spartaAI,
  rethink,
  Figma,
  Ct,
  reacttool,
  js,
  excel,
  azure,
  nayaySetu,
  credible,
  rethink1,
} from "../assets";

const profiles = [
  {
    link: "https://www.linkedin.com/in/raghavmittal79/",
    icon: linkedin,
    name: "LinkedIn",
  },
  // {
  //   link: "https://leetcode.com/u/raghavm79/",
  //   icon: leetcode,
  //   name: "LeetCode",
  // },
  {
    link: "https://github.com/raghavm07",
    icon: github,
    name: "GitHub",
  },

  // {
  //   link: "https://www.geeksforgeeks.org/user/raghavm79/",
  //   icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
  //   name: "GeekForGeeks",
  // },
  // {
  //   link: "https://www.hackerrank.com/profile/raghavm79",
  //   icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  //   name: "HackerRank",
  // },
  {
    link: "https://medium.com/@raghavm79",
    icon: medium,
    name: "Medium",
  },
];

const achievements = [
  {
    title: "Branch Head of Computer Department (2021 - 2022)",
  },
  {
    title: "Secured second position in college hackathon",
  },
  {
    title: "Lead college volleyball team",
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=256",
  },
  {
    name: "Figma",
    icon: Figma,
  },
  // {
  //   name: "Bootstrap",
  //   icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  // },
  {
    name: "Azure",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-azure-logo-icon-download-in-svg-png-gif-file-formats--microsoft-destination-brand-logos-pack-icons-1583129.png?f=webp&w=256",
  },
  // {
  //   name: "C++ tool",
  //   icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  // },
  {
    name: "C#",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-c-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226082.png?f=webp&w=256",
  },
  {
    name: "React JS",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Sql",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-sql-logo-icon-download-in-svg-png-gif-file-formats--microsoft-server-brand-brands-pack-logos-icons-190807.png?f=webp&w=256",
  },
];

const list = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "web",
    title: "Web Dev",
  },
];

export const webProject = [
  {
    name: "Pokedex",
    description:
      "Created an impressive website made using React using Pokemon Api",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
    ],
    image: pokedex,
    source_link: "https://github.com/raghavm07/Pokedex",
    source_code_link: "https://github.com/raghavm07/Pokedex",
  },
  {
    name: "World Map App",
    description:
      "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "html css tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: worldmap,
    source_link: "https://worldmapapp.vercel.app/",
    source_code_link: "https://github.com/raghavm07/worldmapapp",
  },
  {
    name: "Quiz App",
    description:
      "Quiz app made using React.js,Tailwind,Chadcn,Nodejs and Express in the BackEnd. You can play diffrent type of quizes.",
    tags: [
      {
        name: "JavaScript,React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_link: "https://math-quiz-app-mu.vercel.app/",
    source_code_link: "https://github.com/raghavm07/MathQuizApp",
  },
];

export const productProject = [
  {
    name: "Sparta.AI",
    description: `A unified AI-powered tool that assists creators in producing engaging videos, right from from ideation to publishing, on platforms like YouTube and TikTok.`,
    tags: [
      {
        name: "Prototype",
        color: "blue-text-gradient",
      },
      {
        name: "Intelectual Design",
        color: "green-text-gradient",
      },
      {
        name: "Metrics",
        color: "pink-text-gradient",
      },
    ],
    image: spartaAI,
    source_link:
      "https://drive.google.com/file/d/1bNfpGEsJwTgsCi1vKuLDu8C535BXVWzf/view?usp=sharing",
    source_code_link:
      "https://drive.google.com/file/d/11zobVq1VPkyUk5t0OLd3YqzXeZ8JwzF5/view?usp=drive_link",
  },
  {
    name: "Legacy Quest",
    description: `Wealth transfer is a critical issue that is often overlooked, resulting in significant personal, familial, and economic consequences. This has led to - 1)Untracked Assets, 2)Family Conflicts, 3)Idle Savings Disruption of Financial Futures`,
    tags: [
      {
        name: "Wireframing",
        color: "blue-text-gradient",
      },
      {
        name: "Survey",
        color: "green-text-gradient",
      },
      {
        name: "Sec. Research",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_link:
      "https://drive.google.com/file/d/1vrZBO9OIHR7rhhhYdGWlpf9_cCEez7vP/view?usp=drive_link",
    source_code_link:
      "https://drive.google.com/file/d/1egBlRSU3HhZAcDFs-9CJsAn5BBJZ_fMe/view?usp=drive_link",
  },
  {
    name: `Nyaya Setu`,
    description: `Access to justice for low-income individuals in Indiaʼs Tier 3 cities and rural areas faces significant challenges, with barriers such as inadequate infrastructure, financial constraints, and social biases hindering their ability to seek legal recourses and prevent them from exercising their rights effectively.`,
    tags: [
      {
        name: "PRD",
        color: "blue-text-gradient",
      },
      {
        name: "Research",
        color: "green-text-gradient",
      },
      {
        name: "Competitor Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: nayaySetu,
    source_link:
      "https://drive.google.com/file/d/1a3UtrFGg6cs7rTwCjHIGALUfRTxDRHT2/view?usp=drive_link",
    source_code_link:
      "https://drive.google.com/file/d/1UQWsQFwP5-uMi0phbnBVlmI5wSAAK0SJ/view?usp=drive_link",
  },
];
export const allwebProject = [
  {
    name: "Pokedex",
    description:
      "Created an impressive website made using React using Pokemon Api",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
    ],
    image: pokedex,
    source_link: "https://github.com/raghavm07/Pokedex",
    source_code_link: "https://github.com/raghavm07/Pokedex",
  },
  {
    name: "World Map App",
    description:
      "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "html css tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: worldmap,
    source_link: "https://worldmapapp.vercel.app/",
    source_code_link: "https://github.com/raghavm07/worldmapapp",
  },
  {
    name: "Quiz App",
    description:
      "Quiz app made using React.js,Tailwind,Chadcn,Nodejs and Express in the BackEnd. You can play diffrent type of quizes.",
    tags: [
      {
        name: "JavaScript,React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_link: "https://math-quiz-app-mu.vercel.app/",
    source_code_link: "https://github.com/raghavm07/MathQuizApp",
  },
];

export const allproductProject = [
  {
    name: "Sparta.AI",
    description: `A unified AI-powered tool that assists creators in producing engaging videos, right from from
ideation to publishing, on platforms like YouTube and TikTok.`,
    tags: [
      {
        name: "Prototype",
        color: "blue-text-gradient",
      },
      {
        name: "Intelectual Design",
        color: "green-text-gradient",
      },
      {
        name: "Metrics",
        color: "pink-text-gradient",
      },
    ],
    image: spartaAI,
    source_link:
      "https://drive.google.com/file/d/1bNfpGEsJwTgsCi1vKuLDu8C535BXVWzf/view?usp=sharing",
    source_code_link:
      "https://drive.google.com/file/d/11zobVq1VPkyUk5t0OLd3YqzXeZ8JwzF5/view?usp=drive_link",
  },
  {
    name: "Legacy Quest",
    description: `Wealth transfer is a critical issue that is often overlooked, resulting in significant personal, familial, and economic consequences. This has led to - 1)Untracked Assets, 2)Family Conflicts, 3)Idle Savings Disruption of Financial Futures`,
    tags: [
      {
        name: "Wireframing",
        color: "blue-text-gradient",
      },
      {
        name: "Survey",
        color: "green-text-gradient",
      },
      {
        name: "Sec. Research",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_link:
      "https://drive.google.com/file/d/1vrZBO9OIHR7rhhhYdGWlpf9_cCEez7vP/view?usp=drive_link",
    source_code_link:
      "https://drive.google.com/file/d/1egBlRSU3HhZAcDFs-9CJsAn5BBJZ_fMe/view?usp=drive_link",
  },
  {
    name: `Enhancing Long-Form Content Engagement on YouTube with AI-Powered Recommendations`,
    description: `YouTube has traditionally dominated long-form video content, offering creators lucrative ad revenue opportunities.However, the rise of short-form content is undermining long-form video traffic,threatening YouTube's established model.`,
    tags: [
      {
        name: "PRD",
        color: "blue-text-gradient",
      },
      {
        name: "Research",
        color: "green-text-gradient",
      },
      {
        name: "Competitor Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_link:
      "https://drive.google.com/file/d/1MYxckHKsZKa7EmMTMdgo44tqBsgA51Bu/view?usp=drive_link",
    source_code_link:
      "https://drive.google.com/file/d/1YywQ7-sKBRchbLMOZ0FUB1OC7gPwVAyH/view?usp=drive_link",
  },
  {
    name: `Nyaya Setu`,
    description: `Access to justice for low-income individuals in Indiaʼs Tier 3 cities and rural areas faces significant challenges, with barriers such as inadequate infrastructure, financial constraints, and social biases hindering their ability to seek legal recourses and prevent them from exercising their rights effectively.`,
    tags: [
      {
        name: "PRD",
        color: "blue-text-gradient",
      },
      {
        name: "Research",
        color: "green-text-gradient",
      },
      {
        name: "Competitor Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: nayaySetu,
    source_link:
      "https://drive.google.com/file/d/1a3UtrFGg6cs7rTwCjHIGALUfRTxDRHT2/view?usp=drive_link",
    source_code_link:
      "https://drive.google.com/file/d/1UQWsQFwP5-uMi0phbnBVlmI5wSAAK0SJ/view?usp=drive_link",
  },
  {
    name: "Credible AI",
    description: `The widespread proliferation of deepfake technology presents significant challenges. While deepfakes offer positive applications in entertainment, education, and personalized content, their misuse has led to widespread risks.`,
    tags: [
      {
        name: "System Design",
        color: "blue-text-gradient",
      },
      {
        name: "Technical Feasibilty",
        color: "green-text-gradient",
      },
      {
        name: "Metrics",
        color: "pink-text-gradient",
      },
    ],
    image: credible,
    source_link:
      "https://drive.google.com/file/d/1dQjCwA9KQ_ExkbW1ihsGna6LhCj3ioSU/view?usp=drive_link",
    source_code_link:
      "https://drive.google.com/file/d/1P6IEkgm0pRS7z1CasdnBb_XVEsHVAphG/view?usp=drive_link",
  },
];

const thoughts = [
  {
    name: "Database Fundamentals: Relational vs. NoSQL Explained",
    image: db,
    source_link:
      "https://medium.com/@raghavm79/database-fundamentals-relational-vs-nosql-explained-fe490df12f68",
  },
  {
    name: "Bridging the Gap: How to Align Stakeholder Expectations with Technical Feasibility",
    image: stakeholders,
    source_link:
      "https://www.linkedin.com/posts/raghavmittal79_softwaredevelopment-stakeholderengagement-activity-7256544658686652418-uOkc?utm_source=share&utm_medium=member_android",
  },
  {
    name: "Understanding the Software Development Life Cycle (SDLC)",
    image: sdlc,
    source_link:
      "https://medium.com/@raghavm79/understanding-the-software-development-life-cycle-sdlc-d1167dfdb009",
  },
];
const courses = [
  {
    name: "Product Management  By-: Shravan Tickoo",
    image: rethink,
    source_link: "https://rethinksystems.in/",
  },
  {
    name: "Microsoft Excel",
    image: excel,
    source_link:
      "https://www.udemy.com/course/microsoft-excel-improve-your-skills-quickly/",
  },
  {
    name: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    image: reacttool,
    source_link:
      "https://www.udemy.com/course/complete-react-developer-zero-to-mastery",
  },
];
const AllCourses = [
  {
    name: "Product Management  By-: Shravan Tickoo",
    image: rethink,
    source_link: "https://rethinksystems.in/",
  },
  {
    name: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    image: reacttool,
    source_link:
      "https://www.udemy.com/course/complete-react-developer-zero-to-mastery",
  },
  {
    name: "Microsoft Excel",
    image: excel,
    source_link:
      "https://www.udemy.com/course/microsoft-excel-improve-your-skills-quickly/",
  },
  {
    name: "Asp.Net Core 9 (.NET 9)",
    image: Ct,
    source_link:
      "https://www.udemy.com/course/asp-net-core-true-ultimate-guide-real-project",
  },
  {
    name: "The Complete JavaScript Course 2024",
    image: js,
    source_link:
      "https://www.udemy.com/course/the-complete-javascript-course/?couponCode=ACCAGE0923",
  },
  {
    name: "Microsoft Azure",
    image: azure,
    source_link:
      "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification",
  },
];

const experiences = [
  {
    title: "Product Management Fellow",
    company_name: "Rethink Systems By Shravan Tickoo",
    icon: rethink,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    link: "",
    points: [
      `Conducted in-depth problem validation through rigorous user research, identifying key pain points and developing tailored solutions.`,
      `Gained hands-on experience in creating Product Requirement Documents (PRDs), wireframing, prototyping, and system design.`,
      `Acquired comprehensive knowledge of end-to-end product management processes, including user-centered design and iterative development.`,
    ],
    link: "",
  },
  {
    title: "Software Devloper",
    company_name: "Motherson Technology Services Limited",
    icon: motherson,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    link: "",
    points: [
      `Collaborated with stakeholders and cross-functional teams to define requirements and deliver interactive dashboards, improving data-driven decision-making for end-users.`,
      `Spearheaded backend optimization initiatives, reducing report generation time by 40% to enhance system efficiency and align with user needs.`,
      "Using technologies like React.Js,Next.Js, SQL, C#, .NET ,Azure and Git.",
    ],
    link: "",
  },
];

const educations = [
  // {
  //   degree: "Product Management",
  //   //branch: "CSE",
  //   marks: "CGPA : 9.42 / 10",
  //   name: "Rethink Systems",
  //   from: "Shravan Tickoo",
  //   year: "2024",
  //   image: rethink,
  // },
  {
    degree: "Bachelor of Engineering",
    branch: "CSE",
    marks: "CGPA : 9.42 / 10",
    name: "Krishna Engineering College",
    from: "AKTU",
    year: "2022",
    image: clg,
  },
  {
    degree: "12th Grade",
    branch: "Science",
    marks: "Percentage : 89.88 %",
    from: "Delhi",
    name: "L.F.P Sr Sec School",
    year: "2018",
    image: school,
  },
  {
    degree: "10th Grade",
    branch: "SSC",
    marks: "Percentage : 95 %",
    from: "Delhi",
    name: "L.F.P Sr Sec School",
    year: "2016",
    image: school,
  },
];

const values = [
  {
    name: "Empathy",
    image: empathy,
  },
  {
    name: "Resilience",
    image: resilience,
  },
  {
    name: "Innovation",
    image: innovation,
  },
];

export {
  list,
  profiles,
  technologies,
  experiences,
  educations,
  values,
  achievements,
  thoughts,
  courses,
  AllCourses,
};
