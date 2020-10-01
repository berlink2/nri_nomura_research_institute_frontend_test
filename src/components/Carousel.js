import React, { useContext } from 'react';
import { CarouselContext } from '../App';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  overflow-x: scroll;
  flex-direction: row;
  height: 15rem;
  max-width: 36rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 8rem;

  .carousel-card {
    margin: 0 1.25rem 0 1.25rem;
    position: relative;
    cursor: pointer;

    &:active {
      transform: scale(1.15, 1.15);
    }

    &:focus {
      outline: none;
      transform: scale(1.15, 1.15);
    }

    &-img {
      border-radius: 1rem;
      box-shadow: 0px 5px 10px 0px rgba(255, 151, 0, 0.3);
      height: 100px;
      width: 140px;
    }

    &-img:hover {
      background-color: red;
    }

    &-text {
      position: absolute;
      color: white;
      width: 100%;
      height: 3rem;
      border-radius: 1rem;
      background-color: ${(props) => props.theme.orange};
      top: 70%;
    }
  }
`;

const Carousel = () => {
  const { dataResponse, setCarouselIndex } = useContext(CarouselContext);

  const handleClick = (i) => {
    setCarouselIndex(i);
  };
  return dataResponse && dataResponse.length > 0 ? (
    <CarouselContainer>
      {dataResponse.map((item, i) => {
        return (
          <div
            tabIndex='0'
            key={i}
            alt={item.albumTitle}
            className='carousel-card'
            onClick={() => handleClick(i)}
          >
            <img src={item.albumImage} className='carousel-card-img' />
            <div className='carousel-card-text'>{item.albumTitle}</div>
          </div>
        );
      })}
    </CarouselContainer>
  ) : (
    <div>No images available</div>
  );
};

export default Carousel;
