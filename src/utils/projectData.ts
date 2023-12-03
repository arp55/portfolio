import {
  adminUi,
  afloatImg,
  dashBoardImg,
  dummyImg,
  ganttClone1,
  speedDial1,
} from "./assets";

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
    image: speedDial1,
    name: "Speed Dial",
    description:
      "Implemented speed dial functionality. Frontend sends request using the characters associated with each key. Backend receives the request and sends the resulting string that matches those characters. The result is displayed on the screen.",
    techStack: ["ReactJs", "MaterialUI", "Express", "Mongoose"],
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
    description:
      "Implmented an interesting landing page with smooth animations. Explored gsap library to implement animations for various elements which also allows a timeout for each animation.",
    techStack: ["html", "css", "javascript", "gsap"],
  },
  {
    id: Math.random(),
    image: dummyImg,
    name: "Vidly",
    description:
      "Built RestApis with various methods such as get, post, put and delete. Used middlewares for throwing errors and autheticating routes using jwt. Each protected route is validated. Containerised the application using Docker.",
    techStack: ["express", "mongoose", "bcrypt", "jsonwebtoken", "docker"],
  },
  {
    id: Math.random(),
    image: dummyImg,
    name: "React native reanimated 2",
    description:
      "Implemented various animations and transitions based on famous applications such as spotify, airbnb, chrome, appstore , etc. Explored libraries such as react native reanimated v2 and react native gesture handler and implemented smooth, interesting animations which improved the UX.",
    techStack: [
      "react-native",
      "react-native-reanimated",
      "react-native-gesture-handler",
      "react-native-svg",
    ],
  },
  {
    id: Math.random(),
    image: dummyImg,
    name: "React native reanimated",
    description:
      "Implemented various animations and transitions based on famous applications such as tinder, headspace, snapchat, etc. Explored libraries such as react native reanimated v1 and react native gesture handler and implemented smooth, interesting animations which improved the UX.",
    techStack: [
      "react-native",
      "react-native-reanimated",
      "react-native-gesture-handler",
      "react-native-maps",
    ],
  },
];
