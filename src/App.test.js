import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the page layout title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Lucas Keller League/i);
  expect(titleElement).toBeInTheDocument();
});
