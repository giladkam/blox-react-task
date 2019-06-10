import React from 'react';
import './App.css';
import configStore from './configStore';
import AppRouter from './routers/router';
import {Provider} from 'react-redux';

const store = configStore();


class App extends React.Component {
  
  render() { 
    return ( 
      <Provider store={store}>
       <AppRouter/>
      </Provider>
     );
  }
}
 

export default App;
