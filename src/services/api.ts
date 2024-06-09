import axios from 'axios';
import { IUser } from '../types/Global';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (page: number): Promise<IUser[]> => {
  const response = await axios.get<{ data: IUser[] }>(
    `${API_URL}/users?_start=${page}&_limit=5`,
  );
  return response.data as unknown as IUser[];
};

export const fetchUserById = async (id: number): Promise<IUser> => {
  const response = await axios.get<IUser>(`${API_URL}/users/${id}`);
  return response.data;
};

export const fetchItems = () => axios.get(`${API_URL}/todos`);

export const addItem = (item: { title: string; completed: boolean }) =>
  axios.post(`${API_URL}/todos`, item);

export const deleteItem = (id: number) => axios.delete(`${API_URL}/todos/${id}`);
