import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails, useSimilarMovies } from "../../queries/movies";
import { toast } from "react-toastify";
import { getImageUrl, ImageSizes } from "../../utils/imageUtils";
import { Loader } from "../../components/Loader";
import { useBreadcrumbs } from "../../context/BreadCrumbs/useBreadcrumbs";
import { useMovieHistory } from "../../context/HistoryWidget/useHistoryContext";
import { MovieDetails } from "../../components/MovieDetails";

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { setItems } = useBreadcrumbs();

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
    if (movie) {
      setItems([
        { label: "Home", url: "/" },
        { label: "Movie", url: null },
        { label: movie.title, url: null },
      ]);
    }
  }, [movie, setItems]);

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

  if (loadingDetails) return <Loader />;
  if (errorDetails || !movie) return null;

  return (
    <MovieDetails
      movie={movie}
      similarMovies={similar?.results ?? []}
      loadingSimilar={loadingSimilar}
      errorSimilar={errorSimilar}
    />
  );
};
