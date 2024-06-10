import React, { useState, useEffect, useCallback } from 'react';
import { fetchUsers } from '../../services/api';
import { useUserStore } from '../../store/userStore';
import CustomTable from '../../components/CustomTable/CustomTable';
import { useNavigate } from 'react-router';
import { IUser } from '../../types/Global';
import { ScrollableContainer, UserListContainer } from './styles';

const UserListPage: React.FC = () => {
  const users = useUserStore((state) => state.users);
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);
  const addUsers = useUserStore((state) => state.addUsers);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const fetchUsersCallback = useCallback(async () => {
    try {
      const newUsers = await fetchUsers(page);
      addUsers(newUsers);
      if (newUsers.length < 5) {
        setHasMore(false);
      }
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

  return (
    <UserListContainer>
      <h1>User List With Load More</h1>
      <ScrollableContainer id='scrollableDiv'>
        <CustomTable columns={columns} data={users} handleGoDetails={handleGoDetails} />
        <>
          {hasMore ? (
            <button onClick={loadMoreUsers}>Load More</button>
          ) : (
            <h4>No more users to load</h4>
          )}
        </>
      </ScrollableContainer>
    </UserListContainer>
  );
};

export default UserListPage;
