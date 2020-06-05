cordova.define("cordova-plugin-jitsi-meet.JitsiPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.loadURL_V2 = function(options, isInvisible, success, error) {
    exec(success, error, "JitsiPlugin", "loadURL_V2", [options, !!isInvisible]);
};

exports.destroy = function(success, error) {
    exec(success, error, "JitsiPlugin", "destroy", []);
};
});
