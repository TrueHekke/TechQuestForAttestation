import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import UserSearch from '../MainPage/UserSearch';

test('renders UserSearch component', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <UserSearch />
      </Provider>
    );
  
    const searchButton = getByText('Искать');
    const inputElement = getByPlaceholderText('Введите логин пользователя');
  
    expect(searchButton).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });