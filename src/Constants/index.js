import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import reactjs from "../assets/reactjs.png";
import vscode from "../assets/vscode.png";
import javascript from "../assets/javascript.png";
import web1 from "../assets/web1.png";
import git from "../assets/git.png";
import calc1 from "../assets/calc1.png";
import calc2 from "../assets/calc2.png";
import calc3 from "../assets/calc3.png";
import calc5 from "../assets/calc5.png";

const services = [
  {
    title: "Web Developer",
    icon: web1,
  },
  {
    title: "React Developer",
    icon: reactjs,
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
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Reactjs",
    icon: reactjs,
  },
  {
    name: "Vscode",
    icon: vscode,
  },
];

const projects = [
{
  name: "Calculator",
  description:
  "This is a calculator I made using HTML, javascript and reactjs",
  tags: [
    {
      name: "Html",
      color: "blue-text-gradient",
    },
    {
      name: "Javascript",
      color: "green-text-gradient",
    },
    {
      name: "Reactjs",
      color: "pink-text-gradient",
    },
],
image: calc1,
source_code_link: "https://github.com/Nakira824/Calculator.git",
source_deploy_link: "https://calculator-git-main-nakiras-projects.vercel.app/",
},
{
  name: "Tribute",
  description:
    "This is a tribute that highlights the acheivements of Chadwick Boseman using css and html",
  tags: [
    {
      name: "css",
      color: "blue-text-gradient",
    },
    {
      name: "html",
      color: "green-text-gradient",
    },
  ],
  image: calc2,
  source_code_link: "https://github.com/Nakira824/Tribute.git",
  source_deploy_link: "https://tribute-seven-kohl.vercel.app/"
},
{
  name: "Socials",
  description:
  "A socials challenge from Frontend Mentor I did using css and html",
  tags: [
    {
      name: "css",
      color: "blue-text-gradient",
    },
    {
      name: "html",
      color: "green-text-gradient",
    },
  ],
  image: calc3,
  source_code_link: "https://github.com/Nakira824/Socials.git",
  source_deploy_link: "https://socials-five-psi.vercel.app/",
},
{
  name: "Weather App",
  description:
  "This is a weather app that I built using javascript, reactjs and vite",
  tags: [
    {
      name: "javascript",
      color: "blue-text-gradient"
    },
    {
      name: "reactjs",
      color: "green-text-gradient"
    },
    {
      name: "vite",
      color: "pink-text-gradient"
    },
  ],
  image: calc5,
  source_code_link: "https://github.com/Nakira824/Weather_app.git",
  source_deploy_link: "https://weather-app-ecru-five-86.vercel.app/"
},
];
export { services, technologies, projects };