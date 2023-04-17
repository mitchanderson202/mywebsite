import "./Email.scss";

import emailLogo from "../../Images/svg/email-svgrepo-com.svg";

const Email = () => {
  return (
    <a className="email-grid" href="mailto:mitchellanderson202@gmail.com">
      <div className="email">
        <div>
          <h1>WANT TO TALK?</h1>
        </div>
        <div className="image-div">
          <img src={emailLogo} alt="gmail-icon"></img>
        </div>
        <div>
          <h2>SEND ME AN EMAIL</h2>
          <p>mitchellanderson202@gmail.com</p>
        </div>
      </div>
    </a>
  );
};

export default Email;
