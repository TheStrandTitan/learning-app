import logo from "./logo.svg";
import "./App.css";
import staticImageSaved from "./assets/images/plainSquare.jpg";
import { useEffect, useState } from "react";
import config from "./config";
import QueryHandler from "./components/QueryHandler";
import { BrowserRouter as Router } from "react-router-dom";


const enableParamHandler = true; // Use to enable queryString component


function ImageTester() {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    let count = parseInt(sessionStorage.getItem("refreshCount")) || 0;
    sessionStorage.setItem("refreshCount", count + 1);
    setImageCount(count);
  }, []);

  return (
    <div>
      <h2>Saved image test below.</h2>
      <img
        className="redSquare"
        alt="Normal Red Square"
        src={staticImageSaved}
      ></img>
      <h3>Page has been refreshed {imageCount} time(s).</h3>
    </div>
  );
}

export default function App() {


  // Added following block of code for managing state and refreshing page when URL parameters update.
  const [, setQueryChange] = useState(false);
  function handleQueryChange() {
    setQueryChange(queryChange => !queryChange);
  }

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }


  // Router is incorperated below.
  return (
    <Router> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <title>{config.tabName}</title>
        {enableParamHandler && <QueryHandler onQueryChange={handleQueryChange}/>}
        <h1> Practice Test</h1>
        <h3>Test boolean value is set to {config.boolCheck}</h3>
        <ClickManager count={count} ifClicked={handleClick} />
        <ImageTester />
        <h2>URL .env file image test below</h2>
        <img
          className="Destiny2"
          alt="Destiny 2 Guardians"
          src={config.pictureURL}
          width="1000"
          height="600"
        ></img>
      </header>
    </div>
    </Router>
  );
}

function ClickManager({ count, ifClicked }) {
  return (
    <button onClick={ifClicked}>
      This button has been clicked {count} times.
    </button>
  );
}
