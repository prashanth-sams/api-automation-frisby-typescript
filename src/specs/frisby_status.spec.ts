import * as frisby from 'frisby';

describe('Test Case 1', () => {
    it('should be status 200', (done) => {
        frisby.get('https://reqres.in/api/users?page=2')
            .inspectResponse() // complete response
            .inspectBody() // reponse body
            .inspectJSON() // print response in json format
            .inspectStatus() // check status
            .inspectHeaders()
            .inspectRequest()
            .inspectRequestHeaders() // request headers
            .expect('status', 200) // assert status 200
<<<<<<< HEAD
=======
            .expect('json','page', 2) // assert body values
            // .expect('jsonTypes','page', 2) // assert inner body values
>>>>>>> grunt run, get response details
            .done(done);
    });

    it('should be status 404', (done) => {
        frisby.get('https://reqres.in/api/users/23')
            .expect('status', 404)
            .done(done);
    });
});
