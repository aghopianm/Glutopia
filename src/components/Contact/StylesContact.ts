import styled from "styled-components";

export const ContactContainer = styled.div`
  padding-top: 80px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 4rem 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ContactInfo = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
`;

export const InfoItem = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
`;

export const HoursContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;