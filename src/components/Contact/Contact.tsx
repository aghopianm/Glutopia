import NavBar from "../NavBar";
import Footer from "../Footer";
import { ContactForm } from "./ContactForm";
import OpeningHours from "../OpeningHours";
import {
  ContactContainer,
  Section,
  Title,
  ContactInfo,
  InfoItem,
  MapContainer,
  HoursContainer
} from "./StylesContact";

const Contact = () => {
  return (
    <>
      <NavBar />
      <ContactContainer>
        <Section>
          <Title>Contact Us</Title>
          <ContactForm />

          <ContactInfo>
            <InfoItem>
              <h3>Visit Us</h3>
              <p>
                3, The Griffin Centre<br />
                Kingston upon Thames<br />
                KT1 1JT<br />
                United Kingdom
              </p>
            </InfoItem>
            <InfoItem>
              <h3>Call Us</h3>
              <p>+44 20 3715 0868</p>
            </InfoItem>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.8144272532846!2d-0.3027847!3d51.4119595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b8a1c9b61dd%3A0x48f9e6c2b9f1d0a!2sThe%20Griffin%20Centre%2C%20Kingston%20upon%20Thames%20KT1%201JT!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </MapContainer>
          </ContactInfo>

          <HoursContainer>
            <OpeningHours />
          </HoursContainer>
        </Section>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;