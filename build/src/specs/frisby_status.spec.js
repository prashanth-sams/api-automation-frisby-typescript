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
var Joi = frisby.Joi;
describe('Test suite 1', function () {
    it('post should return 201', function (done) {
        frisby.post('https://reqres.in/api/users', {
            'data': {
                name: "Prashanth Sams",
                movies: ["My Valentine", "Love you Jesus"]
            }
        })
            .expect('status', 201)
            .inspectJSON()
            .done(done);
    });
});
