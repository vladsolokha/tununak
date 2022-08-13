import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/logo.jpg'
import pdf from './assets/Economic Assistance.pdf'
import './App.css';

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/board">Board Members</Link>
        <Link to="/history">History</Link>
      </nav>
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
    </>
  )
}

function Board() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/board">Board Members</Link>
        <Link to="/history">History</Link>
      </nav>
      <main>
        <p>Our Board Members</p>
      </main>
    </>
  )
}

function History() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/board">Board Members</Link>
        <Link to="/history">History</Link>
      </nav>
      <main>
        <p>Our History</p>
      </main>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tununak</h1>
        <h2>Native Village</h2>
      </header>
      <caption>Eric Ellefson, 2010</caption>

      <navbar className="navbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="board" element={<Board />} />
          <Route path="history" element={<History />} />
        </Routes>
      </navbar>

      <main>
      </main>
      
      <footer>
        copyright &copy; 2022
      </footer>

    </div>
  );
}

export default App;
