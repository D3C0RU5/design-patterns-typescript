import { expect, test } from '@jest/globals';
import { MyDatabaseFunction } from '.';

beforeEach(() => {
  MyDatabaseFunction.clear();
});

test('Instance must add user', () => {
  const myDatabase = MyDatabaseFunction;

  myDatabase.add({ name: 'Carlos', age: 27 });
  myDatabase.add({ name: 'Taynara', age: 23 });

  expect(myDatabase.show().length).toBe(2);
});

test('Instance must remove user', () => {
  const myDatabase = MyDatabaseFunction;

  myDatabase.add({ name: 'Carlos', age: 27 });
  myDatabase.add({ name: 'taynara', age: 23 });
  myDatabase.remove(1);

  expect(myDatabase.show().length).toBe(1);
});
