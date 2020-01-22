'use strict';

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

class Validator {
	constructor(input, rules) {
		this.input = input;
		this.rules = rules;
	}
	isValid(input, rules) {
		return true;
	}
	/**
      * Is this a string?
      * @param input
      * @returns {boolean}
 */
	isString(input) {
		return typeof input === 'string';
	}
	/**
   * Is this an Array?
   * @param input
   * @returns {boolean}
   */
	isArray(input) {
		return Array.isArray(input);
	}
	/**
 * Is this a Number?
 * @param input
 * @returns {boolean}
 */
	isNumber(input) {
		return typeof input === 'number';
	}
	/**
 * Is this a objects?
 * @param input
 * @returns {boolean}
 */
	isObject(input) {
		return typeof input === 'object';
	}
	/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
	isBoolean(input) {
		return typeof input === 'boolean';
	}
	/**
 * Is this a function?
 * @param input
 * @returns {boolean}
    */
	isFunction(input) {
		return typeof input === 'function';
	}
}

let validator = (module.exports = { Validator });
