/*jslint node:true */
'use strict';
var prop,
    encode = {
        core: function (option, text) {
            return this.codes[option] + text + "\x1B[0m";
        },
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
    },
    NumericStream = function (initial, transform) {
        var t = transform || function () {
            this.current += 1;
        };
        this.current = initial || 0;
        this.transform = t.bind(this);
        this.next = function () {
            var ret = this.current;
            this.transform();
            return ret;
        };
        return this;
    };

for (prop in encode.codes) {
    if (encode.codes.hasOwnProperty(prop)) {
        encode[prop] = encode.core.bind(encode, prop);
    }
}

module.exports = {
    ansi: encode,
    NumericStream: NumericStream
};
