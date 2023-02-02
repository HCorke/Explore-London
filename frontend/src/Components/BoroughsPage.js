import { useLondonBoroughs } from "../hooks/useLondonBoroughs";
import { Borough } from "./Borough";

export const BoroughsPage = ({ boroughs, setBoroughs }) => {
  useLondonBoroughs({ setBoroughs });

  return boroughs[0] ? (
    <div className="main">
      <div className="Areas">
        <div className="North">
          <h1>North London</h1>
          <div id="north-boroughs">
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
        <div className="East">
          <h1>East London</h1>
          <div id="east-boroughs">
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
        <div className="South">
          <h1>South London</h1>
          <div id="south-boroughs">
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
        <div className="West">
          <h1>West London</h1>
          <div id="west-boroughs">
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
        <div className="Central">
          <h1>Central London</h1>
          <div id="central-boroughs">
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
