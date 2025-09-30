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
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -50px;
  position: relative;
  animation: fadeIn 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 0 1rem;
  padding-bottom: 20px;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

export const DetailsContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const DetailsLeft = styled.div`
  flex: 1 1 300px;
  min-width: 250px;
  width: fit-content;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const DetailsRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.5rem;
  position: relative;

  & > div:last-child {
    margin-top: 110px;

    @media (max-width: 768px) {
      margin-top: 20px;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffcc00;
  text-align: center;
  border-bottom: 2px solid #ffcc00;
  display: inline-block;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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

  min-height: 20px;
  max-height: 20px;
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

  @media (max-width: 768px) {
    margin: 1.5rem auto 0 auto;
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

export const MovieSlider = styled.div`
  margin-bottom: 20px;
  padding: 0 1rem 40px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 2rem 40px;
  }

  .slick-dots {
    bottom: -25px;
    li button:before {
      color: #ffcc00;
      font-size: 12px;
    }
    li.slick-active button:before {
      color: #00bcd4;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 40px;
    height: 40px;
    background: transparent;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #00bcd4;
    transition: color 0.3s ease, transform 0.2s ease;

    &:before {
      font-size: 40px;
      color: #00bcd4;
    }

    &:hover:before {
      color: #ffcc00;
    }
  }

  .slick-prev {
    left: -45px;
  }

  .slick-next {
    right: -45px;
  }
`;

export const MovieSliderItem = styled.div`
  text-align: center;
  padding: 10px;
  padding-bottom: 20px;

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    border-radius: 10px;
    width: 180px;
    height: auto;
    margin: 0 auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center bottom;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
    }
  }
`;

export const MovieTitle = styled.p`
  margin-top: 10px;
  font-size: 0.95rem;
  color: #ffcc00;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
  margin: 0 auto;
`;

export const NoImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;

  background-color: #333;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-origin: center bottom;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  }
`;

export const NoSimilarMoviesMessage = styled.p`
  text-align: center;
  color: #aaa;
  font-size: 1rem;
  font-style: italic;
  margin: 2rem 0;
`;
