import api from "./api";
const PATH = {
  LIST_TUTOR: "/tutor/more",
};
export async function getListTutor(page, perPage) {
  try {
    const res = await api.get(PATH.LIST_TUTOR, {
      params: {
        perPage,
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}
