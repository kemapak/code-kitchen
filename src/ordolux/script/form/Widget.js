/**
 * This class handles widgets.
 * 
 * @author Kem Apak
 */
function Widget() {}

/**
 * This class member represents Text type widget.
 * 
 * @author Kem Apak
 */
Widget.TEXT = 'text';

/**
 * This class member represents Password type widget.
 */
Widget.PASSWORD = 'password';

/**
 * This class member represents Text Area type widget.
 * 
 * @author Kem Apak
 */ 
Widget.TEXT_AREA = 'textarea';

/**
 * This class member represents Radio Button type widget.
 * 
 * @author Kem Apak
 */
Widget.RADIO = 'radio';

/**
 * This class member represents Checkbox type widget.
 * 
 * @author Kem Apak
 */ 
Widget.CHECKBOX = 'checkbox';

/**
 * This type of widget represents Select type widget.
 * 
 * @author Kem Apak
 */ 
Widget.SELECT = 'select';

/**
 * This type of widget represents Option type widget.
 * 
 * @author Kem Apak
 */ 
Widget.OPTION = 'option'; 
 
/**
 * This method is used to create a widget given its type.
 * 
 * @author Kem Apak
 * @param type The type of the widget.
 */ 
Widget.create = function(type) {
	
	// Set a reference for the element about to be created.
	var element = null;
	
	// Create the element with respect to its type.
	switch (type) {
		case Widget.TEXT:
		case Widget.PASSWORD:
		
			// These types of widgets are input elements.
			element = document.createElement('input');
			element.type = type;
			break;
		case Widget.TEXT_AREA:
		
			// These types of widgets are standalone elements.
			element = document.createElement(type);
			break;	
		default:	
	}
	
	// Return the created element.
	return element;
}

Widget.createCollection = function() {

} 

Widget.remove = function(id) {

}

Widget.removeCollection = function(name) {
}

