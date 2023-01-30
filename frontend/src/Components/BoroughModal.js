import "./BoroughModal.css";

export const BoroughModal = ({setIsOpenModal}) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="header-button-container">
          <div id="close-button" onClick={()=>{setIsOpenModal(false)}}>
            X
          </div>
          <h1 className="modal-header">Borough</h1>
          <div className="modal-body">jcnjkdcnsdjbvjufhv;iuwhfccfjki</div>
        </div>
      </div>
    </div>
  );
};
