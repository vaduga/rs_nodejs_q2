import {cwd} from "process";
import { readdir } from "fs/promises";
import { currentPath } from "../utils/services.js";

export const showList = async () => {
  console.clear();
  const list = await readdir(cwd());
  console.log(list);
  currentPath();
};
