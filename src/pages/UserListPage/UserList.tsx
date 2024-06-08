import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchUsers } from '../../services/api';
import CustomTable from '../../components/CustomTable/CustomTable';
import { ScrollableContainer } from './styles';
import { useUserStore } from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types/Global';

const UserListPage = () => {
  const users = useUserStore((state) => state.users);
  const addUsers = useUserStore((state) => state.addUsers);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const navigate = useNavigate();
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);

  const fetchUsersCallback = useCallback(async () => {
    try {
      const response = await fetchUsers(page);
      addUsers(response.data);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, [page]);

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
    <div>
      <h1>User List</h1>
      <ScrollableContainer id='scrollableDiv'>
        <InfiniteScroll
          dataLength={users.length}
          next={loadMoreUsers}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget='scrollableDiv'
        >
          <CustomTable columns={columns} data={users} handleGoDetails={handleGoDetails} />
        </InfiniteScroll>
      </ScrollableContainer>
    </div>
  );
};

export default UserListPage;
