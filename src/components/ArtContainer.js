import React, {useState, useEffect} from 'react'
import ArtList from './ArtList'
import Cart from './Cart'
import Search from './Search'

function ArtContainer() {

    const [artwork, setArtwork] = useState([])

    useEffect(() => {
        fetch('http://localhost:6001/artwork')
            .then(resp => resp.json())
            .then(setArtwork)
    }, [])

    // console.log(artwork)

    return (
        <main>
            <ArtList art={artwork}/>
            <Cart />
            <Search />
        </main>
    )
}

export default ArtContainer