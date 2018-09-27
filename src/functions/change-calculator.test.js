import changeCalculator from './change-calculator';

test('200 change to 100bill x2', () => {
  expect(changeCalculator(200)).toEqual([{value:100,quantity:2}])
});

test('1 change to 1$ x1', () => {
  expect(changeCalculator(1)).toEqual([{value:1,quantity:1}])
});

test('.99 change to 0.25$ x3, 0.1$ x2, 0.01$ x4', () => {
  expect(changeCalculator(0.99)).toEqual([{value:0.25,quantity:3},{value:0.1,quantity:2},{value:0.01,quantity:4}])
});

test('.995 change to 0.25$ x3, 0.1$ x2, 0.01$ x4', () => {
  expect(changeCalculator(0.995)).toEqual([{value:0.25,quantity:3},{value:0.1,quantity:2},{value:0.01,quantity:4}])
});

test('0 change to none', () => {
  expect(changeCalculator(0)).toEqual([])
});
