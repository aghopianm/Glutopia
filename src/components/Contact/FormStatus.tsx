import { StatusMessage } from "./ContactFormStyles";

type FormStatusProps = {
  status: "idle" | "success" | "error";
}

export const FormStatus = ({ status }: FormStatusProps) => {
  if (status === "idle") return null;

  const messages = {
    success: "Thank you for your message. We'll get back to you soon!",
    error: "Something went wrong. Please try again later.",
  };

  return <StatusMessage type={status}>{messages[status]}</StatusMessage>;
};