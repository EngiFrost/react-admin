import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const App: React.FC = () => {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
  return <Admin dataProvider={dataProvider} />;
};

export default App;
