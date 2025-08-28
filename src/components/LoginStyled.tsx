import styled from "styled-components";

export const FormContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  color: #00b140;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  padding: 12px;
  font-size: 16px;
  margin-bottom: 24px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: white;
  color: black;
`;

export const StyledButton = styled.button`
  background-color: #00a36c;
  color: white;
  padding: 20px 0;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #008f5c;
  }
`;
