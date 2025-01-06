import { readable } from "svelte/store";

const projects = [
  {
    id: 1,
    title: "Dom Master",
    subtitle: "JavaScript library",
    description:
      "A lightweight JavaScript library for reactive DOM updates and dynamic rendering without the need for frameworks or build tools.",
    tools: [
      {
        name: "javascript",
        icon: "src",
      },
    ],
    demo: "/", // link to a website(docs or use)
    repo: "/", // link to code on github
    svgSrc: "./assets/icons/dom.svg",
  },

  {
    id: 2,
    title: "Virtual",
    subtitle: "A react like framework",
    description: "react recreated",
    tools: [
      {
        name: "javascript",
        icon: "",
      },
      {
        name: "Babel",
        icon: "",
      },
    ],
    demo: "/", // link to a website(docs or use)
    repo: "/", // link to code on github
    svgSrc: "./assets/icons/virtual.svg",
  },
];

const data = readable(projects);
export { data };
