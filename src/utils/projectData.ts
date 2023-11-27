import { afloatImg, dashBoardImg } from "./assets";

export const webSkills = [
  "html",
  "css",
  "javascript",
  "reactjs",
  "nextjs",
  "redux",
  "sass",
  "nodejs",
  "expressjs",
  "mysql",
  "mongodb",
  "animations",
];

export const nativeSkills = [
  "react native",
  "animated",
  "expo",
  "react native reanimated",
  "react native gesture handler",
  "react native redash",
  "react native svg",
];

export const projects = [
  {
    id: Math.random(),
    image: dashBoardImg,
    name: "Dashboard Layout",
    description: [
      "Built a responsive dashboard with various components",
      "The left panel collapses into a drawer in mobile ui",
      "Integrated various Material ui components and hooks",
    ],
    techStack: ["ReactJs", "MaterialUI", "css", "html5"],
  },
  {
    id: Math.random(),
    image: afloatImg,
    name: "Afloat Animation",
    description: ["Lorem Ipsum"],
    techStack: ["ReactJs", "MaterialUI", "css", "html5"],
  },
];
