import { readable } from "svelte/store";

const projects = [
  {
    id: 1,
    title: "Dom Master",
    description:
      "A lightweight JavaScript library for reactive DOM updates and dynamic rendering without the need for frameworks or build tools.",
    tools: ["javascript"],
    demo: "/", // link to a website(docs or use)
    repo: "https://github.com/guifendjy/dom_master", // link to code on github
    svgSrc: "assets/dom.svg",
  },

  {
    id: 3,
    title: "Voice Recorder",
    description:
      "A voice recorder app, you can record your voice and save it locally.",
    tools: ["Vite", "Dom Master(v1.2)", "javascript"],
    demo: "https://guifendjy.github.io/voice_recorder/", // link to a website(docs or use)
    repo: "https://github.com/guifendjy/voice_recorder", // link to code on github
    svgSrc: "assets/recorder.svg",
  },
];

const data = readable(projects);
export { data };
