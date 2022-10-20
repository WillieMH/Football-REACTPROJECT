import logo from './logo.svg';
import './App.scss';
import teams from "./data/TeamData.js"

const teamsArry = teams;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Page Under Development
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={teamsArry[6].stadiumImgUrl}/>
      </header>
    </div>
  );
}

export default App;
