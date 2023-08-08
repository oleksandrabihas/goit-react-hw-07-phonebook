import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d2565ef8d60b174361e50a.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const { data } = await axios.delete(`contacts/${id}`);
    return data;
  }
);
