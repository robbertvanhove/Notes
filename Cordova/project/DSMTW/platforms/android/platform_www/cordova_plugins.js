cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-media.MediaError",
        "file": "plugins/cordova-plugin-media/www/MediaError.js",
        "pluginId": "cordova-plugin-media",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "id": "cordova-plugin-media.Media",
        "file": "plugins/cordova-plugin-media/www/Media.js",
        "pluginId": "cordova-plugin-media",
        "clobbers": [
            "window.Media"
        ]
    },
    {
        "id": "cordova-plugin-flashlight.Flashlight",
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-media": "3.0.1",
    "cordova-plugin-vibration": "3.0.1",
    "cordova-plugin-flashlight": "3.2.0"
};
// BOTTOM OF METADATA
});