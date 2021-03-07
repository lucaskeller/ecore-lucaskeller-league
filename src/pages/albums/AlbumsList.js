
import { useContext, useEffect } from 'react'

import { AlbumsContext } from './AlbumsContainer'
import { AlbumListContainer, PageTitle } from './styles'
import api from '../../utils/api'
import Album from './components/Album'

function AlbumsList() {
  const {
    getAlbumsList,
    albumsList,
    setAlbumsList,
  } = useContext(AlbumsContext)


  useEffect(() => {
    let ignore = false

    async function fetchData() {
      const albumsList = await getAlbumsList({ userId: 1, api })
      if (!ignore) setAlbumsList(albumsList)
    }

    fetchData()
    return () => { ignore = true }
  }, [])

  return (
    <>
      <PageTitle>Albums list</PageTitle>
      {albumsList && albumsList.length > 0 && (
        <AlbumListContainer>
          {albumsList.map((album, index) => (
            <Album
              key={`album-${index}`}
              album={album}
              id=''
            />
          ))}
        </AlbumListContainer>
      )}
      {!albumsList && albumsList.length === 0 && (
        <>loading...</>
      )}
    </>
  )
}

export default AlbumsList
