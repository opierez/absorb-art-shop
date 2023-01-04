import React, {useState, useEffect} from 'react'
import '../styles/App.css';
import Header from './Header';
import NavBar from './NavBar';
import ArtContainer from './ArtContainer';
import Form from './Form'
import Cart from './Cart'
import Gallery from './Gallery'
import ArtDetail from './ArtDetail'
import ErrorPage from './ErrorPage'
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom';

function App() {

  const [artwork, setArtwork] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])


  useEffect(() => {
      fetch('http://localhost:6001/artwork')
          .then(resp => resp.json())
          .then(setArtwork)
  }, [])
  
  function handleAddItem(newItem){
    setArtwork([...artwork, newItem])
  }


  const handleSearch = (value) => {
    setSearchTerm(value)
  }

  const filterArtBySearch = artwork.filter(art => art.artist.toLowerCase().includes(searchTerm.toLowerCase()) || art.title.toLowerCase().includes(searchTerm.toLowerCase()))
  // console.log(filterArtBySearch)
  
  const handleSearchClick = () => {
    setIsSearchIconClicked(!isSearchIconClicked)
    // console.log(isSearchIconClicked)
  }

  function handleAddToCart(newAdd){
    setShoppingCart([...shoppingCart, newAdd])
  }

  return (
    <div className="App">
      <NavBar handleSearchClick={handleSearchClick}/>
      <Switch>

        {/* / => Home Page, Root Route */}
        <Route exact path="/">
          <Header />
        </Route>

        {/* /artwork/cart => Show Page for Cart Items */}
        <Route path="/artwork/cart">
          <Cart shoppingCart={shoppingCart}/>
        </Route>

        {/* /artwork/new => Form for New Artwork */}
        <Route path="/artwork/new">
          <Form handleAddItem={handleAddItem}/>
        </Route>

        {/* /artwork/gallery => Show Items Purchased */}
        <Route path="/artwork/gallery">
          <Gallery />
        </Route>

        {/* /artwork/:id => Show Page for Individual Artwork Details */}
        <Route path="/artwork/:id">
          <ArtDetail handleAddToCart={handleAddToCart}/>
        </Route>

        {/* /artwork => All Artwork */}
        <Route path="/artwork">
          <ArtContainer 
          artwork={filterArtBySearch} 
          handleSearch={handleSearch} 
          isSearchIconClicked={isSearchIconClicked}/>
        </Route>

        {/* * => Invalid Routes */}
        <Route path="*">
          <ErrorPage />
        </Route>

      </Switch>
    </div>
  );
}
export default App;
