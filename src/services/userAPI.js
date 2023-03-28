import api from "./api";
const PATH = {
  USER_INFO: "/user/info",
};
export const getUserInfo = async () => {
  try {
    const response = await api.get(PATH.USER_INFO);
    return response;
  } catch (error) {
    throw Error(error);
  }
};

export const updateUser = async (data) => {
  try {
    const response = await api.put(PATH.USER_INFO, data);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
