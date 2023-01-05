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
import { Switch, Route, useHistory } from 'react-router-dom'

function App() {

  const [artwork, setArtwork] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/artwork')
    .then(resp => resp.json())
    .then(artwork => {
      setArtwork(artwork)
      initializeCart(artwork)
    })
  }, [])
  
  const history = useHistory();
  const initializeCart = (art) =>{
    let initialCart = []
    art.forEach((artpiece) => {
      if (artpiece.inCart === true) {
        initialCart.push(artpiece);
      }
    });
    setShoppingCart(initialCart)
  }

  function handleAddItem(newItem){
    setArtwork([...artwork, newItem])
  }
  
  const handleImgClick = (id) => {
    history.push(`/artwork/${id}`)
  }

  function handleToggleCart(art){
    if (art.inCart === true){
      setShoppingCart([...shoppingCart, art])
    }else{
      const remove = shoppingCart.filter((item) => item.id !== art.id)
      setShoppingCart(remove)
    }
  }

  const handleSearch = (value) => {
    setSearchTerm(value)
  }

  const filterArtBySearch = artwork.filter(art => art.artist.toLowerCase().includes(searchTerm.toLowerCase()) || art.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
  const handleSearchClick = () => {
    setIsSearchIconClicked(!isSearchIconClicked)
  }

  function renderImage(image, title, id){
    const firstChar = image.charAt(0)
    if (id === undefined) {
        if (firstChar === "."){
          return <img className="image" src={image.substring(1,)} alt={title}/>
      }else {
          return <img className="image" src={image} alt={title} />}
    } else {
        if (firstChar === "."){
            return <img className="image" src={image.substring(1,)} alt={title} onClick={() => handleImgClick(id)}/>
        }else {
            return <img className="image" src={image} alt={title} onClick={() => handleImgClick(id)}/>}
    }
  }

  return (
    <div className="App">
      <NavBar 
        handleSearchClick={handleSearchClick} 
        artwork={artwork} 
      />
      <Switch>

        {/* / => Home Page, Root Route */}
        <Route exact path="/">
          <Header />
        </Route>

        {/* /artwork/cart => Show Page for Cart Items */}
        <Route path="/artwork/cart">
          <Cart 
          renderImage={renderImage} 
          shoppingCart={shoppingCart}
          handleToggleCart={handleToggleCart}
          />
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
          <ArtDetail renderImage={renderImage} handleToggleCart={handleToggleCart}/>
        </Route>

        {/* /artwork => All Artwork */}
        <Route path="/artwork">
          <ArtContainer 
          artwork={filterArtBySearch} 
          handleSearch={handleSearch} 
          isSearchIconClicked={isSearchIconClicked}
          renderImage={renderImage}/>
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
