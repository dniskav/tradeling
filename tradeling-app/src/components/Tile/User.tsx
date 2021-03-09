import React from 'react';

interface ITileUser {
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
}

const TileUser: React.FC<ITileUser> = ({ avatar_url, html_url, name, location }) => {
  return(
    <div className="tile">
      <div className="img-container">
        <img src={`${avatar_url}&size=120`} alt={name} />
      </div>
      <div  className="description">
        <h3>
          <a href={html_url}>{name}</a>
        </h3>
        <span>{location}</span>
      </div>
    </div>
  )
};

export default TileUser;
