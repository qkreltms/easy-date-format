"use strict";
exports.__esModule = true;
var easyDateFormat = function (date) {
    var year = date.getFullYear();
    var month = leftPad(date.getMonth() + 1);
    var day = leftPad(date.getDate());
    var h = leftPad(date.getUTCHours());
    var m = leftPad(date.getUTCMinutes());
    var s = leftPad(date.getUTCSeconds());
    return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
};
var leftPad = function (num) {
    var str = num.toString();
    return str.length >= 2 ? str : "0" + str;
};
exports["default"] = easyDateFormat;
