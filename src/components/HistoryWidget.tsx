import { FaHistory } from "react-icons/fa";
import { useWidget } from "../hooks/useWidget";
import {
  CloseButton,
  HistoryContent,
  HistoryHeader,
  HistoryItem,
  HistoryPanel,
  MovieInfo,
  MoviePoster,
  MovieTitle,
  WidgetContainer,
} from "./HistoryWidgetStyled";
import type { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export const HistoryWidget: FC = () => {
  const {
    isExpanded,
    toggleExpanded,
    handleMovieClick,
    movieHistory,
    clearHistory,
  } = useWidget();
  return (
    <>
      <WidgetContainer $isExpanded={isExpanded}>
        {!isExpanded ? (
          <div onClick={toggleExpanded} style={{ cursor: "pointer" }}>
            <FaHistory />
          </div>
        ) : (
          <HistoryPanel>
            <HistoryHeader>
              <span>Recently Viewed</span>
              <CloseButton onClick={clearHistory}>
                <RiDeleteBin6Line />
              </CloseButton>

              <CloseButton onClick={toggleExpanded}>
                <IoMdClose />
              </CloseButton>
            </HistoryHeader>

            <HistoryContent>
              {movieHistory.map((movie) => (
                <HistoryItem
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>
                  </MovieInfo>
                  <MoviePoster>
                    <img src={movie.poster} alt={movie.title} />
                  </MoviePoster>
                </HistoryItem>
              ))}
            </HistoryContent>
          </HistoryPanel>
        )}
      </WidgetContainer>
    </>
  );
};
