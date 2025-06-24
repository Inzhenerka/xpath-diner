# Welcome to XPath Diner

It's a fun game to learn and practice XPath selectors.

To play, visit [xpath.inzhenerka.tech](http://xpath.inzhenerka.tech/)

### Changelog

**June 21, 2025**

* Fork game as Inzhenerka.Tech
* Add Russian translation
* Fix minor bugs and prettify

**May 02, 2018**

* Released a new version of the old XPath game.

### Original CSS diner game can be found here:

* [flukeout.github.io repo](https://github.com/flukeout/flukeout.github.io/issues)

### XPath 3.1 Example

XPath 3.1 introduced function chaining via the `=>` operator. A sample query
that sorts items by price and returns the first item looks like this:

```xpath
/items/item => sort-by(@price) => head()
```

This advanced syntax is powerful but typically isn't supported in browsers, so
it is mostly useful in server-side tools.
