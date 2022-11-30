
const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

const compact = (arr) => {
  return arr.filter((x) => !!x);
};

const drop = (arr, number = 1) => arr.slice(number);

function dropWhile(array, predicate) {
  while (predicate(array[0], 0, array)) {
    array.shift();
  }
  return array;
}

const take = (arr, n = 1) => [...arr].splice(0, n);

const includes = (coll, num) => {
  if (Array.isArray(coll) || typeof coll === "string") {
    return coll.includes(num);
  } else {
    return Object.values(coll).includes(num);
  }
};

function filter(arr, predicate) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (predicate(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const find = (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    const value = array[index];
    if (callback(value, index, array)) {
      return [array[index]];
    }
  }
};

const map = (array, callback) => {
  const newArr = [];
  for (let index = 0; index < array.length; index += 1) {
    const value = callback(array[index], index, array);
    newArr.push(value);
  }
  return newArr;
};

const zip = (arr, ...args) =>
  arr.map((value, idx) => [value, ...args.map((arr) => arr[idx])]);

module.exports = {
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
};
