import { action } from 'typesafe-actions';
import axios from 'axios';
const token = process.env.REACT_APP_BEARER;
axios.defaults.headers.common = {'Authorization': `bearer ${token}`};

export const GET_ITEMS_LIST = '@@actions/GET_ITEMS_LIST';
export const SET_ITEMS_LIST = '@@actions/SET_ITEMS_LIST';
export const SET_USERS_LIST = '@@actions/SET_USERS_LIST';
export const SET_ITEM = '@@actions/SET_ITEM';
export const SET_DETAIL_ITEM = '@@actions/SET_DETAIL_ITEM';
export const ITEMS_LOADER = '@@actions/ITEMS_LOADER';
export const SET_SEARCH_TERM = '@@actions/SET_SEARCH_TERM';
export const SET_SEARCH_KIND = '@@actions/SET_SEARCH_KIND';
export const SET_PAGE = '@@actions/SET_PAGE';

export const setItem = (item: any) => action(SET_ITEM, item);

export const itemsListLoader = (status: boolean) => action(ITEMS_LOADER, status);

export const getitemsList = (items: any) => action(GET_ITEMS_LIST, items);

export const setitemsList = (items: any) => action(SET_ITEMS_LIST, items);

export const setPage = (page: number) => action(SET_PAGE, page);

export const setUsersList = (users: any) => action(SET_USERS_LIST, users);

export const setSearchTerm = (term: string) => action(SET_SEARCH_TERM, term);

export const setSearchKind = (kind: string) => action(SET_SEARCH_KIND, kind);

export const setDetailItem = (item: any) => action(SET_DETAIL_ITEM, item);

export const fetchItemsList = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(itemsListLoader(true));
    const { kind, term, page } = getState().search;
    const q = `https://api.github.com/search/${kind}?q=${term}&per_page=30&page=${page}`;
    try {
      const itemsListRes = await axios.get(q, {});
      switch(kind) {
        case 'users':
          dispatch(fetchUsersList(itemsListRes.data.items));
        break;
        case 'repositories':

        break;
      }
      dispatch(setitemsList(itemsListRes.data.items));
    } catch (err) {
      console.warn(`😢 ${err}`, 5);
    } finally {
      dispatch(itemsListLoader(false));
    }
  };
};

export const fetchUsersList = (list: []) => {
  return (dispatch: any, getState: any) => {
    const users = list.map(async(user: any) => {
      const currentUser: any = await axios.get(user.url, {});
      const stars: any = await axios.get(`https://api.github.com/users/${currentUser.data.login}/starred?per_page=100`, {});
      currentUser.data.stars = stars.data.length;
      return currentUser;
    });
    Promise.all(users)
      .then(res => dispatch(setUsersList(res.map(el => el.data))));
    ;
  }
}

export const fetchDetailItem = (id: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(itemsListLoader(true));
    const q = `https://api.mercadolibre.com/items/${id}`;
    try {
      const detailItemRes = await axios.get(q, {});
      const description = await axios.get(`${q}/description`, {});
      dispatch(setDetailItem({...detailItemRes.data, description: description.data.plain_text}));
    } catch (err) {
      console.warn(`😢 ${err}`);
    } finally {
      dispatch(itemsListLoader(false));
    }
  };
};

