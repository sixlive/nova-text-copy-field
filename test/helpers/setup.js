require("jsdom-global")();
// Pretty sure require("browser-env")(); still works here though
const hooks = require("require-extension-hooks");
hooks("vue").plugin("vue").push();
require("@babel/register")({
  extensions: [".vue", ".js"],
});
