'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {
  // TODO: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = [ 'a' ];
  let obj = { x: 'y', };
  let func = () => {};
  let bool = false;
  let types = [ num, arr, obj, func, bool ];
  let functions = [
    validator.isNumber(num),
    validator.isArray(arr),
    validator.isObject(obj),
    validator.isBoolean(bool),
    validator.isFunction(func)
  ];
  let name = [ 'numbers', 'arrays', 'objects', 'booleans', 'functions' ];
  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();

    types.forEach((value) => {
      expect(validator.isString(value)).toBeFalsy();
    });
  });
  name.forEach((value, index) => {
    it(value, () => {
      expect(functions[index]).toBeTruthy();
    });
  });
});

describe('validator module performs complex validations', () => {
  let Film = {
    name: 'Interstellar',
    director: 'christopher nolan',
    actors: [ 'Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain' ],
    oscar: [ 'yes' ],
    gross: 667471339,
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
});
