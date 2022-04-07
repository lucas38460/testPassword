const testPassword = require('./sum');

test('testPassword <= 12 to equal true', () => {
  expect(testPassword("moquehmogherghaeuh")).toBe(true);
});