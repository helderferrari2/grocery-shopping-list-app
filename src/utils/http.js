import axios from 'axios';

const API_URL = `http://localhost:8000/api`;

// Create axios instance
const http = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    post: {
      Accept: 'application/json',
    },
  },
});

// Request interceptor
http.interceptors.request.use(
  (request) =>
    // const token = AuthService.getToken();
    // if (token) request.headers.common.Authorization = `Bearer ${token}`;
    request,
  (error) => Promise.reject(error)
);

// Response Interceptor
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;

    // Unauthenticated
    if (status === 401) {
      // store.dispatch('logout');
      // router.push({ name: 'login' });
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
    return http.post('/register', payload);
  },
  login(payload) {
    return http.post('/login', payload);
  },
};
