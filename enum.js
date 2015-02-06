var enumeration = function(/* arguments */) {
    var obj = {};
    var args = Array.prototype.slice.call(arguments, 0);
    var len = args.length;
    var i, key;

    for (i = 0; i < len; i++) {
        key = args[i];
        obj[key] = key;
    }

    return obj;
};

module.exports = enumeration;
