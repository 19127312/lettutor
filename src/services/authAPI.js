import api from "./api";
const PATH = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  GOOGLE_LOGIN: "/auth/google",
};
export const login = async ({ email, password }) => {
  try {
    const response = await api.post(PATH.LOGIN, { email, password });
    return response;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
export const register = async ({ email, password }) => {
  try {
    const response = await api.post(PATH.REGISTER, { email, password });
    return response;
  } catch (error) {
    throw Error(error);
  }
};
