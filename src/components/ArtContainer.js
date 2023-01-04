import ArtList from './ArtList'
import Search from './Search'
import '../styles/ArtContainer.css'

function ArtContainer({ artwork, handleSearch, isSearchIconClicked }) {

    return (
        <main>
            <div>
            <Search handleSearch={handleSearch} isSearchIconClicked={isSearchIconClicked} />
            </div>
            <br></br>
            <div>
            <ArtList art={artwork}/>
            </div>
        </main>
    )
}

export default ArtContainer