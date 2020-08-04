import fs = require("fs");
import path = require("path");
import chalk from "chalk";

/**
 * @summary copies the directory content from source to destination directory
 * @param {String} source path of source file
 * @param {String} destination  path of destination file
 */
function copyDirectory(source: string, destination: string) {
  createDirectory(destination);

  const content = fs.readdirSync(source);
  for (let i = 0; i < content.length; i++) {
    const currentFile = fs.lstatSync(path.join(source, content[i]));

    if (currentFile.isDirectory()) {
      copyDirectory(
        path.join(source, content[i]),
        path.join(destination, content[i])
      );
    } else if (currentFile.isSymbolicLink()) {
      const symlink = fs.readlinkSync(source, content[i]);
      fs.symlinkSync(symlink, path.join(destination, content[i]));
    } else {
      copyFile(
        path.join(source, content[i]),
        path.join(destination, content[i])
      );
    }
  }
}

/**
 * @summary copies the file content from source to destination file
 * @param {String} source path of source file
 * @param {String} destination  path of destination file
 * @param {boolean} prod  tells if user require prod environment
 */
function copyFile(source: string, destination: string) {
  let inputFile, outputFile;
  if (source.match(".json$")) {
    inputFile = JSON.parse(fs.readFileSync(source, "utf8"));
    if (source.match("package.json$")) {
      inputFile.scripts.start = "node server/";
    }
    fs.writeFileSync(destination, JSON.stringify(inputFile, null, 2), "utf8");
  } else {
    inputFile = fs.createReadStream(source);
    outputFile = fs.createWriteStream(destination);
    inputFile.pipe(outputFile);
  }
}

/**
 * Creates a directory from input
 * @param {String} destination path of destination directory
 */
function createDirectory(destination: string) {
  if (fs.existsSync(destination)) {
    throw new Error(ErrorMessage("Directory Already Exists!"));
  } else {
    fs.mkdirSync(destination);
  }
}
/**
 * @param  {string} message error message string
 */
function ErrorMessage(message: string) {
  return chalk.bold.red(message);
}

/**
 * @param  {string} message success message string
 */

function SuccessMessage(message: string) {
  return chalk.bold.green(message);
}

export default {
  copyDirectory,
  copyFile,
  createDirectory,
  ErrorMessage,
  SuccessMessage,
};
