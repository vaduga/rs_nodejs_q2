import fs from 'fs';
import {access, readFile} from 'fs/promises'
import { currentPath } from '../utils/services.js';

export const readFileService = async (currentData) => {
    console.clear();
    await access(currentData, fs.constants.R_OK | fs.constants.W_OK);
    const fileContent = await readFile(currentData, "utf-8");
    console.log(fileContent);
    currentPath();
}
