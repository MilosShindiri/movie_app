import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/useBreadcrumbs";
import NowPlayingMovies from "../../components/Home/Home";
import Footer from "../../components/Home/HomeFooter";

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
