import React from 'react';
import logoSrc from '../../assets/GitHub-Mark-64px.png';

const Logo: React.FC = () => {

  return(
    <figure>
      <img src={logoSrc} alt="logo" width="44px"/>
    </figure>
  )
};

export default Logo;
