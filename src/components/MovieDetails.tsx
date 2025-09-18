import { FaRegPlayCircle } from "react-icons/fa";
import type { MovieDetailsProps } from "../types/movies";
import {
  DetailsBackground,
  DetailsData,
  DetailsWrapper,
  PosterImage,
  SectionTitle,
  InfoParagraph,
  DetailsContentWrapper,
  DetailsLeft,
  DetailsRight,
  PlayButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  MovieSlider,
  MovieSliderItem,
  MovieTitle,
} from "./MovieDetailsStyled";
import { TableLoader } from "./TableLoader";
import { useState } from "react";
import EmbedPlayer from "./EmbedPlayer";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { IoMdClose } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 2000,
  arrows: true,
  autoplay: false,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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

        <MovieSlider>
          <Slider {...settings}>
            {similarMovies.map((m) => (
              <MovieSliderItem key={m.id}>
                <a href={`/movie/${m.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                    alt={m.title}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </a>
                <MovieTitle>{m.title}</MovieTitle>
              </MovieSliderItem>
            ))}
          </Slider>
        </MovieSlider>
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
