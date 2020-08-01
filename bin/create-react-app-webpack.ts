/* eslint-disable no-console */
import * as util from "util";
import packageDetails from "../package.json";

/**
 * Catch and report unexpected error.
 * @param {any} error The thrown error object.
 * @returns {void}
 */

function onFatalError(error: any): void {
  process.exitCode = 2;

  const { version } = packageDetails;
  const message = util.format("%o", error);

  console.error(`
Oops! Something went wrong! :(

Create React App Webpack: ${version}

${message}`);
}

//------------------------------------------------------------------------------
// Execution
//------------------------------------------------------------------------------

(async function main() {
  process.on("uncaughtException", onFatalError);
  process.on("unhandledRejection", onFatalError);

  // Otherwise, call the CLI.
  process.exitCode = await require("../lib/cli").execute(process.argv, null);
})().catch(onFatalError);
