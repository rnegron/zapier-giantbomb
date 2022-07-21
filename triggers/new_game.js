const { API_BASE_URL } = require("../constants");

const perform = async (z, bundle) => {
  const response = await z.request({
    url: `${API_BASE_URL}/games/`,
    params: {
      sort: "date_added:desc",
      limit: 20,
      field_list: 'id,guid,name,date_added,date_last_updated,original_release_date,site_detail_url,api_detail_url',
    },
  });
  return response.data.results;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#triggerschema
  key: "game",
  noun: "Game",

  display: {
    label: "New Game",
    description: "Triggers when a new game is created.",
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    inputFields: [],

    sample: {
      api_detail_url: "https://www.giantbomb.com/api/game/3030-2931/",
      date_added: "2008-04-01 01:44:12",
      date_last_updated: "2021-09-28 21:55:44",
      guid: "3030-2931",
      id: 2931,
      name: "Super Mario 64",
      original_release_date: "1996-06-23",
      site_detail_url: "https://www.giantbomb.com/super-mario-64/3030-2931/",
    },

    outputFields: [
      { key: "id", label: "ID", type: "integer" },
      { key: "guid", label: "GUID", type: "string" },
      { key: "name", label: "Name", type: "string" },
      { key: "date_added", label: "Date Added", type: "string" },
      { key: "date_last_updated", label: "Date Updated", type: "string" },
      { key: "original_release_date", label: "Release Date", type: "string" },
      { key: "site_detail_url", label: "Site Detail URL", type: "string" },
      { key: "api_detail_url", label: "API Detail URL", type: "string" },
    ],
  },
};
