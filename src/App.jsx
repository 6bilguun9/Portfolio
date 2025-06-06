import { useRoutes } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Home from "./pages/Home";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProDetail from "./components/ProDetail";
import BlogDetail from "./components/BlogDetail";
import Cert from "./pages/Cert";

import { DotPattern } from "@/components/magicui/dot-pattern";

function App() {
  const { scrollYProgress } = useScroll();

  const darkTheme = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["#101010", "#f0f9ff"]
  );
  const revDarkTheme = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["#f0f9ff", "#101010"]
  );

  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Blog",
      element: <Blog />,
    },
    {
      path: "/Projects",
      element: <Projects />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Projects/:id",
      element: <ProDetail />,
    },
    {
      path: "/Blog/:slug",
      element: <BlogDetail />,
    },
    {
      path: "/Cert",
      element: <Cert />,
    },
  ]);

  return (
    <div className="relative flex flex-col min-h-screen ">
      <DotPattern className="fixed absolute inset-0 z-0 opacity-50 " />
      <Header
        scrollYProgress={scrollYProgress}
        darkTheme={darkTheme}
        revDarkTheme={revDarkTheme}
      />
      <main className="flex-grow z-10 "> {element}</main>
    </div>
  );
}

export default App;
