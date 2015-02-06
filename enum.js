var enumeration = function(/* arguments */) {
    var obj = {};
    var args = Array.prototype.slice.call(arguments, 0);
    var i, len, key;

    for (i = 0, len = args.length; i < len; i++) {
        key = args[i];
        obj[key] = key;
    }

    return obj;
};

module.exports = enumeration;
