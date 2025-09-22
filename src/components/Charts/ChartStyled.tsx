import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  height: 550px;
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
  padding: 1rem 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const SelectGroup = styled.div`
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
`;

export const TooltipContainer = styled.div`
  background-color: #1e1e2f;
  border: 1px solid #444;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  font-size: 0.9rem;
`;

export const InfoLine = styled.div`
  margin-top: 4px;
`;
