import AlbumsRoutes from './routes'
import { createContext, useState } from 'react'
import { getAlbumsList, getAlbumDetail } from './utils'

export const AlbumsContext = createContext({})

function AlbumsContainer() {
  const [albumsList, setAlbumsList] = useState([])
  const [selectedAlbum, setSelectedAlbum] = useState()
  const [albumDetails, setAlbumDetails] = useState([])

  return (
    <AlbumsContext.Provider
      value={{
        getAlbumsList,
        albumsList,
        setAlbumsList,
        selectedAlbum,
        setSelectedAlbum,
        getAlbumDetail,
        albumDetails,
        setAlbumDetails
      }}
    >
      <AlbumsRoutes />
    </AlbumsContext.Provider>
  )
}

export default AlbumsContainer
