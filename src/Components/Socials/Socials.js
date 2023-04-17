import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./socials.scss";
import githubLogo from "../../Images/svg/github-mark.svg";
import linkedinLogo from "../../Images/svg/linkedin-icon.svg";
const Socials = () => {
    return (_jsx("div", { className: "socials-grid", children: _jsxs("div", { className: "socials", children: [_jsx("h1", { children: "SEE WHAT I'M UP TO" }), _jsx("a", { href: "https://github.com/mitchanderson202", target: "_blank", rel: "noopener noreferrer", className: "github-logo", children: _jsx("img", { src: githubLogo, alt: "github-logo" }) }), _jsx("a", { href: "https://www.linkedin.com/in/mitchandersondeveloper/", target: "_blank", rel: "noopener noreferrer", className: "linkedin-logo", children: _jsx("img", { src: linkedinLogo, alt: "linkedin-logo" }) })] }) }));
};
export default Socials;
