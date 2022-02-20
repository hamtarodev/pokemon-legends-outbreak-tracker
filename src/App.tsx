import { Configuration, Grid } from 'react-md';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/header/Header';
import React from 'react';
import Tracker from './components/tracker/Tracker';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Configuration>
        <Grid padding={0} columns={1}>
          <Header/>
          <Tracker/>
        </Grid>
      </Configuration>
    </Provider>
  );
};

export default App;
