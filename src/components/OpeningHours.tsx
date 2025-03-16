import styled from 'styled-components';

const HoursGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 280px;
`;

const DayRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 2rem;
`;

const Day = styled.span`
  font-weight: 600;
`;

const Hours = styled.span`
  color: inherit;
`;

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