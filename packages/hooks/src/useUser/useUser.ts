import { IUser } from '@websolute/models';
import create from 'zustand';

type UserState = {
  user?: IUser;
};

type UserActions = {
  setUser: (user?: IUser) => void;
};

type UserStore = UserState & {
  actions: UserActions;
};

export const useUser = create<UserStore>((set) => ({
  actions: {
    setUser: (user?: IUser) => set((state) => ({ user })),
  },
}));
