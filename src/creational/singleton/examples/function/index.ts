import { User } from '../../interfaces/user';

export const MyDatabaseFunction = (function () {
  let users: User[] = [];
  return {
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
})();
