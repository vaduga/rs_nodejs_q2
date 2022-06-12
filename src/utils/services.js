import { stdout, cwd } from 'process';
import {
  ACTIONS,
  currentPathMessage,
  ERORR_TYPES,
  FLAG,
  goodluckMessage,
  greatingMessage,
  HOME_DIR,
  tryAgainMessage,
} from './constants.js';

export const checkParams = (args) => {
  if (!args[0]) {
    printMessage(ACTIONS.WITHOUT_FLAG);
    process.exit();
  }

  return args[0].split('=');
};

export const checkUserName = (currentFlag, username) => {
  currentFlag === FLAG
    ? printMessage(ACTIONS.START, username)
    : printMessage(ACTIONS.WITHOUT_FLAG);
};

export const currentPath = () => {
  console.log(`${currentPathMessage} ${cwd()}`);
};

export const setDir = (newDirPath = HOME_DIR) => {
  process.chdir(newDirPath);
  currentPath();
};

export const printMessage = (action, username = 'Anonimous') => {
  console.clear();
  switch (action) {
    case ACTIONS.START:
      stdout.write(`${greatingMessage}, ${username}!\n`);
      break;
    case ACTIONS.EXIT:
      stdout.write(`${goodluckMessage}, ${username}!\n`);
      break;
    case ACTIONS.WITHOUT_FLAG:
      stdout.write(
        `'You didn't specify username. Try: npm run start -- --username=your_username'!
          Program exited.`,
      );
      break;
  }
};

export const printErrorMessage = (type, message) => {
  console.clear();
  switch (type) {
    case ERORR_TYPES.OPERATION_FAILED:
      console.error(`${ERORR_TYPES.OPERATION_FAILED}!`);
      console.error(`${message}`);
      console.log(`${tryAgainMessage}`);
      currentPath();
      break;
    case ERORR_TYPES.INVALID_INPUT:
      console.error(`${ERORR_TYPES.INVALID_INPUT}!`);
      console.log(`${tryAgainMessage}`);
      currentPath();
      break;
  }
};
