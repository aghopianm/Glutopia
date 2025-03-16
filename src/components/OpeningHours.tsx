import { HoursGrid, DayRow, Day, Hours } from "./OpeningHoursStyles";

const OpeningHours = () => {
  const schedule = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <HoursGrid>
      {schedule.map(({ day, hours }) => (
        <DayRow key={day}>
          <Day>{day}</Day>
          <Hours>{hours}</Hours>
        </DayRow>
      ))}
    </HoursGrid>
  );
};

export default OpeningHours;