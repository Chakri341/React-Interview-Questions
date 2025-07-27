import React from 'react';
import ProductList from './components/ProductList';
import { Provider } from 'react-redux';
import store from './store/Store';

const ReduxApp: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Fake Store</h1>
        <ProductList />
      </div>
    </Provider>
  );
};

export default ReduxApp;
