import { useLondonBoroughs } from "../hooks/useLondonBoroughs";
import { Borough } from "./Borough";

export const BoroughsPage = ({ boroughs, setBoroughs }) => {
  useLondonBoroughs({ setBoroughs });

  return boroughs[0] ? (
    <div className="main">
    <div id="boroughs">
      <div id="boroughs-grid">   
          <div id="borough">
            {boroughs.map((borough) => (
              <Borough borough={borough} key={borough.boroughId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>No Boroughs</p>
  );
};
