import { debounce } from 'lodash'
import api from '../../utils/api'
import { searchPhoto } from './utils'
import Photo from './components/Photo'
import { Lightbox } from 'react-modal-image'
import { AlbumsContext } from './AlbumsContainer'
import { useHistory, useParams, Link } from 'react-router-dom'
import { useEffect, useContext, useState, useCallback } from 'react'
import { PageTitle, AlbumPhotoList, SearchInput, Breadcrumb, BreadcrumbItem } from "./styles"

function AlbumDetail() {
  const [selectedPhoto, setSelectedPhoto] = useState()
  const [searchText, setSearchText] = useState('')
  const [photos, setPhotos] = useState([])
  const {
    getAlbumDetail,
    selectedAlbum,
    albumDetails,
    setAlbumDetails
  } = useContext(AlbumsContext)
  let { id } = useParams()
  const history = useHistory()
  const debouncedFilter = useCallback(debounce(searchPhoto, 1000), [])

  useEffect(() => {
    let ignore = false

    if (selectedAlbum || id) {
      async function fetchData() {
        const albumDetails = await getAlbumDetail({ albumId: selectedAlbum || id, api })
        if (!ignore) {
          setAlbumDetails(albumDetails)
          setPhotos(albumDetails)
        }
      }
      fetchData()
    } else {
      history.push('albums')
    }

    return () => { ignore = true }
  }, [])

  useEffect(() => {
    if (albumDetails && albumDetails.length > 0) {
      debouncedFilter(searchText, albumDetails, setPhotos)
    }
  }, [searchText])

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/albums">Album list</Link></BreadcrumbItem>
        <BreadcrumbItem>Album Detail</BreadcrumbItem>
      </Breadcrumb>
      <PageTitle data-testid="album-detail-page">Album Detail</PageTitle>
      <SearchInput type="search" value={searchText} onChange={s => setSearchText(s.target.value)} placeholder="Search..." />
      <AlbumPhotoList>
        {photos && photos.length > 0 && photos.map(photo => (
          <Photo
            key={`photo-${photo.id}`}
            photo={photo}
            setSelectedPhoto={setSelectedPhoto}
            searchText={searchText}
          />
        ))}
        {!photos && photos.length === 0 && "loading..."}
      </AlbumPhotoList>
      {
        selectedPhoto && (
          <Lightbox
            medium={selectedPhoto.url}
            large={selectedPhoto.url}
            alt={selectedPhoto.title}
            onClose={() => setSelectedPhoto(null)}
          />
        )
      }
    </>
  )
}

export default AlbumDetail
