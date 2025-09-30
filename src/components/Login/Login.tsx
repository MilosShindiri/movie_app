import { useState, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../../context/Auth/useAuth";
import { FormContainer, StyledButton, StyledForm } from "./LoginStyled";
import { FormInput } from "../FormInput";

export interface IFormInput {
  username: string;
  password: string;
  code: number;
}

export const Login: FC = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await login(data);
    } finally {
      setIsLoading(false);
    }
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

        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </StyledButton>
      </StyledForm>
    </FormContainer>
  );
};
