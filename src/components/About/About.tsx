import NavBar from "../NavBar";
import Footer from "../Footer";
import {
  AboutContainer,
  Section,
  Title,
  Content,
  Image,
  Text,
  VideoContainer,
  ResponsiveIframe,
} from "./AboutStyles";

export const About = () => {
  return (
    <>
      <NavBar />
      <AboutContainer>
        <Section>
          <Title>Our Story</Title>
          <Content>
            <Image src="/bakery-story.jpg" alt="Our Bakery Story" />
            <Text>
              <p>
                Founded in 2020, Glutopia Bakery began with a simple mission: to
                create exceptional artisanal breads and pastries that bring joy
                to our community.
              </p>
              <br />
              <p>
                Our master bakers combine traditional techniques with modern
                innovation, using only the finest ingredients to craft each item
                in our menu.
              </p>
              <br />
              <p>
                We believe in sustainable practices and supporting local
                farmers, ensuring that every bite tells a story of quality and
                care.
              </p>
            </Text>
          </Content>
        </Section>
        <VideoContainer>
          <ResponsiveIframe
            src="https://www.youtube.com/embed/nvBemQ3BWqo"
            title="Glutopia Bakery Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </AboutContainer>
      <Footer />
    </>
  );
};
