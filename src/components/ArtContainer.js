import ArtList from './ArtList'
import Search from './Search'
import '../styles/ArtContainer.css'

function ArtContainer({ artwork, handleSearch}) {

    return (
        <main>
            <div id="search-container">
            <Search handleSearch={handleSearch} />
            </div>
            <br></br>
            <div>
            <ArtList art={artwork}/>
            </div>
        </main>
    )
}

export default ArtContainer