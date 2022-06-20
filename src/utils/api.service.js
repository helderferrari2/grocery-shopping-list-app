import axios from 'axios';
import AuthService from './auth.service';
import history from '../utils/history';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    post: {
      Accept: 'application/json',
    },
  },
});

// Request interceptor
api.interceptors.request.use(
  (request) => {
    const token = AuthService.getToken();
    if (token) request.headers.common.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;

    // Unauthenticated
    if (status === 401) {
      AuthService.deleteToken();
      history.push('login');
    }

    // Validation
    if (status === 422) {
      const errors = error.response.data.error;
      let errorMessages = [errors];
      if (typeof errors !== 'string') {
        errorMessages = Object.values(errors).map((item) => item[0]);
      }
      return Promise.reject(errorMessages);
    }

    return Promise.reject(error);
  }
);

// API methods
export default {
  register(payload) {
    return api.post('/register', payload);
  },
  login(payload) {
    return api.post('/login', payload);
  },
  me() {
    return api.get('/me');
  },
  fetchItems() {
    return api.get('/items');
  },
  fetchUserList() {
    return api.get('/lists');
  },
  storeUserList(payload) {
    return api.post('/lists', payload);
  },
  updateUserList(itemId, payload) {
    return api.put(`/lists/${itemId}`, payload);
  },
  deleteUserList(listId) {
    return api.delete(`/lists/${listId}`);
  },
  fetchList(listId) {
    return api.get(`/list-items/${listId}`);
  },
  storeListItem(payload) {
    return api.post('/list-items', payload);
  },
  updateListItem(itemId, payload) {
    return api.put(`/list-items/${itemId}`, payload);
  },
  deleteListItem(itemId) {
    return api.delete(`/list-items/${itemId}`);
  },
};
