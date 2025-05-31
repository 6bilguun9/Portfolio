import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Lens } from "@/components/magicui/lens";
import projects from "../assets/projects.jpg";
import { Button } from "./ui/button";
import { Github, Aperture } from "lucide-react";
import BlogCard from "./BlogCard";

export default function briefAbt() {
  return (
    <div className="flex flex-col w-1/2 items-center justify center gap-5">
      <div className="flex justify-between w-full ">
        <h1 className="text-sky-50 font-bold">Recent Posts</h1>
        <Link to="/Blog" className="text-sky-50 flex">
          <h1>view more</h1>
          <ArrowRight />
        </Link>
      </div>
      <div className="text-sky-50 flex flex-col gap-4 w-full ">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
