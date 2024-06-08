import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
  Menu,
  MenuItem,
  ActionContainer,
} from './styles';
import { DotsIcon } from '../../assets/icons/dots';
import { ClickOutside, EXCEPT_SELECTORS } from '../ClickOutside';
import { ITableProps } from './types';

const CustomTable: React.FC<ITableProps> = ({ columns, data, handleGoDetails }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index}>{column.header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <Td key={colIndex}>
                  {column.accessor === 'actions' ? (
                    <ActionContainer>
                      <DotsIcon
                        width={20}
                        height={20}
                        onClick={() => {
                          handleMenuClick(rowIndex);
                        }}
                      />
                      <ClickOutside
                        exceptSelectors={EXCEPT_SELECTORS}
                        onOutsideClick={() => {
                          setOpenMenuIndex(null);
                        }}
                      >
                        <Menu isopen={openMenuIndex === rowIndex}>
                          <MenuItem
                            data-except-selector='dot-menu'
                            onClick={() => {
                              handleGoDetails(row);
                            }}
                          >
                            Details
                          </MenuItem>
                        </Menu>
                      </ClickOutside>
                    </ActionContainer>
                  ) : (
                    row[column.accessor]
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
