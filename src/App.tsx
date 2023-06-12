import React from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
          <NavBar/>
          <Home />
          <About />
          <Education />
          <Experience />
          <Contacts />
          <Footer />
      </div>
  );
}

export default App;
