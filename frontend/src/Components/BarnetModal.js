import "./BoroughModal.css";

export const BarnetModal = ({setIsOpenModal}) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="header-button-container">
          <div id="close-button" onClick={()=>{setIsOpenModal(false)}}>
            X
          </div>
          <h1 className="modal-header">BARNET</h1>
          <div className="modal-body">jcnjkdcnsdjbvjufhv;iuwhfccfjki</div>
        </div>
      </div>
    </div>
  );
};
