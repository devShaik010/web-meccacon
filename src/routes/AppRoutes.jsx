import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import BaseLayout from "@pages/BaseLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
