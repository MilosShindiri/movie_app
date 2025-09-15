import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useState, useEffect } from "react";
import { GoToPageWrapper, PaginationWrapper } from "./TableStyled";

interface Props {
  pageIndex: number;
  maxPages: number;
  setPageIndex: (index: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
}

export const TablePagination = ({
  pageIndex,
  maxPages,
  setPageIndex,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
}: Props) => {
  const [inputPage, setInputPage] = useState((pageIndex + 1).toString());

  const handleGoToPage = () => {
    const page = Number(inputPage);
    if (!isNaN(page) && page >= 1 && page <= maxPages) {
      setPageIndex(page - 1);
    } else {
      setInputPage((pageIndex + 1).toString());
    }
  };

  useEffect(() => {
    setInputPage((pageIndex + 1).toString());
  }, [pageIndex]);

  return (
    <PaginationWrapper>
      <button onClick={() => setPageIndex(0)} disabled={pageIndex === 0}>
        <FaAngleDoubleLeft />
      </button>

      <button onClick={previousPage} disabled={!canPreviousPage}>
        <FaChevronLeft />
      </button>

      {Array.from({ length: Math.min(maxPages, 5) }).map((_, i) => {
        const pageNumber = i + 1 + Math.floor(pageIndex / 5) * 5;
        if (pageNumber > maxPages) return null;

        return (
          <button
            key={pageNumber}
            onClick={() => setPageIndex(pageNumber - 1)}
            className={pageIndex + 1 === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        );
      })}

      {Math.ceil(maxPages / 5) > Math.floor(pageIndex / 5) + 1 && (
        <span>...</span>
      )}

      <button onClick={nextPage} disabled={!canNextPage}>
        <FaChevronRight />
      </button>

      <button
        onClick={() => setPageIndex(maxPages - 1)}
        disabled={pageIndex === maxPages - 1}
      >
        <FaAngleDoubleRight />
      </button>

      <GoToPageWrapper>
        <span>
          <label htmlFor="go-to-page">Go to page:</label>
          <input
            id="go-to-page"
            type="number"
            min={1}
            max={maxPages}
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            onBlur={handleGoToPage}
            onKeyDown={(e) => e.key === "Enter" && handleGoToPage()}
          />
        </span>
      </GoToPageWrapper>
    </PaginationWrapper>
  );
};
