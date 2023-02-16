import { useLondonBoroughs } from "../hooks/useLondonBoroughs";
import { Borough } from "./Borough";
import "./BoroughsPage.css";

export const BoroughsPage = ({ boroughs, setBoroughs }) => {
  useLondonBoroughs({ setBoroughs });

  return boroughs[0] ? (
    <div className="main">
      <div className="Areas">
        <div className="area" id="North">
          <div>
            <h1 className="area-names">North London</h1>
          </div>
          <div className="boroughs">
            {boroughs
              .filter((borough) => {
                if (borough.area === "North London") {
                  return borough;
                }
                return null;
              })
              .map((borough) => (
                <Borough borough={borough} key={borough.boroughId} />
              ))}
          </div>
        </div>
        <div className="area" id="East">
          <h1 className="area-names">East London</h1>
          <div className="boroughs">
            {boroughs
              .filter((borough) => {
                if (borough.area === "East London") {
                  return borough;
                }
                return null;
              })
              .map((borough) => (
                <Borough borough={borough} key={borough.boroughId} />
              ))}
          </div>
        </div>
        <div className="area" id="South">
          <h1 className="area-names">South London</h1>
          <div className="boroughs">
            {boroughs
              .filter((borough) => {
                if (borough.area === "South London") {
                  return borough;
                }
                return null;
              })
              .map((borough) => (
                <Borough borough={borough} key={borough.boroughId} />
              ))}
          </div>
        </div>
        <div className="area" id="West">
          <h1 className="area-names">West London</h1>
          <div className="boroughs">
            {boroughs
              .filter((borough) => {
                if (borough.area === "West London") {
                  return borough;
                }
                return null;
              })
              .map((borough) => (
                <Borough borough={borough} key={borough.boroughId} />
              ))}
          </div>
        </div>
        <div className="area" id="Central">
          <h1 className="area-names">Central London</h1>
          <div className="boroughs">
            {boroughs
              .filter((borough) => {
                if (borough.area === "Central London") {
                  return borough;
                }
                return null;
              })
              .map((borough) => (
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
