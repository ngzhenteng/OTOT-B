import chai from 'chai';
import chaiHttp from 'chai-http';
import expressApp from '../index.js';
import { base_prefix, user_prefix } from '../index.js'

chai.use(chaiHttp);
chai.should();

describe("users", () => {
    describe("GET /", () => {
        // Test to get all user details
        it("should get all user details", (done) => {
             chai.request(expressApp)
                 .get(base_prefix + '/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        // Test to get single student record
        it("should get a user's record", (done) => {
             const username = "johndoerocks";
             chai.request(expressApp)
                 .get(base_prefix + user_prefix + `/${username}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        // Test to get single student record
        it("should get a user's record, invalid username", (done) => {
             const username = "timcook";
             chai.request(expressApp)
                 .get(base_prefix + user_prefix + `/${username}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});