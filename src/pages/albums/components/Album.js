import { useContext } from 'react'
import { AlbumContainer } from '../styles'
import { selectAlbum } from '../utils'
import { useHistory } from 'react-router-dom'
import { object, any } from 'prop-types'
import { AlbumsContext } from '../AlbumsContainer'

const propTypes = {
  album: object,
  testid: any
}

function Album({ album, testid }) {
  const {
    setSelectedAlbum,
    setAlbumDetails
  } = useContext(AlbumsContext)
  const history = useHistory()

  return (
    <AlbumContainer
      onClick={() => selectAlbum({ setSelectedAlbum, setAlbumDetails, albumId: album.id, history })}
      data-testid={testid}
    >
      {album.title}
    </AlbumContainer>
  )
}

Album.propTypes = propTypes
export default Album
