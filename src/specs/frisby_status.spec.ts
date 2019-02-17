import * as frisby from 'frisby';
const Joi = frisby.Joi;

describe('Test suite 1', () => {

    // it('should be status 200', (done) => {
    //   frisby.get('https://reqres.in/api/users?page=2')
    //     .expect('status', 200)
    //     .inspectResponse() // complete response
    //     .inspectBody() // reponse body
    //     .inspectJSON() // print response in json format
    //     .inspectStatus() // check status
    //     .inspectHeaders()
    //     .inspectRequest()
    //     .inspectRequestHeaders() // request headers
    //     .expect('status', 200) // assert status 200
    //     .expect('json','page', 2) // assert response body values
    //     .expect('jsonTypes', 'page', Joi.number().required()) // validate data type
    //     .expect('jsonTypes','data.*', [
    //       {
    //         "id": 4,
    //         "first_name": "Eve",
    //         "last_name": "Holt"
    //       },
    //       {
    //         "id": 5,
    //         "first_name": "Charles",
    //         "last_name": "Morris"
    //         },
    //         {
    //             "id": 6,
    //             "first_name": "Tracey",
    //             "last_name": "Ramos"
    //         }
    //       ]) // assert inner response body values
    //       .expect('jsonTypes','data.*', [
    //         {
    //             "id": Joi.number().required(),
    //             "first_name": Joi.string().required(),
    //             "last_name": Joi.string().required()
    //         }
    //       ]) // validate data types
    //       .done(done);
    // });
    //
    // it('should be status 404', (done) => {
    //   frisby.get('https://reqres.in/api/users/23')
    //       .expect('status', 404)
    //       .done(done);
    // });

    it('post should return 201', (done) => {
        frisby.post('https://reqres.in/api/users', {
          'data': {
            name: "Prashanth Sams",
            movies: ["My Valentine", "Love you Jesus"]
            }
          })
          .expect('status', 201)
          .inspectJSON()
          .done(done)
    })
});
