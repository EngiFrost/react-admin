import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserListView from './UserListView';
import UserEditView from './UserEditView';
import UserCreateView from './UserCreateView';
import AuthProvider from '../auth/AuthProvider';

const App: React.FC = () => {
  const DataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  return (
    <Admin dataProvider={DataProvider} authProvider={AuthProvider}>
      <Resource name="users" list={UserListView} edit={UserEditView} create={UserCreateView} />
    </Admin>
  );
};

export default App;
