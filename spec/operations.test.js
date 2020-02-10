const { add, subtract, multiply, divide } = require("../lib/operations");

test("add 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("add 10 + 5 to equal 15", () => {
  expect(add(10, 5)).toBe(15);
});

test("subtract 50 - 10 to equal 40", () => {
  expect(subtract(50, 10)).toBe(40);
});

test("multiply 20 by 2 to equal 40", () => {
  expect(multiply(20, 2)).toBe(40);
});

test("multiply 50 by 100 to equal 5000", () => {
  expect(multiply(50, 100)).toBe(5000);
});

test("divide 100 by 10 to equal 10", () => {
  expect(divide(100, 10)).toBe(10);
});
