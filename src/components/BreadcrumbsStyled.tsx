import styled from "styled-components";

export const BreadcrumbWrapper = styled.nav`
  padding: 1rem;
  font-size: 14px;
  background: #f4f4f4;
`;

export const CrumbWrapper = styled.ul`
  display: flex;
`;

export const Crumb = styled.li`
  &:hover {
    text-decoration: underline;
    color: #1d4ed8;
  }
`;

export const SlashLine = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const TitleStyled = styled.span`
  color: #374151;
`;
