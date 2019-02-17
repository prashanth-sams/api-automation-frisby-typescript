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
    it('should be status 200', function (done) {
        frisby.get('https://reqres.in/api/users?page=2')
            .expect('status', 200)
            .inspectResponse()
            .inspectBody()
            .inspectJSON()
            .inspectStatus()
            .inspectHeaders()
            .inspectRequest()
            .inspectRequestHeaders()
            .expect('status', 200)
            .expect('json', 'page', 2)
            .expect('jsonTypes', 'page', Joi.number().required())
            .expect('jsonTypes', 'data.*', [
            {
                "id": 4,
                "first_name": "Eve",
                "last_name": "Holt"
            },
            {
                "id": 5,
                "first_name": "Charles",
                "last_name": "Morris"
            },
            {
                "id": 6,
                "first_name": "Tracey",
                "last_name": "Ramos"
            }
        ])
            .expect('jsonTypes', 'data.*', [
            {
                "id": Joi.number().required(),
                "first_name": Joi.string().required(),
                "last_name": Joi.string().required()
            }
        ])
            .done(done);
    });
    it('should be status 404', function (done) {
        frisby.get('https://reqres.in/api/users/23')
            .expect('status', 404)
            .done(done);
    });
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
