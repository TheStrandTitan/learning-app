const config = {
    pictureURL: sessionStorage.getItem("pictureURL") || process.env.REACT_APP_IMAGE_URL,
    tabName: sessionStorage.getItem("tabName") || process.env.REACT_APP_BANNER_NAME,
    
};

// Potentially update variables via functions within this command file?

export default config;