const objects = require('./objects')
const arrays = require('./arrays')
const json = require('./json')

module.exports = {
  objects,
  arrays,
  json,
  rndObject,
  rndString,
  rndJson
}

function rndObject () {
  return objects.asArray[getRndIndex(objects.asArray.length)]
}

function rndString () {
  return arrays.strings[getRndIndex(arrays.strings.length)]
}

function rndJson () {
  return json.asArray[getRndIndex(json.asArray.length)]
}

function getRndIndex (length) {
  return Math.floor(Math.random() * length)
}
