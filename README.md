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
