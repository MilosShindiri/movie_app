import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const FilterWrapper = styled.div`
  padding: 0.5rem 0rem;
  font-size: 1rem;
  width: 200px;
  input {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 200px;
    border-radius: 4px;
    border: none;
    &:focus {
      outline: 2px solid orange;
      outline-offset: -2px;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: none;
  font-family: "Arial", sans-serif;
  color: #222;
`;

export const Header = styled.div`
  background-color: #4caf50;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;

  thead {
    background: #27323e;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
  }

  th,
  td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 33.33%;
  }

  th {
    user-select: none;
  }

  th div {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 1.5rem;
  }

  tbody tr:hover {
    background: #f3f7fa;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  svg {
    flex-shrink: 0;
  }
  th:nth-child(1),
  td:nth-child(1) {
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 20%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 20%;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 2rem auto;
  flex-wrap: wrap;

  button {
    min-width: 36px;
    height: 36px;
    padding: 0;
    background-color: #0366d6;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background-color: #0257b4;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
      background-color: #bbb;
      color: #eee;
      cursor: not-allowed;
    }

    &.active {
      background-color: #ffffff;
      color: #0366d6;
      border: 2px solid #0366d6;
    }
  }

  span {
    font-size: 1.2rem;
    color: #666;
    padding: 0 4px;
    user-select: none;
  }
`;
