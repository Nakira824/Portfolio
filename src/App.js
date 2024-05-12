import React from "react";
import Main from "./Componants/Main";
import About from "./Componants/About";
import Navbar from "./Componants/Navbar";
import { services, technologies } from "./Constants/index";
import OverView from "./Componants/OverView";
import Projects from "./Componants/Projects";
import Contact from "./Componants/Contact";
import Footer from "./Componants/Footer";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="absolute w-screen">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="absolute" >
          <Main />
        </div>
        <div className=" relative ">
          <About />
        </div>
      </div>

      <div className="flex flex-col relative bg-white ">
        <OverView/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
