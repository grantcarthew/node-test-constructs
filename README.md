# test-constructs

JavaScript objects and arrays for testing purposes.

## Installing

```sh

npm install --save-dev test-constructs

```

## Quick Start

```js

const tc = require('test-constructs')

console.log(tc.rndObject()) // <= A random object
console.log(tc.rndString()) // <= A random string
console.log(tc.rndJson()) // <= A random JSON string
console.log(tc.arrays.strings) // <= An array of strings
console.log(tc.arrays.types) // <= An array of JavaScript types
console.log(tc.objects.asArray) // <= An array of objects
console.log(tc.objects.byName.foo) // <= The foo object
console.log(tc.objects.bySize.small) // <= A small object
console.log(tc.objects.special.circular) // <= A special object
console.log(tc.json.asArray) // <= An array of JSON strings
console.log(tc.json.byName.foo) // <= The foo object as a JSON string
console.log(tc.json.bySize.small) // <= A small JSON string
console.log(tc.objects.special.deep) // <= A special object as a JSON string

```

## Rational

After writing test data for [console-probe](https://github.com/grantcarthew/node-console-probe) and [perj](https://github.com/grantcarthew/node-perj) I decided to modularise it.


## API

The best option to understand what you get from `test-constructs` is to look through the [source code](/src).

### `rndObject()`

Returns randomly one of the objects available under `objects.asArray`.

_Does not include the special objects._

### `rndString()`

Returns randomly one of the strings available under `arrays.strings`.


### `rndJson()`

Returns randomly one of the JSON strings available under `json.asArray`.

### `arrays`

Returns an object with the following properties:

* `strings` - Returns an array of strings.
* `types` - Returns an array containing a large number of different JavaScript types.

### `objects`

Returns an object with the following properties:

* `asArray` - Returns an array of objects not including the special objects.
* `bySize` - Returns an object by a size name such as `objects.bySize.large`.
* `byName` - Returns an object by a name such as `objects.byName.tardis`.
* `special` - Returns special objects such as `objects.special.circular`.

### `json`

Returns an object with the following properties:

* `asArray` - Returns an array of stringified object strings.
* `bySize` - Returns a JSON string by a size name such as `json.bySize.small`.
* `byName` - Returns a JSON string by the object name such as `json.byName.deathStar`.
* `special` - Returns a JSON string by the special object name such as `json.special.deep`.

_Note: The circular object is not available under `special` because `JSON.stringify` will not convert circular objects._


## About the Owner

I, Grant Carthew, am a technologist, trainer, and Dad from Queensland, Australia. I work on code in a number of personal projects and when the need arises I build my own packages.

This project exists because I needed testing data.

Everything I do in open source is done in my own time and as a contribution to the open source community.

If you are using my projects and would like to thank me or support me, please click the Patreon link below.

[![Patreon Donation][patreon-image]][patreon-url]

See my [other projects on NPM](https://www.npmjs.com/~grantcarthew).

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Change Log

- v1.0.0 [2018-07-06]: Initial release. 

[patreon-image]: https://img.shields.io/badge/patreon-donate-yellow.svg
[patreon-url]: https://www.patreon.com/grantcarthew
