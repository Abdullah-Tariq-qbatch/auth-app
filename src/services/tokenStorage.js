const getLocalAccessToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return token;
}

const updateLocalAccessToken = (accessToken) => {
  localStorage.setItem('token', JSON.stringify(accessToken));
}

const setToken = (token) => localStorage.setItem('token', JSON.stringify(token));

const removeToken = () => localStorage.removeItem('token')

const TokenStorage = {
  getLocalAccessToken,
  updateLocalAccessToken,
  setToken,
  removeToken,
};

export default TokenStorage;
