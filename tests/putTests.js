import chai from 'chai';
import chaiHttp from 'chai-http';
import expressApp from '../index.js';
import { base_prefix, user_prefix } from '../index.js'

chai.use(chaiHttp);
chai.should();

describe("update users", () => {
    describe("PUT " + base_prefix + user_prefix, () => {
        // Test to update single user record
        it("should update an existing user. existing email overwritten, new hobby added", (done) => {
            const username = "johndoerocks";
            chai.request(expressApp)
                .put(base_prefix + user_prefix + `/${username}`)
                .send({"name":"johndoerocksharder", 
                "email": "johndoerocksharder@gmail.com", 
                "hobby": "slacking"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.userDetails.should.have.all.keys("name", "email", "hobby")
                    res.body.should.be.a('object');
                    done();
                });
         });
         
        // Test to update a non existent username
        it("should return error for updating a non existent user.", (done) => {
            const username = "dijkstra";
            chai.request(expressApp)
                .put(base_prefix + user_prefix + `/${username}`)
                .send({"name":"shortest path legend", 
                "email": "dijkstra@gmail.com"})
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
         });
    });
});