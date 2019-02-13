import * as frisby from 'frisby';

describe('Test Suite 1', () => {
    it('should be a teapot get', (done) => {
        frisby.get('https://reqres.in/api/users?page=2')
            .expect('status', 200)
            .done(done);
    });
});
