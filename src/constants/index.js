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
} from "../assets";

const profiles = [
  {
    link: "https://www.linkedin.com/in/raghavmittal79/",
    icon: linkedin,
  },
  {
    link: "https://www.geeksforgeeks.org/user/raghavm79/",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
  },
  {
    link: "https://github.com/raghavm07",
    icon: github,
  },
  {
    link: "https://leetcode.com/u/raghavm79/",
    icon: leetcode,
  },
  {
    link: "https://www.hackerrank.com/profile/raghavm79",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    link: "https://medium.com/@raghavm79",
    icon: medium,
  },
];

const achievements = [
  {
    title: "2th Position : Secured second position in college hackathon",
  },
  {
    title: "Branch Head of Computer Department (2021 - 2022)",
  },
  {
    title: "Lead college volleyball team",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  },
  {
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
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
    source_link: "https://github.com/raghavm07/worldmapapp",
    source_code_link: "https://github.com/raghavm07/worldmapapp",
  },
  {
    name: "Quiz App",
    description:
      "Website made using Nodejs and Express in the BackEnd. Diffrent type of quizes.",
    tags: [
      {
        name: "JavaScript,React",
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
  {
    name: "Chit Chat Application",
    description:
      "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
    tags: [
      {
        name: "Chatting",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: chitchat,
    // source_link: "https://chit-chat-app.onrender.com/",
    // source_code_link:
    //   "https://github.com/shinchancode/Chit-Chat-Real_time_chat_app",
  },
];

export const productProject = [
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
      "https://docs.google.com/presentation/d/1a829qjZvf08H_0x2-b3gdJSpAR6wKrtH/edit?usp=drivesdk&ouid=110213721605700921654&rtpof=true&sd=true",
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
      "https://docs.google.com/presentation/d/1MDZT7cHu-bpGlzWpNqIsv1v1FXEAdQ4b/edit?usp=drivesdk&ouid=110213721605700921654&rtpof=true&sd=true",
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

const experiences = [
  {
    title: "Software Devloper",
    company_name: "Motherson Technology Services Limited",
    icon: bny,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    link: "",
    points: [
      `Developed and customized numerous Dashboards and Master-screens using React.js and
       Asp.net Core APIs, resulting in seamless data integration with SAP, SPES, and other systems;
       enhanced data accessibility and visualization for improved decision-making.`,
      `Enhanced data accessibility and visualization for improved decision-making. Optimized system performance by refactoring stored procedures utilized in SSRS to generate
      reports; streamlined report generation process, reducing time spent by 40% and ensuring
      accurate and timely delivery of critical business insights.`,
      `My solutions have transformed data visualization, resulting in visually captivating
      representations of complex datasets. By implementing interactive charts, graphs, and tables,
      I've facilitated a 40% improvement in data comprehension, empowering decision-makers to
      extract actionable insights swiftly.`,
      "Using technologies like React.Js,Next.Js, SQL, C#, .NET ,Azure and Git.",
    ],
    link: "",
  },
];

const educations = [
  {
    degree: "Bachelor of Engineering",
    branch: "CSE",
    marks: "CGPA : 9.42 / 10",
    name: "Krishna Engineering College",
    from: "UPTU",
    year: "(2018 - 2022)",
    image: clg,
  },
  {
    degree: "12th Grade",
    branch: "Science",
    marks: "Percentage : 89.88 %",
    from: "Delhi",
    name: "Little Flowers Public Sr Sec School",
    year: "2018",
    image: school,
  },
  {
    degree: "10th Grade",
    branch: "SSC",
    marks: "Percentage : 95 %",
    from: "Delhi",
    name: "Little Flowers Public Sr Sec School",
    year: "2016",
    image: school,
  },
];

const values = [
  {
    name: "Emapthy",
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
};
