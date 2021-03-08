import React from 'react';
import { useSelector } from 'react-redux';
import { getRepos, getUsers } from '../../redux/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';
import Tile from '../Tile/index';

const Results: React.FC = () => {
  const users = useSelector(getUsers);
  const repos = useSelector(getRepos);
  return (
    <InfiniteScroll
        dataLength={users.length}
        next={() => console.log(8)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>No more results</b>
          </p>
        }
      >
      <div className="grid">
        {users.length > 0 &&
          users.map((result: any) => (
            <Tile
            key={result.id}
            avatar_url={result.avatar_url}
            login={result.login}
            name={result.name}
            stars={result.stars}
            />
            ))}
      </div>
    </InfiniteScroll>
  );
};

export default Results;
