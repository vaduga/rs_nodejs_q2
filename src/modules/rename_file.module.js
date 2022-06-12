import fs from 'fs';
import {access, rename} from 'fs/promises'
import { ERORR_TYPES } from '../utils/constants.js';
import { currentPath, printErrorMessage } from '../utils/services.js';

export const renameFileService = async(pathName, newFileName) => {
    console.clear(); 
    try {      
        await access(pathName, fs.F_OK);
        if(pathName.split('\\').slice(-1).join('').trim() === newFileName.split('\\').slice(-1).join('').trim()) {
            console.log('Same name')
            currentPath();
        return;
        }
        await rename(pathName, newFileName);
        console.log(pathName.split('\\').slice(-1).join('').trim())
        console.log('File renamed');
    }
    catch(e){
        printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message)
    }
}