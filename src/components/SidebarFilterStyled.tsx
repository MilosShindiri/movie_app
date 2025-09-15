import styled from "styled-components";

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 15%;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  background: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 1rem;
  transition: left 0.3s ease-in-out;
  border-right: 1px solid #ddd;
  border-radius: 0 8px 8px 0;
  max-height: 80%;
  overflow-y: auto;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const SidebarSection = styled.div`
  margin: 1.5rem 0;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  select,
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

export const SidebarFooter = styled.div`
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    background-color: #4caf50;
    color: white;
    padding: 0.7rem 1.2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #3e8e41;
    }

    &.reset {
      background-color: #f44336;

      &:hover {
        background-color: #d32f2f;
      }
    }
  }
`;
