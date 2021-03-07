import { render, screen, act } from '@testing-library/react';
import Album from './Album';
import { MemoryRouter } from 'react-router-dom'
import { AlbumsContext } from '../AlbumsContainer'
import { albums } from '../../../mocks/albums'

describe('AlbumsList', () => {
  it('should render the album item', () => {
    // given
    const setAlbumDetails = jest.fn()
    const setSelectedAlbum = jest.fn()
    const album = albums[0]

    const wrapper = render(
      <MemoryRouter initialEntries={['albums']}>
        <AlbumsContext.Provider
          value={{
            setSelectedAlbum,
            setAlbumDetails
          }}
        >
          <Album album={album} />
        </AlbumsContext.Provider>
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy()
  });
})