import {sayHello, showModal} from '../js/main.js';


QUnit.module('sayHello function Exists', function() {

    QUnit.test('make sure the sayHello function exists and is a function', function(assert) {
        assert.ok(sayHello, "sayHello function exists");
    });

    QUnit.test('make sure the sayHello function is an actual function', function(assert){
        assert.ok(typeof sayHello === 'function', "sayHello is a function")
    });
 
});

QUnit.module('showModal function Exists', function() {

    QUnit.test('make sure the showModal function exists and is a function', function(assert) {
        assert.ok(showModal, "showModal function exists");
    });

    QUnit.test('make sure the showModal function is an actual function', function(assert){
        assert.ok(typeof showModal === 'function', "showModal is a function")
    });
 
});
