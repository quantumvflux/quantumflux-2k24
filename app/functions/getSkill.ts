import { ISkillItem, languages, frameworks, databases, tools } from '@/app/consts/data';

export const getSkill = (name: string): ISkillItem | undefined => {
    const allSkills = [...languages, ...frameworks, ...databases, ...tools];
    return allSkills.find(skill => skill.name === name);
};

export const getSkills = (names: string[]): ISkillItem[] => {
    const allSkills = [...languages, ...frameworks, ...databases, ...tools];
    return names.map(name => allSkills.find(skill => skill.name === name)).filter(Boolean) as ISkillItem[];
};
