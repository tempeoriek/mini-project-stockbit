module.exports = function (global) {
    global.flatry = require('flatry');
    global.express = require('express');
    global.moment = require('moment');
    global.momenttz = require('moment-timezone');
    global.axios = require('axios');
    global.async = require('async');
    global.response = require('./response');
}
