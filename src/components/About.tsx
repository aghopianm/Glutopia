import styled from 'styled-components';
import NavBar from './NavBar';

const AboutContainer = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
`;

const About = () => {
  return (
    <>
      <NavBar />
      <AboutContainer>
        <Section>
          <Title>Our Story</Title>
          <Content>
            <Image src="/bakery-story.jpg" alt="Our Bakery Story" />
            <Text>
              <p>Founded in 2020, Glutopia Bakery began with a simple mission: to create exceptional artisanal breads and pastries that bring joy to our community.</p>
              <br />
              <p>Our master bakers combine traditional techniques with modern innovation, using only the finest ingredients to craft each item in our menu.</p>
              <br />
              <p>We believe in sustainable practices and supporting local farmers, ensuring that every bite tells a story of quality and care.</p>
            </Text>
          </Content>
        </Section>
      </AboutContainer>
    </>
  );
};

export default About;