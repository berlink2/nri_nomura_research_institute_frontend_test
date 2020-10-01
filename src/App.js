import React, { useEffect, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Images from './components/Images';
import { processData } from './utils/processData';
import axios from 'axios';
import Button from './components/Button';

const theme = {
  white: '#ffffff',
  white2: '#f0f0f0',
  gray: '#969696',
  black: '#000000',
  orange: '#f89f1e',
  teal: '#3fc4b6',
  red: '#e71d35',
  brown: '#ff9700',
  navyblue: '#031727',
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  width: 36rem;
  margin: auto;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
`;

const CarouselContext = createContext({});

function App() {
  const [dataResponse, setDataResponse] = React.useState({});
  const [carouselIndex, setCarouselIndex] = React.useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axios(
          'https://jsonplaceholder.typicode.com/photos'
        );
        if (mounted) setDataResponse(() => processData(data));
      } catch (e) {
        setDataResponse({ error: 'No Data Returned' });
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <CarouselContext.Provider
          value={{ dataResponse, carouselIndex, setCarouselIndex }}
        >
          <Header />
          <Carousel />

          <Images />
        </CarouselContext.Provider>
        <Button />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
export { CarouselContext };
