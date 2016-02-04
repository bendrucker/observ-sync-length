'use strict'

var test = require('tape')
var ObservArray = require('observ-array')
var sync = require('./')

test(function (t) {
  var source = ObservArray([])
  var destination = ObservArray([])

  sync(source, destination)

  source.push({}, {}, {})
  t.equal(destination.getLength(), 3, 'pushes')

  source.set([{}])
  t.equal(destination.getLength(), 1, 'splices')

  t.end()
})

test('constructor', function (t) {
  var source = ObservArray([])
  var destination = ObservArray([])

  sync(source, destination, function () {
    return {foo: 'bar'}
  })

  source.push({})
  t.deepEqual(destination.get(0), {foo: 'bar'}, 'constructs on pushes')
  source.set([])

  t.end()
})
