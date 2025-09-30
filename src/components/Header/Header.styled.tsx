import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #201547;
  color: white;
  height: auto;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
`;

export const CenterNav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: white;
  border-radius: 10px;
`;

export const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 0;
`;

export const StyledLogoLink = styled(Link)`
  margin-right: 10px;
`;

export const StyledCenterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledRightLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLogout = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    font-size: 28px;
    color: white;
    cursor: pointer;
    z-index: 10;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #2a1b5f;
  padding: 10px 20px;
  border-radius: 8px;
  z-index: 9;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 769px) {
    display: none;
  }

  ${StyledCenterLink},
  ${StyledRightLink},
  ${StyledLogout} {
    margin: 10px 0;
    font-size: 20px;
    text-align: right;
  }
`;

export const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;
