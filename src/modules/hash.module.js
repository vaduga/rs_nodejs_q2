import crypto from "crypto";
import { F_OK } from "fs";
import { access, readFile } from "fs/promises";
import { ERORR_TYPES } from "../utils/constants.js";
import { printErrorMessage } from "../utils/services.js";

export const calculateHash = async (pathToFile) => {
  try {
    await access(pathToFile, F_OK);
    const text = await readFile(pathToFile, "utf-8");

    console.log(crypto.createHash("sha256").update(text).digest("hex"));
    currentPath();
  } catch (e) {
    printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message);
  }
};
