const config = {
    pictureURL: sessionStorage.getItem("pictureURL") || process.env.REACT_APP_IMAGE_URL,
    tabName: sessionStorage.getItem("tabName") || process.env.REACT_APP_BANNER_NAME,
    boolCheck: sessionStorage.getItem("boolCheck") || process.env.REACT_APP_TEST_BOOLEAN,
    
};

/**
 * Above are the changable config values for the project. pass a querystring parameter into the URL that matches one of the
 * above variable names to change that variable for the current browsing session. 
 * 
 * Example: localhost:3000/?tabName=Tester&boolCheck=false
 */

export default config;