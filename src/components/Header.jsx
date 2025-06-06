import { Github, Linkedin, Mail, File, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/CV.docx?url";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import ConnectionBttn from "./ui/ConnectionBttn";

function Header(props) {
  const location = useLocation();

  const textColor = useMotionValue("#101010");

  useEffect(() => {
    if (
      location.pathname === "/Projects" ||
      location.pathname === "/Blog" ||
      location.pathname === "/Contact" ||
      location.pathname === "/Cert" ||
      location.pathname.startsWith("/Projects/") ||
      location.pathname.startsWith("/blog/")
    ) {
      textColor.set("#f0f9ff");
    } else {
      textColor.set(props.darkTheme.get());

      const unsubscribe = props.darkTheme.onChange((latest) => {
        textColor.set(latest);
      });

      return () => unsubscribe();
    }
  }, [location.pathname, props.darkTheme]);
  const bgColour =
    location.pathname === "/Projects" ||
    location.pathname === "/Blog" ||
    location.pathname === "/Contact" ||
    location.pathname === "/Cert" ||
    location.pathname.startsWith("/Projects/") ||
    location.pathname.startsWith("/blog/")
      ? "bg-neutral-950"
      : "bg-transparent";
  return (
    <div
      className={`sticky top-0 z-50 backdrop-blur-sm  py-3 w-full flex justify-around items-center ${bgColour} shadow-md shadow-inherit-500`}
    >
      <motion.div style={{ color: textColor }}>
        <Link to="/" className="font-bold ">
          Bilguun Batsukh
        </Link>
      </motion.div>
      <motion.div className="flex gap-9">
        <motion.div style={{ color: textColor }}>
          <Link
            to="/Projects"
            className="h-8 w-20 flex justify-center items-center  hover:bg-neutral-950 rounded-sm hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>
        </motion.div>
        <motion.div style={{ color: textColor }}>
          <Link
            to="/Cert"
            className="h-8 w-24 flex justify-center items-center  hover:bg-neutral-950 rounded-sm hover:text-white transition-colors duration-300"
          >
            Certificates
          </Link>
        </motion.div>
        <motion.div style={{ color: textColor }}>
          <Link
            to="/Blog"
            className="h-8 w-20 flex justify-center items-center hover:bg-neutral-950 rounded-sm hover:text-white transition-colors duration-300"
          >
            Blog
          </Link>
        </motion.div>
        <motion.div style={{ color: textColor }}>
          <Link
            to="/Contact"
            className="h-8 w-24 flex justify-center items-center  hover:bg-neutral-950 rounded-sm hover:text-white transition-colors duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
      <ConnectionBttn darkTheme={textColor} />
    </div>
  );
}

export default Header;
