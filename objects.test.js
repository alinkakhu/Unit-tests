const { omit, omitBy, pick } = require("./objects");
describe("omit", () => {
  test("Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.", () => {
    const object = { a: 1, b: "2", c: 3 };
    const keys = ["a", "c"];
    expect(omit(object, keys)).toEqual({ b: "2" });
  });
});
describe("omitBY", () => {
  test("Creates an object composed of the own and inherited enumerable string keyed properties of oject", () => {
    const object = { a: 1, b: "2", c: 3 };
    const isNumber = (a) => typeof a === "number";
    expect(omitBy(object, isNumber)).toEqual({ b: "2" });
  });
});
describe("pick", () => {
  test("Creates an object composed of the picked object properties.", () => {
    const object = { a: 1, b: "2", c: 3 };
    expect(pick(object, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
});
