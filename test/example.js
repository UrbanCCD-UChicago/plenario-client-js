const assert = require("assert");

describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal([1, 2].indexOf(3), -1);
    });
  });
});