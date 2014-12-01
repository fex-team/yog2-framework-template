'use strict';

require('yog2-kernel');

var app = yog.bootstrap({
    rootPath: __dirname
}, function(){
    console.log('plugins load completed');
});

module.exports = app;