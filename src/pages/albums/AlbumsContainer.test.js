import { render, screen } from '@testing-library/react';
import AlbumsContainer from './AlbumsContainer';
import { MemoryRouter } from 'react-router-dom'


describe('AlbumsContainer', () => {
  it('should render the album container', () => {
    // given

    render(
      <MemoryRouter initialEntries={['/']}>
        <AlbumsContainer />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/Albums list/i)
    expect(titleElement).toBeInTheDocument()
  });
})
