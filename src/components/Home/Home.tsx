import { Link } from "react-router-dom";
import { useNowPlayingMovies } from "../../queries/movies";
import type { Movie } from "../../types/movies";
import { getImageUrl, ImageSizes } from "../../utils/imageUtils";
import { Card, Grid, Info, Poster, Rating, Title } from "./HomeStyled";
import { Loader } from "../Loader";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const NowPlayingMovies = () => {
  const { data, isLoading, isError } = useNowPlayingMovies();

  useEffect(() => {
    if (isError) {
      toast.error("Error loading movies.");
    }
  }, [isError]);

  if (isLoading) return <Loader />;

  return (
    <Grid>
      {data?.map((movie: Movie) => (
        <Card key={movie.id}>
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Poster
              src={
                movie.poster_path
                  ? getImageUrl(movie.poster_path, ImageSizes.W500)
                  : "No image"
              }
              alt={movie.title}
            />
          </Link>
          <Info>
            <Title>{movie.title}</Title>
            <Rating>Rating: {movie.vote_average.toFixed(2)}</Rating>
          </Info>
        </Card>
      ))}
    </Grid>
  );
};
