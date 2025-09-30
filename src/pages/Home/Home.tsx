import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/BreadCrumbs/useBreadcrumbs";
import { NowPlayingMovies } from "../../components/Home";
import { Footer } from "../../components/Home/HomeFooter";
import { MainContent, PageWrapper } from "../../components/Home/HomeStyled";

export const HomePage = () => {
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([{ label: "", url: "/" }]);
  }, [setItems]);

  return (
    <PageWrapper>
      <MainContent>
        <NowPlayingMovies />
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};
