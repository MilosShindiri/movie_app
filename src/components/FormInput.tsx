import {
  StyledInput,
  StyledLabel,
  InputWrapper,
  TogglePasswordButton,
} from "./LoginStyled";
import type { FC } from "react";
import { useState } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaLock, FaUnlock } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { ErrorText } from "./LoginStyled";

interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  // console.log(`Rendering FormInput: ${label}`);

  return (
    <>
      <StyledLabel htmlFor={register.name}>{label}</StyledLabel>
      <InputWrapper>
        <StyledInput
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register}
        />
        {isPassword && (
          <TogglePasswordButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? <FaUnlock /> : <FaLock />}
          </TogglePasswordButton>
        )}
      </InputWrapper>
      {error && (
        <ErrorText>
          <FaExclamationCircle />
          {error.message}
        </ErrorText>
      )}
    </>
  );
};
