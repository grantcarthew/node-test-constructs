const tardis = require('./object-small-tardis')

const circular = Object.assign({}, tardis)
circular.tardis = circular

module.exports = circular
