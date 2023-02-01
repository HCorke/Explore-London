import "./BoroughModal.css";

export const BoroughModal = ({ setIsOpenBoroughModal, borough }) => {
  console.log(borough.boroughId)
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
          <h1 className="modal-header">Borough</h1>
        </div>
      </div>
    </div>
  ) : (
    <p>No Boroughs</p>
  );
};
