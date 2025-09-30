import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 16px 32px;
  z-index: 5;
`;

export const List = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "/";
    margin: 0 8px;
    color: #aaa;
  }
`;

export const CrumbLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

export const CrumbCurrent = styled.span`
  color: #ced4da;
`;
