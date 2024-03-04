import { useDispatch } from 'react-redux';
import { getIds, getPrise } from '../../store/api';
import { CardProd } from '../CartProd/CartProd';
import * as S from './Home.styled';
import { setProduct } from '../../store/productSlice';
import { useEffect, useState } from 'react';
import { Search } from '../Search/Search';
import Preloader from '../Loader/Preloader';

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const [offButton, setOfButton] = useState(true);
  const [loading, setLoading] = useState(true);
  const [onButton, setOnButton] = useState(false);
  const [count, setCount] = useState(1);

  const fetchData = async (offsetValue) => {
    try {
      const ids = await getIds(offsetValue, 50, 'Valantis');
      const productData = await getPrise(ids, 'Valantis');

      const uniquePrices = productData.filter(
        (prod, index, self) => index === self.findIndex((p) => p.id === prod.id)
      );
      dispatch(setProduct(uniquePrices));
      setLoading(true);
    } catch (error) {
      console.error('Error:', 'Ошибка запроса, делаем новый');
      fetchData();
    }
  };

  useEffect(() => {
    fetchData(offset);
  }, [offset]);

  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset(offset - 1);
      setCount(count - 1);
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setOffset(offset + 1);
    setCount(count + 1);
    setLoading(false);
  };

  return (
    <>
      <S.Wrapper>
        <Search
          setOfButton={setOfButton}
          setLoading={setLoading}
          setOnButton={setOnButton}
        />
        <>
          {/* <S.ButtonContainter>
            {' '}
            {offButton ? (
              <>
                <S.Button onClick={handlePrevPage}>Назад</S.Button>
                <S.Count>{count}</S.Count>
                <S.Button onClick={handleNextPage}>Вперед</S.Button>
              </>
            ) : (
              <></>
            )}
          </S.ButtonContainter> */}
          <S.ButtonContainter style={{ display: offButton ? 'flex' : 'none' }}>
  {offButton ? (
    <>
      <S.Button onClick={handlePrevPage}>Назад</S.Button>
      <S.Count>{count}</S.Count>
      <S.Button onClick={handleNextPage}>Вперед</S.Button>
    </>
  ) : (
    <></>
  )}
</S.ButtonContainter>
        </>
        <S.Container>
          {loading ? (
            <>
              <CardProd onButton={onButton} />
            </>
          ) : (
            <>
              <Preloader />
            </>
          )}
        </S.Container>
      </S.Wrapper>
      <></>
    </>
  );
};
