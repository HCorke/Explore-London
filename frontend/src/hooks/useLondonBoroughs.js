import { useEffect } from "react";
import { fetchAllBoroughs } from "../api/londonBoroughsAPI";

export const useLondonBoroughs = ({ setBoroughs }) => {
  useEffect(() => {
    fetchAllBoroughs().then((boroughs) => setBoroughs(boroughs));
  }, [setBoroughs]);

  return;
};
