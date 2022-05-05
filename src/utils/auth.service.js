const AUTH_TOKEN_KEY = "@gogrocery:token";

const AuthService = {
  getToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  setToken(token) {
    return localStorage.setItem(AUTH_TOKEN_KEY, token);
  },

  deleteToken() {
    return localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}

export default AuthService
