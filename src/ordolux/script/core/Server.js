/**
 * This class is used for common AJAX, server related behavior.
 * This is a utility class that is used for server related fucntionality.
 * The methods in the class handles the AJAX related behavior.
 *
 * @author Kem Apak
 */
function Server() {} 

/**
 * This class member represents the http get.
 * 
 * @author Kem Apak
 */
Server.GET = 'GET';

/**
 * This class member represents the http post.
 * 
 * @author Kem Apak
 */
Server.POST = 'POST';

/**
 * This class member represents the responseXML of the response object.
 * 
 * @author Kem Apak.
 * @author Dennis Baughn
 */
Server.RESPONSE_XML = 'responseXML';
 
/**
 * This class member represents the responseText of the response object.
 * 
 * @author Kem Apak.
 * @author Dennis Baughn
 */
Server.RESPONSE_TEXT = 'responseText';

/**
 * This class member represents the content type of the request header.
 * 
 * @author Kem Apak
 */ 
Server.CONTENT_TYPE = 'Content-Type';

/**
 * This class member represents the url encoded form.
 * 
 * @author Kem Apak
 */ 
Server.FORM_URL_ENCODED = 'application/x-www-form-urlencoded'; 

/**
 * This class member represents the completed ready state.
 * 
 * @author Kem Apak
 */
Server.READY_STATE_COMPLETE = 4; 

/**
 * This class member represents the response status OK 200.
 * 
 * @author Kem Apak
 */
Server.RESPONSE_STATUS_OK = 200; 

/**
 * This class method creates the XMLHTTPRequest objext.
 *
 * @author Kem Apak
 * @return XMLHTTPRequest object.
 */       
Server.serverHTTPObject = function() {
	
	if (typeof(window.XMLHttpRequest) != "undefined") {
		return new XMLHttpRequest();
	} else if (typeof(window.ActiveXObject) != "undefined") {
		return new ActiveXObject("Microsoft.XMLHTTP"); 
	} else {
		throw new Error("XMLHttpRequest is not enabled or installed.");     
		return;
	}	              
}         
 
/**
 * The class method fetches the domain URI including the port number.
 *
 * @author Kem Apak.
 * @returns The domain URI.
 */
Server.getDomainUri = function() {
    
    var domainUri = '';
    
    // Add the protocol.
    domainUri += document.location.protocol + '//';
    
    // Add the domain.
    domainUri += document.domain;
    
    // Add the port number if exists.
    if (document.location.port.length > 0) 
        domainUri += ':' + document.location.port; 
    
    return domainUri;       
} 

/**
 * This class method fetches the path info URI. Which represents the 
 * the location after the domain and before the query string.
 * 
 * @author Kem Apak
 * @return The path info URI.
 */
Server.getPathInfo = function() {
	
	// Add the app name.
    var pathInfo = '/' + document.location.pathname.split('/')[1]; 
    
   return pathInfo;       
}

/**
 * This class method encodes a given name value pair.
 * 
 * @author Kem Apak
 * @param name The name of the parameter.
 * @param value The value of the parameter.
 * @return encoded name value pair.
 */
Server.createEncodedNameValuePair = function(name, value) {
	
	var encodedNameValuePair = '';
	
	encodedNameValuePair = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	
	return encodedNameValuePair;
}

/**
 * This class method creates the query string.
 * 
 * @author Kem Apak
 * @param namesAndValues The collection/array representing the name value pairs.
 * @return encoded query string.
 */
Server.createQueryStringFromCollection = function(namesAndValues) {
	
	// Check the collection if it is an array and the length is greater then 0. Return otherwise.
	if ((!namesAndValues instanceof 'Array') && (namesAndValues.length  <= 0)) 
		return;
	
	// Create and initialize the query string.
	var queryString = '?';
	
	// Set the collection size.
	var collectionSize = namesAndValues.length;
	
	// Last item in the collection.
	var lastIndex = collectionSize - 1;
	
	// Loop thru the collection to create the name value pairs.
	for (var index = 0; index < lastIndex; index++){
		
		queryString += Server.createEncodedNameValuePair(namesAndValues[index][0], namesAndValues[index][1]) + '&';
	}
	
	// Add the last item without the separator ampersand.
	queryString += Server.createEncodedNameValuePair(namesAndValues[lastIndex][0], namesAndValues[lastIndex][1]);
	
	return queryString;
} 

/**
 * This class method creates an encoded parameter string from XHTML
 * tag. It could be a single or a collection. For example,
 * single values for input text, collections for selects.
 *
 * @author Kem Apak
 * @param elementId The id of the XHTML tag.
 * @return if XHMTL tag has a value(s) return the string parameter. False otherwise.
 */
Server.getParameterString = function(elementId) {
    
    // Get the element.
    element = document.getElementById(elementId);
    
    // If element does not exists return false.
    if (! element) {return false}
    
    // Get the tag name.
    elementTagName = element.tagName.toLowerCase();
    
    // Get the tag type.
    elementTagType = element.type.toLowerCase();
    
    // Handle Input text, hidden, and Textarea type tags.
    if (elementTagName == 'input' && (elementTagType == 'text' || elementTagType == 'hidden' || elementTagType == 'textarea')) {
                       
        // Element has a value, create the encodedd parameter string.
        return Server.createEncodedNameValuePair(element.name, element.value);         
    } 
    
    // Handle Select type tags.
    if (elementTagName == 'select')
        return Server.createEncodedNameValuePair(element.name, element.value); 
    
    // TODO - Add the code for other type of XHTML tags.
    
}

/**
 * This utility method is for on ready state handler.
 * 
 * @author Kem Apak
 * @param request The XML Http Request object.
 * @param callbackFunction The callback function that will handle the payload.
 * @param responseType Either XML or Text.
 * @throws ....
 */
Server.readyStateChangeHandler = function(request, callbackFunction, responseType) {
	
	if (request.readyState == Server.READY_STATE_COMPLETE) {
		if (request.status == Server.RESPONSE_STATUS_OK) {
			
			// Get the response using associate arrays.
			var response = request[responseType];
			
			// Pass the payload to the callback function
			callbackFunction(response);
		} else {
			//throw new Exception(Exception.SYSTEM, );
		}
	}
} 

/**
 * This method uses HTTP GET method with XMLHttpRequest to send and receive.
 * 
 * @author Kem Apak
 * @author Dennis Baughn
 * @param uri The URI of the resource.
 * @param queryString Query string, pass empty string if none.
 * @param callbackFunction The callback function that will handle the payload.
 * @param responseType Either XML or Text.
 * @throws ....
 */
Server.sendGetRequest = function(uri, queryString, callbackFunction, responseType) {
	
	try {
		
		// Create the server object                    
    	var request = Server.serverHTTPObject();
    	
	} catch (exception) {
		
		throw exception;
		return;
	}	
	
	// Construct the uri string by adding the query string to main uri.
	var uriString = uri + queryString;
	
	// Open the request.
	request.open(Server.GET, uriString, true);
	
	// Assign the callback function.
	request.onreadystatechange = function() {
		Server.readyStateChangeHandler(request, callbackFunction, responseType);
	}
	
	// Send the get request.
	request.send(null);
}

/**
 * This method uses HTTP GET method with XMLHttpRequest to send and receive.
 * 
 * @author Kem Apak
 * @author Dennis Baughn
 * @param uri The URI of the resource.
 * @param queryString Query string, pass empty string if none.
 * @param callbackFunction The callback function that will handle the payload.
 * @param responseType Either XML or Text.
 * @throws 
 */
Server.sendPostRequest = function(uri, queryString, callbackFunction, responseType) {
	
	try {
		
		// Create the server object                    
    	var request = Server.serverHTTPObject();
    	
	} catch (exception) {
		
		throw exception;
	}	
	
	// Open the request.
	request.open(Server.POST, uri, true);
	
	// Set the post request header.
    request.setRequestHeader(Server.CONTENT_TYPE, Server.FORM_URL_ENCODED);
	
	// Assign the callback function.
	request.onreadystatechange = function() {
		Server.readyStateChangeHandler(request, callbackFunction, responseType);
	}
	
	// Send the post request with the query string.
	request.send(queryString);
}

/**
 * This class method sends a request to the server without expecting a response,
 * using http get.
 *
 * @author Kem Apak
 * @param uri The uri of the server resource.
 * @param queryString The query string.
 */
Server.sendGetRequestOnly = function(uri, queryString) {
	
	// Create the server object                    
    var request = Server.serverHTTPObject();
    	
	// Set the URI.
	var uriString  = (queryString != null && queryString.length > 0) ? uri : '?' + queryString;
    		
	// Open the connection
	request.open(Server.GET, uriString, true);
    
	// Make the request.
	request.send(null);
} 

/**
 * This class method sends a request to the server without expecting a response,
 * using http post.
 *
 * @author Kem Apak
 * @param uri The uri of the server resource.
 * @param queryString The query string.
 */
Server.sendPostRequestOnly = function(uri, queryString) {
	 
	// Create the server object                    
    var request = Server.serverHTTPObject();
  
    // Open the connection
	request.open(Server.POST, uri, true);

	// Set the post request header.
	request.setRequestHeader(Server.CONTENT_TYPE, Server.FORM_URL_ENCODED);

	// Make the request.
	request.send(queryString);
} 
