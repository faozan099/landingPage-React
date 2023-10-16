// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPagePersonalWeb from "./assets/page/LandingPagePersonalWeb";
import { Route, Routes } from "react-router-dom";

import LandingPageTeamProject from "./assets/page/LandingPageTeamProject";

function App() {
  return (
    <>
      {/* <LandingPageTeamProject /> */}
      {/* <LandingPagePersonalWeb/> */}
      <Routes>
        <Route path="/" element={<LandingPageTeamProject />} />
        <Route path="/home" element={<LandingPagePersonalWeb />} />
      </Routes>
    </>
  );
}

export default App;
