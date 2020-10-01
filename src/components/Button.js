import React from 'react';
import styled from 'styled-components';
import add from '../assets/add.png';
const PlusButton = styled.button`
  position: fixed;
  bottom: 2%;
  right: 10%;
  background-color: ${(props) => props.theme.red};
  height: 6rem;
  width: 6rem;
  outline: none;
  border: none;
  border-radius: 50%;
  margin-bottom: 2rem;
  cursor: pointer;
`;
const Button = () => {
  return (
    <PlusButton>
      <img src={add} />
    </PlusButton>
  );
};

export default Button;
