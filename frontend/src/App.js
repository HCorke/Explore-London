import LondonBoroughs from "./images/LondonBoroughs.png";
import "./App.css";
import { BarnetModal } from "./Components/BarnetModal";
import { EnfieldModal } from "./Components/EnfieldModal";
import { useState } from "react";
import { useLondonAreas } from "./hooks/useLondonAreas";

export const App = () => {
  
  const [areas, setAreas] = useState([])
  useLondonAreas({setAreas})
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">Time to explore London!</header>
        <img src={LondonBoroughs} className="Map" alt="London boroughs map" />
        <div className="Areas">
          <div className="North">
            <h1>North London</h1>
            <p
              onClick={() => {
                setIsOpenModal(true);
              }}
            >


                            {areas.map((area, index) =>
                                <div id="area-names" key={index}>
                                    {area})</div>)}

            </p>
          
          {isOpenModal && <BarnetModal setIsOpenModal={setIsOpenModal} />}
          <p
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
          
            </p>
          </div>
          {isOpenModal && <EnfieldModal setIsOpenModal={setIsOpenModal} />}
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
    </>
  );
};

export default App;
