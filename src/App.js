import logo from "./logo.svg";
import "./App.css";
import staticImageSaved from './plainSquare.jpg';
import { useState } from "react";


function ImageTester() {
  const [imageCount, setImageCount] = useState(0);

  function clickedImage() {
    setImageCount(imageCount + 1);
  }
  
  return (
    <div>
        <h2>Saved image test below.</h2>
        <img className='redSquare' alt='Normal Red Square' src={staticImageSaved} onLoad={clickedImage}></img>
        <h3>This Image has been loaded {imageCount} time(s).</h3>

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
