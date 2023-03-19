import { useEffect, createContext, useState, useMemo } from "react";
const BookingContext = createContext({});

export function BookingProvider({ children }) {
  const [upcomingBooking, setUpcomingBooking] = useState([]);
  const [pastBooking, setPastBooking] = useState([]);
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
