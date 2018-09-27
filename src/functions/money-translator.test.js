import { dollarFormat } from './money-translator';

test('100 x1', () => {
  expect(dollarFormat(100,1)).toBe("100 dollar bill")
});

test('20 x2', () => {
  expect(dollarFormat(20,2)).toBe("20 dollar bills")
});

test('0.25 x1', () => {
  expect(dollarFormat(0.25,1)).toBe("quarter")
});

test('0.25 x2', () => {
  expect(dollarFormat(0.25,2)).toBe("quarters")
});