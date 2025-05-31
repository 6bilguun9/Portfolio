import projects from "../assets/projects.jpg";
import { Cloud, Code, BookOpen } from "lucide-react"; // Import icons

const ProStorage = [
  {
    id: 1,
    name: "Weather App",
    description:
      "Full-Stack web application for creating and sharing quizzes with others. llrl lrlrlrlrlrlrlrlrlrlllrlrlrlrlrllrlrllrlrlrlrlrllr",
    techStack: ["React", "Tailwind", "Javascript"],
    role: "Software Engineering",
    features: [
      "Automatic quiz validation",
      "Quiz statistics",
      "Ability to share quizzes and answers",
      "Saving answers",
    ],
    image: projects,
    url: "https://www.nvcc.edu/",
    github: "",
    icon: Cloud, // Add icon component
    link: "https://www.nvcc.edu/", // Rename url to link to match ProCards.jsx
    why: "this fucking awemsome dfasdfasdfsdnb d ds fdsf dsaf dsa fdsa fsd fdsa fsd fdsa fsd fds fdsa fdsa fsda fdsa fsa  fdsafdsfasfddsafsdafsdafsdafdsafdsafs",
  },
  {
    id: 2,
    name: "Data Structures and Algorithms",
    description:
      "A web application for learning data structures and algorithms with interactive visualizations.",
    techStack: ["Java"],
    company: "Nest IT school",
    role: "Computer Science",
    features: [
      "Automatic quiz validation",
      "Quiz statistics",
      "Ability to share quizzes and answers",
      "Saving answers",
    ],
    image: projects,
    url: "https://nhs.edu.mn/en",
    github: "",
    icon: Code, // Add icon component
    link: "https://nhs.edu.mn/en", // Rename url to link
    why: "this fucking awemsome",
  },
];

export default ProStorage;
