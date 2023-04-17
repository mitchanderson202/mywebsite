import { jsx as _jsx } from "react/jsx-runtime";
import "./Button.scss";
const Button = ({ onClick, text }) => {
    return (_jsx("button", { onClick: onClick, className: "button", children: text }));
};
export default Button;
