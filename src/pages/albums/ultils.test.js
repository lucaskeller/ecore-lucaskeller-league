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
      const history = { push: jest.fn() }
      // when
      selectAlbum({ setSelectedAlbum, setAlbumDetails, albumId, history })
      // then
      expect(setSelectedAlbum).toHaveBeenCalledWith(albumId)
      expect(setAlbumDetails).toHaveBeenCalledWith(null)
      expect(history.push).toHaveBeenCalledWith(`albums/${albumId}`)
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
      const value = 'ecore'
      const photosArray = photos
      const setPhotos = jest.fn()
      // when
      searchPhoto(value, photosArray, setPhotos)
      //then 
      expect(setPhotos).toHaveBeenCalledWith([
        {
          "albumId": 3,
          "id": 101,
          "title": "ecore rulez",
          "url": "https://via.placeholder.com/600/e743b",
          "thumbnailUrl": "https://via.placeholder.com/150/e743b"
        },
        {
          "albumId": 3,
          "id": 103,
          "title": "et eius nisi in ut ecore labore eum",
          "url": "https://via.placeholder.com/600/35cedf",
          "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
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