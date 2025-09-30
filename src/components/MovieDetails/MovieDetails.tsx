import { FaRegPlayCircle } from "react-icons/fa";
import type { MovieDetailsProps } from "../../types/movies";
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
  NoImagePlaceholder,
  NoSimilarMoviesMessage,
} from "./MovieDetailsStyled";

import { useState } from "react";

import { useEscapeKey } from "../../hooks/useEscapeKey";
import { IoMdClose } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getImageUrl, ImageSizes } from "../../utils/imageUtils";

import { Loader } from "../Loader";
import { EmbedPlayer } from "../EmbededPlayer";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 1500,
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

export const MovieDetails = ({
  movie,
  similarMovies,
  loadingSimilar,
  errorSimilar,
}: MovieDetailsProps) => {
  const imageUrl = movie.backdrop_path
    ? getImageUrl(movie.backdrop_path, ImageSizes.Original)
    : "";

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
            {movie.poster_path ? (
              <PosterImage
                src={getImageUrl(movie.poster_path, ImageSizes.W300)}
                alt={movie.title}
              />
            ) : (
              <NoImagePlaceholder>No image available</NoImagePlaceholder>
            )}
          </DetailsLeft>

          <DetailsRight>
            <div>
              <SectionTitle>{movie.title}</SectionTitle>
              <InfoParagraph>
                <strong>Release Date:</strong> {formattedDate}
              </InfoParagraph>
              <InfoParagraph>
                <strong>Rating:</strong> {movie.vote_average.toFixed(2)}
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
        {loadingSimilar && <Loader />}
        {errorSimilar && null}

        {similarMovies.length === 0 && !loadingSimilar && !errorSimilar ? (
          <NoSimilarMoviesMessage>No similar movies</NoSimilarMoviesMessage>
        ) : (
          <MovieSlider>
            <Slider {...settings}>
              {similarMovies.map((movie) => (
                <MovieSliderItem key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    {movie.poster_path ? (
                      <img
                        src={getImageUrl(movie.poster_path, ImageSizes.W300)}
                        alt={movie.title}
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                        }}
                      />
                    ) : (
                      <NoImagePlaceholder>No image</NoImagePlaceholder>
                    )}
                  </Link>
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieSliderItem>
              ))}
            </Slider>
          </MovieSlider>
        )}
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
