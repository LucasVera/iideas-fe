import { Amplify } from 'aws-amplify';
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import awsConfig from './aws-exports'
import Header from './containers/Header/Header';
import AppRoutes from './Routes';

Amplify.configure(awsConfig)

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      {/* holi */}
    </div>
  );
}

export default App;
