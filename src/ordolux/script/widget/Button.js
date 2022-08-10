/*
 * © 2007 TimeBridge Inc.  All Rights Reserved.
 */
/**
 * This object definition handles button related functionality.
 * TODO the instance class is not completed yet!!! Please do not use. But the actual class is
 * ready to go.
 * 
 * @author Kem Apak
 */
function Button(id, isDisabled) {

	this.id = id;

	this.element = document.getElementById(this.id);

	var classNameCandidate = Button.getDefiningClass(this.element.className);

	if (isDisabled)
		this.className = classNameCandidate.replace(Button.DISABLED_POSTFIX, '');
	else
		this.className = classNameCandidate;

	this.classNameRollover = className + Button.OVER_POSTFIX;
	this.classNameDisabled = className + Button.DISABLED_POSTFIX;

	this.isDisabled = isDisabled || false; //?????

	this.tooltipText = '';

	this.hotKey = '';

	this.clickHandler;
	this.mouseoverHandler;
	this.mouseoutHandler;
}

/**
 * Class property that represents disabled buttons CSS class name postfix.
 * 
 * @author Kem Apak
 */
Button.DISABLED_POSTFIX = '-disabled';

/**
 * Class property that represents over buttons CSS class name postfix.
 * 
 * @author Kem Apak
 */
Button.OVER_POSTFIX = '-over';

/**
 * This class method grabs the defining CSS class of a button. Which is the last CSS class defined in the className property.
 * 
 * @author Kem Apak
 * @param className The CSS class name of the button.
 * @return string The defining CSS class name of the button object.
 */
Button.getDefiningClass = function(className) {

	// Split the multiple classes and get the latest.
	var resultClasses = className.split(' ');

	// The defining class is the last one (by design).
	var definingClass = resultClasses[resultClasses.length - 1];

	// Return the defining class name.
	return definingClass;
}

/**
 * This class method registers button rollover events for all the button in a document or a given container with the exception
 * of disabled buttons.
 * 
 * @author Kem Apak
 * @param container (Optional) The container that has the buttons we want rollover events to be registered. If ignored the document
 * 			object is assumed.
 */
Button.registerRollovers = function(container) {

	// Check if the container exists and get the buttons inside the container. Otherwise get all the buttons in the document.
	if (!container)
		var buttons = document.getElementsByTagName('button');
	else
		var buttons = container.getElementsByTagName('button');

	// Number of buttons.
	var numberOfButtons = buttons.length;

	// Register rollover effects for each button.
	for (var index = 0; index < numberOfButtons; index++) {

		Event.observe(buttons[index], 'mouseover', Button.mouseoverHandler);
		Event.observe(buttons[index], 'mouseout', Button.mouseoutHandler);
	}
}

/**
 * This class method changes the defining class of the button when mouseover event fires.
 * 
 * @author Kem Apak
 * @param evt The fired mouseover event.
 */
Button.mouseoverHandler = function(evt) {

	// Get the src element, wrt browser specific event.
	if (!window.event)
		var buttonElement = evt.target;
	else
		var buttonElement = event.srcElement;

	buttonElement.className = buttonElement.className.trim();

	// If button is disabled the standard rollover not executed as well.
	if (buttonElement.className.search(Button.DISABLED_POSTFIX) != -1)
		return;

	// Get the defining class.
	var definingClassName = Button.getDefiningClass(buttonElement.className);

	// Create the mouse over class.
	var overClassName = definingClassName + Button.OVER_POSTFIX;

	// Change classes.
	Css.replaceClass(buttonElement, definingClassName, overClassName);
}

/**
 * This class method changes the defining class of the button when mouseout event fires.
 * 
 * @author Kem Apak
 * @param evt The fired mouseout event.
 */
Button.mouseoutHandler = function(evt) {

	// Get the src element, wrt browser specific event.
	if (!window.event)
		var buttonElement = evt.target;
	else
		var buttonElement = event.srcElement;

	buttonElement.className = buttonElement.className.trim();

	// If button is disabled the standard rollover not executed as well.
	if (buttonElement.className.search(Button.DISABLED_POSTFIX) != -1)
		return;

	// Get the mouse over class.
	var overClassName = Button.getDefiningClass(buttonElement.className);

	// Create the defining class.
	var definingClassName = overClassName.replace(Button.OVER_POSTFIX, '');

	// Change classes.
	Css.replaceClass(buttonElement, overClassName, definingClassName);
}

/**
 * This instance method enables a button.
 * 
 * @author Kem Apak
 */ 
Button.prototype.enable = function() {

	// Enable element.
	this.isDisabled = false;

	// Replace the classes.
	this.element.className.replace(this.disabledClassName, this.className);
}

/**
 * This instance method disables a button.
 * 
 * @author Kem Apak
 */ 
Button.prototype.disable = function() {

	// Disable element.
	this.isDisabled = true;

	// Replace the classes.
	this.element.className.replace(this.className, this.disabedClassName);
}

// Register rollover effects for all the buttons in the page.
Event.observe(window, 'load', function() {Button.registerRollovers(null);});
