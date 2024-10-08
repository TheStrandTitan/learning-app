import config from "../config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function QueryHandler({ onQueryChange }) {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    let updatedPage = false;

    if (urlParams.has("tabName")) {
      const tabName = urlParams.get("tabName");
      if (sessionStorage.getItem("tabName") !== tabName) {
          config.tabName = tabName;
          sessionStorage.setItem("tabName", tabName);
          updatedPage = true;
      }
    }
    if (urlParams.has("pictureURL")) {
      const pictureURL = urlParams.get("pictureURL");
      if (sessionStorage.getItem("pictureURL") !== pictureURL) {
        config.pictureURL = pictureURL;
        sessionStorage.setItem("pictureURL", pictureURL);
        updatedPage = true;
      }
    }
    if (urlParams.has("boolCheck")) {
      const boolCheck = urlParams.get("boolCheck");
      if (sessionStorage.getItem("boolCheck") !== boolCheck && 
          (boolCheck === 'true' || boolCheck === 'false' || boolCheck === '')) {
        config.boolCheck = boolCheck;
        sessionStorage.setItem("boolCheck", boolCheck);
        updatedPage = true;
      }
    }

    if (updatedPage) {
      console.log("Page Update");
      onQueryChange();
    }
  }, [location.search, onQueryChange]);
  return null;
}
export default QueryHandler;
