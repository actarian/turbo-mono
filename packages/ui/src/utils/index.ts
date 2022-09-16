import type { IUser } from '@websolute/models';

export function getShortName(user: IUser): string {
  return `${user.firstName.substring(0, 1)}${user.lastName.substring(0, 1)}`.toUpperCase();
}
