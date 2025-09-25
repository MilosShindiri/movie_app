import { FaHistory } from "react-icons/fa";
import type { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useWidget } from "../../hooks/useWidget";
import {
  CloseButton,
  EmptyMessage,
  HistoryContent,
  HistoryHeader,
  HistoryItem,
  HistoryPanel,
  MovieInfo,
  MoviePoster,
  MovieTitle,
  WidgetContainer,
} from "./HistoryWidgetStyled";

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
              {movieHistory.length === 0 ? (
                <EmptyMessage>No items added</EmptyMessage>
              ) : (
                movieHistory.map((movie) => (
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
                ))
              )}
            </HistoryContent>
          </HistoryPanel>
        )}
      </WidgetContainer>
    </>
  );
};
