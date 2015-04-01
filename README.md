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

##Current Modules

###ANSI
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
