import { Github, Linkedin, Mail, File, Download, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";
import cv from "../assets/CV.docx?url";
import { useEffect } from "react";
import ConnectionBttn from "./ui/ConnectionBttn";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const textColor = useMotionValue("#101010");
  const specialRoute = ["/Projects", "/Blog", "/blog", "/Contact", "/Cert"];
  const isSpecial =
    specialRoute.includes(location.pathname) ||
    specialRoute.some((r) => location.pathname.startsWith(r + "/"));
  const mobileBg = isSpecial
    ? "bg-neutral-950 text-neutral-200"
    : "bg-neutral-200 text-neutral-950";

  useEffect(() => {
    const specialRoute = ["/Projects", "/Blog", "/blog", "/Contact", "/Cert"];
    if (
      specialRoute.includes(location.pathname) ||
      specialRoute.some((r) => location.pathname.startsWith(r + "/"))
    ) {
      textColor.set("#f0f9ff");
    } else {
      textColor.set(props.darkTheme.get());
      const unsub = props.darkTheme.onChange((latest) => textColor.set(latest));
      return () => unsub();
    }
  }, [location.pathname, props.darkTheme]);

  const bgColour = isSpecial ? "bg-neutral-950" : "bg-transparent";
  return (
    <div className="sticky top-0 z-50">
      <div
        className={`relative top-0 z-50 backdrop-blur-sm py-3 px-10 w-full flex items-center justify-between ${bgColour} shadow-md shadow-inherit-500`}
      >
        {/* Logo */}
        <motion.div style={{ color: textColor }}>
          <Link to="/" className="font-bold">
            Bilguun Batsukh
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {["Projects", "Cert", "Blog", "Contact"].map((navItem, idx) => (
            <motion.div key={idx} style={{ color: textColor }}>
              <Link
                to={`/${navItem}`}
                className="h-8 w-auto flex items-center px-2 hover:bg-neutral-950 rounded-sm hover:text-white transition-colors duration-300"
              >
                {navItem === "Cert"
                  ? "Certificates"
                  : navItem === "Contact"
                  ? "Contact Me"
                  : navItem}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Button
            onClick={toggleMenu}
            className="h-8 w-8 bg-transparent flex items-center justify-center"
          >
            <motion.div style={{ color: textColor }}>
              {isMenuOpen ? <X /> : <Menu />}
            </motion.div>
          </Button>
        </div>

        {/* Connection buttons */}
        <ConnectionBttn darkTheme={textColor} />
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`
            top-full left-0 w-full md:hidden z-40
            ${mobileBg}
            border border-neutral-700
          `}
        >
          <div className="flex flex-col space-y-2 p-4">
            {[
              { to: "/Projects", label: "Projects" },
              { to: "/Cert", label: "Certificates" },
              { to: "/Blog", label: "Blog" },
              { to: "/Contact", label: "Contact Me" },
            ].map((link, i) => (
              <motion.div key={i} style={{ color: textColor }}>
                <Link
                  to={link.to}
                  className="block py-2 px-3 rounded hover:bg-neutral-800 hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </div>
  );
}

export default Header;
