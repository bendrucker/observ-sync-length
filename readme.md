# observ-sync-length [![Build Status](https://travis-ci.org/bendrucker/observ-sync-length.svg?branch=master)](https://travis-ci.org/bendrucker/observ-sync-length) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-sync-length.svg)](https://greenkeeper.io/)

> Sync the length of two observ-array arrays


## Install

```
$ npm install --save observ-sync-length
```


## Usage

```js
var syncLength = require('observ-sync-length')
var ObservArray = require('observ-array')

var source = ObservArray([])
var destination = ObservArray([])

var unlisten = syncLength(source, destination)
source.push({})
destination().length
//=> 1
```

## API

#### `syncLength(source, destination, Constructor)` -> `function`

Return an unlisten function.

##### source / destination

*Required*  
Type: `function`

[observ-array](https://github.com/raynos/observ-array) instances

##### Constructor

Type: `function`  
Default: `noop`

A function to call to construct new items added to the `destination` when the length of the source grows.


## License

MIT © [Ben Drucker](http://bendrucker.me)
