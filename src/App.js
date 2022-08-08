import logo from './assets/logo.jpg'
import pdf from './assets/Economic Assistance.pdf'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tununak</h1>
        <h2>Native Village</h2>
      </header>
      <caption>Photo credit: Eric Ellefson, 2010</caption>

      <main>
        <a
          className="App-link"
          href={pdf}
          download={pdf}
          target= "_blank"
          rel='noreferrer'
        >
          Download Economic Assistance Application
        </a>
      </main>
      
      <footer>
        copyright &copy; 2022
      </footer>

    </div>
  );
}

export default App;
