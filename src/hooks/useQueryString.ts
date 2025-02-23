const useQueryString = (queryData: any) => {
  const filtered = Object.keys(queryData)
    .filter((key) => queryData[key])
    .reduce((obj: any, key: any) => {
      obj[key] = queryData[key];
      return obj;
    }, {});

  const query = new URLSearchParams(filtered);
  return query.toString() ? "?" + query.toString() : "";
};

export default useQueryString;
