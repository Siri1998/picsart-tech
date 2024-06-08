export interface IUser {
  id: number;
  name: string;
  email?: string;
  age?: number;
  address: {
    street?: string;
    city: string;
  };
  profilePicture?: string;
}

export interface Item {
  id: number;
  title: string;
  completed: boolean;
}
