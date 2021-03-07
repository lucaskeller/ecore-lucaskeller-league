import { render, screen, act } from '@testing-library/react';
import AlbumsList from './AlbumsList';
import { MemoryRouter } from 'react-router-dom'
import { AlbumsContext } from './AlbumsContainer'
import { albums } from '../../mocks/albums'

describe('AlbumsList', () => {
  it('should render the album list page', async () => {
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
    await act(() => promise)
  });

})