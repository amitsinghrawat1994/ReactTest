import React from 'react';
import configureStore from 'redux-mock-store';
import { MockApplicationState } from './MockApplicationState';
import { Provider } from 'react-redux';

export const getMockProvider = (partialState) => {
  const mockStore = configureStore();
  const store = mockStore(MockApplicationState, partialState);

  return {
    MockProvider: ({ children }) => (
      <Provider store={store}>{children}</Provider>
    ),
    store
  };
};
