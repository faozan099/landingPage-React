import React from "react";
import "../../css/LandingPageTeamProject/Footer.css";
import logo from "../../img/logo.svg";

function Footer() {
  return (
    <div
      className="container-lg footer d-flex align-items-center justify-content-center p-5"
      style={{ paddingBottom: "80px" }}
    >
      <div>
        <img src={logo} alt="logo" title="LapaQ" width="80px" />
      </div>
      <div
        style={{ width: "50%" }}
        className="ms-auto text-end text-body-tertiary"
      >
        <p>UMKM Business Center 9-09 North Jakarta, Indonesia</p>
      </div>
    </div>
  );
}

export default Footer;
