import { createReadStream, createWriteStream, F_OK } from "fs";
import zlib from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import { printErrorMessage, currentPath } from "../utils/services.js";
import { ERORR_TYPES } from "../utils/constants.js";
import { access } from "fs/promises";

const pipe = promisify(pipeline);

export const compressModule = async (pathToFile, pathToDest) => {
  console.clear();
  try {
    await access(pathToFile, F_OK);
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToDest);
    const compressStream = zlib.createBrotliCompress();
    await pipe(readStream, compressStream, writeStream);
    console.log("Compress done");
    currentPath();
  } catch (e) {
    printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message);
  }
};
