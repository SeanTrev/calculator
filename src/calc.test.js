import { TestWatcher } from "jest";
import { sum, subtract } from "./calc";

beforeEach(() => {
    console.log("To be printed before each test: Test Beginning now!");
})
afterEach(() => {
    console.log("To be printed after each test: Test Ended!");
})

test("Adding 2 + 3 should give me 5", () => {
    expect(sum(2,3)).toBe(5);
})

test("Subtract 2 - 3 should give me -1", () => {
    expect(subtract(2,3)).toBe(-1);
})