import React from "react";
import Navbar from "../components/LandingPagePersonalWeb/Navbar";
import FotoProfile from "../components/LandingPagePersonalWeb/FotoProfile";
import Intro from "../components/LandingPagePersonalWeb/Intro";
import Skill from "../components/LandingPagePersonalWeb/Skill";
import Contact from "../components/LandingPagePersonalWeb/Contact";
import Footer from "../components/LandingPagePersonalWeb/Footer";

function LandingPagePersonalWeb() {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: "auto",
          width: "75vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          gap: "2rem",
          marginTop: "2.5rem",
        }}
      >
        <FotoProfile />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Intro />
          <Skill />
        </div>
      </div>
      <Contact/>
      <Footer/>
    </>
  );
}

export default LandingPagePersonalWeb;
