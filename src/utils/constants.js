import os from "os";

export const FLAG = "--username";
export const greatingMessage = "Welcome to the File Manager";
export const goodluckMessage = "Thank you for using File Manager";
export const tryAgainMessage = "Please try again";
export const currentPathMessage = "You are currently in";
export const HOME_DIR = os.homedir();

export const ERORR_TYPES = {
  OPERATION_FAILED: "Operation failed",
  INVALID_INPUT: "Invalid input",
};

//ACTIONS
export const ACTIONS = {
  START: "START",
  EXIT: "EXIT",
  WITHOUT_FLAG: "WITHOUT_FLAG",
  UP_DIR: "UP_DIR",
};

export const FLAGS = {
  UP: "up",
  CD: "cd",
  LS: "ls",
  CAT: "cat",
  ADD: "add",
  RN: "rn",
  CP: "cp",
  MV: "mv",
  RM: "rm",
  OS: "os",
  HASH: "hash",
  COMPRESS: "compress",
  DECOMPRESS: "decompress",
  EXIT: ".exit",
};
