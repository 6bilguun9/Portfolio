import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Lens } from "@/components/magicui/lens";
import projects from "../assets/projects.jpg";
import { Button } from "./ui/button";
import { Github, Aperture } from "lucide-react";

export default function briefPro() {
  return (
    <div className="flex flex-col w-1/2 items-center justify center gap-4">
      <div className="flex justify-between w-full ">
        <h1 className="text-sky-50 font-bold">Featured Projects</h1>
        <Link to="/Projects" className="text-sky-50 flex">
          <h1>view more</h1>
          <ArrowRight />
        </Link>
      </div>
      <div className="text-sky-50 flex gap-4 ">
        <div className="border-2 rounded-md border-neutral-700 ">
          <div className="m-4 flex flex-col gap-4">
            <Lens>
              <img src={projects} alt="Lens Demo" />
            </Lens>
            <div className="flex gap-4 flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="font-bold text-xl">Projects</h1>
                <h1>
                  Generate winning combinations, view past results, and analyze
                  lottery trends all in one place
                </h1>
              </div>
              <div className="flex gap-4">
                <Button className="w-16 h-5 bg-gray-200 rounded-sm flex items-center justify-center group">
                  <Github className="text-neutral-950 group-hover:text-sky-50" />
                </Button>
                <Button className="w-16 h-5 bg-gray-200 rounded-sm flex items-center justify-center group">
                  <Aperture className="text-neutral-950 group-hover:text-sky-50" />
                </Button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-md border-neutral-700 ">
          <div className="m-4 flex flex-col gap-4">
            <Lens>
              <img src={projects} alt="Lens Demo" />
            </Lens>
            <div className="flex gap-4 flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="font-bold text-xl">Projects</h1>
                <h1>
                  Generate winning combinations, view past results, and analyze
                  lottery trends all in one place
                </h1>
              </div>
              <div className="flex gap-4">
                <Button className="w-16 h-5 bg-gray-200 rounded-sm flex items-center justify-center group">
                  <Github className="text-neutral-950 group-hover:text-sky-50" />
                </Button>
                <Button className="w-16 h-5 bg-gray-200 rounded-sm flex items-center justify-center group">
                  <Aperture className="text-neutral-950 group-hover:text-sky-50" />
                </Button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
