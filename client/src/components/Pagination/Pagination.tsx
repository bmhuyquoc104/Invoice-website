import React from "react";
import PaginationStyled from "./Pagination.styled";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({ totalPages, currentPage, setPage }: PaginationProps) {
  // Initialize pages array that contain all pages
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <PaginationStyled>
      <button
        disabled={currentPage === 1}
        onClick={() => setPage((prev) => prev - 1)}
        className="prev"
      >
        Prev
      </button>
      {pages.map((page,index) => (
        <button key = {index}
          onClick={() => setPage(page)}
          className={`page ${currentPage === page && "active"}`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={(currentPage === pages[pages.length-1])}
        onClick={() => setPage((prev) => prev + 1)}
        className="next"
      >
        Next
      </button>
    </PaginationStyled>
  );
}

export default Pagination;
