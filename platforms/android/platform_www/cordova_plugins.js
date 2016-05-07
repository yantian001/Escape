cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cranberrygame.phonegap.plugin.ad.admob/www/admob.js",
        "id": "com.cranberrygame.phonegap.plugin.ad.admob.admob",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ad-chartboost/www/chartboost.js",
        "id": "cordova-plugin-ad-chartboost.chartboost",
        "clobbers": [
            "window.chartboost"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.google.playservices": "19.0.0",
    "com.cranberrygame.phonegap.plugin.ad.admob": "1.0.39",
    "cordova-plugin-ad-chartboost": "1.0.81"
};
// BOTTOM OF METADATA
});