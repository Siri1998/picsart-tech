import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchUsers } from '../../services/api';
import { useUserStore } from '../../store/userStore';
import CustomTable from '../../components/CustomTable/CustomTable';
import { useNavigate } from 'react-router';
import { IUser } from '../../types/Global';
import { ScrollableContainer } from './styles';
import { debounce } from 'lodash';

const UserListPage: React.FC = () => {
  const users = useUserStore((state) => state.users);
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);
  const addUsers = useUserStore((state) => state.addUsers);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const navigate = useNavigate();

  const fetchUsersCallback = useCallback(async () => {
    try {
      const newUsers = await fetchUsers(page);
      addUsers(newUsers);
      setHasMore(newUsers.length > 0);
      debouncedOnChange();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, [page, addUsers]);

  useEffect(() => {
    fetchUsersCallback();
  }, [fetchUsersCallback]);

  const loadMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Age', accessor: 'age' },
    { header: 'Actions', accessor: 'actions' },
  ];

  const handleGoDetails = (user: IUser) => {
    setSelectedUser(user);
    navigate(`/user/${user.id}`);
  };

  const toggleLoading = () => {
    setHasMore(false);
  };

  const debouncedOnChange = debounce(toggleLoading, 2500);

  return (
    <>
      <h1>User List With Load More</h1>
      <ScrollableContainer id='scrollableDiv'>
        <InfiniteScroll
          dataLength={users.length}
          next={loadMoreUsers}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget='scrollableDiv'
          endMessage={<h4>there is nothing</h4>}
        >
          <CustomTable columns={columns} data={users} handleGoDetails={handleGoDetails} />
        </InfiniteScroll>
      </ScrollableContainer>
    </>
  );
};

export default UserListPage;
