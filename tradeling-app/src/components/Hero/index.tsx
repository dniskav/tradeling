import React from 'react';
import Logo from '../Logo/index';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  & > .title {
    display: flex;
    flex-direction: column;
    text-align: left;
    h1 {
      margin: 2px 0 0 0;
      font-size: 20px;
      letter-spacing: 0px;
    }
    h2 {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.35px;
      margin: 0;
    }
  }
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Logo />
      <div className="title">
        <h1>{t('Hero.title')}</h1>
        <h2>{t('Hero.subtitle')}</h2>
      </div>
    </Container>
  );
};

export default Hero;
