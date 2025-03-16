import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
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

  return { form, status, handleSubmit };
};