import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  minecraft,
  tshirt,
  mern,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend (ReactJS)",
    icon: mobile,
  },
  {
    title: "Backend (NodeJS)",
    icon: backend,
  },
  {
    title: "Blockchain (Solidity)",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "T-Shirt customizer",
    description:
      "Customizable T-Shirt Design project. This interactive web application allows users to create their own unique t-shirt designs by selecting different colors and uploading logo files. The project is built using the powerful three.js library for 3D rendering.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/Starklord17/threejs-t-shirt",
  },
  {
    name: "Minecraft Clon",
    description:
      "A simple 3D-rendered clone of the popular game Minecraft. Players can navigate and engage with in-game elements. Explore the virtual world using mouse and WASD controls. Your in-game progress is automatically preserved in your browser's local storage, allowing for seamless, uninterrupted gameplay.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "ViteJS",
        color: "pink-text-gradient",
      },
    ],
    image: minecraft,
    source_code_link: "https://github.com/Starklord17/React-Minecraft-Clone",
  },
  {
    name: "Image Generation App",
    description:
    "Discover a powerful AI image generation tool inspired by Midjourney & DALL-E. Seamlessly managed with MongoDB's cloud-based database. Utilizes Express for Node.js reliability and features a user-friendly React.js UI. Enhanced with AI tools from OpenAI, Midjourney, and DALL-E via the OpenAI API, offering endless creative possibilities.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: mern,
    source_code_link: "https://github.com/Starklord17/AI-ImageGenerationApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
