import chai from 'chai';
import chaiHttp from 'chai-http';
import expressApp from '../index.js';
import { base_prefix, user_prefix } from '../index.js'

chai.use(chaiHttp);
chai.should();

describe("add users", () => {
    describe("POST " + base_prefix + user_prefix, () => {
        // Test to get single student record
        it("should add a new user", (done) => {
            const username = "marymcbeth";
            chai.request(expressApp)
                .post(base_prefix + user_prefix + `/${username}`)
                .send({"name":"mary mcbeth", "email": "mary@gmail.com"})
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
         });
         
        // Test to get single student record
        it("should return 500 server error due to duplicate username", (done) => {
            const username = "marymcbeth";
            chai.request(expressApp)
            .post(base_prefix + user_prefix + `/${username}`)
            .send({"name":"mary mcbeth", "email": "mary@gmail.com"})
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
         });
    });
});