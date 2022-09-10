import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/logo.jpg'
import map from './assets/map.png'
import pdf from './assets/Economic Assistance.pdf'
import infoIcon from './assets/tununak-info-icon.jpeg'
import infoFull from './assets/tununak-info-full.jpg'
import mapIcon from './assets/tununak-community-map-icon.jpeg'
import mapFull from './assets/tununak-community-map-full.jpg'
import './App.css';

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/board">Board</Link>
        <Link to="/history">History</Link>
      </nav>
      <main className='home-main'>
        <div className='home-img-container'>
          <img src={map} alt='location of Tununak in Alaska' />
        </div>
        <div className='App-link-container'>
          <p>
            Economic Assistance Application
          </p>
          <a
            className="App-link"
            href={pdf}
            download={pdf}
            title='Download pdf of Economic Assistance Application'
            target= "_blank"
            rel='noreferrer'
          >Download
          </a><br/>
          <a
            className="App-link"
            href={pdf}
            title='View the Economic Assistance Application'
            target= "_blank"
            rel='noreferrer'
          >View
          </a>
        </div>
      </main>
    </>
  )
}

function Board() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/board">Board</Link>
        <Link to="/history">History</Link>
      </nav>
      <main>
        <h2>Our Board</h2>
        <p>This page is under construction</p>
        <p>Check back again</p>
      </main>
    </>
  )
}

function History() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/board">Board</Link>
        <Link to="/history">History</Link>
      </nav>
      <main>
        <h2>Our History</h2>
        <div className='history-container'>
          <div className='info-image-container'>
            <p>Information</p>
            <a  href={infoFull} 
                className='history-images'
                title="Full size image of community information"
                target="_blank"
                rel='noreferrer'
            >
              <img src={infoIcon} alt='community information icon' />
            </a>
          </div>
          <div className='map-image-container'>
            <p>Community Map</p>
            <a  href={mapFull} 
                className='history-images'
                title="Full size image of community map"
                target="_blank"
                rel='noreferrer'
            >
              <img src={mapIcon} alt='community map icon' />
            </a>
          </div>
        </div>
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
