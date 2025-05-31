import { useParams } from "react-router-dom";
import ProStorage from "./ProStorage";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

function ProDetail() {
  const { id } = useParams();

  // Find the project by ID
  const project = ProStorage.find((item) => item.id === parseInt(id));

  if (!project) {
    return (
      <div className="bg-neutral-950 w-full min-h-screen text-white p-8 flex items-center justify-center">
        <h1 className="text-3xl">Project not found 😢</h1>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 w-full min-h-screen text-white p-8 flex flex-col items-center">
      <div className="w-1/2 flex flex-col gap-4 items">
        <img src={project.image} alt="" />
        <div className="bg-neutral-920 border-neutral-800 border  rounded-xl flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between mx-5 mt-5">
            <h1 className="text-white text-3xl font-bold">{project.name}</h1>
          </div>
          <div className="flex items-center mt-2 mx-4 gap-2 ">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded bg-neutral-300 text-neutral-950 border border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mx-4 mt-4 font-semibold ">
            <h1 className="text-neutral-300 text-left">
              {project.description}
            </h1>
          </div>
          <div className="w-full p-5 flex gap-5 items-center">
            <Button
              asChild
              className="text-neutral-950 bg-neutral-300 hover:text-neutral-300"
            >
              <a href={project.url}>Open</a>
            </Button>
            <a
              href={project.github}
              className="bg-neutral-300 text-neutral-950 p-1 rounded-sm"
            >
              <Github></Github>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-neutral-300 text-4xl font-bold">
            Why {project.name}
          </h1>
          <p className="text-lg text-neutral-300">{project.why}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-neutral-300 text-4xl font-bold">Features</h1>
          {project.features.map((ftr, index) => (
            <li className="text-lg text-neutral-300" key={index}>
              {ftr}
            </li>
          ))}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
    </div>
  );
}

export default ProDetail;
