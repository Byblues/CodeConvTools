var fs = require('fs');
var path = require('path');

var libs;
var lib;

/* -------- */

var log = function(v){
    console.log(v);
}

function loged(str, res, m){
    $('ul.log').append('<li id="l'+logid+'">'+logid+' : '+ lib + ' : ' + str + ' -> '+ m +' -> ' + res +'</li>');
    logid++;
}

var ifunc = function(obj){
    return Object.keys(obj);
}

var load_libs = function () {
    var mlibs = {};
    fs.readdirSync(__dirname + '/libs').forEach(function (filename) {
        if (!/\.js$/.test(filename)) {
            return;
        }
        var name = path.basename(filename, '.js');
        mlibs[''+name] = require(__dirname + '/libs/'+filename);
    });
    return mlibs;
}

/* -------- */




