import React from "react";
import NavbarAtas from "../components/LandingPageTeamProject/NavbarAtas";
import Banner from "../components/LandingPageTeamProject/Banner";
import KategoriKecantikan from "../components/LandingPageTeamProject/KategoriKecantikan";
import KategoriElektronik from "../components/LandingPageTeamProject/KategoriElektronik";
import KategoriFashion from "../components/LandingPageTeamProject/KategoriPakaian";
import NavbarBawah from "../components/LandingPageTeamProject/NavbarBawah";
import Footer from "../components/LandingPageTeamProject/Footer";

function LandingPageTeamProject() {
  return (
    <>
      <NavbarAtas />
      <Banner />
      <KategoriKecantikan />
      <KategoriElektronik />
      <KategoriFashion />
      <Footer />
      <NavbarBawah />
    </>
  );
}

export default LandingPageTeamProject;
