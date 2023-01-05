import LondonBoroughs from "./images/LondonBoroughs.png";
import "./App.css";
import { BarnetModal } from "./Components/BarnetModal";
import { EnfieldModal } from "./Components/EnfieldModal";
import { useState } from "react";

export const App = () => {
  const northBoroughs = ["Barnet", "Enfield", "Haringey", "Waltham Forest"];
  const listNorthBoroughs = northBoroughs.map((northBoroughs) => {
    return <li>{northBoroughs}</li>;
  });

  const eastBoroughs = [
    "Redbridge",
    "Barking & Dagenham",
    "Havering",
    "Hackney",
    "City of London",
    "Tower Hamlets",
    "Newham",
    "Lewisham",
    "Greenwich",
    "Bexley",
  ];
  const listEastBoroughs = eastBoroughs.map((eastBoroughs) => {
    return <li>{eastBoroughs}</li>;
  });

  const southBoroughs = [
    "Bromley",
    "Croydon",
    "Sutton",
    "Merton",
    "Kingston Upon Thames",
    "Richmond Upon Thames",
  ];
  const listSouthBoroughs = southBoroughs.map((southBoroughs) => {
    return <li>{southBoroughs}</li>;
  });

  const westBoroughs = [
    "Hammersmith & Fulham",
    "Hounslow",
    "Ealing",
    "Hillingdon",
    "Harrow",
    "Brent",
  ];
  const listWestBoroughs = westBoroughs.map((westBoroughs) => {
    return <li>{westBoroughs}</li>;
  });

  const centralBoroughs = [
    "Camden",
    "Islington",
    "City of Westminster",
    "Kensington & Chelsea",
    "Wandsworth",
    "Lambeth",
    "Southwark",
  ];
  const listCentralBoroughs = centralBoroughs.map((centralBoroughs) => {
    return <li>{centralBoroughs}</li>;
  });

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
              {northBoroughs[0]}
            </p>
          
          {northBoroughs[0] && isOpenModal && <BarnetModal setIsOpenModal={setIsOpenModal} />}
          <p
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              {northBoroughs[1]}
            </p>
          </div>
          {northBoroughs[1] && isOpenModal && <EnfieldModal setIsOpenModal={setIsOpenModal} />}
          <div className="East">
            <h1>East London</h1>
            <ul>{listEastBoroughs}</ul>
          </div>
          <div className="South">
            <h1>South London</h1>
            <ul>{listSouthBoroughs}</ul>
          </div>
          <div className="West">
            <h1>West London</h1>
            <ul>{listWestBoroughs}</ul>
          </div>
          <div className="Central">
            <h1>Central London</h1>
            <ul>{listCentralBoroughs}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
