import React from 'react';
import { ListCompanies } from '../list-companies/list-companies';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ListCompanies />
      </div>
    </Provider>
  );
}

export default App;
