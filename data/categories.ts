import ICategory from "../interfaces/category";
import { Projects } from "../constants/projects";

export const Categories: ICategory[] = [
    {
        name: Projects.illustrations,
        link: 'illustrations',
        description: 'I need to make things with my hands every day.',
        projectsCount: 10
    },
    {
        name: Projects.graphicDesign,
        link: 'graphic-design',
        description: 'Design is the intermediary between information and understanding.',
        projectsCount: 10
    },
    {
        name: Projects.threeDesign,
        link: '3d-design',
        description: 'Art is not what you see, but what you make others see.',
        projectsCount: 2
    }
];