import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  nav {
    display: flex;
    gap: 20px;

    a {
      color: #ecf0f1;
      text-decoration: none;
    }
  }
`;
