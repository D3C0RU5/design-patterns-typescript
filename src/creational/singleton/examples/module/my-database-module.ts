import { User } from '../../interfaces/user';

let users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): void {
    users.push(user);
  },
  remove(index: number): void {
    users.splice(index, 1);
  },
  show(): User[] {
    return users;
  },
  clear(): void {
    users = [];
  },
};
