import "./About.scss";

const About = () => {
  return (
    <div className="about-grid">
      <div className="about">
        <h1>
          I'M MITCH, <br />
          SOFTWARE DEVELOPER FROM SYDNEY.
        </h1>
        <p>
          I began my development journey in 2020 when I enrolled in a course at
          General Assembly. Since then, I've focused on React.js and Typescript,
          and more recently, Java & Springboot. You can check out my list of
          projects and corresponding technologies to see more.
          <br /> Currently, I'm working as a Junior Developer through{" "}
          <a href="https://au.nology.io/" target="_blank" rel="noopener">
            _Nology.
          </a>
          <br />
          I'm also working on a private project with some friends (TBA soon!).
        </p>
      </div>
    </div>
  );
};

export default About;