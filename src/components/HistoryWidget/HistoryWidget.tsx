import { FaHistory } from "react-icons/fa";
import type { FC } from "react";
import { useRef, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useWidget } from "../../hooks/Widget/useWidget";
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
  const { handleMovieClick, movieHistory, clearHistory } = useWidget();

  const widgetRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <WidgetContainer ref={widgetRef} $isExpanded={isExpanded}>
      {!isExpanded ? (
        <div onClick={() => setIsExpanded(true)} style={{ cursor: "pointer" }}>
          <FaHistory />
        </div>
      ) : (
        <HistoryPanel>
          <HistoryHeader>
            <span>Recently Viewed</span>
            <CloseButton onClick={clearHistory}>
              <RiDeleteBin6Line />
            </CloseButton>
            <CloseButton onClick={() => setIsExpanded(false)}>
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
                  onClick={() => {
                    handleMovieClick(movie.id);
                    setIsExpanded(false);
                  }}
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
  );
};
