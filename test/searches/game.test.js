/* globals describe, expect, test, it */

const zapier = require("zapier-platform-core");

// Use this to make test calls into your app:
const App = require("../../index");
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("searches.game", () => {
  it("should run", async () => {
    const bundle = {
      inputData: { name: "Zelda" },
      authData: { apiKey: process.env.API_KEY },
    };

    const results = await appTester(
      App.searches.game.operation.perform,
      bundle
    );
    expect(results).toBeDefined();

    for (let result of results) {
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("date_last_updated");
    }
  });
});