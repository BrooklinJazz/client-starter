import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

export default {
  title: 'App',
  component: App,
};

export const WithReduxStore = () => <Provider store={store}>
    <App/>
</Provider>;