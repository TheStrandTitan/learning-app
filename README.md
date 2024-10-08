# How to run the project
1. type `git clone https://github.com/TheStrandTitan/learning-app.git` into a linux directory you want to install the repo in.
2. run `npm install` within the directory `learning-app`.
3. Start the project through one of 3 methods: 
    * run `npm start` to start local dev server
    * run `npm run build` and then `serve -s build`
    * run `docker build -t docker-multistage-test:latest -f Dockerfile.multistage . && docker run -d -p 8080:80 --name docker-learning-app docker-multistage-test:latest`  
4. Go to `localhost:8080` on your browser to access the webpage.

# How to use the learning-app
1. Modify variables on the page by passing a query string such as `localhost:8080/?tabName=HelloWorld&boolCheck=true`
2. use `&` to separate query string parameters.
3. Valid parameter keys are `tabName`, `pictureURL`, and `boolCheck`
4. `tabName` changes the current browser tab name value, `pictureURL` accepts and displays an image on the lower section of the page, and `boolCheck` changes the test boolean, but will only accept `false` or `true` case-sensitive.
5. Variable changes persist until browser tab is closed or a blank value is passed to one of the parameters, after which it will revert to the enviromental variable default value on the next page refresh.
6. Change the starting values at buildtime by modifying the environent variable section of the `Dockerbuild.multistage` file.
7. To view all the environmental variables, see the `.env` file or view the `config.js` file located in `src`.


## Last updated date: 9/24/2024

This is a test project for attempting to implement a React app which utilizes state management. The goal of the project is to accomplish the following:

* Incorporate state management
   
    Current status: Used sessionStorage to manage state for this implementation. Other suggestions in the future may incorporate other state management systems, but this seems alright for now. QueryHandler file also uses useEffect and updates with each URL entry.

* Display an image on the main project screen. One image should be static and saved on the project, the other should be a URL-based image.
        
   Current Status: Both images display correctly on the project in both developer, production, and docker container modes.

* Use craco with this project and integrate it into the project.
    
    Current status: Craco is partially configured and utilizes an option to specify developer mode with a few options, as well as running on port 3612. I did not add any more configuration with it for this project yet other than the basic functionality and script rewriting.

* Needs to display my name on the banner which is given based upon a variable set in a .env file.

    Current Status: Completed, displays my name on the tab from a value set in the .env file. Works on dev, prod, and Docker container.

* Must be able to run the project in developer mode and production mode.

    Current status: Developer mode is default and it ran correctly. Production mode runs correctly and is displayed using serve command. Docker container has also been configured to utilize nginx and works correctly.


* Must utilize Docker Desktop for running a container for production mode.

    Current Progress: I have installed docker and believe I have it working correctly. The container did not work when I attempted to use auto-generated Docker features but doing a manual Dockerfile and .dockerignore seemed to fix the problem and everything runs as it should. There is now two commands which will easily create and deploy a docker container for the project.

* Allows enviromental variables to be changed at runtime and default values updated during buildtime.

    Current Progress: Variables are able to be changed by utilizing query string parameters on the URL. The default values can also be individually tweaked during the Docker Container build process by modifying the Dockerfile.multistage file at the indicated section.