import { useState } from "react";
import { BiError } from "react-icons/bi";
import styled from "styled-components";

interface EmbedPlayerProps {
  movieId: number;
}

const FallbackMessage = styled.p`
  color: #ffcc00;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const EmbedPlayer = ({ movieId }: EmbedPlayerProps) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <FallbackMessage>
      <BiError /> Player nije uspeo da se učita. Pokušaj ponovo kasnije ili
      proveri konekciju.
    </FallbackMessage>
  ) : (
    <StyledIframe
      src={`https://www.2embed.cc/embed/${movieId}`}
      allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      loading="lazy"
      title="Movie Player"
      onError={() => setHasError(true)}
    />
  );
};

export default EmbedPlayer;
