import {
  StyledHeader,
  LeftNav,
  CenterNav,
  RightNav,
  Logo,
  StyledH1,
  StyledLogoLink,
  StyledCenterLink,
  StyledRightLink,
  StyledLogout,
} from "./Header.styled";
import { useAuth } from "../context/useAuth";
import type { FC } from "react";
import { toast } from "react-toastify";

export const Header: FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <StyledHeader>
      <LeftNav>
        <StyledLogoLink to="/">
          <Logo src="/public/images/movie_icon.png" alt="logo" />
        </StyledLogoLink>
        <StyledH1>Movies</StyledH1>
      </LeftNav>

      <CenterNav>
        <StyledCenterLink to="/table">Table</StyledCenterLink>
        <StyledCenterLink to="/charts">Charts</StyledCenterLink>
      </CenterNav>

      <RightNav>
        {isAuthenticated ? (
          <StyledLogout
            onClick={() => {
              logout();
              toast.info("You have been logged out.");
            }}
          >
            Logout
          </StyledLogout>
        ) : (
          <StyledRightLink to="/login">Login</StyledRightLink>
        )}
      </RightNav>
    </StyledHeader>
  );
};
