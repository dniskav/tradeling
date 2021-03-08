import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepos, getUsers, getPage } from '../../redux/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import Tile from '../Tile/index';
import { setPage } from '../../redux/actions';
import { fetchItemsList } from '../../redux/actions/index';

const Results: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers);
  const repos = useSelector(getRepos);
  const page = useSelector(getPage);
  const next = () => {
    dispatch(setPage(page + 1)); 
    dispatch(fetchItemsList())
  }
  return (
    <InfiniteScroll
      dataLength={users.length}
      next={next}
      hasMore={true}
      loader={null}
    >
    <div className="grid">
      {users.map((result: any) => (
          <Tile
            key={uuidv4()}
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
