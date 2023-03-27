import api from "./api";
const PATH = {
  GET_COURSE: "/course",
};
export const getListCourse = async () => {
  try {
    const response = await api.get(PATH.GET_COURSE);
    return response;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
