import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

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
  background: #fafafa;
  
  &:focus {
    outline: none;
    border-color: rgb(0, 170, 217);
    background: white;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  background: #fafafa;
  
  &:focus {
    outline: none;
    border-color: rgb(0, 170, 217);
    background: white;
  }
`;

const SubmitButton = styled.button`
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background-color: rgb(0, 170, 217);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const StatusMessage = styled.div<{ type: "success" | "error" }>`
  padding: 1rem;
  background-color: ${props => props.type === "success" ? "#4caf50" : "#f44336"};
  color: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ContactForm = () => {
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
      {status === "success" && (
        <StatusMessage type="success">
          Thank you for your message. We'll get back to you soon!
        </StatusMessage>
      )}
      {status === "error" && (
        <StatusMessage type="error">
          Something went wrong. Please try again later.
        </StatusMessage>
      )}
      <Form ref={form} onSubmit={handleSubmit}>
        <Input type="text" name="user_name" placeholder="Your Name" required />
        <Input type="email" name="user_email" placeholder="Your Email" required />
        <Input type="text" name="subject" placeholder="Subject" required />
        <TextArea name="message" placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </>
  );
};