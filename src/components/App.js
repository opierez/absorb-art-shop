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
import EditArtSubmission from './EditArtSubmission';
import { Switch, Route, useHistory } from 'react-router-dom'

function App() {

  const [artwork, setArtwork] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [shoppingCart, setShoppingCart] = useState([])
  const [filter, setFilter] = useState('')
  const [myGallery, setMyGallery] = useState([])

  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:6001/artwork')
    .then(resp => resp.json())
    .then(artwork => {
      setArtwork(artwork)
      initializeCart(artwork)
      initializeGallery(artwork)
    })
  }, [])
  
  function handleAddItem(newItem){
    setArtwork([...artwork, newItem])
  }

  const initializeGallery = (art) => {
    let initialGallery = []
    art.forEach((artpiece) => {
      if (artpiece.userUploaded === true) {
        initialGallery.push(artpiece);
      }
    });
    setMyGallery(initialGallery)
  }

  const initializeCart = (art) =>{
    let initialCart = []
    art.forEach((artpiece) => {
      if (artpiece.inCart === true) {
        initialCart.push(artpiece);
      }
    });
    setShoppingCart(initialCart)
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

  function handleGallery(newArt) {
    setMyGallery([...myGallery, newArt])
  }

  const filteredArt = artwork.filter(art => {
    if ((!searchTerm || 
      art.artist.toLowerCase().includes(searchTerm.toLowerCase()) || 
      art.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!filter || art.mediums.includes(filter.toLowerCase()))) {
      return true;
    } 
    return false;
  });


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

  const onUpdateArt = (editedArt) => {
    const updatedArt = myGallery.map((ogArtpiece) => {
      if (ogArtpiece.id === editedArt.id) {
        return editedArt
      } else {
        return ogArtpiece
      }
    }) 
    onUpdateBrowseArt(editedArt)
    setMyGallery(updatedArt)
  }

  const onUpdateBrowseArt = (editedArt) => {
    const updatedArt = artwork.map((ogArt) => {
      if (ogArt.id === editedArt.id) {
        return editedArt
      } else {
        return ogArt
      }
    })
    setArtwork(updatedArt)
  }

  function handleDelete(art){
    const updatedGallery = myGallery.filter((item) => item.id !== art.id)
    updateDeletedBrowse(art)
    setMyGallery(updatedGallery)
  }

  function updateDeletedBrowse (art){
    const updatedArt = artwork.filter((item) => item.id !== art.id)
    setArtwork(updatedArt)
  }

  return (
    <div className="App">

      <NavBar  
        artwork={artwork} />
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
          <Form 
          handleAddItem={handleAddItem}
          handleGallery={handleGallery}
          />
        </Route>

        {/* /artwork/edit => Edit the Art Submission */}
        <Route path="/artwork/:id/edit">
          <EditArtSubmission 
          onUpdateArt={onUpdateArt}/>
        </Route>

        {/* /artwork/gallery => Show Items Purchased */}
        <Route path="/artwork/gallery">
          <Gallery 
          myGallery={myGallery}
          renderImage={renderImage}
          handleDelete={handleDelete}
          />
        </Route>

        {/* /artwork/:id => Show Page for Individual Artwork Details */}
        <Route path="/artwork/:id">
          <ArtDetail 
          renderImage={renderImage} 
          handleToggleCart={handleToggleCart}/>
        </Route>

        {/* /artwork => All Artwork */}
        <Route path="/artwork">
          <ArtContainer 
          artwork={filteredArt} 
          setSearchTerm={setSearchTerm}
          renderImage={renderImage}
          setFilter={setFilter}/>

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
