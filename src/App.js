import logo from './assets/logo.jpeg'
import pdf from './assets/8547 Basement Finish.pdf'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tununak</h1>
        <h2>Native Village</h2>
      </header>

      <main>
        <a
          className="App-link"
          href={pdf}
          download
        >
          Download Application pdf
        </a>
      </main>
      
      <footer>
        copyright &copy; 2022
      </footer>

    </div>
  );
}

export default App;
