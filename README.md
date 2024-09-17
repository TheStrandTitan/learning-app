# Default ReadMe for React app is visible below. Last updated date: 9/17/2024

This is a test project for attempting to implement a React app which utilizes state management. The goal of the project is to accomplish the following:

* Incorperate state management
   
    Current status: Used sessionStorage to manage state for this implementation. Other suggestions in the future may incorperate other state management systems, but this seems alright for now.

* Display an image on the main project screen. One image should be static and saved on the project, the other should be a URL-based image.
        
   Current Status: Both images display correctly on the project in both developer, production, and docker container modes.

* Use craco with this project and integrate it into the project.
    
    Current status: Craco is partially configured and utilizes an option to specify developer mode with a few options, as well as running on port 3612. I did not add any more configuration with it for this project yet other than the basic functionality and script rewriting.

* Needs to display my name on the banner which is given based upon a variable set in a .env file.

    Current Status: Completed, displays my name on the tab from a value set in the .env file. Works on dev, prod, and Docker container.

* Must be able to run the project in developer mode and production mode.

    Current status: Developer mode is default and it ran correctly. The production mode does not run correctly locally at this time using nginx.

* Must utilize Docker Desktop for running a container for production mode.

    Current Progress: I have installed docker and believe I have it working correctly. The container did not work when I attempted to use auto-generated Docker features but doing a manual Dockerfile and .dockerignore seemed to fix the problem and everything runs as it should.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
