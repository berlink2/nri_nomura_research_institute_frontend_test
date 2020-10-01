import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profile from '../assets/profile.png';
import Verified from '../assets/verified.svg';
import Menu from '../assets/Menu.svg';
import Email from '../assets/email.svg';
import Shape from '../assets/Shape.svg';

const HeaderContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 6fr;
  grid-gap: 1.5rem;
  padding-top: 2rem;
  z-index: 100;
  background: white;
  position: fixed;
  padding-bottom: 1rem;
  left: 0;

  .avatar {
    border-radius: 50%;
    margin-left: 2rem;
  }

  .user-info {
    display: flex;
    flex-direction: column;

    &__top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__name {
        font-size: 2rem;
        font-weight: 700;
      }

      &__menu {
        margin-right: 3rem;
      }
    }

    &__mid {
      margin-top: 0.3rem;
      font-size: 1rem;
      color: ${(props) => props.theme.gray};
      font-weight: 700;
    }

    &__bottom {
      margin-top: 0.6rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__text {
        color: ${(props) => props.theme.gray};
        font-weight: 500;
        margin-right: 3.5rem;
      }
    }
  }
`;

const ShowHeader = styled.div`
  .visible {
    visibility: visible;
    transition: all 300ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 300ms ease-out;
    transform: translate(0, -25%);
  }
`;

const Header = () => {
  const [pos, setPos] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pos]);

  const handleScroll = () => {
    setPos(() => document.body.getBoundingClientRect().top);
    setShowHeader(() => document.body.getBoundingClientRect().top > pos);
  };

  return (
    <ShowHeader>
      <HeaderContainer className={showHeader ? 'visible' : 'hidden'}>
        <img src={profile} alt='avatar' className='avatar' width='40' />
        <div className='user-info'>
          <div className='user-info__top'>
            <div className='user-info__top__name'>
              Melanie Tan <img src={Verified} />
            </div>
            <img src={Menu} className='user-info__top__menu' alt='menu' />
          </div>
          <div className='user-info__mid'>Professional Food Photographer</div>
          <div className='user-info__bottom'>
            <img src={Shape} alt='location' />
            <span className='user-info__bottom__text'>Bangkok</span>
            <img src={Email} alt='email' />
            <span className='user-info__bottom__text'>
              melanietan99@gmail.com
            </span>
          </div>
        </div>
      </HeaderContainer>
    </ShowHeader>
  );
};

export default Header;
