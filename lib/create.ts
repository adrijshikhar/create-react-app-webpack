import path from "path";
import helper from "./helper";
import { SPECIALCHAR } from "./constants";
import {
  installDependencies,
  getDependencies,
  getDevDependencies,
} from "./dependencies";

const args = process.argv.slice(2);
const dirName = args[0];

if (dirName === "undefined") {
  throw new Error(helper.ErrorMessage("directory name can't be empty"));
} else if (dirName[0].match("^[A-Z0-9]")) {
  throw new Error(
    helper.ErrorMessage("directory name can't start from capital letters ")
  );
} else if (dirName.match(SPECIALCHAR)) {
  throw new Error(
    helper.ErrorMessage(
      "directory name can't start from capital letters or contain special characters in it"
    )
  );
} else {
  //using process.cwd for getting current path
  const TEMPLATE_PATH = path.join(__dirname, "../template");
  const destination = path.join(process.cwd() + "/" + args[0]);

  helper.copyDirectory(TEMPLATE_PATH, destination);

  const commands = [];

  commands.push(getDependencies());
  commands.push(getDevDependencies());

  const options = { cwd: destination, stdio: "inherit" };

  installDependencies(commands, options);
  console.log(helper.SuccessMessage("Successfully created the directory"));
}
