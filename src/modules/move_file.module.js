import fs from "fs";
import { access, rename } from "fs/promises";
import { ERORR_TYPES } from "../utils/constants.js";
import { printErrorMessage } from "../utils/services.js";
let file;
export const moveFileService = async (pathToFile, pathToNewDirectory) => {
  console.clear();
  try {
    await access(pathToFile, fs.F_OK);
    file = pathToFile.split("\\").join("").trim();

    if (pathToNewDirectory.split("\\").slice(-1).join("").trim() !== file) {
      pathToNewDirectory = `${pathToNewDirectory}\\${file}`;
    }
    await rename(pathToFile, pathToNewDirectory);
    console.log("File was moved");
  } catch (e) {
    printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message);
    console.log(file);
    console.log(pathToNewDirectory);
  }
};
