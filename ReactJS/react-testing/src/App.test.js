import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async() => {
  render(<App />);
  const myData = await screen.findByText("Testing React code");
  expect(myData).toBeInTheDocument();
});
