var helloWorld = require('./app').helloWorld;
var assert = require('assert');


describe('helloWorld', function() {
    it('should return hello world', function(){
        assert.strictEqual(helloWorld, 'Hello Worl');
    })
})