import React from 'react';
import Hero from '../Hero/index';
import Search from '../Search/index';
import Results from '../Results/index';

const Home: React.FC = () => {

  return (<>
    <div>
      <Hero />
      <Search />
      <Results />
    </div>
  </>)
};

export default Home;
