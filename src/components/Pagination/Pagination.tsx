import React from 'react'

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className='pagination'>
        {Array.from({ length: totalPages}).map((_, pageIndex) => (
            <button
            key={pageIndex}
            onClick={() => {
              setCurrentPage(pageIndex + 1);
              window.scrollTo(0, 0); // Opcional: regresa al usuario a la parte superior de la página
            }}
            className={currentPage === pageIndex + 1 ? "active" : ""}
          >
            {pageIndex + 1}
          </button>
        ))}
    </div>
  )
}
