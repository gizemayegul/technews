import './App.css';
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <header>
        Tech News Aggreator
      </header>
      <body>
        <div>
          <p>
            There will be a float about the tech News
          </p>
        </div>
        <div>
          <News />        
          </div>

      </body>

    </div>
  );
}

export default App;
