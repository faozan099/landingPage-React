import React from "react";
import "../../css/LandingPageTeamProject/NavbarBawah.css";
import home from "../../img/grid (1).jpg";
import tokoKu from "../../img/vector (3).svg";
import keranjang from "../../img/vector (2).svg";
import chat from "../../img/AnnotationOutline (1).svg";
import user from "../../img/User (1).svg"

function NavbarBawah() {
  return (
    <div className="nav-bottom sticky-bottom bg-white">
      <div
        className="d-flex gap-5 justify-content-center align-items-center py-4"
        style={{ height: "60px" }}
      >
        <div>
          <img src={home} alt="" />
        </div>
        <div>
          <img src={tokoKu} alt="" />
        </div>
        <div>
          <img src={keranjang} alt="" />
        </div>
        <div>
          <img src={chat} alt="" />
        </div>
        <div>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavbarBawah;
