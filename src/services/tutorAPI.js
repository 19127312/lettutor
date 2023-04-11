import api from "./api";
const PATH = {
  LIST_TUTOR: "/tutor/more",
  FAVOR: "/user/manageFavoriteTutor",
  SEARCH: "/tutor/search",
  REPORT: "/report",
  GET_SCHEDULE: "/schedule",
  BOOKING: "/booking",
  GET_UPCOMING: "/booking/list/student",
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
export async function searchTutor(search) {
  const data = {
    filter: {
      specialties: [],
      date: null,
      nationality: null,
      tutoringTimeAvailable: [null, null],
    },
    page: "1",
    perPage: 60,
    search,
  };

  try {
    const res = await api.post(PATH.SEARCH, data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function favorAction(id) {
  try {
    const res = await api.post(PATH.FAVOR, {
      tutorId: id,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function reportAction(content, id) {
  try {
    const res = await api.post(PATH.REPORT, {
      content,
      tutorId: id,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function getSchedule({ tutorId, startTimestamp, endTimestamp }) {
  try {
    const res = await api.get(
      PATH.GET_SCHEDULE +
        `?tutorId=${tutorId}&startTimestamp=${startTimestamp}&endTimestamp=${endTimestamp}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function bookTutor({ scheduleDetailIds, note }) {
  try {
    console.log(scheduleDetailIds);
    const res = await api.post(PATH.BOOKING, {
      scheduleDetailIds,
      note,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function getUpcomingBooking(page, perPage, dateTimeGte) {
  try {
    const res = await api.get(PATH.GET_UPCOMING, {
      params: {
        page,
        perPage,
        dateTimeGte,
        orderBy: "meeting",
        order: "asc",
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}
