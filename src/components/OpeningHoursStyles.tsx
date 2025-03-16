import styled from 'styled-components';

export const HoursGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 280px;
`;

export const DayRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 2rem;
`;

export const Day = styled.span`
  font-weight: 600;
`;

export const Hours = styled.span`
  color: inherit;
`;