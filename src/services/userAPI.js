import api from "./api";
const PATH = {
  USER_INFO: "/user/info",
  BECOME_TEACHER: "/tutor/register",
  UPLOAD_AVATAR: "/user/uploadAvatar",
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

export const becomeTeacher = async (data) => {
  try {
    const response = await api.put("/tutor/register", data);
    return response;
  } catch (error) {
    throw Error(error);
  }
};

export const uploadAvatar = async (data) => {
  try {
    const response = await api.pose(PATH.UPLOAD_AVATAR, data);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
