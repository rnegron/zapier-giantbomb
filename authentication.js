"use strict";

const { API_BASE_URL } = require("./constants");

const test = (z, bundle) =>
  z.request({ url: `${API_BASE_URL}/game/3030-19929` });

const handleBadResponses = (response, z, bundle) => {
  if (response.status === 401) {
    throw new z.errors.Error(
      // This message is surfaced to the user
      "The API Key you supplied is incorrect",
      "AuthenticationError",
      response.status
    );
  }

  return response;
};

const includeApiKey = (request, z, bundle) => {
  if (bundle.authData.apiKey) {
    // Use these lines to include the API key in the querystring
    request.params = request.params || {};
    request.params.api_key = bundle.authData.apiKey;
  }

  return request;
};

const specifyFormat = (request, z, bundle) => {
  request.params = request.params || {};
  request.params.format = "json";

  return request;
};

module.exports = {
  config: {
    type: "custom",

    fields: [
      {
        key: "apiKey",
        label: "Giant Bomb API Key",
        required: true,
        helpText: "Find your API key here: https://www.giantbomb.com/api/",
      },
    ],

    test,

    connectionLabel: (z, bundle) => bundle.authData.apiKey,
  },
  befores: [includeApiKey, specifyFormat],
  afters: [handleBadResponses],
};
