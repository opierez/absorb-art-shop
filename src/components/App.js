import React, {useState, useEffect} from 'react'
import '../styles/App.css';
import Header from './Header';
import NavBar from './NavBar';
import ArtContainer from './ArtContainer';
import Form from './Form'
import Cart from './Cart'
import Gallery from './Gallery'
import ArtDetail from './ArtDetail'
import { Switch, Route } from 'react-router-dom'

function App() {

  const [artwork, setArtwork] = useState([])

    useEffect(() => {
        fetch('http://localhost:6001/artwork')
            .then(resp => resp.json())
            .then(setArtwork)
    }, [])



  return (
    <div className="App">
      <NavBar />
      <Switch>

        {/* / => Home Page, Root Route */}
        <Route exact path="/">
          <Header />
        </Route>

        {/* /artwork/cart => Show Page for Cart Items */}
        <Route path="/artwork/cart">
          <Cart />
        </Route>

        {/* /artwork/new => Create Form for New Artwork */}
        <Route path="/artwork/new">
          <Form />
        </Route>

        {/* /artwork/gallery => Show Items Purchased */}
        <Route path="/artwork/gallery">
          <Gallery />
        </Route>

        {/* /artwork/:id => Show Page for Individual Artwork */}
        <Route path="/artwork/:id">
          <ArtDetail />
        </Route>

        {/* /artwork => All Artwork */}
        <Route path="/artwork">
          <ArtContainer artwork={artwork}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
