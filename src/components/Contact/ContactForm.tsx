import { useContactForm } from "./useContactForm";
import { FormStatus } from "./FormStatus";
import { Form, Input, TextArea, SubmitButton } from "./ContactFormStyles";

export const ContactForm = () => {
  const { form, status, handleSubmit } = useContactForm();

  return (
    <>
      <FormStatus status={status} />
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