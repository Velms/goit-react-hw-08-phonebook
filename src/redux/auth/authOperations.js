import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(
      '/users/signup',
      credentials
    );

    token.set(data.token);
    return data;
  } catch (error) {
    alert('Register failed try again.');
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post(
      '/users/login',
      credentials
    );

    token.set(data.token);
    return data;
  } catch (error) {
    alert('Login failed try again.');
  }
});

export const logout = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await axios.post(
      '/users/logout',
      credentials
    );

    token.unset();
    return data;
  } catch (error) {
    alert('Logout failed try again.');
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(
        '/users/current/'
      );
      return data;
    } catch (error) {
      alert('Refresh failed try again.');
    }
  }
);
