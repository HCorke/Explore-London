import { useEffect } from "react";
import { fetchAllBoroughs } from "../api/LondonBoroughsAPI";

export const useLondonBoroughs = ({ setBoroughs }) => {
  useEffect(() => {
    fetchAllBoroughs().then((boroughs) => setBoroughs(boroughs));
  }, [setBoroughs])

  return;
};
