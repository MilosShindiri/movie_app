import { useState } from "react";
import { BiError } from "react-icons/bi";
import type { EmbedPlayerProps } from "../../types/embededplayer";
import { FallbackMessage, StyledIframe } from "./EmbedPlayerStyled";

const EmbedPlayer = ({ movieId }: EmbedPlayerProps) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <FallbackMessage>
      <BiError />
      The player did not load. Please try again later or check your connection.
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
