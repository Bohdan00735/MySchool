const mocha = require('mocha');
const assert = require('assert').strict;


const user = require('../User');   // require Task.js script

describe("addUser", function() {
    it("returns user1", function() {
        console.log(user.getUser(1));
        assert.strictEqual();
    });
});