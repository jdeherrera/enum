'use strict';

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = toEnum('blue', 'red');
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * @return {object}
 */
var enum = function(/* arguments */) {
    var obj = {};
    var args = Array.prototype.slice.call(arguments, 1);
    var len = args.length;
    var i, key;

    for (i = 0; i < len; i++) {
        key = args[i];
        obj[key] = key;
    }

    return obj;
};

module.exports = toEnum;
