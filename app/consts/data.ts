import { IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3, FaJs, FaVuejs } from "react-icons/fa";
import { SiRedux, SiTypescript, SiNestjs, SiMongodb, SiFigma, SiPython, SiChakraui, SiTailwindcss, SiVite, SiMysql, SiMarkdown, SiArchlinux, SiUbuntu, SiPostman, SiVisualstudiocode, SiNeovim } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

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


export interface ISkillItem {
    name: string;
    icon: IconType;
}

export const languages: ISkillItem[] = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Go", icon: FaGolang },
    { name: "Redux", icon: SiRedux },
    { name: "Python", icon: SiPython },
    { name: "Markdown", icon: SiMarkdown },
];


export const frameworks: ISkillItem[] = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Vue.js", icon: FaVuejs },
    { name: "Nest.js", icon: SiNestjs },
    { name: "ChakraUI", icon: SiChakraui },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite },
]

export const databases: ISkillItem[] = [
    { name: "SQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
]

export const tools: ISkillItem[] = [
    { name: "Arch Linux", icon: SiArchlinux },
    { name: "Ubuntu", icon: SiUbuntu },
    { name: "Postman", icon: SiPostman },
    { name: "Visual Studio Code", icon: SiVisualstudiocode },
    { name: "Nvim", icon: SiNeovim },
    { name: "Figma", icon: SiFigma },
]

languages.sort((a, b) => a.name.localeCompare(b.name));
frameworks.sort((a, b) => a.name.localeCompare(b.name));
databases.sort((a, b) => a.name.localeCompare(b.name));
tools.sort((a, b) => a.name.localeCompare(b.name));