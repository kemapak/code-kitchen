/*
 * Ordolux JavaScript Framework www.ordolux.net
 *
 * Available under MIT License.
 */
/**
 * This utility class handles CSS related functionality.
 *
 * @author Kem Apak
 */
function Css() {}

/**
 * This class method sets a CSS class to a given element.
 * All the prior assignments are overriden.
 *
 * @author Kem Apak
 * @param element The candidate element that a CSS class will be set.
 * @param className The CSS class name to be set.
 */
 Css.setClass = function(element, className){

 	// Set the CSS class.
 	element.className = className;
 }

/**
 * This class method adds a CSS class to a given element.
 *
 * @author Kem Apak
 * @param element The candidate element that a CSS class will be added.
 * @param className The CSS class name to be added.
 */
Css.addClass = function(element, className) {

	// Get the current CSS class.
	var currentClassName = element.className;

	// Check if it has any assignment.
	if (currentClassName.length > 0)
		element.className += ' ' + className;
	else
		element.className = className;
}

/**
 * This class method removes a CSS class of a given element.
 *
 * @author Kem Apak
 * @param element The candidate element that a CSS class will be removed.
 * @param className The CSS class name to be removed.
 */
Css.removeClass = function(element, className) {

	// Get the current CSS class.
	var currentClassName = element.className;

	// Define the class pattern
	var classPattern = new RegExp('\\b' + className + '\\b', 'g');

	// Remove all the classes macthing the pattern.
	currentClassName = currentClassName.replace(classPattern, '');

	// Trim the string.
	currentClassName = currentClassName.trim();

	// Define the empty space pattern.
	var spacePattern = new RegExp('\\s\\s', 'g');

	// Remove spaces.
	currentClassName = currentClassName.replace(spacePattern, ' ');

	// Update the element CSS class name.
	element.className = currentClassName;
}
