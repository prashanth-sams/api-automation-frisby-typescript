import * as frisby from 'frisby';

describe('Test Case 1', () => {
    it('should be status 200', (done) => {
        frisby.get('https://reqres.in/api/users?page=2')
            .expect('status', 200)
            .done(done);
    });

    it('should be status 404', (done) => {
        frisby.get('https://reqres.in/api/users/23')
            .expect('status', 404)
            .done(done);
    });
});
