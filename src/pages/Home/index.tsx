import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/useBreadcrumbs";
import NowPlayingMovies from "../../components/Home";
import Footer from "../../components/HomeFooter";

const HomePage = () => {
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([{ label: "", url: "/" }]);
  }, [setItems]);

  return (
    <>
      <NowPlayingMovies />
      <Footer />
    </>
  );
};

export default HomePage;
