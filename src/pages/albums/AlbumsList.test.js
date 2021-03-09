import { render, screen, fireEvent } from '@testing-library/react';
import AlbumsList from './AlbumsList';
import { MemoryRouter, Router } from 'react-router-dom'
import { AlbumsContext } from './AlbumsContainer'
import { albums } from '../../mocks/albums'
import { createMemoryHistory } from 'history'


describe('AlbumsList', () => {
  it('should render the album list page', () => {
    // given
    const promise = Promise.resolve(albums)
    const getAlbumsList = jest.fn(() => promise)
    const albumsList = []
    const setAlbumDetails = jest.fn()
    const setSelectedAlbum = jest.fn()
    const setAlbumsList = jest.fn()

    render(
      <MemoryRouter initialEntries={['albums/3']}>
        <AlbumsContext.Provider
          value={{
            getAlbumsList,
            albumsList,
            setAlbumsList,
            setSelectedAlbum,
            setAlbumDetails
          }}
        >
          <AlbumsList />
        </AlbumsContext.Provider>
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/Albums list/i)
    expect(titleElement).toBeInTheDocument()
    expect(getAlbumsList).toHaveBeenCalled()
  });

  it('should redirect to the album detail route', async () => {
    // given
    const promise = Promise.resolve(albums)
    const getAlbumsList = jest.fn(() => promise)
    const albumsList = albums
    const setAlbumDetails = jest.fn()
    const setSelectedAlbum = jest.fn()
    const setAlbumsList = jest.fn()
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <AlbumsContext.Provider
          value={{
            getAlbumsList,
            albumsList,
            setAlbumsList,
            setSelectedAlbum,
            setAlbumDetails
          }}
        >
          <AlbumsList />
        </AlbumsContext.Provider>
      </Router>
    );
    // when
    fireEvent.click(screen.getByTestId('album-0'))
    // then
    expect(getAlbumsList).toHaveBeenCalled()
    expect(setAlbumDetails).toHaveBeenCalledWith(null)
    expect(setSelectedAlbum).toHaveBeenCalledWith(albums[0].id)
    expect(history.location.pathname).toEqual(`/albums/${albums[0].id}`)
  });
})