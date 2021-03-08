import React from 'react';

interface ITile {
  avatar_url: string;
  login: string;
  name: string;
  stars: number;
}

const Tile: React.FC<ITile> = ({ avatar_url, login, name, stars }) => {
  return(
    <div className="tile">
      <h3>{name}</h3>
      <img src={avatar_url} alt={name} />
      <span>Stars: {stars}</span>
    </div>
  )
};

export default Tile;
