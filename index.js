const {
  config: authentication,
  befores = [],
  afters = [],
} = require("./authentication");

const getNewVideo = require("./triggers/new_video");
const getNewGame = require("./triggers/new_game");

const findGame = require("./searches/game");


module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [getNewVideo.key]: getNewVideo,
    [getNewGame.key]: getNewGame
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [findGame.key]: findGame,
  },

  // If you want your creates to show up, you better include it here!
  creates: {},

  resources: {},
};
