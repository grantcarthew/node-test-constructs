const objectTinyFoo = require('./object-tiny-foo')
const objectTypes = require('./object-types')
const objectSmallTardis = require('./object-small-tardis')
const objectMediumSerenity = require('./object-medium-serenity')
const objectLargeDeathStar = require('./object-large-death-star')
const objectCircular = require('./object-circular')
const objectDeep = require('./object-deep')

const asArray = [
  objectTinyFoo,
  objectSmallTardis,
  objectMediumSerenity,
  objectLargeDeathStar
]

const bySize = {
  tiny: objectTinyFoo,
  small: objectSmallTardis,
  medium: objectMediumSerenity,
  large: objectLargeDeathStar
}

const byName = {
  foo: objectTinyFoo,
  tardis: objectSmallTardis,
  serenity: objectMediumSerenity,
  deathStar: objectLargeDeathStar
}

const special = {
  types: objectTypes,
  circular: objectCircular,
  deep: objectDeep
}

module.exports = {
  asArray,
  bySize,
  byName,
  special
}