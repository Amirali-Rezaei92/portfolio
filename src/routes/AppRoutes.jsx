import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Projects from "../components/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;