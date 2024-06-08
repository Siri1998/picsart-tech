import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const user = useUserStore((state) => state.selectedUser);

  const fetchUser = useUserStore((state) => state.fetchUser);

  if (id && (!user || user.id !== parseInt(id, 10))) {
    fetchUser(parseInt(id, 10));
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div> User doesn't exist</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user?.email}</p>
      <p>Age: {user?.age}</p>
      {/* <p>Address: {user.address}</p> */}
      <img src={user.profilePicture} alt={`${user.name}'s profile`} />
    </div>
  );
};

export default UserDetails;
