import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepos, getUsers, getPage, getKind, getResults } from '../../redux/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import TileUser from '../Tile/User';
import TileRepo from '../Tile/Repo';
import { setPage } from '../../redux/actions';
import { fetchItemsList } from '../../redux/actions/index';
import { IUser, IRepo } from '../../redux/types';

const Results: React.FC = () => {
  const dispatch = useDispatch()
  const kind = useSelector(getKind);
  const page = useSelector(getPage);
  const users = useSelector(getUsers);
  const repos = useSelector(getRepos);
  const results = useSelector(getResults);
  const next = () => {
    dispatch(setPage(page + 1)); 
    dispatch(fetchItemsList())
  }

  return (
    <InfiniteScroll
      dataLength={results.length}
      next={next}
      hasMore={true}
      loader={null}
    >
    <div className="grid">
      {kind === 'users' && users.map((result: IUser) => (
          <TileUser
            html_url={result.html_url}
            key={uuidv4()}
            avatar_url={result.avatar_url}
            name={result.name}
            location={result.location}
            // stars={result.stars}
          />
          ))}
      {kind === 'repositories' && repos.map((result: IRepo) => (
          <TileRepo
            key={uuidv4()}
            name={result.name}
            url={result.html_url}
            language={result.location}
            stars={result.stargazers_count}
            owner={result.owner}
          />
          ))}
      </div>
    </InfiniteScroll>
  );
};

export default Results;
