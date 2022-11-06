import { expect, test } from '@jest/globals';
import { Singleton } from '.';

test('Intancias do Singleton deve ser iguais', () => {
  const expected = Singleton.getInstance();
  const result = Singleton.getInstance();
  expect(expected).toBe(result);
});
