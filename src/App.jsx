import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import MoreAboutMe from "./components/MoreAboutMe";

const App = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default App;
