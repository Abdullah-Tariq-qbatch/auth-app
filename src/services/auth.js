import api from "./api";
import TokenStorage from "./tokenStorage";
import UserService from "./userService";


const isSuccess = (response) => response.status >= 200 && response.status <= 299;

const login = async (data) => {
 try {
  const response = await api.post("/auth/login", data);
  if (isSuccess(response)) {
    TokenStorage.setToken(response.data.token);
    UserService.setLocalID(response.data.id)
    return response;
  } 
 } catch (error) {
   return error;
 }
}

const logout = () => {
  localStorage.removeItem('token');
}

const isAuthenticated = () =>  TokenStorage.getLocalAccessToken() ? true : false;



const AuthService = {
  login,
  logout,
  isAuthenticated
};

export default AuthService;
