import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, File, Download } from "lucide-react";
import { Button } from "./button";
import cv from "../../assets/CV.docx?url";

function ConnectionBttn(props) {
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
    }
  };
  return (
    <div className="flex gap-4">
      <Button className="h-8 w-12 bg-transparent rounded-sm flex items-center justify-center group">
        <a href="https://github.com/6bilguun9">
          <motion.div style={{ color: props.darkTheme }}>
            <Github className="group-hover:text-sky-50 transition-colors" />
          </motion.div>
        </a>
      </Button>
      <Button className="h-8 w-12 bg-transparent rounded-sm flex items-center justify-center color-black group bg-transparent">
        <a href="https://www.linkedin.com/in/bilguun-batsukh-b772b4274/">
          <motion.div style={{ color: props.darkTheme }}>
            <Linkedin className=" group-hover:text-sky-50 transition-colors" />
          </motion.div>
        </a>
      </Button>
      <Button className="h-8 w-12 bg-transparent rounded-sm flex items-center justify-center color-black group bg-transparent">
        <a href="mailto:batsukhbilguun999@gmail.com">
          <motion.div style={{ color: props.darkTheme }}>
            <Mail className=" group-hover:text-sky-50 transition-colors" />
          </motion.div>
        </a>
      </Button>
      <Button
        className="h-8 w-12 bg-transparent rounded-sm flex items-center justify-center color-black group bg-transparent"
        onClick={DownloadCv}
      >
        <motion.div style={{ color: props.darkTheme }}>
          <File className=" group-hover:text-sky-50 transition-colors" />
        </motion.div>
      </Button>
    </div>
  );
}
export default ConnectionBttn;
