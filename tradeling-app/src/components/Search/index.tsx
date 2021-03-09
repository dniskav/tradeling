import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../UI/DropDown';
import TextField from '../UI/TextField';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKind, setSearchTerm, fetchItemsList, setitemsList, setPage, clearList } from '../../redux/actions/index';
import { getKind, getTerm } from '../../redux/selectors/index';

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  width: 480px;
`;

const Search: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const term = useSelector(getTerm);
  const kind = useSelector(getKind);

  useEffect(() => {
    if(term.length > 2) {
      dispatch(fetchItemsList());
    } else {
      dispatch(setitemsList([]));
      dispatch(clearList());
    }
    dispatch(setPage(1));
  }, [term, kind, dispatch]);

  return(
    <Container>
      <TextField placeholder={t('Search.caption')} onChange={(e: any) => dispatch(setSearchTerm(e.target.value))} value={term}/>
      <DropDown value={kind} onChange={(e: any) => dispatch(setSearchKind(e))}>
        <option value="users">{t('Search.user')}</option>
        <option value="repositories">{t('Search.repo')}</option>
      </DropDown>
    </Container>
  )
};

export default Search;
