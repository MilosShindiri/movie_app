import styled from "styled-components";

export const ChartBox = styled.div`
  border-radius: 12px;
  padding: 1.5rem 2rem;
  color: #fff;
  width: 100%;
  height: 500px;

  @media (max-width: 768px) {
    height: 400px;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    height: 320px;
    padding: 0.5rem;
  }

  .recharts-wrapper *:focus,
  .recharts-wrapper *:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #1c1c2b;
  color: #fff;
  border: 1px solid #444;
  min-width: 140px;

  @media (max-width: 480px) {
    min-width: 100px;
    font-size: 0.85rem;
  }
`;
