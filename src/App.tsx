import "./App.scss";
import About from "./Components/About/About";
import Email from "./Components/Email/Email";
import Projects from "./Components/Projects/Projects";
import Socials from "./Components/Socials/Socials";
import Stacks from "./Components/Stacks/Stacks";

function App() {
  return (
    <div className="App">
      <About />
      <Stacks />
      <Socials />
      <Projects />
      <Email />
    </div>
  );
}

export default App;
