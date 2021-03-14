
import { useContext, useEffect } from 'react'

import { AlbumsContext } from './AlbumsContainer'
import { AlbumList, PageTitle, Breadcrumb, BreadcrumbItem } from './styles'
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
      <Breadcrumb>
        <BreadcrumbItem>Album list</BreadcrumbItem>
      </Breadcrumb>
      <PageTitle>Albums list</PageTitle>
      {albumsList && albumsList.length > 0 && (
        <AlbumList>
          {albumsList.map((album, index) => (
            <Album
              key={`album-${album.id}`}
              album={album}
              testid={`album-${album.id}`}
            />
          ))}
        </AlbumList>
      )}
      {!albumsList && albumsList.length === 0 && (
        <>loading...</>
      )}
    </>
  )
}

export default AlbumsList
