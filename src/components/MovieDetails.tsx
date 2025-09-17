import { FaRegPlayCircle } from "react-icons/fa";
import type { MovieDetailsProps } from "../types/movies";
import {
  DetailsBackground,
  DetailsData,
  DetailsWrapper,
  PosterImage,
  SectionTitle,
  InfoParagraph,
  SimilarList,
  DetailsContentWrapper,
  DetailsLeft,
  DetailsRight,
  PlayButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./MovieDetailsStyled";
import { TableLoader } from "./TableLoader";
import { useState } from "react";
import EmbedPlayer from "./EmbedPlayer";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { IoMdClose } from "react-icons/io";

const MovieDetails = ({
  movie,
  similarMovies,
  loadingSimilar,
  errorSimilar,
}: MovieDetailsProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  useEscapeKey(() => {
    if (showModal) closeModal();
  });
  const formattedDate = movie.release_date
    ? new Intl.DateTimeFormat("sr-RS").format(new Date(movie.release_date))
    : "No date info";

  return (
    <DetailsWrapper>
      <DetailsBackground $imageUrl={imageUrl} />
      <DetailsData>
        <DetailsContentWrapper>
          <DetailsLeft>
            {movie.poster_path && (
              <PosterImage
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </DetailsLeft>

          <DetailsRight>
            <div>
              <SectionTitle>{movie.title}</SectionTitle>
              <InfoParagraph>
                <strong>Release Date:</strong> {formattedDate}
              </InfoParagraph>
              <InfoParagraph>
                <strong>Rating:</strong> {movie.vote_average}
              </InfoParagraph>
              <PlayButton onClick={openModal}>
                <FaRegPlayCircle /> Play
              </PlayButton>
            </div>

            <div>
              <InfoParagraph>
                <strong>Overview:</strong> {movie.overview}
              </InfoParagraph>
            </div>
          </DetailsRight>
        </DetailsContentWrapper>

        <SectionTitle>Similar Movies</SectionTitle>
        {loadingSimilar && <TableLoader />}
        {errorSimilar && <p>Error loading similar movies.</p>}

        <SimilarList>
          {similarMovies.map((m) => (
            <li key={m.id}>{m.title}</li>
          ))}
        </SimilarList>
      </DetailsData>
      {showModal && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <IoMdClose />
            </CloseButton>
            <EmbedPlayer movieId={movie.id} />
          </ModalContent>
        </ModalOverlay>
      )}
    </DetailsWrapper>
  );
};

export default MovieDetails;
