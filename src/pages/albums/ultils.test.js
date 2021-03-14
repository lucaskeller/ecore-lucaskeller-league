import {
  getAlbumsList,
  selectAlbum,
  getAlbumDetail,
  searchPhoto,
} from './utils'
import { photos } from '../../mocks/photos'

describe(':: Albums utils', () => {
  describe('getAlbumsList()', () => {
    it('should call api to get all user`s albums', async () => {
      // given
      const userId = 1
      const api = jest.fn(() => Promise.resolve())
      // when
      await getAlbumsList({ userId: userId, api })
      //then 
      expect(api).toHaveBeenCalledWith(`users/${userId}/albums`, { method: 'GET' })
    })
  })

  describe('selectAlbum()', () => {
    it('should select the album and push the history to album detail', () => {
      // given
      const setSelectedAlbum = jest.fn()
      const setAlbumDetails = jest.fn()
      const albumId = 1
      // when
      selectAlbum({ setSelectedAlbum, setAlbumDetails, albumId })
      // then
      expect(setSelectedAlbum).toHaveBeenCalledWith(albumId)
      expect(setAlbumDetails).toHaveBeenCalledWith(null)
    })
  })

  describe('getAlbumDetail()', () => {
    it('should call api to get the photos from the album', async () => {
      // given
      const albumId = 1
      const api = jest.fn(() => Promise.resolve())
      // when
      await getAlbumDetail({ albumId: albumId, api })
      //then 
      expect(api).toHaveBeenCalledWith(`albums/${albumId}/photos`, { method: 'GET' })
    })
  })

  describe('searchPhoto()', () => {
    it('should search inside photos array and return matched photos according the serch text value', async () => {
      // given
      const value = 'incidunt'
      const photosArray = photos
      const setPhotos = jest.fn()
      // when
      searchPhoto(value, photosArray, setPhotos)
      //then 
      expect(setPhotos).toHaveBeenCalledWith([
        {
          "albumId": 3,
          "id": 101,
          "title": "incidunt alias vel enim",
          "url": "https://via.placeholder.com/600/e743b",
          "thumbnailUrl": "https://via.placeholder.com/150/e743b"
        },
        {
          "albumId": 3,
          "id": 108,
          "title": "qui tempora vel exercitationem harum iusto voluptas incidunt",
          "url": "https://via.placeholder.com/600/627495",
          "thumbnailUrl": "https://via.placeholder.com/150/627495"
        },
        {
          "albumId": 3,
          "id": 145,
          "title": "eius unde ipsa incidunt corrupti quia accusamus omnis",
          "url": "https://via.placeholder.com/600/f3472e",
          "thumbnailUrl": "https://via.placeholder.com/150/f3472e"
        },
      ])
    })

    it('should return all photos when serach text is empty', () => {
      // given
      const value = ''
      const photosArray = photos
      const setPhotos = jest.fn()
      // when
      searchPhoto(value, photosArray, setPhotos)
      //then 
      expect(setPhotos).toHaveBeenCalledWith(photosArray)
    })
  })
})