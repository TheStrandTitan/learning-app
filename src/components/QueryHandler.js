import config from "../config";
function QueryHandler() {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("tabName")) {
    const tabName = urlParams.get("tabName");
    config.tabName = tabName;
    sessionStorage.setItem("tabName", tabName);
  }
  if (urlParams.has("pictureURL")) {
    const pictureURL = urlParams.get("pictureURL");
    config.pictureURL = pictureURL;
    sessionStorage.setItem("pictureURL", pictureURL);
  }
  return null;
}
export default QueryHandler;
