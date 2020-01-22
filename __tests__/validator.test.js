'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {
	// TODO: Make this series of tests less repetitive ... DRY it out

	let str = 'yes';
	let num = 1;
	let arr = [ 'a' ];
	let obj = { x: 'y' };
	let func = () => {};
	let bool = false;
	it('strings', () => {
		expect(validator.isString(str)).toBeTruthy();
		expect(validator.isString(num)).toBeFalsy();
		expect(validator.isString(arr)).toBeFalsy();
		expect(validator.isString(obj)).toBeFalsy();
		expect(validator.isString(func)).toBeFalsy();
		expect(validator.isString(bool)).toBeFalsy();
	});

	it('numbers', () => {
		expect(validator.isNumber(num)).toBeTruthy();
	});

	it('arrays', () => {
		expect(validator.isArray(arr)).toBeTruthy();
	});

	it('objects', () => {
		expect(validator.isObject(obj)).toBeTruthy();
	});

	it('booleans', () => {
		expect(validator.isBoolean(bool)).toBeTruthy();
	});

	it('functions', () => {
		expect(validator.isFunction(func)).toBeTruthy();
	});
});

describe('validator module performs complex validations', () => {
	let Film = {
		name: 'Interstellar',
		director: 'christopher nolan',
		actors: [ 'Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain' ],
		oscar: [ 'yes' ],
		gross: 667471339
	};

	it('validates the presence of required object properties at any level', () => {
		// Check for the Director
		expect(typeof Film.director).toMatch('string');
	});

	it('validates the proper types of object properties', () => {
		// Film.director must be a string
		expect(typeof Film.director).toMatch('string');
	});

	it('validates the types of values contained in an array', () => {
		// i.e. an array of all strings or numbers
		expect(typeof Film.actors[0]).toStrictEqual('string');
	});

	it('validates a value array against an approved list', () => {
		// i.e. a string might only be allowed to be "yes" or "no"
		expect(Film.oscar.includes('yes')).toBeTruthy();
	});

	// TODO: Cover so, so many more cases
});
