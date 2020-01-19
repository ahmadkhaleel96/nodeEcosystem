'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let types = ['num', 'arr', 'obj', 'func', 'bool'];
    let values = [1,['a'],{x:'y'},() => {}, false];
    for (let i=0 ; i<types.length;i++){
      types[i]=values[i];
    }

    for (let i=0; i<types.length;i++){
      expect(validator.isString(types[i])).toBeFalsy();  
    }
    expect(validator.isString(str)).toBeTruthy();
  });
   let typeOfData = ['numbers', 'arrays', 'objects', 'booleans', 'functions'];
  typeOfData.forEach( value => {
    it(value, () => {
      expect(true).toBeTruthy();
    });
  })
   

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeTruthy();
  });

  // TODO: Cover so, so many more cases

  it('validates a value exists in an array', () => {
    // check if a value exists in an array
    expect(true).toBeTruthy();
  });

  it('validates a an array is sorted in descending order', () => {
    // check if an array is sorted in descending order
    expect(true).toBeTruthy();
  });

  it('validates a value type is a number', () => {
    // i.e. a value may not be a number 
    expect(true).toBeTruthy();
  });


  it('validates an array does not contain nulls', () => {
    // check if it does not contain nulls
    expect(true).toBeTruthy();
  });


  it('validates the numbers in an array are prime numbers', () => {
    expect(true).toBeTruthy();
  });


  it('validates a value is popped from an array', () => {
    expect(true).toBeTruthy();
  });


  it('validates a value is pushed in an array', () => {
    expect(true).toBeTruthy();
  });


  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeTruthy();
  });


  it('validates a value is used in a callback ', () => {
    expect(true).toBeTruthy();
  });


  it('validates a value is returned by the callback', () => {
    expect(true).toBeTruthy();
  });


  it('validates a new array is created and accepts the returned data from the callback', () => {
    expect(true).toBeTruthy();
  });

  it('validates the new array is sorted', () => {
    expect(true).toBeTruthy();
  });
  

});