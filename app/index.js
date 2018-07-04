import React from 'react';
import { Provider } from 'react-redux';
import Container from './containers/container';
import configureStore from './store/configureStore';

const store =configureStore();

const App = () => (
    <Provider store={store}>
        <Container />
    </Provider>
);

export default App;