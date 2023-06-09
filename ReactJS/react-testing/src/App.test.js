import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing App Components', () => {
  // Test Case 1: Check if Testing React Code renders
  test('Renders Testing React Code', async() => {
    render(<App />);
    const myData = await screen.findByText("Testing React Code");
    expect(myData).toBeInTheDocument();
  });

  // Test Case 2: Check if Hello World is rendered
  test('Renders Hello World', () => {
    render(<App />);
    const myData2 = screen.getByText("Hello World!");
    expect(myData2).toBeInTheDocument();
  });

  test('Starting Count Value', () => {
    render(<App />);
    const countValueElement = screen.getByTestId("countvalue");
    const countValueText = countValueElement.innerHTML;
    const countValue = parseInt(countValueText.match(/\d+/)[0]);
    expect(countValue).toEqual(0);
  });
});
  