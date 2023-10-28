import React from 'react';

const Pagination: React.FC<{
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
}> = ({ currentPage, totalPages, onPageChange }) => {

  // Función para generar el rango de páginas a mostrar
  const generatePageNumbers = () => {
    const numbers = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
      return numbers;
    }

    let start = currentPage - 5; // Empezamos 5 páginas antes de la actual
    let end = currentPage + 4;   // Terminamos 4 páginas después de la actual

    // Ajustes para asegurarnos que no nos salimos del rango de páginas disponibles
    if (start < 1) {
      end -= (start - 1);
      start = 1;
    }

    if (end > totalPages) {
      start -= (end - totalPages);
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }

    return numbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div>
      {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Anterior</button>}
      
      {pageNumbers.map(number => (
        <button 
          key={number}
          onClick={() => onPageChange(number)}
          style={{ backgroundColor: number === currentPage ? 'grey' : 'white' }}>
          {number}
        </button>
      ))}

      {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Siguiente</button>}
    </div>
  );
};

export default Pagination;
