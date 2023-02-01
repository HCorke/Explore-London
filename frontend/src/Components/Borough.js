import "./Borough.css";
import { BoroughModal } from "./BoroughModal";
import { useState } from "react";

export const Borough = ({ borough }) => {
  const [isOpenBoroughModal, setIsOpenBoroughModal] = useState(false);

  return borough.boroughName ? (
    <div id="areas">
      <div className="Areas">
        <div className="North">
          <h1>North London</h1>
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
      <div>
        <div id="borough-name">{borough.boroughName}</div>
      </div>
      {isOpenBoroughModal && (
        <BoroughModal
          borough={borough}
          setIsOpenBoroughModal={setIsOpenBoroughModal}
        />
      )}
    </div>
  ) : (
    <p>No Boroughs</p>
  );
};
