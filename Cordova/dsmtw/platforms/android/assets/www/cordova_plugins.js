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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-media": "3.0.1",
    "cordova-plugin-vibration": "3.0.1"
};
// BOTTOM OF METADATA
});