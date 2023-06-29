import './App.css';
import News from './Components/News';

function App() {
  return (
    <div>
      <header className='header'>
        Tech News Aggregator
      </header>
      <body>
      <section>
        <News />
      </section>
      </body>

    </div>
  );
}

export default App;
