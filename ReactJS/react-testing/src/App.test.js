import { render, screen, waitFor } from '@testing-library/react';
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

  // Test Case 3: Check if the initial count is 0
  test('Starting Count Value', () => {
    render(<App />);
    const countValueElement = screen.getByTestId("countvalue");
    const countValueText = countValueElement.innerHTML;
    const countValue = parseInt(countValueText.match(/\d+/)[0]);
    expect(countValue).toEqual(0);
  });

  // Test Case 4: Check if the count increments when the button is clicked
  test('Clicking the button increments the count', async() => {
    render(<App />);
    const theButton = screen.getByRole('button', {name: '+'});

    await theButton.click();
   
    const countValueText = screen.getByTestId("countvalue").innerHTML;
    const countValue = parseInt(countValueText.match(/\d+/)[0]);

    expect(countValue).toEqual(1);
  });

  // Test Case 5: Check if the table row is at least 1:
  test('Check that the number of table rows is 21', async() => {
    render(<App />);
    await waitFor(async () => {
    const tableRows = await screen.findAllByRole('row');
    expect(tableRows.length).toEqual(21);
  });
  });
});
  