
# maybe-over

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Maps a collection of things that may be functions over a value. Like [over](https://github.com/micro-js/over), but allows for the possibility that some things in the collection are not functions.

## Installation

    $ npm install @f/maybe-over

## Usage

Example, a hover component:

```js
var maybeOver = require('@f/maybe-over')

function render ({children, state}) {
  children = maybeOver(state.hovering, children)

  return (
    <span>
      {
        maybeOver(state.hovering, children)
      }
    </span>
  )
}
```

## API

### maybeOver(value, maybeFns)

- `value` - The value you want to call the functions in `maybeFns` with
- `maybeFns` - A list of items. If the value in the list is a function, it will be executed with `value` as its first argument.

**Returns:** The result of executing all the functions in `maybeFns` on `value`, and just returning the other values in `maybeFns`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/maybe-over.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/maybe-over
[git-image]: https://img.shields.io/github/tag/micro-js/maybe-over.svg
[git-url]: https://github.com/micro-js/maybe-over
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/maybe-over.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/maybe-over
