import chai from 'chai';
import chaiHttp from 'chai-http';
import expressApp from '../index.js';
import { base_prefix, user_prefix } from '../index.js'

chai.use(chaiHttp);
chai.should();

describe("delete user", () => {
    describe("DELETE " + base_prefix + user_prefix, () => {
        // Test to delete single user record
        it("should delete a user's record", (done) => {
             const username = "fairygodmother";
             chai.request(expressApp)
                 .delete(base_prefix + user_prefix + `/${username}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     done();
                  });
         });
         
        // Test to delete single user record
        it("should return 404 not found due to invalid username", (done) => {
             const username = "timcook";
             chai.request(expressApp)
                 .delete(base_prefix + user_prefix + `/${username}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});