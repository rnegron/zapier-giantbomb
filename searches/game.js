const { API_BASE_URL } = require("../constants");

// find a particular game by name
const perform = async (z, bundle) => {
  const response = await z.request({
    url: `${API_BASE_URL}/games/`,
    params: {
      filter: `name:${bundle.inputData.name}`,
      sort: "date_added:desc",
      field_list:
        "id,guid,name,deck,date_added,date_last_updated,original_release_date,site_detail_url,api_detail_url",
      limit: 5,
    },
  });
  return response.data.results;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#searchschema
  key: "game",
  noun: "Game",

  display: {
    label: "Find Game",
    description: "Finds a game based on name.",
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. Searches need at least one `inputField`.
    inputFields: [
      {
        key: "name",
        required: true,
        helpText: "Find the Game with this name.",
      },
    ],

    sample: {
      api_detail_url: "https://www.giantbomb.com/api/game/3030-72586/",
      date_added: "2019-03-20 09:25:36",
      date_last_updated: "2019-07-18 14:41:25",
      deck: "A spin-off of the rhythm roguelike game Crypt of the Necrodancer, featuring a crossover with Nintendo's Legend of Zelda game series.",
      guid: "3030-72586",
      id: 72586,
      name: "Cadence of Hyrule – Crypt of the NecroDancer Featuring The Legend of Zelda",
      original_release_date: "2019-06-13",
      site_detail_url:
        "https://www.giantbomb.com/cadence-of-hyrule-crypt-of-the-necrodancer-featuri/3030-72586/",
    },

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      { key: "id", label: "ID", type: "integer" },
      { key: "guid", label: "GUID", type: "string" },
      { key: "name", label: "Name", type: "string" },
      { key: "deck", label: "Description", type: "string" },
      { key: "date_added", label: "Date Added", type: "string" },
      { key: "date_last_updated", label: "Date Updated", type: "string" },
      { key: "original_release_date", label: "Release Date", type: "string" },
      { key: "site_detail_url", label: "Site Detail URL", type: "string" },
      { key: "api_detail_url", label: "API Detail URL", type: "string" },
    ],
  },
};
