import React, { useState } from 'react';
import { useGetUsersQuery } from '../../store/services/user';
import CheckedUsers from '../Users/CheckedUsers';
import { setPage, setParams } from '../../store/slices/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import * as S from '../AppStyles';

const UserSearch = (inputValue) => {
  const [username, setUsername] = useState(inputValue);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [sortOptionsVisible, setSortOptionsVisible] = useState(false);
  const dispatch = useDispatch();

  const page = useSelector((state) => state.user.page);
  const params = useSelector((state) => state.user.sort);
  const allUsersQuery = useGetUsersQuery({ 
   username,
   params,
   page
  });

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
    setCurrentPage(pageNumber);
  };

  
  const handleSearch = () => {
    setUsername(searchText);
    setSearched(true);
  };

  const handleFilter = (filter) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
      setSortOptionsVisible(false);
    } else {
      setActiveFilter(filter);
    } if (filter === 'sort') {
      setSortOptionsVisible(true);
    } else {
      setSortOptionsVisible(false);
    }
  };

  return (
    <S.Main>
      <S.MainChange>
        <S.MainForButton>
          <S.MainButton onClick={handleFilter.bind(null, 'sort')}>Сортировать по:</S.MainButton>
          {activeFilter === 'sort' && sortOptionsVisible && (
            <S.BorderForBtn>
              <S.ChangeForBtn>
                <S.ChangeButton onClick={() => dispatch(setParams('asc'))}>Возрастанию</S.ChangeButton>
              </S.ChangeForBtn>
              <S.ChangeForBtn>
                <S.ChangeButton onClick={() => dispatch(setParams('desc'))}>Убыванию</S.ChangeButton>
              </S.ChangeForBtn>
            </S.BorderForBtn>
          )}
        </S.MainForButton>
        <S.MainForInput>
          <S.MainInput
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Введите логин пользователя"
          />
        </S.MainForInput>
        <S.MainForSubmit>
          <S.SubmitButton onClick={handleSearch}>Искать</S.SubmitButton>
        </S.MainForSubmit>
      </S.MainChange>
      <S.MainList>
        <CheckedUsers {...allUsersQuery} searched={searched} /> 
      </S.MainList>
      <S.Navigation>
      {searched && ( <S.Pagination>
          {Array.from({ length: 10}, (_, index) => (
            <S.PaginationItem
              key={index}
              className={index + 1 === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              <S.PaginationButton>{index + 1}</S.PaginationButton>
            </S.PaginationItem>
          ))}
        </S.Pagination>
        )}
      </S.Navigation>
    </S.Main>
  );
};

export default UserSearch;