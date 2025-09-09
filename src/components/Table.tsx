import { useEffect } from "react";
import { usePopularMovies } from "../queries/movies";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export const Table = () => {
  const { data, error, isLoading } = usePopularMovies();

  useEffect(() => {
    if (error) {
      toast.error("An error occurred while loading the movies.");
    }
  }, [error]);

  if (isLoading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <ClipLoader color="#36d7b7" size={50} loading={true} />
      </div>
    );

  if (error) return null;

  return (
    <div>
      {data?.results.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};
