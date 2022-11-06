import { expect, test } from '@jest/globals';
import { Singleton } from '.';

test('Instances must be always the same', () => {
  const expected = Singleton.instance;
  const result = Singleton.instance;
  expect(expected).toBe(result);
});
