import os from "os";
import { ERORR_TYPES } from "../utils/constants.js";
import { printErrorMessage, currentPath } from "../utils/services.js";

export const osOperations = (option) => {
  console.clear();
  switch (option) {
    case "--EOL":
      console.log(`Default system End-Of-Line ${JSON.stringify(os.EOL)}`);
      break;
    case "--cpus":
      const cpus = os.cpus();
      const coreCount = cpus.length;
      console.log(`Amount of CPUS - ${coreCount}`);
      const cpusModels = cpus.map((item) => {
        return { model: item.model };
      });
      console.log(cpusModels);
      break;
    case "--homedir":
      console.log(`Homedir - ${os.homedir()}`);
      break;
    case "--username":
      console.log(`Username - ${os.hostname()} `);
      break;
    case "--architecture":
      console.log(`Architecture - ${os.arch()}`);
      break;
    default:
      printErrorMessage(ERORR_TYPES.INVALID_INPUT);
      return;
  }
  currentPath();
};
