import "../../css/LandingPageTeamProject/Banner.css";
import banner from "../../img/banner.png"

function Banner() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center text-white gap-5" style={{backgroundColor: "rgba(43, 42, 76, 1)"}}>
        <div>
          <img src={banner} alt="" width="350px" height="350px" />
        </div>
        <div>
          <h3>
            "Yuk, mari kita jalin kerjasama untuk memperkenalkan produk ini
            kepada lebih banyak orang dan mencapai kesuksesan bersama!"
          </h3>
        </div>
      </div>
    </>
  );
}

export default Banner;
