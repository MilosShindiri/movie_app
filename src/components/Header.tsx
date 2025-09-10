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
import { PagePaths } from "../routes/routes_utils";

export const Header: FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <StyledHeader>
      <LeftNav>
        <StyledLogoLink to={PagePaths.HOME}>
          <Logo src="images/movie_icon.png" alt="logo" />
        </StyledLogoLink>
        <StyledH1>Movies</StyledH1>
      </LeftNav>

      <CenterNav>
        <StyledCenterLink to={PagePaths.TABLE}>Table</StyledCenterLink>
        <StyledCenterLink to={PagePaths.CHARTS}>Charts</StyledCenterLink>
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
          <StyledRightLink to={PagePaths.LOGIN}>Login</StyledRightLink>
        )}
      </RightNav>
    </StyledHeader>
  );
};
