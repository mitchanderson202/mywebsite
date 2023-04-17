import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./Projects.scss";
import projectData from "../../Data/Projects.json";
import { useState } from "react";
import Button from "../Buttons/Button";
const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projectCount = projectData.length;
    const nextIndex = () => {
        setCurrentProjectIndex((currentProjectIndex + 1) % projectCount);
    };
    const previousIndex = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projectCount) % projectCount);
    };
    const currentProject = projectData[currentProjectIndex];
    return (_jsx("div", { className: "projects-grid", children: _jsxs("div", { className: "projects", children: [_jsx("h1", { children: currentProject.name }), " ", _jsx("img", { src: currentProject.image, alt: currentProject.name }), _jsxs("div", { className: "description", children: [_jsxs("p", { children: [currentProject.description, " ", _jsx("br", {}), _jsx("a", { href: currentProject.ghLink, target: "_blank", rel: "noopener", children: "GITHUB" }), currentProject.liveLink && (_jsxs(_Fragment, { children: [" ", "|", " ", _jsx("a", { href: currentProject.liveLink, target: "_blank", rel: "noopener", children: "DEMO" })] }))] }), _jsx("h4", { children: currentProject.stack })] }), _jsxs("div", { className: "buttons", children: [_jsx(Button, { onClick: previousIndex, text: "<" }), _jsx(Button, { onClick: nextIndex, text: ">" })] })] }) }));
};
export default Projects;
