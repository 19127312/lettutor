import { useEffect, createContext, useState, useMemo } from "react";
const BookingContext = createContext({});
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const initialUpcomingBookings = [
  {
    id: 1679243461358,
    teacher: {
      avatar:
        "https://api.app.lettutor.com/avatar/4d54d3d7-d2a9-42e5-97a2-5ed38af5789aavatar1627913015850.00",
      id: "6ca5c092-76ea-4e72-9c6e-05e2239aa33b",
      name: "Keegan",
      userId: "4d54d3d7-d2a9-42e5-97a2-5ed38af5789a",
    },
    time: "8:00AM",
  },
  {
    id: 1679243503945,
    teacher: {
      avatar:
        "https://api.app.lettutor.com/avatar/4d54d3d7-d2a9-42e5-97a2-5ed38af5789aavatar1627913015850.00",
      id: "6ca5c092-76ea-4e72-9c6e-05e2239aa33b",
      name: "Keegan",
      userId: "4d54d3d7-d2a9-42e5-97a2-5ed38af5789a",
    },
    time: "8:00AM",
  },
];
const initialPastBookings = [
  {
    date: "Sat 03/18/23",
    id: 1649243461358,
    teacher: {
      avatar:
        "https://api.app.lettutor.com/avatar/4d54d3d7-d2a9-42e5-97a2-5ed38af5789aavatar1627913015850.00",
      id: "6ca5c092-76ea-4e72-9c6e-05e2239aa33b",
      name: "Keegan",
      userId: "4d54d3d7-d2a9-42e5-97a2-5ed38af5789a",
    },
    time: "8:00AM",
    review: "This is a review",
  },
  {
    date: "Tue 03/14/23",
    id: 1679247502944,
    teacher: {
      avatar:
        "https://api.app.lettutor.com/avatar/4d54d3d7-d2a9-42e5-97a2-5ed38af5789aavatar1627913015850.00",
      id: "6ca5c092-76ea-4e72-9c6e-05e2239aa33b",
      name: "Keegan",
      userId: "4d54d3d7-d2a9-42e5-97a2-5ed38af5789a",
    },
    time: "8:00AM",
    review: "This is a review",
  },
  {
    date: "Fri 03/17/23",
    id: 1679243461358,
    teacher: {
      avatar:
        "https://api.app.lettutor.com/avatar/4d54d3d7-d2a9-42e5-97a2-5ed38af5789aavatar1627913015850.00",
      id: "6ca5c092-76ea-4e72-9c6e-05e2239aa33b",
      name: "Keegan",
      userId: "4d54d3d7-d2a9-42e5-97a2-5ed38af5789a",
    },
    time: "8:00AM",
    review: "This is a review",
  },
  {
    date: "Wed 03/15/23",
    id: 1679243502945,
    teacher: {
      avatar:
        "https://api.app.lettutor.com/avatar/4d54d3d7-d2a9-42e5-97a2-5ed38af5789aavatar1627913015850.00",
      id: "6ca5c092-76ea-4e72-9c6e-05e2239aa33b",
      name: "Keegan",
      userId: "4d54d3d7-d2a9-42e5-97a2-5ed38af5789a",
    },
    time: "8:00AM",
    review: "This is a review",
  },
];
export function BookingProvider({ children }) {
  const today = new Date();
  const newBookings = initialUpcomingBookings.map((booking, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const monthName = date.toLocaleDateString("default", { month: "long" });
    return {
      ...booking,
      date: `${dayOfWeek} ${monthName}`,
    };
  });
  const [upcomingBooking, setUpcomingBooking] = useState(newBookings);
  const [pastBooking, setPastBooking] = useState(initialPastBookings);
  useEffect(() => {}, []);
  useEffect(() => {}, [upcomingBooking]);
  const value = useMemo(
    () => ({
      upcomingBooking,
      setUpcomingBooking,
      pastBooking,
      setPastBooking,
    }),
    [setPastBooking, pastBooking, upcomingBooking, setUpcomingBooking]
  );
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export default BookingContext;
