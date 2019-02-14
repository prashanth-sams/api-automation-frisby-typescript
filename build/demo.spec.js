"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var frisby = __importStar(require("frisby"));
describe('Test Suite 1', function () {
    it('should be a teapot get', function (done) {
        frisby.get('https://reqres.in/api/users?page=2')
            .expect('status', 200)
            .done(done);
    });
});
