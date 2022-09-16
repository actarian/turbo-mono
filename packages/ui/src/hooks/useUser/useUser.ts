import { IUser } from '@websolute/models';
import create from 'zustand';

type IUserStore = {
  user: IUser | null | undefined;
  update: (user: IUser | null) => void
}

export const useUser = create<IUserStore>((set) => ({
  user: undefined,
  update: (user: IUser | null) => set((state) => ({ user })),
}));
