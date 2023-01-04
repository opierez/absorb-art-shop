import ArtList from './ArtList'
import Search from './Search'
import Filter from './Filter'
import '../styles/ArtContainer.css'

function ArtContainer({ artwork, setSearchTerm, setFilter}) {

    return (
        <main>
            <div>
            <Search setSearchTerm={setSearchTerm} />
            <Filter setFilter={setFilter}/>
            </div>
            <br></br>
            <div>
            <ArtList art={artwork}/>
            </div>
        </main>
    )
}

export default ArtContainer