import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomePageStyled, LinkStyled } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  });

  return (
    <HomePageStyled>
      <h1>Followings</h1>
      <p>
        This is Test Project <br /> for a position of Junior FrontEnd Developer
      </p>
      <h2>Used technologies:</h2>
      <p>
        React, React Router, <br />
        Styled-components, AXIOS, Mockapi.io
      </p>
      <LinkStyled to="tweets">To Tweets</LinkStyled>
    </HomePageStyled>
  );
};

export default HomePage;
