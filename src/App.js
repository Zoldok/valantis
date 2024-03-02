import { Home } from './components/Main/Home';
import * as S from './App.styled';
import { getIds, getPrise } from './store/api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProduct } from './store/productSlice';

export function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ids = await getIds(1, 10, 'Valantis');
        const productData = await getPrise(ids, 'Valantis');

        const uniquePrices = productData.filter(
          (prod, index, self) =>
            index === self.findIndex((p) => p.id === prod.id)
        );

        dispatch(setProduct(uniquePrices));
      } catch (error) {
        console.error('Error:', error.message);
        fetchData();
      }
    };

    fetchData();
  }, []);

  return (
    <S.MainApp>
      <Home />
    </S.MainApp>
  );
}

export default App;
