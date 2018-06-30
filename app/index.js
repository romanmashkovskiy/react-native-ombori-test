import React from 'react';
import { Provider } from 'react-redux';
import Container from './containers/container';
import configureStore from './store/configureStore';
import { loadList } from './actions/index';

const store =configureStore();
store.dispatch(loadList());

const App = () => (
    <Provider store={store}>
        <Container />
    </Provider>
);

export default App;