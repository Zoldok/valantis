import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './CartProd.styled';
import Pagination from '../Pagination/Pagination';
import Preloader from '../Loader/Preloader';

export const CardProd = ({ onButton }) => {
  const product = useSelector((state) => state.product.product);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 50;
  const totalPages = Math.ceil(product.length / cardsPerPage);

  if (product.length === 0) {
    return <div><Preloader /></div>;
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(product.length / cardsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedProducts = product.slice(startIndex, endIndex);

  return (
    <S.Wrapper>
      {onButton ? (
        <>
          {' '}
          <S.ButtonContainer>
            {onButton ? <></> : <></>}
            <S.Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Назад
            </S.Button>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
            <S.Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Вперед
            </S.Button>
          </S.ButtonContainer>
        </>
      ) : (
        <></>
      )}

      <S.Container>
        {displayedProducts.map((prod, index) => (
          <S.CardsItem key={index}>
            <S.CardsCard>
              <S.CardContent>
                <S.CardName>id товара: {prod.id}</S.CardName>
              </S.CardContent>

              <S.CardContent>
                <S.CardName>Цена: {prod.price}</S.CardName>
              </S.CardContent>

              <S.CardContent>
                <S.CardName>{prod.product}</S.CardName>
              </S.CardContent>
              <S.CardContent>
                <S.CardName>
                  Бренд:{prod.brand ? prod.brand : 'Отсутствует'}
                </S.CardName>
              </S.CardContent>
            </S.CardsCard>
          </S.CardsItem>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
