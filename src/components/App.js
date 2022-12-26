// import logo from './logo.svg';
import '../styles/App.css';
import Header from './Header';
import NavBar from './NavBar';
import ArtContainer from './ArtContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NavBar />
        <ArtContainer />
      </header>
    </div>
  );
}

export default App;
