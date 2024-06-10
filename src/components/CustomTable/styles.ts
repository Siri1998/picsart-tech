import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 768px;
  }
  @media (max-width: 600px) {
    width: 600px;
  }
`;

const Thead = styled.thead`
  background-color: #55608f;
  th {
    position: sticky;
    top: 0;
    background-color: #55608f;
    z-index: 1;
  }
`;

const Tbody = styled.tbody``;

const Th = styled.th`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: left;
`;

const Td = styled.td`
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  position: relative;
`;

const Tr = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: relative;
`;

const Menu = styled.div<{ isopen: boolean }>`
  display: ${({ isopen }) => (isopen ? 'block' : 'none')};
  position: absolute;
  right: 5px;
  background-color: #55608f;
  border: 1px solid #ccc;
  z-index: 2;
  min-width: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const ActionContainer = styled.div`
  text-align: center;
`;

export {
  TableContainer,
  ActionContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
  MenuButton,
  Menu,
  MenuItem,
};
