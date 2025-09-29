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
  HamburgerIcon,
  MobileMenu,
  MobileNav,
} from "./Header.styled";

import { useAuth } from "../../context/Auth/useAuth";
import type { FC } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { PagePaths } from "../../routes/routes_utils";
import { FaBars } from "react-icons/fa";

export const Header: FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <LeftNav>
        <StyledLogoLink to={PagePaths.HOME}>
          <Logo src="/images/movie_icon.png" alt="logo" />
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

      <MobileNav>
        <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </HamburgerIcon>
      </MobileNav>

      {menuOpen && (
        <MobileMenu>
          <StyledCenterLink
            to={PagePaths.TABLE}
            onClick={() => setMenuOpen(false)}
          >
            Table
          </StyledCenterLink>
          <StyledCenterLink
            to={PagePaths.CHARTS}
            onClick={() => setMenuOpen(false)}
          >
            Charts
          </StyledCenterLink>
          {isAuthenticated ? (
            <StyledLogout
              onClick={() => {
                logout();
                toast.info("You have been logged out.");
                setMenuOpen(false);
              }}
            >
              Logout
            </StyledLogout>
          ) : (
            <StyledRightLink
              to={PagePaths.LOGIN}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </StyledRightLink>
          )}
        </MobileMenu>
      )}
    </StyledHeader>
  );
};
