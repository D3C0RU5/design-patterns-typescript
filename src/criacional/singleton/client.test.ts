import { expect, test } from '@jest/globals';
import { Singleton } from './singleton';

test('Intancias do Singleton deve ser iguais', () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();
  expect(s1).toBe(s2);
});
