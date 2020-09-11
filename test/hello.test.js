const assert = require('assert');

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app.js')

chai.should()
chai.use(chaiHttp)

describe('Hello', () => {
    it('GET /', () => {
        // Notice we are sending the request to the `server` export instead
        // of a URL
        return chai.request(server)
            .get('/hello')
            .then(res => {
                res.should.have.status(200)
                res.text.should.be.contains("Hello World");
                // add more tests here as you see fit
            })
            .catch(err => {
                throw err
            })
    })
})