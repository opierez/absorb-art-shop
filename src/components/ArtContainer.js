import ArtList from './ArtList'
import Search from './Search'
import '../styles/ArtContainer.css'

function ArtContainer({ artwork }) {

    return (
        <main>
            <div>
            <Search />
            </div>
            <div>
            <ArtList art={artwork}/>
            </div>
        </main>
    )
}

export default ArtContainer