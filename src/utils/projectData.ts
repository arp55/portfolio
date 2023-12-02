import { adminUi, afloatImg, dashBoardImg, ganttClone1 } from "./assets";

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
    image: ganttClone1,
    name: "Gantt Chart",
    description:
      "Built a gantt chart clone based on JIRA timeline chart. It allows user to see the tasks spanning across months/weeks by switching between month and week view using a dropdown. Each bar representing the duration of the task. Date can be toggled using the datepicker.",
    techStack: ["ReactJs", "MaterialUI", "Sass", "Mui-Datepicker"],
  },
  {
    id: Math.random(),
    image: adminUi,
    name: "Users Dashboard",
    description:
      "Users dashboard which displays all the users with pagination. Clicking on each page number will display the users respective to that page. Input box allows to search for the users. Users can be deleted individually or with multiple selections. A dialog box appears when a user has to be renamed.",
    techStack: ["ReactJs", "MaterialUI"],
  },
  {
    id: Math.random(),
    image: dashBoardImg,
    name: "Dashboard Layout",
    description:
      "Built a responsive dashboard with various components. The left panel collapses into a drawer in mobile ui. Integrated various Material ui components and hooks.",
    techStack: ["ReactJs", "MaterialUI", "css", "html5"],
  },
  {
    id: Math.random(),
    image: afloatImg,
    name: "Afloat Animation",
    description: "Lorem Ipsum",
    techStack: ["ReactJs", "css", "html5"],
  },
];
