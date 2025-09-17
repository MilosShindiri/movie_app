import styled, { keyframes } from "styled-components";

interface DetailBackgroundProps {
  $imageUrl?: string;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const DetailsWrapper = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #fff;
  font-family: Arial, sans-serif;
`;

export const DetailsBackground = styled.div<DetailBackgroundProps>`
  width: 100%;
  height: 60vh;
  position: relative;
  background: ${({ $imageUrl }) =>
    $imageUrl
      ? `linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 60%, #0a0a0a 100%), 
         url(${$imageUrl})`
      : "linear-gradient(to bottom, #212529 0%, #0a0a0a 100%)"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`;

export const DetailsData = styled.div`
  padding: 0rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -50px;
  position: relative;
  animation: fadeIn 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  overflow: auto;
  padding-bottom: 20px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DetailsContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailsLeft = styled.div`
  flex: 1 1 300px;
  min-width: 280px;
  width: fit-content;
`;

export const DetailsRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 0.5rem;
  position: relative;
  gap: 1rem;

  & > div:last-child {
    margin-top: 110px;
  }
`;

export const PosterImage = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;

export const SectionTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #ffcc00;
`;

export const InfoParagraph = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  word-wrap: break-word;

  strong {
    color: #00bcd4;
    font-weight: bold;
    font-size: 1.1rem;
  }

  /* Postavi fiksnu visinu i omogući scroll ako je tekst duži */
  min-height: 20px; /* Fiksiraj visinu */
  max-height: 20px; /* Ista visina za sve opise */
`;

export const SimilarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const PlayButton = styled.button`
  background: transparent;
  border: none;
  color: #00bcd4;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.5rem 0rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  outline: none;

  &:hover {
    color: #ffcc00;
    transform: scale(1.05);
  }

  svg {
    font-size: 2rem;
  }

  &:focus-visible {
    outline: 2px solid #00bcd4;
    outline-offset: 2px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  animation: ${scaleIn} 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: #ffcc00;
  }
`;
