import React from 'react';
import { Create, UrlField, SimpleForm, TextInput } from 'react-admin';

const UserCreateView: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <UrlField source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Create>
);

export default UserCreateView;
