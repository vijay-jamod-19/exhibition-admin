export const checkIsBase64Image = (str: any) => {
  if (typeof str !== "string") {
    return false;
  }
  // Regular expression to check if the string is a valid Base64 image data URL
  const base64ImageRegex =
    /^data:image\/(png|jpg|jpeg|gif|bmp|webp);base64,[A-Za-z0-9+/]+={0,2}$/;

  return base64ImageRegex.test(str);
};
