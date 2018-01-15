const assert = require('chai').assert;
const sayHello = require('./appTest').sayHello
const app = require('./appTest');
//console.log(app())
describe('FlyingMongeese', function() {
	it('app should return hello', function() {
		assert.equal(sayHello(), 'hello')
	})
})  