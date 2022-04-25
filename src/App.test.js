import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('check logo', () => {
  render(<App />);
  const logo = screen.getByText(/We serve most bright adventures for you./);
  expect(logo).toHaveTextContent('We serve most bright adventures for you.');
});


test('checkbox', () => {
  render(<App />);
  const checkbox1 = screen.getByDisplayValue(false);
  fireEvent.click(checkbox1);
  expect(checkbox1.checked).toBe(true)
});
