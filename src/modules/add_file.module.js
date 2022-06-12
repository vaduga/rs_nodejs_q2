import path from "path";
import { open } from "fs/promises";
import process from "process";
import { printErrorMessage, currentPath } from "../utils/services.js";
import { ERORR_TYPES } from "../utils/constants.js";

export const addFile = async (currentData) => {
  try {
    const filePath = path.join(process.cwd(), currentData);
    await open(filePath, "w");
    console.clear();
    console.log("file added");
    currentPath();
  } catch (e) {
    printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message);
  }
};
