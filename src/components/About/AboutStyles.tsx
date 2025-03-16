import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 2rem 2rem;
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  aspect-ratio: 16/9;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start; // Changed from center to start
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
`;
