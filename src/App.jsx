import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  Footer,
  Values,
  Published,
  AllProjects,
  Courses,
} from "./components";

const Layout = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <Values />
    <Project />
    <Published />
    <Experience />
    <Education />
    <Courses />
    <Achievement />
    <Profile />
    <Tech />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
