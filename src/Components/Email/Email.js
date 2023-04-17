import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Email.scss";
import emailLogo from "../../Images/svg/email-svgrepo-com.svg";
const Email = () => {
    return (_jsx("a", { className: "email-grid", href: "mailto:mitchellanderson202@gmail.com", children: _jsxs("div", { className: "email", children: [_jsx("div", { children: _jsx("h1", { children: "WANT TO TALK?" }) }), _jsx("div", { className: "image-div", children: _jsx("img", { src: emailLogo, alt: "gmail-icon" }) }), _jsxs("div", { children: [_jsx("h2", { children: "SEND ME AN EMAIL" }), _jsx("p", { children: "mitchellanderson202@gmail.com" })] })] }) }));
};
export default Email;
