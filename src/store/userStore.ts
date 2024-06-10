import create from 'zustand';
import { IUser } from '../types/Global';
import { fetchUserById } from '../services/api';
import { uniqBy } from 'lodash';

interface UserState {
  users: IUser[];
  selectedUser: IUser | null;
  addUsers: (newUsers: IUser[]) => void;
  setSelectedUser: (user: IUser) => void;
  fetchUser: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  addUsers: (newUsers: IUser[]) =>
    set((state) => ({ users: uniqBy([...state.users, ...newUsers], 'id') })),
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
  fetchUser: async (id: number) => {
    const user = await fetchUserById(id);
    set({ selectedUser: user });
  },
}));
