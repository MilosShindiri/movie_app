import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`;

export const ToggleButton = styled.button`
  background-color: #7b5dfa;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;

  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9c6bff;
  }
`;
