import React from 'react';
import * as S from './Pagination.styled';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = currentPage - Math.floor(maxPageButtons / 2);
      if (startPage < 1) {
        startPage = 1;
      }

      let endPage = startPage + maxPageButtons - 1;
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxPageButtons + 1;
      }

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <S.ButtonContainer>
      {generatePageNumbers().map((pageNumber, index) => (
        <S.Button
          onClick={() => handlePageChange(pageNumber)}
          key={index}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          {pageNumber}
        </S.Button>
      ))}
    </S.ButtonContainer>
  );
};

export default Pagination;