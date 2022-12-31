import ArtList from './ArtList'
import Search from './Search'

function ArtContainer({ artwork }) {

    return (
        <main>
            <Search />
            <ArtList art={artwork}/>
        </main>
    )
}

export default ArtContainer