import React, { useState, useEffect } from 'react';
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
import { orderBy } from 'lodash';

const CustomTable: React.FC<ITableProps> = ({ columns, data, handleGoDetails }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleMenuClick = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleSort = (key: string) => {
    if (key === 'actions') return;

    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedArray = orderBy(data, [key], [direction]);

    setSortedData(sortedArray);
    setSortConfig({ key, direction });
  };

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index} onClick={() => handleSort(column.accessor)}>
                {column.header}
                {sortConfig?.key === column.accessor
                  ? sortConfig.direction === 'asc'
                    ? ' 🔼'
                    : ' 🔽'
                  : ''}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((row, rowIndex) => (
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
