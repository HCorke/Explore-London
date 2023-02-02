import "./Borough.css";
import { BoroughModal } from "./BoroughModal";
import { useState } from "react";

export const Borough = ({ borough }) => {
  const [isOpenBoroughModal, setIsOpenBoroughModal] = useState(false);

  return borough.boroughName ? (
    <div>
      <div id="borough-name">{borough.boroughName}</div>

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
