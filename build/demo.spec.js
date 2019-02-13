"use strict";
exports.__esModule = true;
var frisby = require("frisby");
describe('Test Suite 1', function () {
    it('should be a teapot get', function (done) {
        frisby.get('https://reqres.in/api/users?page=2')
            .expect('status', 200)
            .done(done);
    });
});
