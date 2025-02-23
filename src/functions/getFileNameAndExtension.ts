export const getFileNameAndExtension = (fileName: any) => {
  if (fileName.name) {
    return `${fileName?.name?.slice(0, 10)}.${fileName?.name?.split(".")[1]}`;
  }
  const file = fileName?.split("/").pop();
  return `${file?.slice(0, 12)}.${file?.split(".")[1]}`;
};
