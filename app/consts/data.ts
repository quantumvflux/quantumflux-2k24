import { FaReact, FaHtml5, FaCss3, FaJs, FaVuejs } from "react-icons/fa";
import { SiRedux, SiTypescript, SiNestjs, SiMongodb, SiFigma, SiPython, SiChakraui, SiTailwindcss, SiVite, SiMysql, SiMarkdown, SiArchlinux, SiUbuntu, SiPostman, SiVisualstudiocode, SiNeovim, SiPrisma } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { IJobz, ISkillItem, ISkillSection } from "../interfaces/interfaces";

import notimationLogo from "/public/assets/jobs/notimation-logo.jpg"
import undeadLogo from "/public/assets/jobs/undead-logo.png"
import adrianLogo from "/public/assets/jobs/adrian-logo.png"
import nephilimLogo from "/public/assets/jobs/nephilim-logo.jpg"
import riffaoLogo from "/public/assets/jobs/riffao-logo.png"

export const languages: ISkillItem[] = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Go", icon: FaGolang },
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
    { name: "Redux", icon: SiRedux },
]

export const databases: ISkillItem[] = [
    { name: "SQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Prisma", icon: SiPrisma },
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

export const skillCategories: ISkillSection[] = [
    {
        title: "Languages",
        skills: languages
    },
    {
        title: "Frameworks and Libraries",
        skills: frameworks
    },
    {
        title: "Databases & ORMs",
        skills: databases
    },
    {
        title: "Tools",
        skills: tools
    },
]

export const jobz: IJobz[] = [
    {
        name: "Notimation",
        image: notimationLogo,
        description: "Frontend developer",
        link: "https://notimation.com/"
    },
    {
        name: "Undead Devz",
        image: undeadLogo,
        description: "Fullstack developer",
        link: "/"
    },
    {
        name: "Riffao",
        image: riffaoLogo,
        description: "Frontend development",
        link: "/"
    },
    {
        name: "Adrian Moreno",
        image: adrianLogo,
        description: "Personal portfolio development",
        link: ""
    },
    {
        name: "Nephilim Band",
        image: nephilimLogo,
        description: "Landing page development",
        link: ""
    }
]



export const pfpData = [
    { imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHN2YWliajFuY3AxMXJ4MGZod2FkYW9qcnR2Y2JzYjczamlqbnhjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11tmhZRjavMMIE/giphy.webp" },
    { imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNlYW4waDlxNWQwNjRoeGxxZ2J6Z3hkamdrOXFuNGd5MW52cTAxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bqSkJ4IwNcoZG/giphy.webp" },
    { imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXVkcTJwdTNsd3RveGRldmdpanFidzZrbzhmYXFyeDRoOXBxdXRxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UYzNgRSTf9X1e/giphy.webp" },
    { imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VraWthNnRhbTh3NTQ1Zzk1NGl6dnFpa3E2Znc4MnhjY3RtM254YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N4AIdLd0D2A9y/giphy.webp" }
]

export const getRandomPfp = () => {
    return pfpData[Math.floor(Math.random() * pfpData.length)]
}