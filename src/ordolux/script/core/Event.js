/*
 * Ordolux JavaScript Framework www.ordolux.net
 * 
 * Available under MIT License.
 */
/**
 * This class is used for event handling related functionality. This utility
 * class is an adapter class that masks the different implementation of event
 * handling in the different browsers. It initializes the event listening, and
 * element feching methods.
 * 
 * @author Kem Apak.
 */
function Event() {

	if (window.attachEvent) {

		Event.addEventListener = function(element, eventName, functionName,
				isCapture) {

			// Define the event handler;
			var eventHandler = 'on' + eventName;

			// IE specific event registering.
			element.attachEvent(eventHandler, functionName);
		}

		Event.getTarget = function(eventObject) {

			return eventObject.srcElement;
		}
	} else {

		Event.addEventListener = function(element, eventName, functionName,
				isCapture) {

			element.addEventListener(eventName, functionName, isCapture);
		}

		Event.getTarget = function(eventObject) {

			return eventObject.target;
		}
	}
}
/**
 * This class member represents change event.
 * 
 * @author Kem Apak
 */
Event.CHANGE = 'change';

/**
 * This class member represents focus event.
 * 
 * @author Kem Apak
 */
Event.FOCUS = 'focus';

/**
 * This class member represents blur event.
 * 
 * @author Kem Apak
 */
Event.BLUR = 'blur';

/**
 * This class member represents keydown event.
 * 
 * @author Kem Apak
 */
Event.KEYDOWN = 'keydown';

/**
 * This class member represents keyup event.
 * 
 * @author Kem Apak
 */
Event.KEYUP = 'keyup';

/**
 * This class member represents keypress event.
 * 
 * @deprecated Please use Event.KEYDOWN
 * @author Kem Apak
 */
Event.KEYPRESS = 'keypress';

/**
 * This class member represents mouse event mousedown.
 * 
 * @author Kem Apak
 */
Event.MOUSEDOWN = 'mousedown';

/**
 * This class member represents mouse event mouseup.
 * 
 * @author Kem Apak
 */
Event.MOUSEUP = 'mouseup';

/**
 * This class member represents mouse event mouseover.
 * 
 * @author Kem Apak
 */
Event.MOUSEOVER = 'mouseover';

/**
 * This class member represents mouse event mouseout.
 * 
 * @author Kem Apak.
 */
Event.MOUSEOUT = 'mouseout';

/**
 * This class member represents mouse event mousemove.
 * 
 * @author Kem Apak
 */
Event.MOUSEMOVE = 'mousemove';

/**
 * This class member represents mouse event click.
 * 
 * @author Kem Apak
 */
Event.CLICK = 'click';

/**
 * This class member represents mouse event doubleclick.
 * 
 * @author Kem Apak
 */
Event.DOUBLECLICK = 'dblclick';

/**
 * This class member represents load event. Works only with window, document,
 * object, applet, image.
 * 
 * @author Kem Apak
 */
Event.LOAD = 'load';

/**
 * This class member represents unload event. Works only with window, document,
 * object, applet, image.
 * 
 * @author Kem Apak
 */
Event.UNLOAD = 'unload';

/**
 * This class member represents submit event. Works only with forms.
 * 
 * @author Kem Apak
 */
Event.SUBMIT = 'submit';

/**
 * This class member represents reset event. Works only with forms.
 * 
 * @author Kem Apak
 */
Event.RESET = 'reset';

/**
 * This class member represents DOM property change. This is a class property
 * that represent the event property change. Microsoft does not use the standard
 * naming convention for this event. It is set to property 'onpropertychange'
 * for IE, and 'DOMAttrModified' for DOM complaint browsers.
 * 
 * @author Kem Apak For now all the DOM events are included.
 * 
 * Event.DOMAttrModified = 'DOMAttrModified'; Event.DOMSubtreeModified =
 * 'DOMSubtreeModified'; Event.Dom.DOMNodeInserted = 'DOMNodeInserted';
 * Event.DOMNodeRemoved = 'DOMNodeRemoved'; Event.DOMNodeRemovedFromDocument =
 * 'DOMNodeRemovedFromDocument'; Event.DOMNodeInsertedIntoDocument =
 * 'DOMNodeInsertedIntoDocument'; Event.DOMCharacterDataModified =
 * 'DOMCharacterDataModified';
 */

/**
 * This class method returns the element that fires the given event.
 * 
 * @author Kem Apak
 * @param evt
 *            The event.
 * @returns The element that fired the event.
 */
Event.getTarget = function(eventObject) {
	// See the class constructor how this function is initialized.
}

/**
 * This class method adds an event to an element.
 * 
 * @author Kem Apak.
 * @param element
 *            The element object that the event is to be added.
 * @param eventName
 *            The name of the event.
 * @param functionName
 *            The name of the function that will handle the event when it is
 *            fired.
 * @param isCapture
 *            If true event is fired in the capturing phase else in the bubbling
 *            phase. (Dom complaint browsers only).
 */
Event.addEventListener = function(element, eventName, functionName, isCapture) {
	// See the class constructor how this function is initialized.
}

/**
 * This class method register an event to the elements in the collection.
 * 
 * @author Kem Apak
 * @param elements
 *            The collection of element objects.
 * @param eventName
 *            The name of the event.
 * @param functionName
 *            The of the function that will handle the event when it is fired.
 * @param isCapture
 *            If true event is fired in the capturing phase else in the bubbling
 *            phase. (Dom complaint browsers only).
 */
Event.addEventListenerToElements = function(elements, eventName, functionName,
		isCapture) {

	// Get the size of the collection.
	var numberOfElements = elements.length;

	// Iterate thru the collection add register event to elements.
	for (var index = 0; index < numberOfElements; index++) {
		Event.addEventListener(elements[index], eventName, functionName,
				isCapture);
	}
}

/**
 * This class method register an event to the elements with the names passed in
 * the collection. IMPORTANT A name represents a collection XHTML, therefore you
 * only need to pass the name once. Otherwise the same event will be registered
 * (and overidden) multiple time.
 * 
 * @author Kem Apak
 * @param elementNames
 *            The collection of element objects.
 * @param eventName
 *            The name of the event.
 * @param functionName
 *            The of the function that will handle the event when it is fired.
 * @param isCapture
 *            If true event is fired in the capturing phase else in the bubbling
 *            phase. (Dom complaint browsers only).
 */
Event.addEventListenerToElementsByName = function(elementNames, eventName,
		functionName, isCapture) {

	// Get the size of the collection.
	var numberOfElements = elementsNames.length;

	// Create the variable that represents the element collection.
	var elements;

	// Iterate thru the collection add register event to elements.
	for (var index = 0; index < numberOfElements; index++) {

		// Get the collection by name.
		elements = document.getElementsByName(elementNames[index]);

		// Register the event to elements.
		Event.addEventListenerToElements(elements, eventName, functionName,
				isCapture);
	}
}

/**
 * This class method register an event to the elements with the ids passed in
 * the collection.
 * 
 * @author Kem Apak
 * @param elementIds
 *            The collection of element objects.
 * @param eventName
 *            The name of the event.
 * @param functionName
 *            The of the function that will handle the event when it is fired.
 * @param isCapture
 *            If true event is fired in the capturing phase else in the bubbling
 *            phase. (Dom complaint browsers only).
 */
Event.addEventListenerToElementsById = function(elementIds, eventName,
		functionName, isCapture) {

	// Get the size of the collection.
	var numberOfElements = elementIds.length;

	// Create the variable that represents a single element.
	var element;

	// Create the collection that represents the elements.
	var elements = new Array();

	// Iterate thru the element ids and add element to the elements collection.
	for (var index = 0; index < numberOfElements; index++) {

		elements[index] = document.getElementById(elementIds[index]);
	}

	// Register the event to elements.
	Event.addEventListenerToElements(elements, eventName, functionName,
			isCapture);
}

/**
 * This class method registers an event to the elements with the CSS class names
 * passed as a collection.
 * 
 * @author Kem Apak
 * @param classNames
 *            The collection of element CSS class names.
 * @param eventName
 *            The name of the event.
 * @param functionName
 *            The of the function that will handle the event when it is fired.
 * @param isCapture
 *            If true event is fired in the capturing phase else in the bubbling
 *            phase. (Dom complaint browsers only).
 */
Event.addEventListenerToElementsByCssClassName = function(classNames,
		eventName, functionName, isCapture) {

	// TODO Kem implement.
}

/**
 * This class helper method registers an event to the window onload event.
 * Currently different and buggy implementations cause window onload event to be
 * overriden accidentally or not work working. Thanks Micth Cohen from Foresee
 * for the code help.
 * 
 * The location of where this method is called is very important. Try to call
 * this as last in the page.
 * 
 * @author Kem Apak
 * @param functionName
 *            The of the function that will handle the event when it is fired.
 * @param isCapture
 *            If true event is fired in the capturing phase else in the bubbling
 *            phase. (Dom complaint browsers only).
 */
Event.addLoadEventListenerToWindow = function(functionName, isCapture) {

	// Check if window is already assinged with window.onload = some funciton.
	if (typeof window.onload != 'function')

		Event.addEventListener(window, Event.LOAD, functionName, isCapture);
	else {

		// Get the reference for the current window onload.
		var currentOnloadFunction = window.onload;

		// Using a anonymous function set the window onload with both the
		// current and our function.
		window.onload = function() {
			currentOnloadFunction();
			functionName();
		}
	}
}

// Intantiate the singleton class to set the event variables.
new Event();
