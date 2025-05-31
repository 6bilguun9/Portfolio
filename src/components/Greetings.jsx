import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faJava,
  faJs,
  faFigma,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { WordRotate } from "@/components/magicui/word-rotate";

import { Github, Linkedin, Mail, File, Download } from "lucide-react";
import { Button } from "../components/ui/button";

import cv from "../assets/CV.docx?url";

function Greetings() {
  const DownloadCv = () => {
    try {
      const link = document.createElement("a");
      link.href = cv;
      link.download = "Bilguun_CV.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download CV:", error);
      // Optionally show a user-friendly error message
    }
  };
  return (
    <div className=" flex h-screen w-4xl items-center justify-center flex-row">
      <div className="flex flex-col gap-4 z-10">
        <h1 className="text-4xl text-nowrap">Hi, I'm Bilguun Batsukh👋</h1>
        <h2 className="text-xl flex-col text-nowrap">
          I'm a passionate software engineer with an interest in
          <WordRotate
            className="text-nowrap"
            words={[
              "FrontEnd frameworks",
              "BackEnd development",
              "UI/UX designs",
              "Machine Learning",
            ]}
          />
        </h2>
        <div className="flex gap-4">
          <Button className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center color-black group">
            <a href="https://github.com/6bilguun9">
              <Github className="text-neutral-950 group-hover:text-sky-50 transition-colors" />
            </a>
          </Button>
          <Button className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center color-black group">
            <a href="https://www.linkedin.com/in/bilguun-batsukh-b772b4274/">
              <Linkedin className="text-neutral-950 group-hover:text-sky-50 transition-colors" />
            </a>
          </Button>
          <Button className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center color-black group">
            <a href="mailto:batsukhbilguun999@gmail.com">
              <Mail className="text-neutral-950 group-hover:text-sky-50 transition-colors" />
            </a>
          </Button>
          <Button
            className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center color-black group"
            onClick={DownloadCv}
          >
            <File className="text-neutral-950 group-hover:text-sky-50 transition-colors" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden h-[600px] w-full z-10">
        <OrbitingCircles>
          <FontAwesomeIcon icon={faReact} size="2x" />
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <FontAwesomeIcon icon={faFigma} size="2x" />
        </OrbitingCircles>
        <OrbitingCircles radius={100} reverse>
          <FontAwesomeIcon icon={faJava} size="2x" />
          <FontAwesomeIcon icon={faJs} size="2x" />
          <FontAwesomeIcon icon={faPython} size="2x" />
        </OrbitingCircles>
      </div>
    </div>
  );
}
export default Greetings;
