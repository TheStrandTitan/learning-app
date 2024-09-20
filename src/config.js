const config = {
    pictureURL: sessionStorage.getItem("pictureURL") || process.env.REACT_APP_IMAGE_URL,
    tabName: sessionStorage.getItem("tabName") || process.env.REACT_APP_BANNER_NAME,
    
};

export default config;