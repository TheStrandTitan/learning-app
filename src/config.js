const config = {
    pictureURL: sessionStorage.getItem("pictureURL") || process.env.REACT_APP_IMAGE_URL,
    tabName: sessionStorage.getItem("tabName") || process.env.REACT_APP_BANNER_NAME,
    boolCheck: sessionStorage.getItem("boolCheck") || process.env.REACT_APP_TEST_BOOLEAN,
    
};

export default config;