import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CheckedUsers from '../Users/CheckedUsers';

test('renders CheckedUsers component with loading state', () => {
  const { getByText } = render(<CheckedUsers isLoading={true} />);
  const loadingText = getByText('Loading...');

  expect(loadingText).toBeInTheDocument();
});

test('renders CheckedUsers component with empty list', () => {
  const { getByText } = render(<CheckedUsers data={{ items: [] }} searched={true} />);
  const emptyListText = getByText('No users found.');

  expect(emptyListText).toBeInTheDocument();
});