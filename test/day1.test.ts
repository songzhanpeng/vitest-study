import { describe, test, expect } from "vitest";

describe("toBe", () => {
  test("toBe 1", () => {
    expect("1").toBe("1");
  });
});

const stockBill = {
  type: "apples",
  count: 131,
};

const stockMary = {
  type: "apples",
  count: 131,
};

test("stocks have the same properties", () => {
  expect(stockBill).toEqual(stockMary);
});

test("stocks are not the same", () => {
  expect(stockBill).not.toBe(stockMary);
});

test("expect.soft test", () => {
  expect.soft(1 + 1).toBe(2); // mark the test as fail and continue
  expect.soft(1 + 2).toBe(3); // mark the test as fail and continue
});

const input = Math.sqrt(16);

expect(input).not.to.equal(2); // chai API
expect(input).not.toBe(2); // jest API

test.fails("decimals are not equal in javascript", () => {
  expect(0.2 + 0.1).toBe(0.3); // 0.2 + 0.1 is 0.30000000000000004
});

test("decimals are rounded to 5 after the point", () => {
  // 0.2 + 0.1 is 0.30000 | "000000000004" removed
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
  // nothing from 0.30000000000000004 is removed
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50);
});

function getApplesFromStock(stock) {
  if (stock === "Bill") return 13;
}

test("mary doesn't have a stock", () => {
  expect(getApplesFromStock("Bill2")).toBeUndefined();
});

const actual = "stock";

test("stock is type of string", () => {
  expect(actual).toBeTypeOf("string");
});

class Stock {
  type: string = "";
  constructor(type) {
    this.type = type;
  }
}

test("structurally the same, but semantically different", () => {
  expect(new Stock("apples")).toEqual({ type: "apples" });
  expect(new Stock("apples")).not.toStrictEqual({ type: "apples" });
});

test("the fruit list contains orange", () => {
  expect(["orange"]).toMatchSnapshot()
});

