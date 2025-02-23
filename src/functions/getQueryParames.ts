export const getQueryParam = (
  param: string,
  queryString: string
): string | null => {
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
};
