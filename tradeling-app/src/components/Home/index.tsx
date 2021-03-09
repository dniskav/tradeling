import React from 'react';
import Hero from '../Hero/index';
import Search from '../Search/index';
import Results from '../Results/index';
import { useSelector } from 'react-redux';
import { getLoader } from '../../redux/selectors/index';
import loaderSrc from '../../assets/loading.gif';
import styled from 'styled-components';

const Loader = styled.img`
  width: 64px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  const loader = useSelector(getLoader);
  return (<>
    <div>
      <header>
        <Hero />
        <Search />
      </header>
      <Results />
      {loader && <div><Loader src={loaderSrc} alt="loader" /></div>}
    </div>
  </>)
};

export default Home;
