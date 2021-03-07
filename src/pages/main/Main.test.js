import { render, screen } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom'

describe('Main', () => {
  it('should render the page layout title', () => {
    render(<MemoryRouter initialEntries={['/']}><Main /></MemoryRouter>);
    const titleElement = screen.getByText(/Lucas Keller League/i);
    expect(titleElement).toBeInTheDocument();
  });
})
