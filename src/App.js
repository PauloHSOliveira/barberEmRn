import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import createRouter from '~/routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,133,255, 0.2)"
      />
      <Routes />
    </>
  );
}
