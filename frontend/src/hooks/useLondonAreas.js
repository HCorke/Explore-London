import { useEffect } from "react";
import { fetchAllAreas } from "../api/londonAreasAPI";

export const useLondonAreas = ({ setAreas }) => {
  useEffect(() => {
    fetchAllAreas().then((areas) => setAreas(areas));
  }, [setAreas]);

  return;
};
