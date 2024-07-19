import { IconType } from "react-icons";

export interface ISkillItem {
    name: string;
    icon: IconType;
}

export enum ETechnologies {
    HTML = "HTML",
    CSS = "CSS",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
    Go = "Go",
    Redux = "Redux",
    Python = "Python",
    Markdown = "Markdown",
    React = "React",
    NextJs = "Next.js",
    VueJs = "Vue.js",
    NestJs = "Nest.js",
    ChakraUI = "ChakraUI",
    TailwindCSS = "TailwindCSS",
    Vite = "Vite",
    SQL = "SQL",
    MongoDB = "MongoDB",
    ArchLinux = "Arch Linux",
    Ubuntu = "Ubuntu",
    Postman = "Postman",
    VisualStudioCode = "Visual Studio Code",
    Nvim = "Nvim",
    Figma = "Figma"
}