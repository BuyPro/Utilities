# Utilities
Basic utilities used across modules

This module provides a number of reusable utilites that help with tasks such as printing 
coloured text to the console and debugging. It can be installed easily through npm:
```
npm install bp-utilities
```

Any of the utilities can be required individually, or they can be used from the bp-utilities object:

```Javascript
var util = require('bp-utilities');
var ansi = require('bp-utilities').ansi;

console.log(util.ansi.red("This is just as valid"));
console.log(ansi.red("as this is"));
```

## Current Modules

### ansi
The ANSI module is used to wrap a string in ANSI codes to change the text display in terminals.
This is useful for making things a bit easier to read when, for example, you're printing out all
of the requests to the server to the console for debugging. Each code has its own self-named method
in the ANSI object, or they can be invoked manually with the `core(property, text)` method.

Currently supported ANSI codes:
```Javascript
codes: {
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m",
  bold: "\x1B[1m"
}
```

### Sequence
The Sequence object is used to create a sequence of values from a given starting value, using
a specified method to generate the next value. It can be thought of as a very simple implementation
of a generator.

The contructor is of the form `NumericStream([initial] [, transform])` where `initial` is the first
value in the sequence (default `0`) and `transform` is a function of the form `transform(n)` where `n`
is the current value of the sequence. `transform` should return the next value in the sequence, and
defaults to `n + 1`.

By providing both a non-numeric initial value and a custom transform function, Sequence can generate
any sort of data sequence to be consumed at the pace of the calling program.

Access is provided by two methods; the first (`Sequence.get()`) returns the current value and is analogous to simply
accessing the `Sequence.current` property, and the second (`Sequence.next()`) generates and returns the next value in
the sequence.

### JSN
The JSN module provides functions for manipulating JSON objects. It currently contains functions for:

* Creating shallow copies of objects
* Merging the properties of a second json object into another
* Getting the property names of an object as an array
* Filtering the properties of an object based on an array of property names
