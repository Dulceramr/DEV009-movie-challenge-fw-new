import React from 'react';

const Pagination: React.FC<{
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
}> = ({ currentPage, totalPages, onPageChange }) => {

  return (
    <div>
      {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Anterior</button>}
      Página {currentPage} de {totalPages}
      {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Siguiente</button>}
    </div>
  );
};

export default Pagination;
