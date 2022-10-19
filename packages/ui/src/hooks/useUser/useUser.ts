import { IUser } from '@websolute/models';
import create from 'zustand';

type IUserStore = {
  user?: IUser;
  setUser: (user?: IUser) => void;
}

export const useUser = create<IUserStore>((set) => ({
  setUser: (user?: IUser) => set((state) => ({ user })),
}));
