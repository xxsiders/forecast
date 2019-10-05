import React from 'react';
import AppNavigations from './src/navigations/AppNavigations';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { weather } from './src/reducers/weather';
const store = createStore(weather, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigations />
    </Provider>
  );
}

