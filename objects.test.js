const {omit,omitBy} = require('./objects');

test(' creates an object composed of the own and inherited enumerable property paths of object that are not omitted.', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
  const keys = ['a', 'c'];
  expect(omit(object, keys)).toEqual({ 'b':'2' });
});

test('this method creates an object composed of the own and inherited enumerable string keyed properties of oject', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
const isNumber = a => typeof a === 'number'
  expect(omitBy(object,isNumber)).toEqual({ 'b':'2' });
});