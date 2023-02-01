import { useEffect } from "react";
import { fetchAllBoroughs } from "../api/londonBoroughsListAPI";

export const useLondonBoroughs = ({ setBoroughs }) => {
  useEffect(() => {
    fetchAllBoroughs().then((boroughs) => setBoroughs(boroughs));
  }, [setBoroughs])

  return;
};
