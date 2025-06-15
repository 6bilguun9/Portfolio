import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, File, Menu, X } from "lucide-react";
import { Button } from "./button";
import cv from "../../assets/CV.docx?url";
import { useState, useRef, useEffect } from "react";

function ConnectionBttn(props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

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

  // close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  const icons = [
    {
      to: "https://github.com/6bilguun9",
      Comp: Github,
    },
    {
      to: "https://www.linkedin.com/in/bilguun-batsukh-b772b4274/",
      Comp: Linkedin,
    },
    {
      to: "mailto:batsukhbilguun999@gmail.com",
      Comp: Mail,
    },
  ];

  return (
    <div className="relative">
      {/* Desktop icons */}
      <div className="hidden md:flex gap-4">
        {icons.map(({ to, Comp }, i) => (
          <Button
            key={i}
            className="h-8 w-12 bg-transparent rounded-sm flex items-center justify-center group"
          >
            <a href={to} target="_blank" rel="noopener noreferrer">
              <motion.div style={{ color: props.darkTheme }}>
                <Comp className="group-hover:text-sky-50 transition-colors" />
              </motion.div>
            </a>
          </Button>
        ))}

        <Button
          className="h-8 w-12 bg-transparent rounded-sm flex items-center justify-center group"
          onClick={DownloadCv}
        >
          <motion.div style={{ color: props.darkTheme }}>
            <File className="group-hover:text-sky-50 transition-colors" />
          </motion.div>
        </Button>
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden" ref={menuRef}>
        <Button
          className="h-8 w-8 bg-transparent flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
        >
          <motion.div style={{ color: props.darkTheme }}>
            {open ? <X /> : <Menu />}
          </motion.div>
        </Button>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-40 bg-neutral-800 rounded shadow-lg flex flex-col items-center p-2 space-y-2 z-50"
          >
            {icons.map(({ to, Comp }, i) => (
              <Button
                key={i}
                className="h-8 w-8 bg-transparent rounded-sm flex items-center justify-center group"
              >
                <a href={to} target="_blank" rel="noopener noreferrer">
                  <motion.div style={{ color: props.darkTheme }}>
                    <Comp className="group-hover:text-sky-50 transition-colors" />
                  </motion.div>
                </a>
              </Button>
            ))}

            <Button
              className="h-8 w-8 bg-transparent rounded-sm flex items-center justify-center group"
              onClick={DownloadCv}
            >
              <motion.div style={{ color: props.darkTheme }}>
                <File className="group-hover:text-sky-50 transition-colors" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ConnectionBttn;
