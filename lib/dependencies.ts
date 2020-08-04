import child_process from "child_process";

const DEPENDENCIES = [
  "prop-types",
  "node-sass",
  "react",
  "react-dom",
  "react-router",
  "react-router-dom",
];
const DEV_DEPENDENCIES = [
  "@babel/cli",
  "@babel/core",
  "@babel/plugin-proposal-class-properties",
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/runtime",
  "add-asset-html-webpack-plugin",
  "babel-eslint",
  "babel-loader",
  "clean-webpack-plugin",
  "copy-webpack-plugin",
  "css-loader",
  "dotenv",
  "eslint-loader",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "eslint-watch",
  "eslint",
  "file-loader",
  "html-loader",
  "html-webpack-plugin",
  "husky",
  "lint-staged",
  "mini-css-extract-plugin",
  "offline-plugin",
  "prettier",
  "sass-loader",
  "speed-measure-webpack-plugin",
  "style-loader",
  "uglifyjs-webpack-plugin",
  "url-loader",
  "webpack-bundle-analyzer",
  "webpack-cli",
  "webpack-dashboard",
  "webpack-dev-server",
  "webpack-merge",
  "webpack-stats-plugin",
  "webpack",
];

/**
 * Returns npm command for installing dependencies
 */
function getDependencies() {
  let installCommand = "npm install --save";
  DEPENDENCIES.forEach((dependency) => {
    installCommand += ` ${dependency} `;
  });
  return installCommand;
}

/**
 * Returns npm command for installing dev-dependencies
 */
function getDevDependencies() {
  let installCommand = "npm install --save-dev";
  DEV_DEPENDENCIES.forEach((dependency) => {
    installCommand += ` ${dependency} `;
  });
  return installCommand;
}

/**
 *
 * @param {Array<String>} commands list of commands needs to be executed
 * @param {Object} options
 * @param {String} options.cwd directory where you want to execute command
 * @param {String} options.stdio process's stdio config
 */
function installDependencies(commands: any, options: any) {
  options.stdio = options.stdio || "inherit";

  if (commands) {
    // eslint-disable-next-line no-useless-catch
    try {
      commands.forEach((command: any) => {
        child_process.execSync(command, options);
      });
    } catch (error) {
      throw error;
    }
  }
}

export { installDependencies, getDependencies, getDevDependencies };
