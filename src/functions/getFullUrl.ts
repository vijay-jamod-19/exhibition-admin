export const getFullUrl = (photo: any) => {
  let src = null;
  if (typeof photo === "string") {
    src = import.meta.env.VITE_API_ASSET_URL + photo;
  } else if (photo && photo.base64) {
    src = photo.base64;
  }
  return src;
};
