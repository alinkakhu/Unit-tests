const {
  chunk,
  compact,
  drop,
  dropWhile,
  take,
  includes,
  filter,
  find,
  map,
  zip,
} = require("./arrays");
describe("chunk", () => {
  test("Split array of strings with lemgth of 2", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  test("Split array of strings with lemgth of 3", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  test("Split array of numbers with no value", () => {
    expect(chunk([1, 2, 3, 4, 5])).toStrictEqual([[1], [2], [3], [4], [5]]);
  });
  test("Chunk an empty array", () => {
    expect(chunk([], 5)).toStrictEqual([]);
  });
});

describe("compact", () => {
  test("remove falsie values", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  test("compact an empty array", () => {
    expect(compact([])).toStrictEqual([]);
  });
  test('compact array ["some str", false, [], {}, null]', () => {
    expect(compact([false, null, "string", []])).toStrictEqual(["string", []]);
  });
  test('compact array of only falsie values', () => {
    expect(compact([false, null,0, "", undefined])).toStrictEqual([]);
  });
  test('compact array of only truthy values', () => {
    expect(compact([1, 5, 2, 1, 3])).toStrictEqual([1,5,2,1,3]);
  });
});

describe("drop", () => {
  test("Drops the elements in array with no parameter", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  test("Drops the elements in array with parameter of 2", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
  test("Drops the elements in array with parameter of 5", () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });
  test("Drops the elements in array with parameter of 0", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  test("Drops the elements in array with parameter of null", () => {
    expect(drop([1, 2, 3], null)).toEqual([1, 2, 3]);
  });
});

describe("take", () => {
  test("Creates a slice of array where parameter is not defined", () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test("Creates a slice of array with parameter of 2", () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test("Creates a slice of array with parameter of 5", () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
  test("Creates a slice of array with parameter of 0", () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
  test("Creates a slice of array with an emty array provided", () => {
    expect(take([], 1)).toEqual([]);
  });
  test("Creates a slice of array with parameter of null", () => {
    expect(take([1,2,3], null)).toEqual([]);
  });
});

describe("includes", () => {
  test("Checks if value of 1 is in collection.", () => {
    expect(includes([1, 2, 3], 1)).toBeTruthy();
  });
  test("Checks if value of string  is in collection.", () => {
    expect(includes("abc", "bc")).toBeTruthy();
  });

  test("Checks if value of 1 is in collection.", () => {
    expect(includes({ a: 1, b: 2 }, 1)).toBeTruthy();
  });
  test("Checks if includes works with no parameter provided", () => {
    expect(includes([1,2,3])).toBeFalsy();
  });
});

describe("filter", () => {
  test("Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];
    expect(
      filter(users, function (o) {
        return !o.active;
      })
    ).toEqual([{ user: "fred", age: 40, active: false }]);
  });
  test("filters an array with provided parameters", () => {
    const arr = [1,3,9,11,17];
    expect(
     arr.filter((a)=>a<10)
    ).toEqual([1,3,9]);
  });
});

describe("find", () => {
  test("Iterates over elements of collection, returning the first element predicate returns truthy for.", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true },
    ];
    expect(
      find(users, (o) => {
        return o.age < 40;
      })
    ).toEqual([{ user: "barney", age: 36, active: true }]);
  });
  test("Returns value if this value is in array", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true },
    ];
    expect(
     find(users,(o) => {
      return o.active === false;
    })
    ).toEqual([{ user: "fred", age: 40, active: false }]);
  });
});

describe("map", () => {
  test("Creates an array of transformed values from array [4,8 ] ", () => {
    const square = (n) => {
      return n * n;
    };

    expect(map([4, 8], square)).toEqual([16, 64]);
  });
  test("Creates an array of transformed values from array [2,8 ] ", () => {
    const square = (n) => {
      return n * n;
    };

    expect(map([2, 8], square)).toEqual([4, 64]);
  });
  test("Checks map with an empty array", () => {
    const square = (n) => {
      return n * n;
    };

    expect(map([], square)).toEqual([]);
  });
});

describe("zip", () => {
  test("Creates an array of grouped elements", () => {
    expect(zip(["a", "b"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });
  test("Checks zip with an empty array ", () => {
    expect(zip([])).toEqual([]);
  });
  test("Check if zip works only with 1 array", () => {
    expect(zip(["a", "b", "c"])).toEqual([
      ["a"],
      ["b"],
    ["c"]]);
  });
});
