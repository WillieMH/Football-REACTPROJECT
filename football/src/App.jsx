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
        <div className="crest">
          <img src={teamsArry[0].clubBageImgUrl}/>
          <img src={teamsArry[1].clubBageImgUrl}/>
          <img src={teamsArry[2].clubBageImgUrl}/>
          <img src={teamsArry[3].clubBageImgUrl}/>
          <img src={teamsArry[4].clubBageImgUrl}/>
          <img src={teamsArry[5].clubBageImgUrl}/>
          <img src={teamsArry[6].clubBageImgUrl}/>
          <img src={teamsArry[7].clubBageImgUrl}/>
          <img src={teamsArry[8].clubBageImgUrl}/>
          <img src={teamsArry[9].clubBageImgUrl}/>
          <img src={teamsArry[10].clubBageImgUrl}/>
          <img src={teamsArry[11].clubBageImgUrl}/>
        </div>
      </header>
    </div>
  );
}

export default App;
