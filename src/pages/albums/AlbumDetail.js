import { debounce } from 'lodash'
import api from '../../utils/api'
import { Lightbox } from 'react-modal-image'
import { AlbumsContext } from './AlbumsContainer'
import { searchPhoto } from './utils'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useContext, useState, useCallback } from 'react'
import { PageTitle, AlbumDetailContainer, SerachInput } from "./styles"
import Photo from './components/Photo'

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
      <PageTitle>Album Detail</PageTitle>
      <SerachInput type="search" value={searchText} onChange={s => setSearchText(s.target.value)} placeholder="Search..." />
      <AlbumDetailContainer>
        {photos && photos.length > 0 && photos.map((photo, index) => (
          <Photo
            key={index}
            photo={photo}
            setSelectedPhoto={setSelectedPhoto}
            searchText={searchText}
          />
        ))}
        {!photos && photos.length === 0 && "loading..."}
      </AlbumDetailContainer>
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
