import { Routes, Route } from "react-router";
import Home from "@pages/Home";
import About from "@pages/About";
import ProjectsHome from "@pages/Projects";
import Contact from "@pages/Contact";
import BaseLayout from "@layouts/BaseLayout";
import ProjectLayout from "@layouts/Project";
import ProjectDynamic from "@pages/ProjectDynamic";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" >
          <Route index element={<ProjectsHome />} />
          <Route element={<ProjectLayout />}>
            <Route path=":projectId" element={<ProjectDynamic />} />
          </Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
