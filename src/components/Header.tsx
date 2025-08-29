import type { FC } from "react";
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
} from "./Header.styled";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <LeftNav>
        <StyledLogoLink to="/">
          <Logo src="../src/assets/movie_icon.png" alt="logo" />
        </StyledLogoLink>
        <StyledH1>Movies</StyledH1>
      </LeftNav>

      <CenterNav>
        <StyledCenterLink to="/table">Table</StyledCenterLink>
        <StyledCenterLink to="/charts">Charts</StyledCenterLink>
      </CenterNav>

      <RightNav>
        <StyledRightLink to="/login">Login</StyledRightLink>
      </RightNav>
    </StyledHeader>
  );
};
