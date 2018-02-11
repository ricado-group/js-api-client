/**
 * Determines if a Variable has been Defined
 * 
 * @param {Object} variable
 * @api public
 */

export function isDefined(variable) { return typeof variable !== 'undefined' && variable !== null };