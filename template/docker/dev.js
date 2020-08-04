const Child_Process = require("child_process");

var args = process.argv.splice(2);

Child_Process.execSync(
  `docker-compose --file docker/docker-compose.yml up  ${args}`,
  {
    stdio: "inherit"
  }
);
