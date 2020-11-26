import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//Components
import React from 'react';
import Main from './components/MainComponent';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
