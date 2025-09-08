import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #201547;
  color: white;
  height: 100px;
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
`;

export const RightNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;
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
