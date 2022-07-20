// get a list of games
const performList = async (z, bundle) => {
  bundle.inputData
  const response = await z.request({
    url: "https://www.giantbomb.com/api/games/",
    params: {
      sort: "date_added:desc",
      limit: 20,
    },
  });
  return response.data.results;
};

// find a particular game by name
const performSearch = async (z, bundle) => {
  const response = await z.request({
    url: "https://www.giantbomb.com/api/games/",
    params: {
      filter: `name:${bundle.inputData.name}`,
    },
  });
  return response.data.results;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#resourceschema
  key: "game",
  noun: "Game",

  list: {
    display: {
      label: "Games",
      description: "Lists all the games.",
    },
    operation: {
      perform: performList,
      // `inputFields` defines the fields a user could provide
      // Zapier will pass them in as `bundle.inputData` later. They're optional on triggers, but required on searches and creates.
      inputFields: [],
    },
  },

  search: {
    display: {
      label: "Find Game",
      description: "Finds a game given a name.",
    },
    operation: {
      inputFields: [{ key: "name", required: true }],
      perform: performSearch,
    },
  },

  // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
  // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
  // returned records, and have obvious placeholder values that we can show to any user.
  // In this resource, the sample is reused across all methods
  sample: {
    aliases: "Mario 64",
    api_detail_url: "https://www.giantbomb.com/api/game/3030-2931/",
    date_added: "2008-04-01 01:44:12",
    date_last_updated: "2021-09-28 21:55:44",
    deck: "Super Mario 64 takes the Mario franchise into polygonal worlds, setting numerous standards for 3D game design along the way.",
    description:
      '<h2>Overview</h2><p>Super Mario 64 was a launch for the <a href="/nintendo-64/3045-43/" data-ref-id="3045-43">Nintendo 64</a>.',
    expected_release_day: null,
    expected_release_month: null,
    expected_release_quarter: null,
    expected_release_year: null,
    guid: "3030-2931",
    id: 2931,
    image: {
      icon_url:
        "https://www.giantbomb.com/a/uploads/square_avatar/1/12541/3312461-sq_n64_supermario64.jpg",
      medium_url:
        "https://www.giantbomb.com/a/uploads/scale_medium/1/12541/3312461-sq_n64_supermario64.jpg",
      screen_url:
        "https://www.giantbomb.com/a/uploads/screen_medium/1/12541/3312461-sq_n64_supermario64.jpg",
      screen_large_url:
        "https://www.giantbomb.com/a/uploads/screen_kubrick/1/12541/3312461-sq_n64_supermario64.jpg",
      small_url:
        "https://www.giantbomb.com/a/uploads/scale_small/1/12541/3312461-sq_n64_supermario64.jpg",
      super_url:
        "https://www.giantbomb.com/a/uploads/scale_large/1/12541/3312461-sq_n64_supermario64.jpg",
      thumb_url:
        "https://www.giantbomb.com/a/uploads/scale_avatar/1/12541/3312461-sq_n64_supermario64.jpg",
      tiny_url:
        "https://www.giantbomb.com/a/uploads/square_mini/1/12541/3312461-sq_n64_supermario64.jpg",
      original_url:
        "https://www.giantbomb.com/a/uploads/original/1/12541/3312461-sq_n64_supermario64.jpg",
      image_tags: "All Images,Box Art",
    },
    image_tags: [
      {
        api_detail_url:
          "https://www.giantbomb.com/api/images/3030-2931/?filter=image_tag:All%20Images",
        name: "All Images",
        total: 45,
      },
      {
        api_detail_url:
          "https://www.giantbomb.com/api/images/3030-2931/?filter=image_tag:Box%20Art",
        name: "Box Art",
        total: 8,
      },
      {
        api_detail_url:
          "https://www.giantbomb.com/api/images/3030-2931/?filter=image_tag:N64%20Screenshots",
        name: "N64 Screenshots",
        total: 40,
      },
      {
        api_detail_url:
          "https://www.giantbomb.com/api/images/3030-2931/?filter=image_tag:Screenshots",
        name: "Screenshots",
        total: 24,
      },
    ],
    name: "Super Mario 64",
    number_of_user_reviews: 0,
    original_game_rating: [
      {
        api_detail_url: "https://www.giantbomb.com/api/game_rating/3065-9/",
        id: 9,
        name: "ESRB: K-A",
      },
      {
        api_detail_url: "https://www.giantbomb.com/api/game_rating/3065-6/",
        id: 6,
        name: "ESRB: E",
      },
      {
        api_detail_url: "https://www.giantbomb.com/api/game_rating/3065-7/",
        id: 7,
        name: "PEGI: 3+",
      },
      {
        api_detail_url: "https://www.giantbomb.com/api/game_rating/3065-14/",
        id: 14,
        name: "OFLC: G",
      },
    ],
    original_release_date: "1996-06-23",
    platforms: [
      {
        api_detail_url: "https://www.giantbomb.com/api/platform/3045-43/",
        id: 43,
        name: "Nintendo 64",
        site_detail_url: "https://www.giantbomb.com/nintendo-64/3045-43/",
        abbreviation: "N64",
      },
      {
        api_detail_url: "https://www.giantbomb.com/api/platform/3045-87/",
        id: 87,
        name: "Wii Shop",
        site_detail_url: "https://www.giantbomb.com/wii-shop/3045-87/",
        abbreviation: "WSHP",
      },
      {
        api_detail_url: "https://www.giantbomb.com/api/platform/3045-139/",
        id: 139,
        name: "Wii U",
        site_detail_url: "https://www.giantbomb.com/wii-u/3045-139/",
        abbreviation: "WiiU",
      },
      {
        api_detail_url: "https://www.giantbomb.com/api/platform/3045-157/",
        id: 157,
        name: "Nintendo Switch",
        site_detail_url: "https://www.giantbomb.com/nintendo-switch/3045-157/",
        abbreviation: "NSW",
      },
    ],
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
};
