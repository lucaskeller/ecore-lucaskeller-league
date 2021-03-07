import { render, screen, act } from '@testing-library/react';
import AlbumDetail from './AlbumDetail';
import { MemoryRouter } from 'react-router-dom'
import { AlbumsContext } from './AlbumsContainer'
import { photos } from '../../mocks/photos'

describe('AlbumDetails', () => {
  it('should render the album detail page', async () => {
    // given
    const promise = Promise.resolve(photos)
    const getAlbumDetail = jest.fn(() => promise)
    const selectedAlbum = 1
    const albumDetails = []
    const setAlbumDetails = jest.fn()

    render(
      <MemoryRouter initialEntries={['albums/3']}>
        <AlbumsContext.Provider
          value={{
            getAlbumDetail,
            selectedAlbum,
            albumDetails,
            setAlbumDetails
          }}
        >
          <AlbumDetail />
        </AlbumsContext.Provider>
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/Album Detail/i)
    expect(titleElement).toBeInTheDocument()
    await act(() => promise)
  });

})
