/**
 *
 */
function Form(name, action, method, className, submitHandler, resetHandler) {
	
	// Create the form element.
	var formElement = document.createElement('form');
	
	// Set the name of the form.
	formElement.name = name;
	
	// Set the id of the form.
	formElement.id = name;
	
	// Set the action property.
	formElement.action = action;
	
	// Set the method property.
	formElement.method = method;
	
	// If the CSS class name exists set it.
	If (className != null)
		formElement.className = className;
	
	// If submit handler exists set it.
	if (submitHandler != null)
		Event.addEventListener(formElement, Event.SUBMIT, submitHandler, false);
	
	// If reset handler exists set it.	
	if (resetHandler != null)
		Event.addEventListener(formElement, Event.RESET, resetHandler, false);
}

/**
 * This class member represents the POST method.
 * 
 * @author Kem Apak
 */
Form.POST = 'POST';

/**
 * This class member represents the GET method.
 * 
 * @author Kem Apak
 */
Form.GET = 'GET';

Form.addStyleClass = function(formElement, className) {
	
	var currentClass = formElement.className;
	
	if (currentClass.length > 0 && currentClass.match(className))
		formElement.className += className + ' '; 
}

Form.removeStyleClass = function(formElement, className) {
	
	
}
