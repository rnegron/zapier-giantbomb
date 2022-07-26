/* globals describe, expect, test, it */

const nock = require("nock")
const zapier = require("zapier-platform-core");

const VIDEO_LIST_RESPONSE = require('../fixtures/video_list_response.json')

const App = require("../../index");
const { API_BASE_URL } = require("../../constants");

// read the `.env` file into the environment, if available
zapier.tools.env.inject();

// Use this to make test calls into your app:
const appTester = zapier.createAppTester(App);

describe("triggers.new_video", () => {
  it("should run", async () => {
    const bundle = { inputData: {}, authData: { apiKey: process.env.API_KEY } };

    // mock API request
    nock(`${API_BASE_URL}`)
      .get("/videos/")
      .query({
        sort: "publish_date:desc",
        limit: 1,
        field_list: 'id,name,deck,embed_player,site_detail_url,api_detail_url,video_type,publish_date,premium,low_url,high_url,hd_url',
        api_key: process.env.API_KEY,
        format: 'json'
      })
      .reply(200, VIDEO_LIST_RESPONSE);

    const results = await appTester(
      App.triggers.new_video.operation.perform,
      bundle
    );

    expect(results).toBeDefined();

    for (let result of results) {
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("video_type");
      expect(result).toHaveProperty("publish_date");
    }
  });
});
