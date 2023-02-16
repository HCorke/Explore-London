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
        <p id="area-name">
          <h2>Area</h2>
          {borough.area}
        </p>
        <div className="neighbourhoods">
          <h2 id="neighbourhoods-label">Neighbourhoods</h2>
          <div id="neighbourhood-names">
            {borough.neighbourhoods.map((neighbourhood, index) => (
              <div id="neighbourhood" key={index}>
                {neighbourhood}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>No Boroughs</p>
  );
};
