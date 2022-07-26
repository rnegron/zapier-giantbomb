/* globals describe, expect, test, it */

const nock = require("nock")
const zapier = require("zapier-platform-core");

const GAME_LIST_RESPONSE = require('../fixtures/game_list_response.json')

const App = require("../../index");
const { API_BASE_URL } = require("../../constants");

// read the `.env` file into the environment, if available
zapier.tools.env.inject();

// Use this to make test calls into your app:
const appTester = zapier.createAppTester(App);

describe("triggers.game", () => {
  it("should run", async () => {
    const bundle = { inputData: {}, authData: { apiKey: process.env.API_KEY } };

    // mock API request
    nock(`${API_BASE_URL}`)
      .get("/games/")
      .query({
        sort: "date_added:desc",
        limit: 5,
        field_list: 'id,guid,name,date_added,date_last_updated,original_release_date,site_detail_url,api_detail_url',
        api_key: process.env.API_KEY,
        format: 'json'
      })
      .reply(200, GAME_LIST_RESPONSE);

    const results = await appTester(
      App.triggers.game.operation.perform,
      bundle
    );

    expect(results).toBeDefined();

    for (let result of results) {
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("date_added");
    }
  });
});
