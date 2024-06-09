import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { UserDetailsContainer, UserImage, UserName, UserTitle } from './styles';
import avatarIcon from '../../assets/png/avatar.png';

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
    <UserDetailsContainer>
      <UserImage
        src={user?.profilePicture ? user?.profilePicture : avatarIcon}
        alt={`${user.name}'s profile`}
      />
      <UserName>{user.name}</UserName>
      <UserTitle>{user?.email}</UserTitle>
      <UserTitle>{user?.age}</UserTitle>
      <UserTitle>{user?.address?.city}</UserTitle>
    </UserDetailsContainer>
  );
};

export default UserDetails;
