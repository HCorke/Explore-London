export const fetchAllAreas = async () => {
  const backendUrl = `http://${process.env.REACT_APP_BACKEND_BASE_URL}/collection/londonAreas`;
  const results = await fetch(backendUrl);
  const resultsJSON = await results.json();

  return resultsJSON;
};
