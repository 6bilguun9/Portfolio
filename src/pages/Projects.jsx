import ProjectCard from "../components/ProCards";
import { useParams } from "react-router-dom";

function Projects() {
  return (
    <div className="bg-neutral-950 w-full min-h-screen text-white p-8 flex flex-col items-center">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-sky-50">Projects</h1>
        <h1 className="text-neutral-400">
          These are my projects on which I try to work actively
        </h1>
        <div>
          <div>
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
