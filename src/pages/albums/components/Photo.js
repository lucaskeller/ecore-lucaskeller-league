import { PhotoContainer, PhotoTitle } from '../styles'
import { object, func, string } from 'prop-types'
import { highlightText } from '../utils'

const propTypes = {
  photo: object,
  setSelectedPhoto: func,
  searchText: string
}

function Photo({ photo, setSelectedPhoto, searchText }) {
  return (
    <PhotoContainer onClick={() => setSelectedPhoto(photo)}>
      <img width="150px" height="150px" src={photo.thumbnailUrl} alt={photo.title} />
      <PhotoTitle>{searchText.length > 0 ? highlightText({ text: photo.title, highlight: searchText }) : photo.title}</PhotoTitle>
    </PhotoContainer>
  )
}

Photo.propTypes = propTypes
export default Photo
