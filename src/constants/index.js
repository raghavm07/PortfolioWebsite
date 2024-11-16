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
  bny,
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
    icon: javascript,
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
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  // {
  //   name: "C++ tool",
  //   icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  // },
  {
    name: "C#",
    icon: C,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MySql",
    icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
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
    name: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    image: reactjs,
    source_link:
      "https://www.udemy.com/course/complete-react-developer-zero-to-mastery",
  },
  {
    name: "Asp.Net Core 9 (.NET 9)",
    image: C,
    source_link:
      "https://www.udemy.com/course/asp-net-core-true-ultimate-guide-real-project",
  },
];

const experiences = [
  {
    title: "Software/Product Devloper",
    company_name: "Motherson Technology Services Limited",
    icon: bny,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    link: "",
    points: [
      `Developed dashboards and master screens with React.js and ASP.NET Core APIs, integrating data from SAP, SPES, and other systems to improve accessibility and visualization for decision-making.`,
      `Optimized data accessibility, visualization, and system performance by refactoring SSRS procedures, cutting report generation time by 40% and ensuring timely, accurate business insights.`,
      `Transformed data visualization with interactive charts, graphs, and tables, boosting data comprehension by 40% and enabling decision-makers to extract actionable insights swiftly.`,
      "Using technologies like React.Js,Next.Js, SQL, C#, .NET ,Azure and Git.",
    ],
    link: "",
  },
];

const educations = [
  {
    degree: "Product Management",
    //branch: "CSE",
    marks: "CGPA : 9.42 / 10",
    name: "Rethink Systems",
    from: "Shravan Tickoo",
    year: "2024",
    image: rethink,
  },
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
};
