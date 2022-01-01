import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders logo', () => {
  const { getByAltText } = render(<App />);
  const linkElement = getByAltText('logo');
  expect(linkElement).toBeInTheDocument();
});