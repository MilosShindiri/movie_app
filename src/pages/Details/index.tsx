import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails, useSimilarMovies } from "../../queries/movies";
import MovieDetails from "../../components/MovieDetails";
import { TableLoader } from "../../components/TableLoader";
import { toast } from "react-toastify";
import { useMovieHistory } from "../../context/useHistoryContext";
import { getImageUrl, ImageSizes } from "../../utils/imageUtils";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: movie,
    isLoading: loadingDetails,
    error: errorDetails,
  } = useMovieDetails(id!);

  const {
    data: similar,
    isLoading: loadingSimilar,
    error: errorSimilar,
  } = useSimilarMovies(id!);

  const { addToHistory } = useMovieHistory();
  const addToHistoryRef = useRef(addToHistory);

  useEffect(() => {
    addToHistoryRef.current = addToHistory;
  }, [addToHistory]);

  useEffect(() => {
    if (movie) {
      addToHistoryRef.current({
        id: movie.id,
        title: movie.title,
        poster: getImageUrl(movie.poster_path, ImageSizes.W300),
      });
    }
  }, [movie]);

  useEffect(() => {
    if (errorDetails) {
      toast.error("Error loading movie details.");
    }
  }, [errorDetails]);

  useEffect(() => {
    if (errorSimilar) {
      toast.error("Error loading similar movies.");
    }
  }, [errorSimilar]);

  if (loadingDetails) return <TableLoader />;
  if (errorDetails) return null;

  return (
    <MovieDetails
      movie={movie}
      similarMovies={similar?.results ?? []}
      loadingSimilar={loadingSimilar}
      errorSimilar={errorSimilar}
    />
  );
};

export default DetailsPage;
