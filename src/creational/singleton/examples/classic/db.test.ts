import { expect, test } from '@jest/globals';
import { MyDatabaseClassic } from './my-database-classic';

beforeEach(() => {
  MyDatabaseClassic.instance.clear();
});

test('Instances must be always the same', () => {
  const expected = MyDatabaseClassic.instance;
  const result = MyDatabaseClassic.instance;
  expect(expected).toBe(result);
});

test('Instance must add user', () => {
  const myDatabase = MyDatabaseClassic.instance;

  myDatabase.add({ name: 'Carlos', age: 27 });
  myDatabase.add({ name: 'Taynara', age: 23 });

  expect(myDatabase.show().length).toBe(2);
});

test('Instance must remove user', () => {
  const myDatabase = MyDatabaseClassic.instance;

  myDatabase.add({ name: 'Carlos', age: 27 });
  myDatabase.add({ name: 'taynara', age: 23 });
  myDatabase.remove(1);

  expect(myDatabase.show().length).toBe(1);
});
