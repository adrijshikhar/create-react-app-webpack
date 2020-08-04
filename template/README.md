# create-react-app-webpack

This project is bootstraped with [create-react-app-webpack](https://github.com/adrijshikhar/create-react-app-webpack).

## Available Scripts

Scripts available inside this project:-

### `npm start` or `npm run build`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.
<br>
The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.


### `npm start:dashboard`

Opens interative dashboard for the app in the terminal
Every information regarding webpack config is displayed in organised manner


### `npm run dev`

Start the development server on default port `8080`.<br>
Starts server in hot mode but doesn't preserve state of component if any while reloading.

### `npm run dev:hot`

Start the development server on default port `8080`.<br>
Starts server in hot mode preserves state of component also if any while applying hot load patch.

### `npm run docker:dev`

Start the development server inside the docker container.<br>
Maps machines port `8080` to `docker` container port `8080`.<br>
Helpful in case you want to do development inside container keeping the environment same for everyone, removes the need for changing node version for different applications.

### `npm test`

Launches Test Runner in the intreactive manner.

### `npm run lint`

Enforces the linting rules defined in `.eslintrc`.
<br>
For inforcing your rules `replace` the `file` or `content` of `eslintrc`.<br>
Here we are using `prettier` for formatting and `eslint` for enforcing rules related to best coding practices.

### `npm run build:prod`

Builds the app for production to the `public` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
<br>

The build is minified and the filenames include the hashes.
<br>

Your app is ready to be deployed.

### `npm run bundle-report`

Generates bundle report.
<br>
Open http://localhost:9000 to view it in the browser.
