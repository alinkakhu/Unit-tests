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
// CHUNK
test("Split array of strings", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("Split array of strings", () => {
  expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
});

test("chunk without value", () => {
  expect(chunk([1, 2, 3, 4, 5])).toStrictEqual([[1], [2], [3], [4], [5]]);
});
test("chunk an empty array", () => {
  expect(chunk([], 5)).toStrictEqual([]);
});
//   COMPACT

test("remove falsie values", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

test("compact empty array", () => {
  expect(compact([])).toStrictEqual([]);
});
test('compact array ["some str", false, [], {}, null]', () => {
  expect(compact([false, null, "string", []])).toStrictEqual(["string", []]);
});

//   DROP
test("Creates a slice of array with n elements dropped from the beginning.", () => {
  expect(drop([1, 2, 3])).toEqual([2, 3]);
});
test("Creates a slice of array with n elements dropped from the beginning.", () => {
  expect(drop([1, 2, 3], 2)).toEqual([3]);
});
test("Creates a slice of array with n elements dropped from the beginning.", () => {
  expect(drop([1, 2, 3], 5)).toEqual([]);
});
test("Creates a slice of array with n elements dropped from the beginning.", () => {
  expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
});


// TAKE

test("Creates a slice of array with n elements taken from the beginning.", () => {
  expect(take([1, 2, 3])).toEqual([1]);
});

test("Creates a slice of array with n elements taken from the beginning.", () => {
  expect(take([1, 2, 3], 2)).toEqual([1, 2]);
});

test("Creates a slice of array with n elements taken from the beginning.", () => {
  expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
});
test("Creates a slice of array with n elements taken from the beginning.", () => {
  expect(take([1, 2, 3], 0)).toEqual([]);
});

//   INCLUDES

test("Checks if value is in collection.", () => {
  expect(includes([1, 2, 3], 1)).toBeTruthy();
});
test("Checks if value is in collection.", () => {
  expect(includes("abc", "bc")).toBeTruthy();
});

test("Checks if value is in collection.", () => {
  expect(includes({ a: 1, b: 2 }, 1)).toBeTruthy();
});

//   FILTER
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
// FIND

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

// MAP

test("Creates an array of values by running each element in collection thru iteratee. ", () => {
  const square = (n) => {
    return n * n;
  };

  expect(map([4, 8], square)).toEqual([16, 64]);
});
test("Creates an array of values by running each element in collection thru iteratee. ", () => {
  const square = (n) => {
    return n * n;
  };

  expect(map([2, 8], square)).toEqual([4, 64]);
});
// ZIP
test("Creates an array of grouped elements", () => {
  expect(zip(["a", "b"], [1, 2], [true, false])).toEqual([
    ["a", 1, true],
    ["b", 2, false],
  ]);
});
