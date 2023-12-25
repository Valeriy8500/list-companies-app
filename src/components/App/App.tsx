import { ListCompanies } from '../list-companies/list-companies';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { ReactElement } from 'react';
import './App.scss';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <div className="App">
        <ListCompanies />
      </div>
    </Provider>
  );
}

export default App;
