import React from "react";
import logo from "../../img/logo.svg";
import "../../css/LandingPageTeamProject/NavbarAtas.css";
import bg from "../../img/bg.png";
import tokoKu from "../../img/Group 143.svg";
import transaksi from "../../img/Group 144.svg";
import keranjang from "../../img/keranjang.svg";
import pesananKu from "../../img/Group 145.svg";



function NavbarAtas() {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-around">
          <a className="navbar-brand">
            <img src={logo} alt="Bootstrap" width="60" height="54" />{" "}
            <h3>LapaQ</h3>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div>
        <div className="container-fluid d-flex justify-content-center align-items-center gap-5 text-center py-5">
          <div>
            <img src={tokoKu} alt="TokoQ" width="50px" height="50px" />
            <h5 className="pt-1">TokoQ</h5>
          </div>
          <div>
            <img src={transaksi} alt="Transaksi" width="50px" height="50px" />
            <h5 className="pt-1">Transakasi</h5>
          </div>
          <div>
            <img src={keranjang} alt="Keranjang" width="50px" height="50px" />
            <h5 className="pt-1">Keranjang</h5>
          </div>
          <div>
            <img src={pesananKu} alt="PesananQ" width="50px" height="50px" />
            <h5 className="pt-1">PesananQ</h5>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NavbarAtas;
