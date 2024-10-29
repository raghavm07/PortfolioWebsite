import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Profile,
  Achievement,
  Experience,
  Education,
  Hero,
  Navbar,
  Tech,
  Project,
  StarsCanvas,
  Content,
  Footer,
} from "./components";
import Values from "./components/Values";
import Published from "./components/Published";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          <Content />
          </div>
          <Values />
          <Project />
          <Published />
          <Experience />
          <Education />
          <Achievement />
          <Profile />
          <Tech />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
