import ICategory from "../interfaces/category";
import { Projects } from "../constants/projects";

export const Categories: ICategory[] = [
    {
        id: 3,
        name: Projects.illustrations,
        description: 'I need to make things with my hands every day.'
    },
    {
        id: 4,
        name: Projects.graphicDesign,
        description: 'Design is the intermediary between information and understanding.'
    },
    {
        id: 8,
        name: Projects.threeDesign,
        description: 'Art is not what you see, but what you make others see.'
    }
];