/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

const validator = require('./lib/validator.js');

validator.isValid = (schema, data) => {
  let valid = true;
  for (let fieldName in schema.fields) {
    let field = schema.fields[fieldName];
    let required = field.required ? validator.isTruthy(data[fieldName]) : true;
    let type = field.type ? validator.isCorrectType(data[fieldName], field) : true;
    if (!(required && type)) {
      valid = false;
    }
  }
  return valid;
};

const personRules = {
  fields: {
    id: { type: 'string', required: true, },
    name: { type: 'string', required: true, },
    age: { type: 'number', required: true, },
    children: { type: 'array', valueType: 'string', },
  },
};

const susan = {
  id: '123-45-6789',
  name: 'Susan McDeveloperson',
  age: 37,
  children: [],
};

const fred = {
  id: 38,
  name: 'Freddy McCoder',
  children: [],
};

console.log(validator.isValid(personRules, susan));
console.log(validator.isValid(personRules, fred));