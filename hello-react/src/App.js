import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <HelloWorld />
      </div>
    </Provider>
  );
}

export default App;

