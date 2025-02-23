export const getCapitalize = (string: string) => {
  if (!string) return "";

  const text = string
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return text.replace(/^\s+/g, "");
};
