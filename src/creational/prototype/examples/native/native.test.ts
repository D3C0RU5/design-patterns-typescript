import { expect, test } from '@jest/globals';
import { Person } from '.';

test('Instances must have equal name', () => {
  const expected = new Person('Lux', 30);
  const result = expected.clone();
  expect(expected.name).toBe(result.name);
});
