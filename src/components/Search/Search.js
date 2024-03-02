import { useState } from 'react';
import * as S from './Search.styled';
import { filterProductsByField, getFields, getPrise } from '../../store/api';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../store/productSlice';

const fieldOptions = ['brand', 'product', 'price'];

export const Search = ({ setOfButton, setLoading, setOnButton }) => {
  const [searchField, setSearchField] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  async function fetchData() {
    if (!searchField || !searchValue) {
      console.log('Заполните все поля');
      setMessage('Выберете все параметры поиска');
      return;
    }
    setLoading(false);
    try {
      // eslint-disable-next-line no-unused-vars
      const fields = await getFields();

      let filteredProducts;
      if (searchField && searchValue) {
        if (searchField === 'price') {
          filteredProducts = await filterProductsByField(
            searchField,
            parseFloat(searchValue)
          );
        } else {
          filteredProducts = await filterProductsByField(
            searchField,
            searchValue
          );
        }
      } else {
        alert('введите параметры поиска');
        return;
      }

      const productData = await getPrise(filteredProducts, 'Valantis');
      const uniquePrices = productData.filter(
        (prod, index, self) => index === self.findIndex((p) => p.id === prod.id)
      );
      setOfButton(false);
      setOnButton(true);
      setLoading(true);
      dispatch(setProduct(uniquePrices));
      setMessage('');
    } catch (error) {
      console.error('Ошибка, повторите запрос');
      fetchData();
    }
  }

  return (
    <>
      <S.Container>
        <S.SearchPanel>
          <S.Select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          >
            <option value="">Искать по:</option>
            {fieldOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </S.Select>
          <S.Input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Введите значение"
          />
          <S.Button onClick={fetchData}>Найти</S.Button>
        </S.SearchPanel>
        <S.Message>{message}</S.Message>
      </S.Container>
    </>
  );
};
