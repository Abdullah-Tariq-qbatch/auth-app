import api from "./api";

const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  if (response.status >= 200 && response.status <= 299) {
    return response.data;
  }
}

const getLocalID = () => localStorage.getItem('userID');

const setLocalID = (id) => localStorage.setItem('userID', JSON.stringify(id));

const removeLocalID = () => localStorage.removeItem('userID');

const UserService = {
  getUser,
  getLocalID,
  setLocalID,
  removeLocalID,
};

export default UserService;
