import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ContactContainer = styled.div`
  padding-top: 80px;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: rgb(0, 170, 217);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
  transform: scale(1.05);
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #f44336;
  color: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
`;

const InfoItem = styled.div`
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

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
`;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      form.current.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <NavBar />
      <ContactContainer>
        <Section>
          <Title>Contact Us</Title>
          {status === "success" && (
            <SuccessMessage>
              Thank you for your message. We'll get back to you soon!
            </SuccessMessage>
          )}
          {status === "error" && (
            <ErrorMessage>
              Something went wrong. Please try again later.
            </ErrorMessage>
          )}
          <Form ref={form} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <Input type="text" name="subject" placeholder="Subject" required />
            <TextArea name="message" placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>

          <ContactInfo>
            <InfoItem>
              <h3>Visit Us</h3>
              <p>
                3, The Griffin Centre
                <br />
                Kingston upon Thames
                <br />
                KT1 1JT
                <br />
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
                referrerPolicy="no-referrer-when-downgraded"
                title="Our Location"
              />
            </MapContainer>
          </ContactInfo>
        </Section>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;
