import { access } from "fs/promises";
import fs from "fs";
import { printErrorMessage, setDir } from "../utils/services.js";
import { ERORR_TYPES } from "../utils/constants.js";

export const changeDirService = async (dirPath) => {
  try {
    console.log(dirPath);
    console.clear();
    await access(dirPath, fs.F_OK);
    setDir(dirPath);
  } catch (e) {
    printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message);
  }
};
