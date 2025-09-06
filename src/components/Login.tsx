import { type FC } from "react";
import { FormContainer, StyledForm, StyledButton } from "./LoginStyled";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/useAuth";
import { FormInput } from "../components/FormInput";

export interface IFormInput {
  username: string;
  password: string;
  code: number;
}

export const Login: FC = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await login(data);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Username:"
          type="text"
          placeholder="Username"
          register={register("username", {
            required: "Username is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
          })}
          error={errors.username}
        />

        <FormInput
          label="Password:"
          type="password"
          placeholder="Password"
          register={register("password", {
            required: "Password is required",
          })}
          error={errors.password}
        />

        <FormInput
          label="Code:"
          type="number"
          placeholder="Code"
          register={register("code", {
            required: "Code is required",
          })}
          error={errors.code}
        />

        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};
