import { BsLinkedin } from "react-icons/bs";
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
  hf,
  bny,
  holopin,
  clg,
  school,
  crypto,
  oop,
  yml,
  crud,
  dwld,
  onetomany,
  trie,
  ds,
  cg,
  port_3d,
  jsp,
  chitchat,
  notes,
  react1,
  be,
  sql,
  mini,
  snl,
  leetcode,
  github,
  linkedin,
  medium,
  pokedex,
  worldmap,
  quiz,
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
    title:
      "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
  },
  {
    title: "Twice State level Table-Tennis Winner (2021 and 2022)",
  },
  {
    title:
      "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
  },
  {
    title: "Branch Head of Information Technology Department (2021 - 2022)",
  },
  {
    title:
      "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
  },
  {
    title:
      "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
  },
  {
    title: "Played Nationals in Throwball for U-14 category. (2015)",
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
    image: be,
    source_link:
      "https://drive.google.com/file/d/1MYxckHKsZKa7EmMTMdgo44tqBsgA51Bu/view?usp=drive_link",
    source_code_link: "https://github.com/shinchancode/Final-Year-Project",
  },

  {
    name: "DBMS Lab",
    description:
      "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: sql,
    source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
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

export { list, profiles, technologies, experiences, educations, achievements };
