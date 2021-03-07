import { render, screen, act } from '@testing-library/react';
import Photo from './Photo';
import { MemoryRouter } from 'react-router-dom'
import { AlbumsContext } from '../AlbumsContainer'
import { photos } from '../../../mocks/photos'

describe('AlbumsList', () => {
  it('should render the photo item', () => {
    // given
    const searchText = ''
    const setSelectedPhoto = jest.fn()
    const photo = photos[0]

    const wrapper = render(
      <MemoryRouter initialEntries={['albums/1']}>
        <AlbumsContext.Provider
          value={{}}
        >
          <Photo photo={photo} searchText={searchText} setSelectedPhoto={setSelectedPhoto} />
        </AlbumsContext.Provider>
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy()
  });
})