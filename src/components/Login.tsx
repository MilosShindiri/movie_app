import type { FC } from "react";
import { useLogin } from "../services/api/getMockData";
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./LoginStyled";

export const Login: FC = () => {
  useLogin();

  return (
    <FormContainer>
      <StyledForm id="my-form">
        <StyledLabel htmlFor="username">Korisnicko Ime:</StyledLabel>
        <StyledInput type="text" id="username" name="username" />

        <StyledLabel htmlFor="password">Lozinka:</StyledLabel>
        <StyledInput type="password" id="password" name="password" />

        <StyledLabel htmlFor="number">Code:</StyledLabel>
        <StyledInput type="number" id="number" name="code" />

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};
