
// import Fuse from 'fuse.js'
import { filter } from 'lodash'

export function getAlbumsList({ userId, api }) {
  return api(`users/${userId}/albums`, { method: 'GET' })
}

export function selectAlbum({ setSelectedAlbum, setAlbumDetails, albumId, history }) {
  setAlbumDetails(null)
  setSelectedAlbum(albumId)
  history.push(`albums/${albumId}`)
}

export function getAlbumDetail({ albumId, api }) {
  return api(`albums/${albumId}/photos`, { method: 'GET' })
}

export function searchPhoto(value, photos, setPhotos) {
  const filtered = filter(photos, photo => photo.title.includes(value))
  if (value.length === 0) {
    setPhotos(photos)
  } else {
    setPhotos(filtered)
  }
}

//
// helper from: https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
export function highlightText({ text, highlight }) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <span>
      {parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontStyle: 'italic' } : {}}>
          {part}
        </span>
      )}
    </span>
  )
}