/*
 * Ordolux JavaScript Framework www.ordolux.net
 * 
 * Available under MIT License.
 */
/**
 * This class is used to add some missing functionality of the String class of JavaScript.
 * DO NOT CHANGE THIS FILE ADD or REMOVE ANY METHODS.
 *
 * @author Kem Apak
 */
 
/**
 * This static method adds trim functionality to String class.
 * 
 * @author Kem Apak
 */
String.prototype.trim = function() {
	
	return this.replace(/^\s+|\s+$/g, '');
} 

/**
 * This static method adds left trim funcitonlity to String class.
 *
 * @author Kem Apak
 */
String.prototype.leftTrim = function() {
	
	return this.replace(/\s*((\S+\s*)*)/, '$1');
}

/**
 * This static method adds right trim funcitonlity to String class.
 *
 * @author Kem Apak
 */
String.prototype.rightTrim = function() {
	
	return this.replace(/((\s*\S+)*)\s*/, '$1');
}
