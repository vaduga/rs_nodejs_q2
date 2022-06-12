import process from "process";
import { setDir } from "../utils/services.js";

const getUpDirectoryPath = () => {
  console.clear();
  const pathNames = process.cwd().split("\\");
  return pathNames.filter((item) => item !== pathNames[pathNames.length - 1]);
};

export const upToDirectory = () => {
  let newPath = getUpDirectoryPath().join("\\");
  if (newPath === "C:") newPath = `${newPath}\\`;
  setDir(newPath);
};
