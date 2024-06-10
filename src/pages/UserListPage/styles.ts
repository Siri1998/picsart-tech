import { styled } from 'styled-components';

export const ScrollableContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  background: linear-gradient(to right, #3b5998, #3b5998 20%, #8b9dc3);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const UserListContainer = styled.div`
  padding: 20px;
`;
