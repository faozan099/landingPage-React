import { useEffect, useState } from "react";
import "../../css/LandingPageTeamProject/KategoriPakaian.css";
import axios from "axios";
import star from "../../img/Union.svg";
import ClipLoader from "react-spinners/ClipLoader";

function KategoriFashion() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("fashion");
  const [loading, setLoading] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    axios
      .get("https://6524d82aea560a22a4ea298b.mockapi.io/product")
      .then((res) => {
        setData(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log("try again cuy!", err);
        setLoading(false)
      });
  }, []);

  const filteredItems = data
    .filter((item) => item.kategori === category)
    .map((item) => (
      <div key={item.id}>
        <div className="card" style={{ width: "35vw" }}>
          <img src={item.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.product}</h5>
            <p className="card-text">{item.harga}</p>
          </div>
          <div className="gap-2 d-flex pb-3 ps-3">
            <div>
              <img src={star} alt="" width="20px" />
            </div>
            <div>
              <img src={star} alt="" width="20px" />
            </div>
            <div>
              <img src={star} alt="" width="20px" />
            </div>
            <div>
              <img src={star} alt="" width="20px" />
            </div>
            <div>
              <img src={star} alt="" width="20px" />
            </div>
          </div>
        </div>
      </div>
    ));
  console.log(filteredItems);

  return (
    <div className="ps-5 mt-5">
      <h2>Fashion</h2>
      <div>
        {loading ? (
          <ClipLoader
            color="#ffffff"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
          />
        ) : (
          <div className="d-flex align-items-center justify-content-start gap-3">
            {filteredItems}
          </div>
        )}
      </div>
      <div style={{margin: "auto", width: "20%"}} className="d-flex align-items-center justify-cntent-center mt-5">
      <a href="/home"><button className="btn btn-success" width="100%">Next</button></a>
      </div>
    </div>
  );
}

export default KategoriFashion;
