import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
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

export const TextArea = styled.textarea`
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

export const SubmitButton = styled.button`
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

export const StatusMessage = styled.div<{ type: "success" | "error" }>`
  padding: 1rem;
  background-color: ${props => props.type === "success" ? "#4caf50" : "#f44336"};
  color: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`;