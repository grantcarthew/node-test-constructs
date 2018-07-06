const objects = require('../objects')

// Adding BigInt support for JSON.stringify()
if (global.BigInt) {
  global.BigInt.prototype.toJSON = function (key) {
    return this.toString()
  }
}

const tinyFoo = JSON.stringify(objects.bySize.tiny)
const smallTardis = JSON.stringify(objects.bySize.small)
const mediumSerenity = JSON.stringify(objects.bySize.medium)
const largeDeathStar = JSON.stringify(objects.bySize.large)
const types = JSON.stringify(objects.special.types)
const deep = JSON.stringify(objects.special.deep)

const asArray = [
  tinyFoo,
  smallTardis,
  mediumSerenity,
  largeDeathStar
]

const bySize = {
  tiny: tinyFoo,
  small: smallTardis,
  medium: mediumSerenity,
  large: largeDeathStar,
}

const byName = {
  foo: tinyFoo,
  tardis: smallTardis,
  serenity: mediumSerenity,
  deathStar: largeDeathStar
}

const special = {
  types,
  deep
}

module.exports = {
  asArray,
  bySize,
  byName,
  special
}
