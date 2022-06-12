import process, { stdin, exit, argv } from "process";
import {
  checkParams,
  checkUserName,
  printErrorMessage,
  printMessage,
  setDir,
} from "./utils/services.js";
import { ACTIONS, ERORR_TYPES, FLAGS } from "./utils/constants.js";
import { addFile } from "./modules/add_file.module.js";
import { readFileService } from "./modules/read_file.module.js";
import { renameFileService } from "./modules/rename_file.module.js";
import { copyFileService } from "./modules/copy_file.module.js";
import { upToDirectory } from "./modules/up_to_directory.module.js";
import { changeDirService } from "./modules/change_dir.module.js";
import { showList } from "./modules/list.module.js";
import { removeFile } from "./modules/remove_file.module.js";
import { osOperations } from "./modules/os.module.js";
import { calculateHash } from "./modules/hash.module.js";
import { compressModule } from "./modules/compress.module.js";
import { decompressModule } from "./modules/decompress.module.js";
import { moveFileService } from "./modules/move_file.module.js";

const args = argv.slice(2);
const [currentFlag, username] = checkParams(args);
checkUserName(currentFlag, username);
setDir();

stdin.on("data", (data) => {
  const [flag, option1, option2] = data.toString().trim().split(" ");
  switch (flag) {
    case FLAGS.UP:
      upToDirectory();
      break;

    case FLAGS.CD:
      changeDirService(option1);
      break;

    case FLAGS.LS:
      showList();
      break;

    case FLAGS.CAT:
      readFileService(option1);
      break;

    case FLAGS.ADD:
      addFile(option1);
      break;

    case FLAGS.RN:
      renameFileService(option1, option2);
      break;

    case FLAGS.CP:
      copyFileService(option1, option2);
      break;

    case FLAGS.MV:
      moveFileService(option1, option2);
      break;

    case FLAGS.EXIT:
      printMessage(ACTIONS.EXIT, username);
      exit();
      break;

    case FLAGS.RM:
      removeFile(option1);
      break;

    case FLAGS.OS:
      osOperations(option1);
      break;

    case FLAGS.HASH:
      calculateHash(option1);
      break;

    case FLAGS.COMPRESS:
      compressModule(option1, option2);
      break;

    case FLAGS.DECOMPRESS:
      decompressModule(option1, option2);
      break;
    default:
      printErrorMessage(ERORR_TYPES.INVALID_INPUT);
      break;
  }
});

process.on("SIGINT", function (a) {
  printMessage(ACTIONS.EXIT, username);
  process.exit(1);
});
