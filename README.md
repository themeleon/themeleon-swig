Themeleon Swig
==============

> [Swig] mixin for [Themeleon].

[Swig]: https://paularmstrong.github.io/swig/
[Themeleon]: https://github.com/themeleon/themeleon

Installation
------------

In your `package.json`:

```json
{
  "dependencies": {
    "themeleon": "1.*",
    "themeleon-swig": "1.*"
  }
}
```

Usage
-----

```js
var themeleon = require('themeleon')();

// Use the Swig mixin
themeleon.use('swig');

// Or inject your own instance
themeleon.use('swig', require('swig'));

module.exports = themeleon(__dirname, function (t) {
  // Compile a Swig view as `index.html` in destination directory
  t.swig('views/index.html.swig', 'index.html');
});
```

### Using Twig extras

```js
// Create a local Swig instance instead of altering the globale one
var swig = new (require('swig').Swig)();

var extras = require('swig-extras'); // Moar filters
var themeleon = require('themeleon')(); // No change here

// Use some additional filters
extras.useFilter(swig, 'nl2br');
extras.useFilter(swig, 'split');
extras.useFilter(swig, 'trim');
extras.useFilter(swig, 'groupby');

// Even add your own filters
swig.setFilter('push', function (arr, val) {
  return arr.push(val);
});

// Tell Themeleon to use your own Swig instance
themeleon.use('swig', swig);
```
