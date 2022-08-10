/*
 * Ordolux JavaScript Framework www.ordolux.net
 * 
 * Available under MIT License.
 */
/**
 * This object definition handles building checkbox elements.
 *
 * @author Kem Apak
 */
function CheckboxHelper() {
}

/**
 * This class method creates an checkbox element. If a label is provided,
 * the checkbox is wrapped in a label tag.
 * 
 * @author Kem Apak
 * @param id (optional, set null if not used) The ID of the checkbox element.
 * @param name (optional, set null if not used) The name of the collection.
 * @param value (optional, set null if not used) The value of the checkbox element.
 * @param label (optional, set null if not used) The label text of the checkbox element. 
 *		If provided the checkbox will be wrapped inside a label tag.
 * @return Object The checkbox element. (A label element will be returned if label text 
 * 		is provided, which containes the checkbox.)
 */
CheckboxHelper.create = function(id, name, value, label) {

	// Create the element.
	var checkboxElement = document.createElement('input');
	checkboxElement.type = 'checkbox';

	// Set ID if provided.
	if (id != null)
		checkboxElement.id = id;

	// Set name if provided.
	if (name != null) {
		checkboxElement.name = name;

		// Set ID if not provided this is an IE bug for dynamically created collections.
		// You will not be able to use getElementsByName unless you give the same name
		// and ID to the element.
		if (id == null)
			// Workound for IE6 and IE7 bug.
			checkboxElement.id = name;
	}

	// Set value if provided.
	if (value != null)
		checkboxElement.value = value;

	// Set label text if provided and wrapped the checkbox inside a label tag.
	if (label != null) {

		// Create the label element.
		var labelElement = document.createElement('label');

		// Append the checkbox to the label element.
		labelElement.appendChild(checkboxElement);

		// Create the text node.
		var labelTextElement = document.createTextNode(label);

		// Append the text node to the label element.
		labelElement.appendChild(labelTextElement);

		// Return the label with checkbox inside.
		return labelElement;
	} else
		// Return the checkbox only.
		return checkboxElement;
}

/**
 * This class method toggles the selection of the all checkboxes inside a collection.
 *
 * @author Kem Apak
 * @param collectionName The name of the checkboxes.
 * @param isChecked (true or false) The state if the checkbox collection has to be checked or unchecked.
 */
CheckboxHelper.toggleSelectCollection = function(collectionName, isChecked) {

	// Loop thru the collection to check or uncheck the individual checkboxes.
	for (var index = 0,
			checkboxCollection =  document.getElementsByName(collectionName),
			numberOfCheckboxes = checkboxCollection.length; index < numberOfCheckboxes; index++) {

		// Check or uncheck the checkbox.
		checkboxCollection[index].checked = isChecked;
	}
 }

/**
 * 
 */ 
CheckboxHelper.toggleSelectAll = function(selectAllCheckboxId, collectionName) {

	// Get the checked state of the selectAllCheckBox.
	var isChecked = document.getElementById(selectAllCheckboxId).checked;

	CheckboxHelper.toggleSelectCollection(collectionName, isChecked);
}

/**
 * This class method register events for checkboxes with select all option to do the toggling.
 * IMPORTANT NOTE. THE EVENT REGISTRATION HAS TO REFACTORED.
 * 
 * @author Kem Apak
 */
CheckboxHelper.registerEventForCollectionWithSelectAllOption = function(selectAllCheckboxId, collectionName) {

	if (window.event) {
		var addListener = function(element) {
			attachEvent(element, 'onclick', handlerFunction);
		}
	} else {
		var addListener = function(element) {
			addEventListener(element, 'click', handlerFunction, false);
		}
	}

	addListener(document.getElementById(selectAllCheckboxId), CheckboxHelper.toggleSelectCollection);

	// Loop thru the collection to check or uncheck the individual checkboxes.
	for (var index = 0,
			checkboxCollection =  document.getElementsByName(collectionName),
			numberOfCheckboxes = checkboxCollection.length; index < numberOfCheckboxes; index++) {

		// Uncheck the select all checkbox if a member of the collection is uncheck, do nothing otherwise.
		addListener(checkboxCollection[index], function() {
			if (!this.checked)
				document.getElementById(selectAllCheckboxId).checked = false;
		});
	}
}

