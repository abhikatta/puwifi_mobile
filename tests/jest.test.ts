// jest test:
import { login } from "../utils/puwifi";

const addAndMultiply = (a: number, b: number) => {
  return (a + b) * a * b;
};
test("adds 2 and 3 and multiplies its sum with 2 and 3", () => {
  const result = addAndMultiply(2, 3);
  expect(result).toBe(30);
});

test("adds 0 and 5 and multiplies its sum with 0 and 5", () => {
  const result = addAndMultiply(0, 5);
  expect(result).toBe(0);
});

test("adds -2 and -3 and multiplies its sum with -2 and -3", () => {
  const result = addAndMultiply(-2, -3);
  expect(result).toBe(-30);
});
test("ping google if good response continue else run login function", async () => {
  const result = await login("200303124278", "bf@44");
  expect(console.log(result));
});
