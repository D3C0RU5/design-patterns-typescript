import { expect, test } from '@jest/globals';
import { ComponentWithBackReference, Prototype } from '.';

test('Instances must have equal name', () => {
  const expected = new Prototype();
  expected.primitive = 245;
  expected.component = new Date();
  expected.circularReference = new ComponentWithBackReference(expected);

  const result = expected.clone();

  expect(expected.primitive).toBe(result.primitive);
  expect(expected.component).not.toBe(result.component);
  expect(expected.circularReference).not.toBe(result.circularReference);
  expect(expected.circularReference.prototype).not.toBe(
    result.circularReference.prototype,
  );
});
