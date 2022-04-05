import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserListView from './UserListView';
import UserEditView from './UserEditView';

const App: React.FC = () => {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserListView} edit={UserEditView} />
    </Admin>
  );
};

export default App;
