cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cranberrygame.phonegap.plugin.ad.admob/www/admob.js",
        "id": "com.cranberrygame.phonegap.plugin.ad.admob.admob",
        "pluginId": "com.cranberrygame.phonegap.plugin.ad.admob",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ad-chartboost/www/chartboost.js",
        "id": "cordova-plugin-ad-chartboost.chartboost",
        "pluginId": "cordova-plugin-ad-chartboost",
        "clobbers": [
            "window.chartboost"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cranberrygame.phonegap.plugin.ad.admob": "1.0.39",
    "com.google.playservices": "19.0.0",
    "cordova-plugin-ad-chartboost": "1.0.81",
    "cordova-plugin-whitelist": "1.2.2"
}
// BOTTOM OF METADATA
});