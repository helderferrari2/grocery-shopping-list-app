import axios from 'axios';
import AuthService from './auth.service';
import useAuth from '../hooks/auth';

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
      const { logout } = useAuth();
      logout();
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
  fetchUserList() {
    return api.get('/lists');
  },
  storeUserList(payload) {
    return api.post('/lists', payload);
  },
  fetchList(listId) {
    return api.get(`/list-items/${listId}`);
  },
  fetchItems() {
    return api.get('/items');
  },
};
