import React, { useContext, useMemo } from 'react';
import { CarouselContext } from '../App';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  width: 360px;
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.white2};
  .image-container {
    overflow-x: hidden;
    overflow-y: hidden;

    margin-top: 1rem;
    border-radius: 0.4rem;
    max-height: 15rem;
    max-width: 15rem;
    &__image {
      max-width: inherit;
      max-height: inherit;
    }
  }
`;
const Images = () => {
  const { dataResponse = [], carouselIndex } = React.useContext(
    CarouselContext
  );

  const imageList = useMemo(() => {
    return (
      (dataResponse[carouselIndex] && dataResponse[carouselIndex].item) || []
    );
  }, [carouselIndex]);

  const renderImages = (image) => {
    return (
      <div key={image.id} className='image-container'>
        <img
          loading={'lazy'}
          src={image.url}
          alt={image.title}
          className='image-container__image'
        />
      </div>
    );
  };

  return (
    <ImagesContainer>
      {imageList.length ? imageList.map(renderImages) : 'Loading images'}
    </ImagesContainer>
  );
};

export default Images;
