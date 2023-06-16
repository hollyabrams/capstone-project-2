import { render, screen } from '@testing-library/react';
import App from './App';

it('should render text from the homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Explore, shop, and let's embrace every mode together!/i);
  expect(linkElement).toBeInTheDocument();
});

it('should render without crashing', () => {
  render(<App />);
});
