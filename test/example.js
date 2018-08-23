const assert = require("assert");
const Client = require("..").Client;

describe("Client", () => {

  this.client = new Client();

  describe("#describeDataSets()", () => {
    it("should return return a JSON payload from the server", () => {
      var res = this.client.getDataSets();
      assert(res).equals({});
    });
  });
});
