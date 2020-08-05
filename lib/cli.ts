import child_process from "child_process";
import path from "path";
import updateNotifier from "update-notifier";
import pkg from "../package.json";
import helper from "./helper";

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60 * 60 * 24,
});

const cli = {
  async execute() {
    if (notifier.update && notifier.update.latest !== pkg.version) {
      const old = notifier.update.current;
      const latest = notifier.update.latest;

      const message =
        `${helper.SuccessMessage("New")} version of ${helper.SuccessMessage(
          pkg.name
        )} available! ${helper.ErrorMessage(old)} -> ${helper.SuccessMessage(
          latest
        )}\n` +
        `Run ${helper.SuccessMessage(`npm install -g ${pkg.name}`)} to update!`;

      notifier.notify({ message: message });
      console.log(
        "______________________________________________________________"
      );
      console.log(message);
      console.log(
        "______________________________________________________________"
      );
    }
    const args = process.argv.slice(2);
    const dirName = args[0];

    const p = path.join(__dirname, "./create");
    child_process.execSync(`node ${p} ${dirName}`, {
      stdio: "inherit",
    });
  },
};
module.exports = cli;
