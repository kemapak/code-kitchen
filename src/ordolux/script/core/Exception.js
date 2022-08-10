/*
 * Ordolux JavaScript Framework www.ordolux.net
 * 
 * Available under MIT License.
 */
/**
 * This class is used to handle custom exceptions in a custom way.constructor.constructor
 *
 * @author Kem Apak
 * @param exception The exception thrown by the user agent.
 * @param uri (optional) The URI of the exception. 
 */
function Exception(exception, uri) {
	
	// Set name if exists.
	this.name = exception.name || '';
	
	// Set URI if exists.
	this.uri = uri || '';
	
	// User message.
	this.message = getMessage(exception);
	
	// Inner function that gets the message.
	function getMessage(exception) {
	
		if (exception instanceof EvalError)
			return Exception.EVAL;
		if (exception instanceof RangeError)
			return Exception.RANGE;
		if (exception instanceof ReferenceError)
			return Exception.REFERENCE;
		if (exception instanceof SyntaxError)
			return Exception.SYNTAX;
		if (exception instanceof TypeError)
			return Exception.TYPE;
		if (exception instanceof URIError)
			return Exception.URI;
		if (exception instanceof Error)
			return Exception.ERROR;
		
		return Exception.UNKOWN;
	}	
}

Exception.prototype.toString = function() {

	var message  = 'Name    : ' + this.name + ' \n';
		message += 'URI     : ' + this.uri + ' \n';
		message += 'Message : ' + this.message;
		
	return message;
}

//Error.prototype.AJAXError = new Error();


/**
 * This class member represents Image Error.
 * 
 * @author Kem Apak
 */ 
Exception.IMAGE = 'Image does not exist.';

/**
 * This class member represents Script Error.
 * 
 * @author Kem Apak
 */ 
Exception.SCRIPT = 'Script does not exist.';

/**
 * This class member represents Eval Error.
 * 
 * @author Kem Apak
 */ 
Exception.EVAL = 'EvalError';

/**
 * This class member represents Range Error.
 * 
 * @author Kem Apak
 */ 
Exception.RANGE = 'RangeError';

/**
 * This class member represents Reference Error.
 * 
 * @author Kem Apak
 */ 
Exception.REFERENCE = 'ReferenceError';

/**
 * This class member represents Syntax Error.
 * 
 * @author Kem Apak
 */ 
Exception.SYNTAX = 'SyntaxError';

/**
 * This class member represents the Type Error.
 * 
 * @author Kem Apak
 */ 
Exception.TYPE = 'TypeError';

/**
 * This class member represents URI Error.
 * 
 * @author Kem Apak
 */ 
Exception.URI = 'URI encoding - decoding error';

/**
 * This class member represents the general Error Error.
 * 
 * @author Kem Apak
 */ 
Exception.Error = 'Generic error'; 

/**
 * This class member represents the unkown error message.
 *
 * @author Kem Apak
 */
Exception.UNKOWN = 'Unkown error'; 

/**
 * This class member represents the client logger servlets URI.
 * 
 * @author Kem Apak
 */
Exception.CLIENT_SIDE_LOGGER_SERVLET_URI = '/servlet/ClientSideLoggerServlet'; 

/**
 * This method handles the exceptions thrown by the window object.
 * 
 * @author Kem Apak
 */
Exception.windowHandler = function() {
	
	// Create the error string.
	var paramString = 'name=WindowError&uri=' + encodeURI(uri) + '&message=' + Exception(exception); 
	
	// Log the error to the server.
	Server.sendPostRequestOnly(Exception.CLIENT_SIDE_LOGGER_SERVLET_URI, paramString);
	
	// Return true to silently bypass the effects of the error.
	return true;
}

/**
 * This method handles the exceptions in the XHTML img tags.
 * 
 * @author Kem Apak
 * @param uri The URI of the image.
 */
Exception.imageHandler = function(uri) {
	
	// Create the error string.
	var paramString = 'name=ImageError&uri=' + encodeURI(uri) + '&message=' + Exception.IMAGE; 
	
	// Log the error to the server.
	Server.sendPostRequestOnly(Exception.CLIENT_SIDE_LOGGER_SERVLET_URI, paramString);
	
	// Return true, to silently bypass the effects of the error.
	return true;
} 

/** 
 * This method handles the exceptions form the third party scripts.
 *
 * @author Kem Apak
 * @param uri The URI of the script.
 */
Exception.scriptHandler = function(uri) {
	
	// Create the error string.
	var paramString = 'name=ScriptError&uri=' + encodeURI(uri) + '&message=' + Exception.Script;
	
	// Log the error to the server.
	Server.sendPostRequestOnly(Exception.CLIENT_SIDE_LOGGER_SERVLET_URI, paramString);
	
	// Return true, to silently bypass the effects of the error.
	return true;
}

// This is added to catch windows errors.
window.onerror = Exception.windowHandler;
