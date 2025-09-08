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
  padding-right: 40px;
  font-size: 16px;
  margin-bottom: 24px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;
  background-color: white;
  color: black;
  width: 100%;
  box-sizing: border-box;

  &.error {
    border-color: red;
  }
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

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 45%;
  right: 12px;
  transform: translateY(-90%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  line-height: 1;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #00a36c;
  }
`;

export const ErrorText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #d32f2f;
  font-size: 13px;
  margin-top: -18px;
  margin-bottom: 16px;

  svg {
    font-size: 14px;
    flex-shrink: 0;
  }
`;
