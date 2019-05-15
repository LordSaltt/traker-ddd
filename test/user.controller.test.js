var chai = require("chai");
var expect = chai.expect;
var service = require("../dal/repositories/user.repository");

describe("userRepository", function() {
  it("get from users", function() {
    var userService = new service();
    expect(userService.getUsers).to.empty();
  });
});
