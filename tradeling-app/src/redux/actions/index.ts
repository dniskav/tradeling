import { action } from 'typesafe-actions';
import axios, { AxiosResponse } from 'axios';
import { IUser, IRepo, IGitHubUser, IGitHubRepo } from '../types';
const token = process.env.REACT_APP_BEARER;
axios.defaults.headers.common = {'Authorization': `bearer ${token}`};

export const GET_ITEMS_LIST = '@@actions/GET_ITEMS_LIST';
export const SET_ITEMS_LIST = '@@actions/SET_ITEMS_LIST';
export const SET_USERS_LIST = '@@actions/SET_USERS_LIST';
export const SET_REPOS_LIST = '@@actions/SET_REPOS_LIST';
export const CLEAR_LIST = '@@actions/CLEAR_LIST';
export const SET_DETAIL_ITEM = '@@actions/SET_DETAIL_ITEM';
export const ITEMS_LOADER = '@@actions/ITEMS_LOADER';
export const SET_SEARCH_TERM = '@@actions/SET_SEARCH_TERM';
export const SET_SEARCH_KIND = '@@actions/SET_SEARCH_KIND';
export const SET_PAGE = '@@actions/SET_PAGE';

export const itemsListLoader = (status: boolean) => action(ITEMS_LOADER, status);

export const setitemsList = (items: any[]) => action(SET_ITEMS_LIST, items);

export const setPage = (page: number) => action(SET_PAGE, page);

export const setUsersList = (users: IUser[]) => action(SET_USERS_LIST, users);

export const setReposList = (repos: IRepo[]) => action(SET_REPOS_LIST, repos);

export const clearList = () => action(CLEAR_LIST);

export const setSearchTerm = (term: string) => action(SET_SEARCH_TERM, term);

export const setSearchKind = (kind: string) => action(SET_SEARCH_KIND, kind);

export const fetchItemsList = () => {
  return async (dispatch: Function, getState: Function) => {
    dispatch(itemsListLoader(true));
    const { kind, term, page } = getState().search;
    const qUsers = `https://api.github.com/search/${kind}?q=${term}&per_page=100&page=${page}`;
    const qRepos = `https://api.github.com/search/${kind}?q=${term}&per_page=100&page=${page}`;
    try {
      const q = (term === 'users') ? qUsers : qRepos;
      const itemsListRes: AxiosResponse = await axios.get(q, {});
      switch(kind) {
        case 'users':
          const filteredUsers = itemsListRes.data.items.map((user: IGitHubUser) => user.url);
          dispatch(fetchUsersList(filteredUsers));
          break;
          case 'repositories':
          const filteredRepos = itemsListRes.data.items.map((repo: IGitHubRepo) => {
            const { name, html_url, stargazers_count, url } = repo;
            return {
              url,
              name,
              html_url,
              stargazers_count,
              owner: repo?.owner?.login
            }
          });
          dispatch(setReposList(filteredRepos));
          break;
      }
      dispatch(setitemsList(itemsListRes.data.items.map((item: any) => {
        const { name, html_url, location, stargazers_count, url } = item;
        return {
            url,
            name,
            html_url,
            location,
            stargazers_count,
            owner: item?.owner?.login
        }
      })));
    } catch (err) {
      console.warn(`😢 ${err}`, 5);
    } finally {
      dispatch(itemsListLoader(false));
    }
  };
};

export const fetchUsersList = (list: []) => {
  return (dispatch: Function) => {
    const users = list.map(async(user: string) => {
      const currentUser: AxiosResponse = await axios.get(user, {});
      // the code below is to gt all stars from each user, but, usually exceeds the API calls limit.
      // const stars: any = await axios.get(`https://api.github.com/users/${currentUser.data.login}/starred?per_page=100`, {});
      // currentUser.data.stars = stars.data.length;
      return currentUser;
    });
    Promise.all(users)
      .then(res => dispatch(setUsersList(res.map(el => {
        const { html_url, avatar_url, name, location } = el.data
        return { html_url, avatar_url, name, location }
      }))));
    ;
  }
}

