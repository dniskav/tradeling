import React from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../UI/DropDown';
import TextField from '../UI/TextField';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  width: 480px;
`;

const Search = () => {
  const { t } = useTranslation();
  return(
    <Container>
      <TextField placeholder={t('Search.caption')} />
      <DropDown />
    </Container>
  )
};

export default Search;
