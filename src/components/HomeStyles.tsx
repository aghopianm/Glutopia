import styled from "styled-components";

export const Divider = styled.hr`
  width: 80%;
  max-width: 800px;
  margin: 3rem auto;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeroSection = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffe5e5 0%, #ffb6c1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333; // Changed to dark text since background is light now
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 900px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Update existing Title
export const Title = styled.h1`
  margin-top: 4rem;
  font-size: 3.5rem;
  margin-bottom: 2rem;
  font-family: "Playfair Display", serif;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

// Add new styled components
export const WelcomeText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #4a4a4a;
  font-family: "Playfair Display", serif;
`;
export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DescriptionBlock = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const BlockTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

export const BlockText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a4a4a;
`;

export const CTAButton = styled.button`
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  background-color: rgb(0, 170, 217);
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;