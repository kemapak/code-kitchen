/**
 * This class includes utility methods.
 *
 * @author Kem Apak
 */
function Util(){}

/**
 * This class method is used to create an script object.
 * 
 * @author Kem Apak
 * @param uri The URI of the script.
 * @param containerId (optional) The id of the script container.
 *        if provided the script will be added into the container
 *        otherwise directly to the document object.
 */ 
Util.addScript = function(uri, containerId) {
	
	// Create the script element.	
	var scriptElement = document.createElement('script');	
	
	// Set type and language.
	scriptElement.type = 'text/javascript';
	
	try {
		scriptElement.src = uri;
		
		// Append the script to the container if exists otherwise add it to the document.
		if (containerId != null)	 
			document.getElementById(containerId).appendChild(scriptElement);
		else
			document.appendChild(scriptElement);	
		
	} catch(exception) {
		
		// Call our exception handler.
		//Exception.scriptHandler(exception, uri);
		; 
	} 		
}

/**
 * This call method is used to create an image tag.
 *
 * @author Kem Apak
 */
Util.addImage = function(uri, containerId, imageClass, imageId) {
	
	// Create the image element.
	var imageElement = document.createElement('img');
	
	// Internal function to handle the error.
	// Limitation of IE DOM Support, use setAttribute.
	function callBack() {
		var errorUri = uri;
		
		// If http exists, that mean it is an external uri, we just need to report the base uri.
		if (uri.search('http') != -1) {
			
			// Pattern for the base URI.
			var pattern = /\/\/(\w+(\.\w+)*)\//;
			
			var result = errorUri.match(pattern);
			
			// Check the pattern.
			// If successful assign the base URI.
			if (result && result.length > 1) 
				errorUri = result[1];
		}
		Exception.imageHandler(errorUri);
	}
	
	try {
		
		// Set the on error event handler.
		imageElement.onerror = callBack;
		
		// Set the uri.
		imageElement.src = uri;
		
		// Set image id if exists.
		if (imageId != null)
			imageElement.id = scriptId;
		
		// Set the CSS class if exists.
		if (imageClass != null)
			imageElement.className = imageClass;
			
		// Append the script to the container if exists otherwise add it to the document.
		if (containerId != null)	 
			document.getElementById(containerId).appendChild(imageElement);
		else
			document.appendChild(imageElement);	
		
	} catch(exception) {
		
		// Call our exception handler.
		Exception.imageHandler(uri);
		
		// Silently handle the exception.
		return true; 
	} 		
} 
