import { IUser } from '../../types/Global';

export interface IColumn {
  header: string;
  accessor: string;
}

export interface ITableProps {
  columns: IColumn[];
  data: any[];
  handleGoDetails: (user: IUser) => void;
}
