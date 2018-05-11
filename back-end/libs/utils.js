module.exports = function (options, name, defaultValue) {
     return options && options[name]!==undefined ? options[name] : defaultValue;
}
