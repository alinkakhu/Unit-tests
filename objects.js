
const omit = (obj, props) => {
    obj = { ...obj }
    props.forEach(prop => delete obj[prop])
    return obj

}



const omitBy = (obj, check) => {
    obj = { ...obj }
    Object.entries(obj).forEach(([key, value]) => check(value) && delete obj[key])
    return obj
  }


module.exports = {omit,
omitBy};