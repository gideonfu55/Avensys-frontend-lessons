/* eslint-disable testing-library/await-async-query */
import { render, screen } from "@testing-library/react";
import App from "./index.js";
import Launch from "./Launch.js";

// First Test
test('Checking whether App component is returning the message "React Test App"', async () => {
  render(<Launch />);
  const myData = await screen.findByText(/Testing React code/i);
  expect(myData).toBeInTheDocument();
});