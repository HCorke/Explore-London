import LondonBoroughs from "./images/LondonBoroughs.png";
import "./App.css";
import { BoroughModal } from "./Components/BoroughModal";
import { BoroughsPage } from "./Components/BoroughsPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  const [boroughs, setBoroughs] = useState([]);

  return (
    <div className="App" style={{ cursor: "url(favicon.ico) 8 0, auto" }}>
      <header className="App-header">Time to explore London!</header>
      <img src={LondonBoroughs} className="Map" alt="London boroughs map" />
      <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1wN1Ap7SLSiXOckn892UFD0XISDA&ehbc=2E312F" width="400" height="400"></iframe>
      <Routes>
        <Route
          path="/"
          element={
            <BoroughsPage boroughs={boroughs} setBoroughs={setBoroughs} />
          }
        />
        <Route element={<BoroughModal />} />
      </Routes>
    </div>
  );
};
export default App;
