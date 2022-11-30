const omit = (obj, props) => {
  obj = { ...obj };
  props.forEach((prop) => delete obj[prop]);
  return obj;
};

const omitBy = (obj, check) => {
  obj = { ...obj };
  Object.entries(obj).forEach(
    ([key, value]) => check(value) && delete obj[key]
  );
  return obj;
};

const pick = (object, values) => {
  let result = {};

  for (let i = 0; i < values.length; i += 1) {
    const keyV = values[i];
    result = { ...result, [keyV]: object[keyV] };
  }
  return result;
};

module.exports = { omit, omitBy, pick };
