import {unlink} from 'fs/promises';
import { ERORR_TYPES } from '../utils/constants.js';
import { printErrorMessage } from '../utils/services.js';


export const removeFile = async (pathToFile) => {
    try {
        console.clear();
        await unlink(pathToFile);
        console.log('File was Deleted');
    }catch(e) {
        printErrorMessage(ERORR_TYPES.OPERATION_FAILED, e.message);
    }
    
}