import React from "react";
import fotoProfile from "../../img/profile-body.jpg";
import "../../css/LandingPagePersonalWeb/FotoProfile.css"

function FotoProfile() {
  return (
    <div>
      <img src={fotoProfile} alt="" width="180px" />
    </div>
  );
}

export default FotoProfile;
