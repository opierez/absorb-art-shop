import ArtList from './ArtList'
import Search from './Search'
import '../styles/ArtContainer.css'

function ArtContainer({ artwork, handleSearch, isSearchIconClicked, renderImage }) {

    return (
        <main>
            <div>
            <Search handleSearch={handleSearch} isSearchIconClicked={isSearchIconClicked} />
            </div>
            <br></br>
            <div>
            <ArtList art={artwork} renderImage={renderImage}/>
            </div>
        </main>
    )
}

export default ArtContainer