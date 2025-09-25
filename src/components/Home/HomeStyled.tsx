import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #1c1833;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 12px;
  color: #ffffff;
`;

export const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Rating = styled.p`
  font-size: 0.85rem;
  color: #bbbbbb;
`;
