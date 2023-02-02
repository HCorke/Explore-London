import "./BoroughModal.css";

export const BoroughModal = ({ setIsOpenBoroughModal, borough }) => {

  return borough.boroughName ? (
    <div className="modal-background">
      <div className="modal-container">
        <div className="header-button-container">
          <div
            id="close-button"
            onClick={() => {
              setIsOpenBoroughModal(false);
            }}
          >
            X
          </div>
          <h1 className="modal-header">{borough.boroughName}</h1>
        </div>
        <p id="area-name">Area: {borough.area}</p>
      </div>
    </div>
  ) : (
    <p>No Boroughs</p>
  );
};
