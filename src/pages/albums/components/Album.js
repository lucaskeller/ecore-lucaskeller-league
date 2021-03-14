import { useContext } from 'react'
import { AlbumItem } from '../styles'
import { selectAlbum } from '../utils'
import { Link } from 'react-router-dom'
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

  return (
    <AlbumItem
      onClick={() => selectAlbum({ setSelectedAlbum, setAlbumDetails, albumId: album.id })}
      data-testid={testid}
    >
      <Link to={`albums/${album.id}`} data-testid={`link-${testid}`}>
        {album.title}
      </Link>
    </AlbumItem>
  )
}

Album.propTypes = propTypes
export default Album
