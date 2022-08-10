/**
 * This class is used to handle messaging structure and flow.
 *
 * @author Kem Apak
 */
function Message() {}

/**
 * This class method is used to write messages
 */ 
Message.write = function(messageText, messageType) {
	
	// Depending on the properties post the message to the appropriate meduim.
	Message.writeToPage(messageText, messageType);
} 

Message.writeToServer = function() {
}

/**
 * This class method display the message to the page.
 * 
 * @author Kem Apak
 * @param messageText The text message.
 * @param messageType The type of the message.
 */
Message.writeToPage = function(messageText, messageType) {
	
	var messageLine = document.createElement('div');
	messageLine.className = messageType;
	
	document.body.appendChild(messageLine);
	
	var textNode = document.createTextNode(messageText);
	
	messageLine.appendChild(textNode);
	//messageLine.innerHTML = messageText;
	
	
}

Message.writeToPopup = function() {
	
	if (!consoleWindow) {return;}
}
