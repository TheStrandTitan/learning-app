import logo from './logo.svg';
import './App.css';



function ImageTester() {
  return (
  <img className='redSquare' alt='Normal Red Square' src='src/plainSquare.jpg'></img>
  );
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Practice Test</h1>
        <h2>Image Test</h2>
        <ImageTester />
      </header>
    </div>
  );
}

export default App;
