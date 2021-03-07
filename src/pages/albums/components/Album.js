import { useContext } from 'react'
import { AlbumContainer } from '../styles'
import { selectAlbum } from '../utils'
import { useHistory } from 'react-router-dom'
import { object } from 'prop-types'
import { AlbumsContext } from '../AlbumsContainer'

const propTypes = {
  album: object
}

function Album({ album }) {
  const {
    setSelectedAlbum,
    setAlbumDetails
  } = useContext(AlbumsContext)
  const history = useHistory()

  return (
    <AlbumContainer
      onClick={() => selectAlbum({ setSelectedAlbum, setAlbumDetails, albumId: album.id, history })}
    >
      {album.title}
    </AlbumContainer>
  )
}

Album.propTypes = propTypes
export default Album
