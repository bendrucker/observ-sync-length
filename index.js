'use strict'

var assertObserv = require('assert-observ')
var times = require('map-times')
var partial = require('ap').partial

module.exports = sync

function sync (source, destination, Constructor) {
  assertObserv(source)
  assertObserv(destination)

  return source(function (source) {
    var destinationLength = destination.getLength()
    var delta = source.length - destinationLength
    if (!delta) return
    if (delta > 0) {
      return destination.push.apply(destination, times(delta, partial(Constructor || noop, undefined)))
    }
    destination.splice(destinationLength + delta, -1 * delta)
  })
}

function noop () {}
