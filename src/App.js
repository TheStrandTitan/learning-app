import logo from './logo.svg';
import './App.css';
import staticImageSaved from './plainSquare.jpg';

import { useState } from 'react';

function ClickManager() {
  const [count, clickCheck] = useState(0)
  function handleClickCheck() {
      clickCheck(count + 1);
  }

  return ( 
    <button onClick={handleClickCheck}>
      This button has been clicked {count} times.
    </button>
  );

}


/*
function ImageTester() {
  let count = -1;
    const refreshVal = Number(localStorage.getItem("incrementRefresh")) || 0;
    count = refreshVal + 1;
    localStorage.setItem("incrementRefresh", count);

  return (
    <div>
        <img className='redSquare' alt='Normal Red Square' src={staticImageSaved}></img>
        <h3>This Image has been refreshed {count} times.</h3>

    </div>
  );
}
*/



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Practice Test</h1>
        <ClickManager />
        <h2>Image Test</h2>
      </header>
    </div>
  );
}

export default App;
