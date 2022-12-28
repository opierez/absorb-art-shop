// import logo from './logo.svg';
import '../styles/App.css';
import Header from './Header';
import NavBar from './NavBar';
import ArtContainer from './ArtContainer';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <NavBar />
        <Header />
      </section>
      <ArtContainer />
    </div>
  );
}

export default App;
