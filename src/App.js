import logo from "./logo.svg";
import "./App.css";
import staticImageSaved from './assets/images/plainSquare.jpg'
import { useState } from "react";

function ImageTester() {

  let imageCount = parseInt(sessionStorage.getItem("refreshCount")) || 0;
  if (imageCount === null) {
    imageCount = 0;
  }
  sessionStorage.setItem("refreshCount", imageCount + 1);
    


  return (
    <div>
        <h2>Saved image test below.</h2>
        <img className='redSquare' alt='Normal Red Square' src={staticImageSaved}></img>
        <h3>Page has been refreshed {imageCount} times.</h3>
    </div>
  );
}


export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <title>{process.env.REACT_APP_BANNER_NAME}.</title>
        <h1> Practice Test</h1>
        <ClickManager count={count} ifClicked={handleClick} />
        <ClickManager count={count} ifClicked={handleClick} />
        <ClickManager count={count} />
        <ImageTester />
        <h2>URL .env file image test below</h2>
        <img className='Destiny2' alt='Destiny 2 Guardians' src={process.env.REACT_APP_IMAGE_URL} width="1000" height="600"></img>
      </header>
    </div>
  );
}

function ClickManager({count, ifClicked}) {
  return (
    <button onClick={ifClicked}>
      This button has been clicked {count} times.
    </button>
  );
}
