const defaultMiddleware = require("./default");

module.exports = function registerMiddlerware(server) {
  defaultMiddleware(server);
};
