import "./socials.scss";
import githubLogo from "../../Images/svg/github-mark.svg";
import linkedinLogo from "../../Images/svg/linkedin-icon.svg";

const Socials = () => {
  return (
    <div className="socials-grid">
      <div className="socials">
        <h1>SEE WHAT I'M UP TO</h1>

        <a
          href="https://github.com/mitchanderson202"
          target="_blank"
          rel="noopener noreferrer"
          className="github-logo"
        >
          <img src={githubLogo} alt="github-logo"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/mitchandersondeveloper/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-logo"
        >
          <img src={linkedinLogo} alt="linkedin-logo" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
