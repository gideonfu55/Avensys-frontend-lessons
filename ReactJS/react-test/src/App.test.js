import { render, screen } from "@testing-library/react";
import { App } from ".";

// First Test
test('Checking whether App component is returning the message "React Test App"', () => {

  // Logic to check: render the App component
  render(<App />);
  const linkElement = screen.getByText(/React Test App/i);
  expect(linkElement).toBeInTheDocument();
});