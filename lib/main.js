// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
var worker = pageMod.PageMod({
  include: "*.lang-8.com",
  contentScriptWhen: 'start',
  contentScriptFile: [
    self.data.url("jquery-2.1.1.min.js"),
    self.data.url("lang-8.js")],
  onAttach: function(worker) {
    worker.port.emit("changePrefs", require('sdk/simple-prefs').prefs['nguserlist']);
  }
});

function onPrefChange(prefName) {
    worker.port.emit("changePrefs", require('sdk/simple-prefs').prefs['nguserlist']);
}
require("sdk/simple-prefs").on("nguserlist", onPrefChange);

