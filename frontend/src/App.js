import LondonBoroughs from "./images/LondonBoroughs.png";
import "./App.css";
import { BoroughModal } from "./Components/BoroughModal";
import { useState } from "react";
import { useLondonBoroughs } from "./hooks/useLondonBoroughs";

export const App = () => {
  const [boroughs, setBoroughs] = useState([]);
  useLondonBoroughs({ setBoroughs });
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">Time to explore London!</header>
      <img src={LondonBoroughs} className="Map" alt="London boroughs map" />
<div>
      {boroughs.map((borough, index) => (
        <div key={index}>{borough.boroughName}</div>
      ))}
</div>
      <div className="Areas">
        <div className="North">
          <h1>North London</h1>

          <p
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            {isOpenModal && <BoroughModal setIsOpenModal={setIsOpenModal} />}
            OPEN ME
          </p>
        </div>
        <div className="East">
          <h1>East London</h1>
        </div>
        <div className="South">
          <h1>South London</h1>
        </div>
        <div className="West">
          <h1>West London</h1>
        </div>
        <div className="Central">
          <h1>Central London</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
