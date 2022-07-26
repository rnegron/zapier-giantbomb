/* globals describe, expect, test, it */

const nock = require("nock");
const zapier = require("zapier-platform-core");

const App = require("../index");
const { API_BASE_URL } = require("../constants");

// read the `.env` file into the environment, if available
zapier.tools.env.inject();

// Use this to make test calls into your app:
const appTester = zapier.createAppTester(App);

describe("custom auth", () => {
  it("passes authentication and returns json", async () => {
    const bundle = {
      authData: {
        apiKey: process.env.API_KEY,
      },
    };

    // mock API request
    nock(`${API_BASE_URL}`)
      .get("/game/3030-19929")
      .query({
        api_key: process.env.API_KEY,
        format: "json",
      })
      .reply(200, {
        error: "OK",
        limit: 1,
        offset: 0,
        number_of_page_results: 1,
        number_of_total_results: 1,
        status_code: 1,
        results: { test: "test" },
        version: "1.0",
      });

    const response = await appTester(App.authentication.test, bundle);
    expect(response.status).toEqual(200);
    expect(response.data).toHaveProperty("error", "OK");
  });

  it("fails on bad auth", async () => {
    const bundle = {
      authData: {
        apiKey: "bad",
      },
    };

    // mock API request
    nock(`${API_BASE_URL}`)
      .get("/game/3030-19929")
      .query({
        api_key: "bad",
        format: "json",
      })
      .reply(401, {
        error: "Invalid API Key",
        limit: 0,
        offset: 0,
        number_of_page_results: 0,
        number_of_total_results: 0,
        status_code: 100,
        results: [],
      });

    try {
      await appTester(App.authentication.test, bundle);
    } catch (error) {
      expect(error.message).toContain("The API Key you supplied is incorrect");
      return;
    }
    throw new Error("appTester should have thrown");
  });
});
