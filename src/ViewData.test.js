import { render, screen } from '@testing-library/react';
import ViewData from './ViewData';

test('renders view data link', () => {
  render(<ViewData />);
  const linkElement = screen.getByText(/source/i);
  expect(linkElement).toBeInTheDocument();
});
