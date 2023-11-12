import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Fullstack Development - I
        </h1>
        <h2>
          React JS Programming Week09 Lab exercise
        </h2>
        <h3>
          101320843
        </h3>
        <p>
          Ruslan Makhanov
        </p>
        <a
          className="App-link"
          href="https://www.georgebrown.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          George Brown College, Toronto
        </a>
      </header>
    </div>
  );
}

export default App;
